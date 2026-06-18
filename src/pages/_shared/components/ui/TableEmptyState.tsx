import React from "react";
import { Inbox } from "lucide-react";

interface TableEmptyStateProps {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  title?: string;
  description?: string;
}

const TableEmptyState: React.FC<TableEmptyStateProps> = ({
  icon: Icon = Inbox,
  title = "No results found",
  description = "We couldn't find anything matching your query. Try adjusting your filters or search terms.",
}) => {
  return (
    <div className="py-16 px-4 flex flex-col items-center justify-center text-center animate-fade-in select-none">
      <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-3 border border-slate-100/50 shadow-sm">
        <Icon size={22} className="text-[#496B92]" />
      </div>
      <h3 className="text-[15px] font-bold text-slate-800 tracking-tight">{title}</h3>
      <p className="mt-1 text-xs font-semibold text-slate-400 max-w-xs leading-normal">{description}</p>
    </div>
  );
};

export default TableEmptyState;
