import styles from "./ivf-form.module.css";
import { LanguageCode } from "../lib/types";
import { t } from "../lib/i18n";
import { normalizeISODateInput } from "../lib/date-utils";

export default function IvfForm({
  language,
  transferDate,
  embryoDays,
  transferType,
  transferError,
  onTransferDateChange,
  onEmbryoDaysChange,
  onTransferTypeChange,
  onSubmit,
  isLoading
}: {
  language: LanguageCode;
  transferDate: string;
  embryoDays: number;
  transferType: "fresh" | "frozen";
  transferError: string | null;
  onTransferDateChange: (value: string) => void;
  onEmbryoDaysChange: (value: number) => void;
  onTransferTypeChange: (value: "fresh" | "frozen") => void;
  onSubmit: () => void;
  isLoading: boolean;
}) {
  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="ivf-transfer-date">{t(language, "ivfDateLabel")}</label>
        <input
          id="ivf-transfer-date"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="YYYY-MM-DD"
          pattern="\d{4}-\d{2}-\d{2}"
          maxLength={10}
          value={transferDate}
          onChange={(event) => onTransferDateChange(normalizeISODateInput(event.target.value))}
        />
        <span className={styles.helper}>{t(language, "ivfHelper")}</span>
        <span className={styles.helper}>{t(language, "dateFormatHelper")}</span>
        {transferError && <span className={styles.error}>{transferError}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="ivf-embryo-age">{t(language, "ivfEmbryoLabel")}</label>
        <select
          id="ivf-embryo-age"
          value={embryoDays}
          onChange={(event) => onEmbryoDaysChange(Number(event.target.value))}
        >
          <option value={3}>{t(language, "ivfEmbryoD3")}</option>
          <option value={5}>{t(language, "ivfEmbryoD5")}</option>
        </select>
      </div>

      <div className={styles.field}>
        <label>{t(language, "ivfTransferLabel")}</label>
        <div className={styles.inlineOptions}>
          <label>
            <input
              type="radio"
              name="transfer-type"
              value="fresh"
              checked={transferType === "fresh"}
              onChange={() => onTransferTypeChange("fresh")}
            />
            {t(language, "ivfTransferFresh")}
          </label>
          <label>
            <input
              type="radio"
              name="transfer-type"
              value="frozen"
              checked={transferType === "frozen"}
              onChange={() => onTransferTypeChange("frozen")}
            />
            {t(language, "ivfTransferFrozen")}
          </label>
        </div>
      </div>

      <button
        type="button"
        className={styles.submit}
        onClick={onSubmit}
        disabled={isLoading}
      >
        {isLoading ? t(language, "calculating") : t(language, "submitIvf")}
      </button>
    </div>
  );
}
