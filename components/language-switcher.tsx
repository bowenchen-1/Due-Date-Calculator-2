import styles from "./language-switcher.module.css";
import { LanguageCode } from "../lib/types";
import { getLanguageName, supportedLanguages, t } from "../lib/i18n";

export default function LanguageSwitcher({
  language,
  onChange
}: {
  language: LanguageCode;
  onChange: (lang: LanguageCode) => void;
}) {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{t(language, "languageLabel")}</span>
      <select
        className={styles.select}
        value={language}
        onChange={(event) => onChange(event.target.value as LanguageCode)}
      >
        {supportedLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {getLanguageName(lang)}
          </option>
        ))}
      </select>
    </label>
  );
}
