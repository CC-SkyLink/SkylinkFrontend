import React from "react";

interface TableSkeletonProps {
  columns?: number;
  rows?: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({ columns = 5, rows = 5 }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-pulse">
      {/* Header bar mockup */}
      <div className="bg-slate-50 px-6 py-4 flex gap-4 border-b border-slate-100">
        {Array.from({ length: columns }).map((_, cIdx) => (
          <div
            key={cIdx}
            className="h-4 bg-slate-200/70 rounded"
            style={{
              width: cIdx === 0 ? "12%" : cIdx === 1 ? "22%" : cIdx === 2 ? "18%" : cIdx === 3 ? "15%" : "10%",
              flexGrow: cIdx === columns - 1 ? 1 : 0
            }}
          />
        ))}
      </div>

      {/* Row list mockups */}
      <div className="divide-y divide-slate-100 px-6">
        {Array.from({ length: rows }).map((_, rIdx) => (
          <div key={rIdx} className="py-4.5 flex gap-4 items-center">
            {Array.from({ length: columns }).map((_, cIdx) => (
              <div
                key={cIdx}
                className="h-4 bg-slate-100/80 rounded"
                style={{
                  width: cIdx === 0 ? "10%" : cIdx === 1 ? "25%" : cIdx === 2 ? "15%" : cIdx === 3 ? "20%" : "8%",
                  flexGrow: cIdx === columns - 1 ? 1 : 0
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;
