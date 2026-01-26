import { formatDisplayDate, getLocalTodayUTC, formatISODate } from "./date-utils";
import { TimelineNode, PregnancyResult } from "./types";

export interface ExportLabels {
  title: string;
  timelineTitle: string;
  dueDateLabel: string;
  gestationalAgeLabel: string;
  daysRemainingLabel: string;
  generatedOnLabel: string;
  statusLabel: string;
  checkItemsLabel: string;
  statusValues: {
    past: string;
    current: string;
    future: string;
  };
}

const WIDTH = 1080;
const HEIGHT = 1920;

const drawWrappedText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number => {
  const hasSpaces = text.includes(" ");
  const tokens = hasSpaces ? text.split(" ") : Array.from(text);
  let line = "";
  let currentY = y;
  for (const token of tokens) {
    const separator = hasSpaces && line ? " " : "";
    const testLine = line ? `${line}${separator}${token}` : token;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = token;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, currentY);
    currentY += lineHeight;
  }
  return currentY;
};

export const exportTimelineImage = async (options: {
  result: PregnancyResult;
  timeline: TimelineNode[];
  privacyMode: boolean;
  labels: ExportLabels;
}): Promise<void> => {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas not supported");
  }

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = "#e9eef3";
  ctx.fillRect(0, 0, WIDTH, 260);

  ctx.fillStyle = "#1b2430";
  ctx.font = "700 46px system-ui";
  ctx.fillText(options.labels.title, 80, 130);

  ctx.font = "400 24px system-ui";
  const dueDateLabel = `${options.labels.dueDateLabel}: ${formatDisplayDate(options.result.estimated_due_date)}`;
  ctx.fillText(dueDateLabel, 80, 190);

  ctx.font = "400 22px system-ui";
  const gestationLabel = `${options.labels.gestationalAgeLabel}: ${options.result.gestational_age.weeks}w ${options.result.gestational_age.days}d`;
  ctx.fillText(gestationLabel, 80, 230);
  const remainingLabel = `${options.labels.daysRemainingLabel}: ${options.result.days_remaining}`;
  ctx.fillText(remainingLabel, 80, 265);

  const today = formatISODate(getLocalTodayUTC());
  ctx.font = "400 20px system-ui";
  ctx.fillStyle = "#5b6673";
  ctx.fillText(`${options.labels.generatedOnLabel} ${today}`, 80, 310);

  ctx.fillStyle = "#1b2430";
  ctx.font = "600 28px system-ui";
  ctx.fillText(options.labels.timelineTitle, 80, 390);

  ctx.strokeStyle = "#c2cbd6";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(90, 430);
  ctx.lineTo(90, HEIGHT - 120);
  ctx.stroke();

  let cursorY = 430;
  const maxWidth = WIDTH - 160;
  const lineHeight = 28;
  ctx.font = "500 22px system-ui";

  for (const node of options.timeline) {
    const rangeText = options.privacyMode
      ? `Week ${node.week_range.start_week}${
          node.week_range.start_week === node.week_range.end_week
            ? ""
            : `–${node.week_range.end_week}`
        }`
      : `${formatDisplayDate(node.date_range.start_date)} – ${formatDisplayDate(node.date_range.end_date)}`;
    ctx.fillStyle = "#2e5f79";
    ctx.beginPath();
    ctx.arc(90, cursorY + 6, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#1f2933";
    const heading = `${node.title} (${rangeText})`;
    cursorY = drawWrappedText(ctx, heading, 120, cursorY + 4, maxWidth - 40, lineHeight);
    ctx.fillStyle = "#5b6770";
    ctx.font = "400 20px system-ui";
    const statusValue =
      node.status === "PAST"
        ? options.labels.statusValues.past
        : node.status === "CURRENT"
        ? options.labels.statusValues.current
        : options.labels.statusValues.future;
    const statusLine = `${options.labels.statusLabel}: ${statusValue}`;
    cursorY = drawWrappedText(ctx, statusLine, 120, cursorY, maxWidth - 40, 24);
    ctx.fillStyle = "#1f2933";
    ctx.font = "500 19px system-ui";
    const checkHeading = `${options.labels.checkItemsLabel}:`;
    cursorY = drawWrappedText(ctx, checkHeading, 120, cursorY, maxWidth - 40, 22);
    ctx.font = "400 19px system-ui";
    for (const item of node.check_items) {
      const itemLine = `• ${item}`;
      cursorY = drawWrappedText(ctx, itemLine, 132, cursorY, maxWidth - 52, 22);
      if (cursorY > HEIGHT - 120) {
        break;
      }
    }
    ctx.fillStyle = "#1f2933";
    ctx.font = "500 22px system-ui";
    cursorY += 16;
    if (cursorY > HEIGHT - 120) {
      break;
    }
  }

  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) {
    throw new Error("Export failed");
  }
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `pregnancy-timeline-edd-${options.result.estimated_due_date}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
