import { addDaysUTC, diffInDaysUTC, formatISODate, getLocalTodayUTC, parseISODateToUTC } from "./date-utils";
import { TimelineNode, TimelineTemplateNode, TimelineStatus } from "./types";

const getWeekStartOffset = (week: number): number => (week - 1) * 7;
const getWeekEndOffset = (week: number): number => week * 7 - 1;

const resolveStatus = (startDate: Date, endDate: Date, today: Date): TimelineStatus => {
  if (endDate.getTime() < today.getTime()) {
    return "PAST";
  }
  if (startDate.getTime() <= today.getTime() && today.getTime() <= endDate.getTime()) {
    return "CURRENT";
  }
  return "FUTURE";
};

export const buildTimeline = (referenceLmpDate: string, template: TimelineTemplateNode[]): TimelineNode[] => {
  const lmp = parseISODateToUTC(referenceLmpDate);
  if (!lmp) {
    return [];
  }
  const today = getLocalTodayUTC();

  return template.map((node) => {
    const startDate = addDaysUTC(lmp, getWeekStartOffset(node.week_range.start_week));
    const endDate = addDaysUTC(lmp, getWeekEndOffset(node.week_range.end_week));
    return {
      ...node,
      date_range: {
        start_date: formatISODate(startDate),
        end_date: formatISODate(endDate)
      },
      status: resolveStatus(startDate, endDate, today)
    };
  });
};

export const getTimelineCountdown = (
  node: TimelineNode
): { type: "startsIn" | "endsIn" | "ended"; value: number } => {
  const today = getLocalTodayUTC();
  const start = parseISODateToUTC(node.date_range.start_date);
  const end = parseISODateToUTC(node.date_range.end_date);
  if (!start || !end) {
    return { type: "startsIn", value: 0 };
  }
  if (node.status === "FUTURE") {
    return { type: "startsIn", value: diffInDaysUTC(start, today) };
  }
  if (node.status === "CURRENT") {
    return { type: "endsIn", value: diffInDaysUTC(end, today) };
  }
  return { type: "ended", value: Math.abs(diffInDaysUTC(end, today)) };
};
