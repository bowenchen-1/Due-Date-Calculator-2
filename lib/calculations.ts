import { addDaysUTC, diffInDaysUTC, formatISODate, getLocalTodayUTC, parseISODateToUTC } from "./date-utils";
import { PregnancyResult, SourceType } from "./types";

const BASE_GESTATION_DAYS = 280;

const buildResult = (source: SourceType, referenceLmp: Date): PregnancyResult => {
  const today = getLocalTodayUTC();
  const dueDate = addDaysUTC(referenceLmp, BASE_GESTATION_DAYS);
  const rawDaysElapsed = diffInDaysUTC(today, referenceLmp);
  const rawDaysRemaining = diffInDaysUTC(dueDate, today);
  const daysElapsed = Math.max(0, rawDaysElapsed);
  const daysRemaining = Math.max(0, rawDaysRemaining);
  const weeks = Math.floor(daysElapsed / 7);
  const days = daysElapsed % 7;

  return {
    source,
    reference_lmp_date: formatISODate(referenceLmp),
    estimated_due_date: formatISODate(dueDate),
    gestational_age: { weeks, days },
    days_elapsed: daysElapsed,
    days_remaining: daysRemaining,
    calculated_at: new Date().toISOString()
  };
};

export const calculateFromLmp = (lmpDate: string, cycleLength: number): PregnancyResult | null => {
  const lmp = parseISODateToUTC(lmpDate);
  if (!lmp) {
    return null;
  }
  const adjustment = cycleLength - 28;
  const adjustedLmp = addDaysUTC(lmp, adjustment);
  return buildResult("LMP", adjustedLmp);
};

export const calculateFromConception = (conceptionDate: string): PregnancyResult | null => {
  const conception = parseISODateToUTC(conceptionDate);
  if (!conception) {
    return null;
  }
  const referenceLmp = addDaysUTC(conception, -14);
  return buildResult("CONCEPTION", referenceLmp);
};

export const calculateFromIvf = (transferDate: string, embryoDays: number): PregnancyResult | null => {
  const transfer = parseISODateToUTC(transferDate);
  if (!transfer) {
    return null;
  }
  const referenceLmp = addDaysUTC(transfer, -(embryoDays + 14));
  return buildResult("IVF", referenceLmp);
};
