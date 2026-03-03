import styles from "./lmp-form.module.css";
import { LanguageCode } from "../lib/types";
import { t } from "../lib/i18n";
import { normalizeISODateInput } from "../lib/date-utils";

export default function LmpForm({
  language,
  lmpDate,
  cycleLength,
  lmpError,
  cycleError,
  onLmpDateChange,
  onCycleLengthChange,
  onSubmit,
  isLoading
}: {
  language: LanguageCode;
  lmpDate: string;
  cycleLength: number;
  lmpError: string | null;
  cycleError: string | null;
  onLmpDateChange: (value: string) => void;
  onCycleLengthChange: (value: number) => void;
  onSubmit: () => void;
  isLoading: boolean;
}) {
  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="lmp-date">{t(language, "lmpLabel")}</label>
        <input
          id="lmp-date"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="YYYY-MM-DD"
          pattern="\d{4}-\d{2}-\d{2}"
          maxLength={10}
          value={lmpDate}
          onChange={(event) => onLmpDateChange(normalizeISODateInput(event.target.value))}
        />
        <span className={styles.helper}>{t(language, "lmpHelper")}</span>
        <span className={styles.helper}>{t(language, "dateFormatHelper")}</span>
        {lmpError && <span className={styles.error}>{lmpError}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="cycle-length">{t(language, "cycleLengthLabel")}</label>
        <input
          id="cycle-length"
          type="number"
          min={22}
          max={45}
          value={cycleLength}
          onChange={(event) => onCycleLengthChange(Number(event.target.value))}
        />
        <span className={styles.helper}>{t(language, "cycleLengthHelper")}</span>
        {cycleError && <span className={styles.error}>{cycleError}</span>}
      </div>

      <button
        type="button"
        className={styles.submit}
        onClick={onSubmit}
        disabled={isLoading}
      >
        {isLoading ? t(language, "calculating") : t(language, "submitLmp")}
      </button>
    </div>
  );
}
