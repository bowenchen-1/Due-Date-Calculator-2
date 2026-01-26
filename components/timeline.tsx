import styles from "./timeline.module.css";
import { TimelineNode, LanguageCode } from "../lib/types";
import { formatDisplayDate } from "../lib/date-utils";
import { getTimelineCountdown } from "../lib/timeline";
import { t } from "../lib/i18n";

export default function Timeline({
  language,
  timeline,
  onOpenNode
}: {
  language: LanguageCode;
  timeline: TimelineNode[];
  onOpenNode: (nodeId: string) => void;
}) {
  if (timeline.length === 0) {
    return (
      <section className={styles.empty}>
        <h2>{t(language, "timelineTitle")}</h2>
        <p>{t(language, "timelineEmpty")}</p>
      </section>
    );
  }

  return (
    <section className={styles.timeline}>
      <h2>{t(language, "timelineTitle")}</h2>
      <div className={styles.list}>
        {timeline.map((node) => {
          const countdown = getTimelineCountdown(node);
          const isRange = node.week_range.start_week !== node.week_range.end_week;
          const rangeLabel = (() => {
            if (language === "zh-CN") {
              return `第${node.week_range.start_week}${isRange ? `–${node.week_range.end_week}` : ""}周`;
            }
            if (language === "ja") {
              return `${node.week_range.start_week}${t(language, "weekLabel")}${
                isRange ? `–${node.week_range.end_week}${t(language, "weeksLabel")}` : ""
              }`;
            }
            return isRange
              ? `${t(language, "weeksLabel")} ${node.week_range.start_week}–${node.week_range.end_week}`
              : `${t(language, "weekLabel")} ${node.week_range.start_week}`;
          })();
          const statusLabel =
            node.status === "PAST"
              ? t(language, "statusPast")
              : node.status === "CURRENT"
              ? t(language, "statusCurrent")
              : t(language, "statusFuture");
          const countdownLabel =
            countdown.type === "startsIn"
              ? t(language, "startsInLabel")
              : countdown.type === "endsIn"
              ? t(language, "endsInLabel")
              : t(language, "endedLabel");
          return (
            <div key={node.id} className={`${styles.item} ${styles[`card${node.status}`]}`}>
              <span className={styles.marker} aria-hidden="true" />
              <div className={styles.headerRow}>
                <div>
                  <h3>{node.title}</h3>
                  <p className={styles.rangeLabel}>{rangeLabel}</p>
                </div>
                <span className={`${styles.status} ${styles[node.status.toLowerCase()]}`}>
                  {statusLabel}
                </span>
              </div>
              <p className={styles.dateRange}>
                {formatDisplayDate(node.date_range.start_date)} — {formatDisplayDate(node.date_range.end_date)}
              </p>
              <div className={styles.checkItem}>
                <span>{t(language, "timelineCheckLabel")}:</span>
                <ul>
                  {node.check_items.map((item, index) => (
                    <li key={`${node.id}-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className={styles.countdown}>
                {countdownLabel} {countdown.value} {t(language, "daysLabel")}
              </p>
              <button type="button" className={styles.infoButton} onClick={() => onOpenNode(node.id)}>
                {t(language, "timelineOpenInfo")}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
