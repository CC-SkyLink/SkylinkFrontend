export type ReportType =
  | "booking_summary"
  | "revenue_overview"
  | "cancellations"
  | "user_activity";

export type ReportDatePreset = "today" | "this_week" | "this_month" | "custom";

export interface ReportFilters {
  datePreset?: ReportDatePreset;
  startDate?: string;
  endDate?: string;
  route?: string;
  flightId?: string;
  status?: string;
  paymentStatus?: string;
}

export interface ReportQuery {
  type: ReportType;
  filters: ReportFilters;
}

export interface ReportMetric {
  label: string;
  value: number;
}

export interface ReportRow {
  [key: string]: string | number | boolean | null;
}

export interface ReportResult {
  generatedAt: string;
  type: ReportType;
  metrics: ReportMetric[];
  rows: ReportRow[];
}

export interface ExportRequest {
  query: ReportQuery;
  format: "pdf" | "csv";
}
