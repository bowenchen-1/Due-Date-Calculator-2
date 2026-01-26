import styles from "./conception-form.module.css";
import { LanguageCode } from "../lib/types";
import { t } from "../lib/i18n";

export default function ConceptionForm({
  language,
  conceptionDate,
  conceptionError,
  onConceptionDateChange,
  onSubmit,
  isLoading
}: {
  language: LanguageCode;
  conceptionDate: string;
  conceptionError: string | null;
  onConceptionDateChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}) {
  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="conception-date">{t(language, "conceptionLabel")}</label>
        <input
          id="conception-date"
          type="date"
          value={conceptionDate}
          onChange={(event) => onConceptionDateChange(event.target.value)}
        />
        <span className={styles.helper}>{t(language, "conceptionHelper")}</span>
        <span className={styles.helper}>{t(language, "dateFormatHelper")}</span>
        {conceptionError && <span className={styles.error}>{conceptionError}</span>}
      </div>

      <button
        type="button"
        className={styles.submit}
        onClick={onSubmit}
        disabled={isLoading}
      >
        {isLoading ? t(language, "calculating") : t(language, "submitConception")}
      </button>
    </div>
  );
}
