import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { ExportRequest, ReportQuery, ReportResult } from "@/types";

export async function generateReport(
  query: ReportQuery,
): Promise<ReportResult> {
  try {
    const res = await axiosClient.post("/admin/reports/generate", query);
    return res.data as ReportResult;
  } catch (err) {
    handleApiError(err);
  }
}

export async function exportReport(payload: ExportRequest): Promise<Blob> {
  try {
    const res = await axiosClient.post("/admin/reports/export", payload, {
      responseType: "blob",
    });
    return res.data as Blob;
  } catch (err) {
    handleApiError(err);
  }
}
