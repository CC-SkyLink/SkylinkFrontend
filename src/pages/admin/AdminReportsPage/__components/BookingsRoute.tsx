import { useMemo } from "react";
import { FileSpreadsheet, FileText } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import TableEmptyState from "@/pages/_shared/components/ui/TableEmptyState";
import TableSkeleton from "@/pages/_shared/components/ui/TableSkeleton";
import { exportCSV, exportPDF } from "../__docs/export";
import type { DateRange, RouteDataRow } from "./types";
import type { RawRouteEntry } from "@/types/report.types";
import { getRouteReport } from "@/api/reports.api";

interface Props {
  dateRange: DateRange;
  dateRangeLabel: string;
  onToast: (msg: string, type: "success" | "error" | "info") => void;
  customStartDate?: string;
  customEndDate?: string;
}

const filterRaw = (raw: RawRouteEntry[], dateRange: DateRange, customStartDate?: string, customEndDate?: string): RawRouteEntry[] => {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
  let from: Date | null = null;
  let to: Date | null = null;

  if (dateRange === "today") { from = todayStart; to = todayEnd; }
  else if (dateRange === "week") { from = new Date(todayStart); from.setDate(from.getDate() - 7); to = todayEnd; }
  else if (dateRange === "month") { from = new Date(todayStart); from.setMonth(from.getMonth() - 1); to = todayEnd; }
  else if (dateRange === "3months") { from = new Date(todayStart); from.setMonth(from.getMonth() - 3); to = todayEnd; }
  else if (dateRange === "custom" && customStartDate && customEndDate) {
    from = new Date(customStartDate + "T00:00:00.000Z");
    to = new Date(customEndDate + "T23:59:59.999Z");
  }

  if (!from && !to) return raw;
  return raw.filter((r) => { const d = new Date(r.booked_at); return (!from || d >= from) && (!to || d <= to); });
};

const aggregateRaw = (raw: RawRouteEntry[]) => {
  const map: Record<string, { bookings: number; revenue: number }> = {};
  for (const r of raw) {
    if (!map[r.route]) map[r.route] = { bookings: 0, revenue: 0 };
    map[r.route].bookings += 1;
    if (r.status !== "cancelled") map[r.route].revenue += r.revenue;
  }
  return Object.entries(map)
    .map(([route, v]) => ({ route, bookings: v.bookings, revenue: v.revenue }))
    .sort((a, b) => b.bookings - a.bookings);
};

const BookingsRoute = ({ dateRange, dateRangeLabel, onToast, customStartDate, customEndDate }: Props) => {
  const { data: rawData, isLoading } = useQuery({
    queryKey: ["route-report-raw"],
    queryFn: async () => {
      const res = await getRouteReport();
      return (res?.raw ?? []) as RawRouteEntry[];
    },
    staleTime: 30 * 60 * 1000,
  });

  const routes = useMemo(
    () => aggregateRaw(filterRaw(rawData ?? [], dateRange, customStartDate, customEndDate)),
    [rawData, dateRange, customStartDate, customEndDate]
  );
  const maxBookings = useMemo(() => Math.max(...routes.map((r) => r.bookings), 1), [routes]);
  const tableRows: RouteDataRow[] = useMemo(() =>
    routes.map((r) => ({
      route: r.route,
      bookings: r.bookings,
      revenue: `₱${Number(r.revenue).toLocaleString()}`,
    })), [routes]);

  const columns: TableColumn<RouteDataRow>[] = [
    { key: "route", header: "ROUTE", cell: (row) => <span className="font-bold text-slate-800">{row.route}</span> },
    { key: "bookings", header: "BOOKINGS", cell: (row) => <span className="font-bold text-slate-900">{row.bookings.toLocaleString()}</span> },
    { key: "revenue", header: "REVENUE", cell: (row) => <span className="font-bold text-slate-900">{row.revenue}</span> },
  ];

  return (
    <div className="space-y-6">
      {/* Chart Card */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-50">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Bookings by Route</h3>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{dateRangeLabel}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={() => exportCSV("route", tableRows.map(r => ({ period: r.route, value: r.bookings, change: r.revenue })), "Bookings by Route", (msg) => onToast(msg, "success"))}
              className="flex items-center justify-center gap-2 border border-slate-200 bg-white hover:border-[#496B92] hover:text-[#496B92] text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer w-full sm:w-auto"
            >
              <FileSpreadsheet size={15} /> Export CSV
            </button>
            <button
              onClick={() => exportPDF("route", tableRows.map(r => ({ period: r.route, value: r.bookings, change: r.revenue })), "Bookings by Route", dateRangeLabel, (msg) => onToast(msg, "info"), (msg) => onToast(msg, "success"))}
              className="flex items-center justify-center gap-2 bg-[#496B92] hover:bg-[#3B5470] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer w-full sm:w-auto"
            >
              <FileText size={15} /> Export PDF
            </button>
          </div>
        </div>

        <div className="relative min-h-[200px] flex items-center justify-center w-full">
          {isLoading ? (
            <div className="w-full space-y-4 animate-pulse pt-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-28 h-4 bg-slate-200 rounded shrink-0" />
                  <div className="flex-1 bg-slate-100 rounded-full h-4 overflow-hidden">
                    <div className="h-4 bg-slate-200 rounded-full w-2/3" style={{ width: idx === 0 ? "85%" : idx === 1 ? "70%" : idx === 2 ? "50%" : idx === 3 ? "35%" : "20%" }} />
                  </div>
                  <div className="w-10 h-4 bg-slate-200 rounded shrink-0" />
                </div>
              ))}
            </div>
          ) : routes.length === 0 ? (
            <p className="text-slate-400 font-medium text-sm">No data for this period.</p>
          ) : (
            <div className="w-full space-y-3">
              {routes.map((r) => (
                <div key={r.route} className="flex items-center gap-4">
                  <span className="w-28 text-xs font-bold text-slate-600 text-right shrink-0">{r.route}</span>
                  <div className="flex-1 bg-slate-100 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-4 rounded-full bg-[#496B92] transition-all duration-500"
                      style={{ width: `${(r.bookings / maxBookings) * 100}%` }}
                    />
                  </div>
                  <span className="w-10 text-xs font-bold text-slate-700 shrink-0">{r.bookings}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Data Table */}
      <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/30">
          <h3 className="text-sm font-bold text-slate-900">Data Table</h3>
        </div>
        <div className="p-1">
          {isLoading ? (
            <TableSkeleton columns={3} rows={5} />
          ) : (
            <DataTable
              columns={columns}
              rows={tableRows}
              rowKey={(r) => r.route}
              emptyState={
                <TableEmptyState
                  title="No data available"
                  description="There is no route booking data recorded for the selected period."
                />
              }
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingsRoute;