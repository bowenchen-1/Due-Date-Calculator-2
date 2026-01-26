import styles from "./footer-notes.module.css";
import { LanguageCode } from "../lib/types";
import { t } from "../lib/i18n";

export default function FooterNotes({ language }: { language: LanguageCode }) {
  return (
    <footer className={styles.footer}>
      <p>{t(language, "footerDisclaimer")}</p>
    </footer>
  );
}
