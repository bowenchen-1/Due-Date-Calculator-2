export type SourceType = "LMP" | "CONCEPTION" | "IVF";

export type TimelineStatus = "PAST" | "CURRENT" | "FUTURE";

export type LanguageCode = "en" | "fr" | "de" | "zh-CN" | "ja" | "es";

export interface GestationalAge {
  weeks: number;
  days: number;
}

export interface PregnancyResult {
  source: SourceType;
  reference_lmp_date: string; // YYYY-MM-DD
  estimated_due_date: string; // YYYY-MM-DD
  gestational_age: GestationalAge;
  days_elapsed: number;
  days_remaining: number;
  calculated_at: string; // ISO-8601
}

export interface WeekRange {
  start_week: number;
  end_week: number;
}

export interface DateRange {
  start_date: string; // YYYY-MM-DD
  end_date: string; // YYYY-MM-DD
}

export interface TimelineTemplateNode {
  id: string;
  title: string;
  week_range: WeekRange;
  description: string;
  check_items: string[];
}

export interface TimelineNode extends TimelineTemplateNode {
  date_range: DateRange;
  status: TimelineStatus;
}
