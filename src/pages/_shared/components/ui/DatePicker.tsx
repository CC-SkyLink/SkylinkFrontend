import React, { useState, useRef, useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { colors } from "@/constants/theme";
import { cn } from "@/utils/cn";

type DatePickerProps = {
  value?: string;
  min?: string;
  max?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  min,
  max,
  placeholder = "Select date",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // viewDate controls the currently displayed month/year in the calendar dropdown
  const [viewDate, setViewDate] = useState(() => {
    return value ? new Date(value) : new Date();
  });
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update viewDate when selected value changes
  useEffect(() => {
    if (value) {
      const parsed = new Date(value);
      if (!isNaN(parsed.getTime())) {
        setViewDate(parsed);
      }
    }
  }, [value]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleSelectDay = (day: number) => {
    const dateStr = formatDateString(year, month, day);
    onChange?.(dateStr);
    setIsOpen(false);
  };

  const handleToday = (e: React.MouseEvent) => {
    e.stopPropagation();
    const todayStr = formatDateString(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    onChange?.(todayStr);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.("");
    setIsOpen(false);
  };

  const formatDateString = (y: number, m: number, d: number) => {
    const mm = String(m + 1).padStart(2, "0");
    const dd = String(d).padStart(2, "0");
    return `${y}-${mm}-${dd}`;
  };

  const isDateDisabled = (y: number, m: number, d: number) => {
    const dateStr = formatDateString(y, m, d);
    if (min && dateStr < min) return true;
    if (max && dateStr > max) return true;
    return false;
  };

  const getDisplayDate = () => {
    if (!value) return placeholder;
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  // Calendar calculations
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const monthName = viewDate.toLocaleDateString("en-US", { month: "long" });

  const todayStr = formatDateString(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Input Trigger */}
      <div
        className={cn(
          "flex items-center gap-3 border rounded-[10px] px-4 h-14 cursor-pointer select-none transition-all focus-within:ring-4 focus-within:ring-primary-60/5",
          isOpen ? "border-[#496B92] bg-white ring-4 ring-[#496B92]/5 shadow-sm" : `${colors.surface.input} border-tertiary-30 hover:border-slate-300`
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiCalendar size={18} className="shrink-0 text-primary-60" />
        <span
          className={cn(
            "flex-1 text-[15px] outline-none font-medium text-left",
            value ? "text-slate-900" : "text-slate-400"
          )}
        >
          {getDisplayDate()}
        </span>
      </div>

      {/* Modern White Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 w-[310px] bg-white border border-slate-100 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-4 select-none animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-sm font-bold text-slate-800">
              {monthName} {year}
            </span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Next month"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-y-2 mb-2 text-center">
            {weekdays.map((day) => (
              <span key={day} className="text-[11px] font-bold text-slate-400 uppercase">
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-y-1 text-center">
            {/* Previous month padding cells */}
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8 w-8" />
            ))}
            
            {/* Month days */}
            {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => {
              const dateStr = formatDateString(year, month, day);
              const isSelected = value === dateStr;
              const isToday = todayStr === dateStr;
              const isDisabled = isDateDisabled(year, month, day);

              return (
                <button
                  key={`day-${day}`}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => handleSelectDay(day)}
                  className={cn(
                    "h-8 w-8 text-xs font-semibold rounded-lg flex items-center justify-center transition-all cursor-pointer",
                    isDisabled && "text-slate-200 cursor-not-allowed hover:bg-transparent hover:text-slate-200",
                    !isDisabled && !isSelected && !isToday && "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                    isToday && !isSelected && "text-[#496B92] border border-[#496B92]/30 bg-[#496B92]/5 hover:bg-[#496B92]/10",
                    isSelected && "bg-[#496B92] text-white shadow-sm shadow-[#496B92]/20 hover:bg-[#3B5470]"
                  )}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-100 my-4" />

          {/* Footer actions */}
          <div className="flex justify-between items-center px-1">
            <button
              type="button"
              onClick={handleClear}
              className="text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleToday}
              className="text-xs font-bold text-[#496B92] hover:text-[#3B5470] transition-colors cursor-pointer"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;