import { FileSpreadsheet, FileText } from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import { cn } from "@/utils/cn";
import { exportCSV, exportPDF } from "../__docs/export";
import type { DateRange, ReportDataRow } from "./types";

interface Props {
  dateRange: DateRange;
  dateRangeLabel: string;
  onToast: (msg: string, type: "success" | "error" | "info") => void;
}

// Placeholder — no backend endpoint yet
const EMPTY: ReportDataRow[] = [];

const BookingsRoute = ({ dateRangeLabel, onToast }: Props) => {
  const columns: TableColumn<ReportDataRow>[] = [
    { key: "period", header: "ROUTE", cell: (row) => <span className="font-bold text-slate-800">{row.period}</span> },
    { key: "value", header: "BOOKINGS", cell: (row) => <span className="font-bold text-slate-900">{(row.value as number).toLocaleString()}</span> },
    {
      key: "change", header: "CHANGE", cell: (row) => {
        if (!row.changeValue) return <span className="text-slate-400 font-medium">—</span>;
        const isUp = row.changeValue > 0;
        return (
          <span className={cn("inline-flex items-center gap-1 font-bold text-xs", isUp ? "text-emerald-600" : "text-rose-600")}>
            {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {row.change}
          </span>
        );
      }
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-50">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Bookings by Route</h3>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{dateRangeLabel}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => exportCSV("route", EMPTY, "Bookings by Route", (msg) => onToast(msg, "success"))}
              className="flex items-center gap-2 border border-slate-200 bg-white hover:border-[#496B92] hover:text-[#496B92] text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <FileSpreadsheet size={15} /> Export CSV
            </button>
            <button
              onClick={() => exportPDF("route", EMPTY, "Bookings by Route", dateRangeLabel, (msg) => onToast(msg, "info"), (msg) => onToast(msg, "success"))}
              className="flex items-center gap-2 bg-[#496B92] hover:bg-[#3B5470] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <FileText size={15} /> Export PDF
            </button>
          </div>
        </div>
        <div className="py-16 text-center text-slate-400 font-medium text-sm">
          Route analytics coming soon.
        </div>
      </div>
      <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/30">
          <h3 className="text-sm font-bold text-slate-900">Data Table</h3>
        </div>
        <div className="p-1">
          <DataTable columns={columns} rows={EMPTY} rowKey={(r) => r.period}
            emptyState={<div className="py-16 text-center text-slate-400 font-medium">No data available.</div>}
          />
        </div>
      </section>
    </div>
  );
};

export default BookingsRoute;