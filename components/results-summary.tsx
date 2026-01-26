import styles from "./results-summary.module.css";
import { PregnancyResult, LanguageCode } from "../lib/types";
import { formatDisplayDate } from "../lib/date-utils";
import { t } from "../lib/i18n";

export default function ResultsSummary({
  language,
  result,
  onReset
}: {
  language: LanguageCode;
  result: PregnancyResult | null;
  onReset: () => void;
}) {
  if (!result) {
    return (
      <section className={styles.empty}>
        <h2>{t(language, "resultsTitle")}</h2>
        <p>{t(language, "timelineEmpty")}</p>
      </section>
    );
  }

  return (
    <section className={styles.summary}>
      <div className={styles.headerRow}>
        <h2>{t(language, "resultsTitle")}</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.label}>{t(language, "eddLabel")}</span>
          <strong>{formatDisplayDate(result.estimated_due_date)}</strong>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>{t(language, "gestationalAgeLabel")}</span>
          <strong>
            {result.gestational_age.weeks}w {result.gestational_age.days}d
          </strong>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>{t(language, "daysRemainingLabel")}</span>
          <strong>{result.days_remaining}</strong>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>{t(language, "daysElapsedLabel")}</span>
          <strong>{result.days_elapsed}</strong>
        </div>
      </div>
      {result.source === "IVF" && (
        <p className={styles.note}>
          {t(language, "equivalentLmpLabel")}: {formatDisplayDate(result.reference_lmp_date)}
        </p>
      )}
      {result.source === "CONCEPTION" && <p className={styles.note}>{t(language, "conceptionNote")}</p>}
    </section>
  );
}
