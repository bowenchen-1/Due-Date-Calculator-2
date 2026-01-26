import styles from "./node-info-modal.module.css";
import { TimelineNode, LanguageCode } from "../lib/types";
import { t } from "../lib/i18n";

export default function NodeInfoModal({
  language,
  node,
  onClose
}: {
  language: LanguageCode;
  node: TimelineNode | null;
  onClose: () => void;
}) {
  if (!node) {
    return null;
  }

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label={node.title}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>{node.title}</h3>
        </div>
        <p className={styles.description}>{node.description}</p>
        <button type="button" className={styles.close} onClick={onClose}>
          {t(language, "closeLabel")}
        </button>
      </div>
    </div>
  );
}
