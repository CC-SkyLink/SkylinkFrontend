import React, { useState, useRef, useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";

type DateTimePickerProps = {
  value?: string;
  min?: string;
  max?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  triggerClassName?: string;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  min,
  max,
  placeholder = "Select date & time",
  onChange,
  className,
  triggerClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse value (format: YYYY-MM-DDTHH:MM)
  const getParsedDateTime = (val?: string) => {
    if (!val) {
      return {
        dateStr: "",
        hour: 12,
        minute: 0,
        period: "AM" as "AM" | "PM",
      };
    }
    const [dPart, tPart] = val.split("T");
    const dateStr = dPart || "";
    let hour = 12;
    let minute = 0;
    let period: "AM" | "PM" = "AM";

    if (tPart) {
      const [hStr, mStr] = tPart.split(":");
      const rawHour = parseInt(hStr, 10);
      minute = parseInt(mStr, 10) || 0;

      if (rawHour >= 12) {
        period = "PM";
        hour = rawHour > 12 ? rawHour - 12 : 12;
      } else {
        period = "AM";
        hour = rawHour === 0 ? 12 : rawHour;
      }
    }
    return { dateStr, hour, minute, period };
  };

  const { dateStr, hour, minute, period } = getParsedDateTime(value);

  // Display value in input field (format: MM/DD/YYYY HH:MM AM/PM)
  const getDisplayValue = () => {
    if (!value) return placeholder;
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    
    const formattedDate = d.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    
    // Format time in 12h
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${formattedDate} ${pad(hour)}:${pad(minute)} ${period}`;
  };

  // Month and year display state for calendar view
  const [viewDate, setViewDate] = useState(() => {
    return dateStr ? new Date(dateStr) : new Date();
  });

  // Sync viewDate when value changes
  useEffect(() => {
    if (dateStr) {
      const parsed = new Date(dateStr);
      if (!isNaN(parsed.getTime())) {
        setViewDate(parsed);
      }
    }
  }, [dateStr]);

  // Close popup when clicking outside
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

  const triggerChange = (newDate: string, newHour: number, newMin: number, newPeriod: "AM" | "PM") => {
    if (!newDate) return;
    let hh = newHour;
    if (newPeriod === "PM" && newHour < 12) hh = newHour + 12;
    if (newPeriod === "PM" && newHour === 12) hh = 12;
    if (newPeriod === "AM" && newHour === 12) hh = 0;
    if (newPeriod === "AM" && newHour < 12) hh = newHour;

    const pad = (n: number) => String(n).padStart(2, "0");
    const combinedVal = `${newDate}T${pad(hh)}:${pad(newMin)}`;
    onChange?.(combinedVal);
  };

  const handleSelectDay = (day: number) => {
    const m = viewDate.getMonth();
    const y = viewDate.getFullYear();
    const formattedDate = `${y}-${String(m + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    triggerChange(formattedDate, hour, minute, period);
  };

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleTimeSelect = (type: "hour" | "minute" | "period", val: any) => {
    // If no date has been selected yet, default to today's date
    const currentContainerDate = dateStr || `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`;
    
    if (type === "hour") {
      triggerChange(currentContainerDate, val, minute, period);
    } else if (type === "minute") {
      triggerChange(currentContainerDate, hour, val, period);
    } else if (type === "period") {
      triggerChange(currentContainerDate, hour, minute, val);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.("");
    setIsOpen(false);
  };

  const handleToday = (e: React.MouseEvent) => {
    e.stopPropagation();
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const rawHour = now.getHours();
    const minVal = now.getMinutes();
    let prd: "AM" | "PM" = "AM";
    let hr = 12;

    if (rawHour >= 12) {
      prd = "PM";
      hr = rawHour > 12 ? rawHour - 12 : 12;
    } else {
      prd = "AM";
      hr = rawHour === 0 ? 12 : rawHour;
    }

    triggerChange(formattedDate, hr, minVal, prd);
  };

  // Calendar calculations
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const monthName = viewDate.toLocaleDateString("en-US", { month: "long" });

  const isDateDisabled = (y: number, m: number, d: number) => {
    const mm = String(m + 1).padStart(2, "0");
    const dd = String(d).padStart(2, "0");
    const dateS = `${y}-${mm}-${dd}`;
    if (min) {
      const minD = min.split("T")[0];
      if (dateS < minD) return true;
    }
    if (max) {
      const maxD = max.split("T")[0];
      if (dateS > maxD) return true;
    }
    return false;
  };

  const hoursArray = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutesArray = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className={cn("relative w-full", className)} ref={containerRef}>
      {/* Input Trigger */}
      <div
        className={cn(
          "flex items-center gap-3 border rounded-xl px-4 h-12 cursor-pointer select-none transition-all bg-slate-50 border-slate-200 hover:border-slate-300",
          isOpen && "border-[#496B92] bg-white ring-2 ring-[#496B92]/10 shadow-sm",
          triggerClassName
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiCalendar size={18} className="shrink-0 text-[#496B92]" />
        <span
          className={cn(
            "flex-1 text-sm outline-none font-medium text-left truncate",
            value ? "text-slate-700 font-semibold" : "text-slate-400 font-semibold"
          )}
        >
          {getDisplayValue()}
        </span>
      </div>

      {/* Popover Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 flex w-[480px] bg-white border border-slate-100 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] select-none overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Left Column: Calendar */}
          <div className="p-4 w-[280px]">
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-sm font-bold text-slate-800">
                {monthName} {year}
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-y-1 mb-2 text-center">
              {weekdays.map((day) => (
                <span key={day} className="text-[10px] font-bold text-slate-400 uppercase">
                  {day}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-1 text-center">
              {Array.from({ length: firstDayIndex }).map((_, i) => (
                <div key={`empty-${i}`} className="h-7 w-7" />
              ))}
              
              {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => {
                const mm = String(month + 1).padStart(2, "0");
                const dd = String(day).padStart(2, "0");
                const currentDayStr = `${year}-${mm}-${dd}`;
                const isSelected = dateStr === currentDayStr;
                const isDisabled = isDateDisabled(year, month, day);

                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handleSelectDay(day)}
                    className={cn(
                      "h-7 w-7 text-xs font-semibold rounded-lg flex items-center justify-center transition-all cursor-pointer",
                      isDisabled && "text-slate-200 cursor-not-allowed hover:bg-transparent hover:text-slate-200",
                      !isDisabled && !isSelected && "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                      isSelected && "bg-[#496B92] text-white shadow-sm shadow-[#496B92]/20 hover:bg-[#3B5470]"
                    )}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="h-px bg-slate-100 my-4" />

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
                Now
              </button>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-slate-100" />

          {/* Right Column: Time Picker Scroll Options */}
          <div className="flex-1 flex flex-col p-4 w-[200px] bg-slate-50/50">
            <span className="text-xs font-bold text-slate-400 uppercase mb-3 text-center tracking-wider">
              Select Time
            </span>
            <div className="flex flex-1 gap-2 h-[220px]">
              {/* Hours Column */}
              <div className="flex-1 flex flex-col gap-1 overflow-y-auto scrollbar-none max-h-[220px]">
                {hoursArray.map((hr) => {
                  const isSelected = hour === hr;
                  return (
                    <button
                      key={`hour-${hr}`}
                      type="button"
                      onClick={() => handleTimeSelect("hour", hr)}
                      className={cn(
                        "py-1.5 text-xs font-bold rounded-lg text-center transition-colors cursor-pointer shrink-0",
                        isSelected
                          ? "bg-[#496B92] text-white"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      {String(hr).padStart(2, "0")}
                    </button>
                  );
                })}
              </div>

              {/* Minutes Column */}
              <div className="flex-1 flex flex-col gap-1 overflow-y-auto scrollbar-none max-h-[220px]">
                {minutesArray.map((minVal) => {
                  const isSelected = minute === minVal;
                  return (
                    <button
                      key={`minute-${minVal}`}
                      type="button"
                      onClick={() => handleTimeSelect("minute", minVal)}
                      className={cn(
                        "py-1.5 text-xs font-bold rounded-lg text-center transition-colors cursor-pointer shrink-0",
                        isSelected
                          ? "bg-[#496B92] text-white"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      {String(minVal).padStart(2, "0")}
                    </button>
                  );
                })}
              </div>

              {/* AM/PM Column */}
              <div className="flex flex-col gap-2 shrink-0">
                {(["AM", "PM"] as const).map((prd) => {
                  const isSelected = period === prd;
                  return (
                    <button
                      key={`period-${prd}`}
                      type="button"
                      onClick={() => handleTimeSelect("period", prd)}
                      className={cn(
                        "px-3 py-2 text-xs font-bold rounded-lg text-center transition-colors cursor-pointer",
                        isSelected
                          ? "bg-[#496B92] text-white"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      {prd}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
