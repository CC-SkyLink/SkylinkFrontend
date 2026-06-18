import { jsPDF } from "jspdf";
import type { ReportType, ReportDataRow } from "../__components/types";

// Safe CSV cell escaping to prevent comma splitting
const escapeCSV = (val: string | number) => {
  const str = String(val);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
};

export function exportCSV(
  reportType: ReportType,
  reportData: ReportDataRow[],
  activeReportTitle: string,
  onSuccess: (msg: string) => void
) {
  let csvContent = "";
  if (reportType === "revenue") {
    csvContent = "Period,Revenue (PHP),Change\n" + reportData.map(r => `${escapeCSV(r.period)},${escapeCSV(r.value)},${escapeCSV(r.change)}`).join("\n");
  } else if (reportType === "route") {
    csvContent = "Route,Bookings,Revenue (PHP)\n" + reportData.map(r => `${escapeCSV(r.period)},${escapeCSV(r.value)},${escapeCSV(r.change)}`).join("\n");
  } else if (reportType === "cancellation") {
    csvContent = "Period,Cancellation Rate (%),Change\n" + reportData.map(r => `${escapeCSV(r.period)},${escapeCSV(r.value)},${escapeCSV(r.change)}`).join("\n");
  } else {
    csvContent = "Period,Users,Change\n" + reportData.map(r => `${escapeCSV(r.period)},${escapeCSV(r.value)},${escapeCSV(r.change)}`).join("\n");
  }
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `report_${reportType}_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  onSuccess(`${activeReportTitle} exported as CSV successfully.`);
}

export async function exportPDF(
  reportType: ReportType,
  reportData: ReportDataRow[],
  activeReportTitle: string,
  dateRangeLabel: string,
  onStart: (msg: string) => void,
  onSuccess: (msg: string) => void
) {
  onStart(`Preparing PDF compilation for ${activeReportTitle}...`);
  
  // Convert URL to Base64 helper
  const getBase64ImageFromUrl = (imageUrl: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imageUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        } else {
          reject(new Error("Canvas context is null"));
        }
      };
      img.onerror = (err) => reject(err);
    });
  };

  // Bezier math helper to compute smooth curves
  const getBezierPoints = (
    p0: { x: number; y: number },
    p1: { x: number; y: number },
    steps = 30
  ): { x: number; y: number }[] => {
    const cpX = p0.x + (p1.x - p0.x) / 2;
    const cp1 = { x: cpX, y: p0.y };
    const cp2 = { x: cpX, y: p1.y };
    
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;
      const t2 = t * t;
      const t3 = t2 * t;
      
      const x = mt3 * p0.x + 3 * mt2 * t * cp1.x + 3 * mt * t2 * cp2.x + t3 * p1.x;
      const y = mt3 * p0.y + 3 * mt2 * t * cp1.y + 3 * mt * t2 * cp2.y + t3 * p1.y;
      pts.push({ x, y });
    }
    return pts;
  };

  let logoDataUrl = "";
  try {
    logoDataUrl = await getBase64ImageFromUrl("/favicon.png");
  } catch (e) {
    console.warn("Failed to load brand logo for PDF", e);
  }

  setTimeout(() => {
    const doc = new jsPDF();
    
    // Header Logo & Title
    if (logoDataUrl) {
      doc.addImage(logoDataUrl, "PNG", 14, 12, 10, 10);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(59, 84, 112); // #3B5470 / SkyLink primary
      doc.text("SkyLink", 27, 19);
    } else {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(59, 84, 112);
      doc.text("SkyLink", 14, 19);
    }
    
    // Subtext metadata
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(`Report Type: ${activeReportTitle}`, 14, 27);
    doc.text(`Date Range: ${dateRangeLabel}`, 14, 32);
    doc.text(`Generated At: ${new Date().toLocaleString()}`, 14, 37);
    
    // Horizontal divider
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.5);
    doc.line(14, 42, 196, 42);

    // Section 1: Overview Chart
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(71, 85, 105); // slate-700
    doc.text("Overview Visual Trend", 14, 49);

    // Bounding Box for Chart
    const startX = 14;
    const startY = 53;
    const width = 182;
    const height = 55;
    const endX = startX + width;
    const endY = startY + height;

    doc.setFillColor(248, 250, 252); // slate-50 background
    doc.rect(startX, startY, width, height, "F");
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.rect(startX, startY, width, height, "S");

    if (reportData.length === 0) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(148, 163, 184);
      doc.text("No visualization data available for this range.", startX + width / 2, startY + height / 2, { align: "center" });
    } else {
      // Parse values
      const rawValues = reportData.map((d) => {
        if (typeof d.value === "number") return d.value;
        const cleaned = String(d.value).replace(/[^0-9.-]/g, "");
        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
      });
      const labels = reportData.map((d) => String(d.period));

      const maxVal = Math.max(...rawValues, 1);
      const minVal = Math.min(...rawValues, 0);
      const valRange = maxVal - minVal;

      let themeColor = [73, 107, 146]; // Default SkyLink Blue: #496B92
      let fillColor = [235, 243, 250]; // Light Blue fill
      if (reportType === "cancellation") {
        themeColor = [244, 63, 94]; // Rose: #f43f5e
        fillColor = [254, 242, 242]; // Light Rose fill
      } else if (reportType === "growth") {
        themeColor = [16, 185, 129]; // Emerald: #10b981
        fillColor = [240, 253, 250]; // Light Emerald fill
      }

      // Render bezier line graph for revenue, cancellation, and growth
      if (reportType === "revenue" || reportType === "cancellation" || reportType === "growth") {
        const pointsCount = reportData.length;
        const chartPaddingX = 22; // Horizontal indent
        const graphWidth = width - chartPaddingX * 2;
        const xInterval = graphWidth / Math.max(pointsCount - 1, 1);

        const getX = (idx: number) => startX + chartPaddingX + idx * xInterval;
        const getY = (val: number) => endY - 6 - ((val - minVal) / (valRange || 1)) * (height - 14);

        // Generate bezier points for all segments
        const allCurvePoints: { x: number; y: number }[] = [];
        for (let i = 0; i < pointsCount - 1; i++) {
          const p0 = { x: getX(i), y: getY(rawValues[i]) };
          const p1 = { x: getX(i + 1), y: getY(rawValues[i + 1]) };
          
          const segmentPts = getBezierPoints(p0, p1, 30);
          const limit = i === pointsCount - 2 ? segmentPts.length : segmentPts.length - 1;
          for (let j = 0; j < limit; j++) {
            allCurvePoints.push(segmentPts[j]);
          }
        }

        // 1. Draw area gradient fill
        doc.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
        for (let i = 0; i < allCurvePoints.length - 1; i++) {
          const pt = allCurvePoints[i];
          const nextPt = allCurvePoints[i + 1];
          const w = nextPt.x - pt.x;
          doc.rect(pt.x, pt.y, w + 0.1, endY - pt.y - 0.5, "F");
        }

        // 2. Draw Gridlines inside bounding box (on top of fill)
        doc.setDrawColor(241, 245, 249);
        doc.setLineWidth(0.3);
        for (let i = 1; i <= 3; i++) {
          const gridY = startY + (height / 4) * i;
          doc.line(startX + 1, gridY, endX - 1, gridY);
        }

        // 3. Draw smooth bezier curve
        doc.setDrawColor(themeColor[0], themeColor[1], themeColor[2]);
        doc.setLineWidth(1.5);
        for (let i = 0; i < allCurvePoints.length - 1; i++) {
          doc.line(allCurvePoints[i].x, allCurvePoints[i].y, allCurvePoints[i + 1].x, allCurvePoints[i + 1].y);
        }

        // 4. Draw data points (circles)
        doc.setFillColor(themeColor[0], themeColor[1], themeColor[2]);
        for (let i = 0; i < pointsCount; i++) {
          doc.circle(getX(i), getY(rawValues[i]), 1.2, "F");
        }

        // 5. Y-Axis Bounds (Min/Max Labels)
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        doc.setTextColor(148, 163, 184); // slate-400
        
        let formatYLabel = (val: number) => {
          if (reportType === "revenue") return `₱${val >= 1000 ? (val / 1000).toFixed(0) + "K" : val.toFixed(0)}`;
          if (reportType === "cancellation") return `${val.toFixed(0)}%`;
          return val.toFixed(0);
        };
        doc.text(formatYLabel(maxVal), startX + 3, startY + 6);
        doc.text(formatYLabel(minVal), startX + 3, endY - 2);

        // 6. Label axis ticks (X-Axis)
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7);
        doc.setTextColor(148, 163, 184);
        const labelInterval = Math.ceil(pointsCount / 6);
        for (let i = 0; i < pointsCount; i++) {
          if (i % labelInterval === 0 || i === pointsCount - 1) {
            doc.text(labels[i], getX(i), endY - 1.5, { align: "center" });
          }
        }
      } 
      // Render horizontal bar chart for Bookings by Route / Demand Forecast
      else {
        const itemsToDisplay = Math.min(reportData.length, 5); // display top 5
        const barAreaHeight = height - 10;
        const barHeight = barAreaHeight / itemsToDisplay;
        const maxBarWidth = width - 65;

        for (let i = 0; i < itemsToDisplay; i++) {
          const val = rawValues[i];
          const label = labels[i];
          const barW = (val / maxVal) * maxBarWidth;
          const yPos = startY + 5 + i * barHeight + 1.5;

          // Item Route label
          doc.setFont("helvetica", "bold");
          doc.setFontSize(7.5);
          doc.setTextColor(71, 85, 105);
          doc.text(label, startX + 6, yPos + barHeight / 2 - 0.5);

          // Bar rect
          doc.setFillColor(themeColor[0], themeColor[1], themeColor[2]);
          doc.rect(startX + 35, yPos, Math.max(barW, 1.5), barHeight - 3, "F");

          // Formatted value label next to bar
          let valText = String(reportData[i].value);
          if (typeof reportData[i].value === "number") {
            valText = reportData[i].value.toLocaleString();
          }
          doc.setFont("helvetica", "normal");
          doc.setFontSize(7);
          doc.setTextColor(100, 116, 139);
          doc.text(valText, startX + 39 + barW, yPos + barHeight / 2 - 0.5);
        }
      }
    }
    
    // Section 2: Data Details Table
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(71, 85, 105); // slate-700
    doc.text("Data Details", 14, 117);
    
    // Table column titles
    let col1 = "Period";
    let col2 = "Value";
    if (reportType === "revenue") {
      col1 = "Period";
      col2 = "Revenue (PHP)";
    } else if (reportType === "route") {
      col1 = "Route";
      col2 = "Bookings";
    } else if (reportType === "cancellation") {
      col1 = "Period";
      col2 = "Cancellation Rate";
    } else if (reportType === "growth") {
      col1 = "Period";
      col2 = "New Users";
    } else if (reportType === "demand") {
      col1 = "Route";
      col2 = "Predicted Bookings (30 Days)";
    }
    
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(100, 116, 139);
    doc.text(col1, 16, 126);
    doc.text(col2, 90, 126);
    doc.text(reportType === "route" ? "Revenue (PHP)" : reportType === "demand" ? "Confidence" : "Change", 160, 126);
    
    // Table header underline
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.line(14, 129, 196, 129);
    
    // Draw table content
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    
    let y = 136;
    reportData.forEach((row) => {
      let valStr = String(row.value);
      if (reportType === "revenue" && typeof row.value === "number") {
        valStr = `₱${row.value.toLocaleString()}`;
      } else if (reportType === "cancellation") {
        valStr = `${row.value}%`;
      } else if (typeof row.value === "number") {
        valStr = row.value.toLocaleString();
      }
      
      doc.text(String(row.period), 16, y);
      doc.text(valStr, 90, y);
      doc.text(String(row.change), 160, y);
      
      // Bottom border for row
      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.3);
      doc.line(14, y + 2.5, 196, y + 2.5);
      y += 8.5;
      
      // Page boundary checker
      if (y > 275) {
        doc.addPage();
        y = 20;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139);
        doc.text(col1, 16, y);
        doc.text(col2, 90, y);
        doc.text(reportType === "route" ? "Revenue (PHP)" : reportType === "demand" ? "Confidence" : "Change", 160, y);
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.5);
        doc.line(14, y + 3, 196, y + 3);
        doc.setFont("helvetica", "normal");
        y += 11;
      }
    });
    
    // Save file
    doc.save(`report_${reportType}_${new Date().toISOString().slice(0, 10)}.pdf`);
    onSuccess(`${activeReportTitle} PDF generated successfully.`);
  }, 1200);
}