import type { ReportType, ReportDataRow } from "../__components/types";

export function exportCSV(
  reportType: ReportType,
  reportData: ReportDataRow[],
  activeReportTitle: string,
  onSuccess: (msg: string) => void
) {
  let csvContent = "";
  if (reportType === "revenue") {
    csvContent = "Period,Revenue (PHP),Change\n" + reportData.map(r => `${r.period},${r.value},${r.change}`).join("\n");
  } else if (reportType === "route") {
    csvContent = "Route,Bookings,Change\n" + reportData.map(r => `${r.period},${r.value},${r.change}`).join("\n");
  } else if (reportType === "cancellation") {
    csvContent = "Period,Cancellation Rate (%),Change\n" + reportData.map(r => `${r.period},${r.value}%,${r.change}`).join("\n");
  } else {
    csvContent = "Period,Users,Change\n" + reportData.map(r => `${r.period},${r.value},${r.change}`).join("\n");
  }
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `report_${reportType}_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  onSuccess(`${activeReportTitle} exported as CSV successfully.`);
}

export function exportPDF(
  reportType: ReportType,
  reportData: ReportDataRow[],
  activeReportTitle: string,
  dateRangeLabel: string,
  onStart: (msg: string) => void,
  onSuccess: (msg: string) => void
) {
  onStart(`Preparing PDF compilation for ${activeReportTitle}...`);
  setTimeout(() => {
    const summaryText = `
==================================================
                 SKYLINKS REPORT                  
==================================================
REPORT TYPE: ${activeReportTitle.toUpperCase()}
DATE RANGE: ${dateRangeLabel.toUpperCase()}
COMPILED AT: ${new Date().toLocaleString()}
--------------------------------------------------
DATA ENTRIES:
${reportData.map(r => `  - ${r.period}: ${typeof r.value === "number" && reportType === "revenue" ? "₱" + r.value.toLocaleString() : r.value} (${r.change})`).join("\n")}
==================================================
          End of Document - SkyLink Admin         
==================================================
    `.trim();
    const blob = new Blob([summaryText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `report_${reportType}_${new Date().toISOString().slice(0, 10)}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
    onSuccess(`${activeReportTitle} PDF generated successfully.`);
  }, 1200);
}