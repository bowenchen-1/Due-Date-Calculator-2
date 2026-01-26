import styles from "./header.module.css";
import LanguageSwitcher from "./language-switcher";
import { LanguageCode } from "../lib/types";
import { t } from "../lib/i18n";

export default function Header({
  language,
  onLanguageChange
}: {
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img className={styles.logo} src="/logo-icon.png" alt="" aria-hidden="true" />
        <span>{t(language, "siteName")}</span>
      </div>
      <LanguageSwitcher language={language} onChange={onLanguageChange} />
    </header>
  );
}
