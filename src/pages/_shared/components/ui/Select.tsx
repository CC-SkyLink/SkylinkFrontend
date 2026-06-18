import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/utils/cn";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
};

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select option",
  className,
  triggerClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative w-full sm:w-auto min-w-[160px]", className)} ref={containerRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-11 w-full items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 text-left text-sm font-semibold text-slate-700 outline-none transition-all hover:bg-slate-50 focus:border-[#496B92]/20 focus:ring-2 focus:ring-[#496B92]/10 select-none shadow-sm",
          isOpen && "border-[#496B92] bg-white ring-2 ring-[#496B92]/10",
          triggerClassName
        )}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            "text-slate-400 transition-transform duration-200 shrink-0",
            isOpen && "rotate-180 text-[#496B92]"
          )}
        />
      </button>

      {/* Options Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-full min-w-[200px] max-h-[300px] overflow-y-auto rounded-2xl border border-slate-100 bg-white p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] outline-none animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-0.5">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors cursor-pointer",
                    isSelected
                      ? "bg-[#496B92]/10 text-[#496B92] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check size={16} className="text-[#496B92] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
