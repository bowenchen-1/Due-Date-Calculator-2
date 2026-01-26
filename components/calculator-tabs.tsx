import styles from "./calculator-tabs.module.css";
import { t } from "../lib/i18n";
import { LanguageCode } from "../lib/types";

export default function CalculatorTabs({
  active,
  onChange,
  language
}: {
  active: "LMP" | "CONCEPTION";
  onChange: (value: "LMP" | "CONCEPTION") => void;
  language?: LanguageCode;
}) {
  const lang = language ?? "en";
  return (
    <div className={styles.tabs} role="tablist">
      <button
        type="button"
        role="tab"
        aria-selected={active === "LMP"}
        className={`${styles.tab} ${active === "LMP" ? styles.active : ""}`}
        onClick={() => onChange("LMP")}
      >
        {t(lang, "tabLmp")}
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={active === "CONCEPTION"}
        className={`${styles.tab} ${active === "CONCEPTION" ? styles.active : ""}`}
        onClick={() => onChange("CONCEPTION")}
      >
        {t(lang, "tabConception")}
      </button>
    </div>
  );
}
