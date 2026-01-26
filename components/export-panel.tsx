import styles from "./export-panel.module.css";
import { LanguageCode } from "../lib/types";
import { t } from "../lib/i18n";

export default function ExportPanel({
  language,
  privacyMode,
  onPrivacyToggle,
  onExport,
  exportError,
  isLoading
}: {
  language: LanguageCode;
  privacyMode: boolean;
  onPrivacyToggle: (value: boolean) => void;
  onExport: () => void;
  exportError: string | null;
  isLoading: boolean;
}) {
  return (
    <section className={styles.panel}>
      <h2>{t(language, "exportTitle")}</h2>
      <label className={styles.toggle}>
        <input
          type="checkbox"
          checked={privacyMode}
          onChange={(event) => onPrivacyToggle(event.target.checked)}
        />
        <div>
          <span className={styles.toggleLabel}>{t(language, "privacyModeLabel")}</span>
          <p className={styles.helper}>{t(language, "privacyModeHelper")}</p>
        </div>
      </label>
      {exportError && <p className={styles.error}>{exportError}</p>}
      <button type="button" className={styles.exportButton} onClick={onExport} disabled={isLoading}>
        {isLoading ? t(language, "exportInProgress") : t(language, "exportButton")}
      </button>
    </section>
  );
}
