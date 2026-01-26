"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "../app/ivf/ivf.module.css";
import Header from "./header";
import IvfForm from "./ivf-form";
import ResultsSummary from "./results-summary";
import Timeline from "./timeline";
import ExportPanel from "./export-panel";
import FooterNotes from "./footer-notes";
import NodeInfoModal from "./node-info-modal";
import SeoJsonLd from "./seo-jsonld";
import { longformContent } from "../data/longform";
import { calculateFromIvf } from "../lib/calculations";
import { buildTimeline } from "../lib/timeline";
import { getTimelineTemplate } from "../data/timeline-template";
import { isValidISODate } from "../lib/date-utils";
import { PregnancyResult, LanguageCode, TimelineNode } from "../lib/types";
import { loadLastResult, saveLastResult, clearLastResult, loadLanguagePreference, saveLanguagePreference } from "../lib/storage";
import { resolveLanguage, t } from "../lib/i18n";
import { exportTimelineImage } from "../lib/export-image";

const PRIMARY_ACTIONS = {
  submitIvf: "submitIvf",
  exportTimeline: "exportTimeline"
} as const;

type PrimaryAction = (typeof PRIMARY_ACTIONS)[keyof typeof PRIMARY_ACTIONS];

export default function IvfPage() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [transferDate, setTransferDate] = useState("");
  const [embryoDays, setEmbryoDays] = useState(5);
  const [transferType, setTransferType] = useState<"fresh" | "frozen">("fresh");
  const [transferError, setTransferError] = useState<string | null>(null);
  const [result, setResult] = useState<PregnancyResult | null>(null);
  const [timeline, setTimeline] = useState<TimelineNode[]>([]);
  const [showTransferNote, setShowTransferNote] = useState(false);
  const [primaryBusy, setPrimaryBusy] = useState<PrimaryAction | null>(null);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  useEffect(() => {
    const storedLang = loadLanguagePreference();
    const resolvedLang = resolveLanguage(storedLang);
    setLanguage(resolvedLang);
    const storedResult = loadLastResult();
    if (storedResult) {
      setResult(storedResult);
      setTimeline(buildTimeline(storedResult.reference_lmp_date, getTimelineTemplate(resolvedLang)));
      setShowTransferNote(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    saveLanguagePreference(language);
    if (result) {
      setTimeline(buildTimeline(result.reference_lmp_date, getTimelineTemplate(language)));
    }
  }, [language, result]);

  const selectedNode = useMemo(
    () => timeline.find((node) => node.id === activeNodeId) ?? null,
    [activeNodeId, timeline]
  );

  const handlePrimary = async (action: PrimaryAction, run: () => void | Promise<void>) => {
    if (primaryBusy) {
      return;
    }
    setPrimaryBusy(action);
    setExportError(null);
    try {
      await run();
    } finally {
      setPrimaryBusy(null);
    }
  };

  const handleSubmit = () => {
    setTransferError(null);
    if (!isValidISODate(transferDate)) {
      setTransferError(t(language, "requiredDateError"));
      return;
    }
    handlePrimary(PRIMARY_ACTIONS.submitIvf, () => {
      const nextResult = calculateFromIvf(transferDate, embryoDays);
      if (!nextResult) {
        setTransferError(t(language, "requiredDateError"));
        return;
      }
      setResult(nextResult);
      setTimeline(buildTimeline(nextResult.reference_lmp_date, getTimelineTemplate(language)));
      saveLastResult(nextResult);
      setShowTransferNote(true);
    });
  };

  const handleReset = () => {
    setResult(null);
    setTimeline([]);
    clearLastResult();
    setShowTransferNote(false);
  };

  const handleExport = () => {
    if (!result || timeline.length === 0) {
      return;
    }
    handlePrimary(PRIMARY_ACTIONS.exportTimeline, async () => {
      try {
        await exportTimelineImage({
          result,
          timeline,
          privacyMode,
          labels: {
            title: t(language, "exportImageTitle"),
            timelineTitle: t(language, "exportImageTimelineTitle"),
            dueDateLabel: t(language, "exportImageDueDateLabel"),
            gestationalAgeLabel: t(language, "exportImageGestationalAgeLabel"),
            daysRemainingLabel: t(language, "exportImageDaysRemainingLabel"),
            generatedOnLabel: t(language, "exportImageGeneratedOnLabel"),
            statusLabel: t(language, "exportImageStatusLabel"),
            checkItemsLabel: t(language, "exportImageCheckItemsLabel"),
            statusValues: {
              past: t(language, "statusPast"),
              current: t(language, "statusCurrent"),
              future: t(language, "statusFuture")
            }
          }
        });
      } catch {
        setExportError(t(language, "exportError"));
      }
    });
  };

  return (
    <main>
      <SeoJsonLd language={language} page="ivf" />
      <Header language={language} onLanguageChange={setLanguage} />

      <section className={styles.hero}>
        <img className={styles.heroLogo} src="/logo-full.png" alt="" aria-hidden="true" />
        <h1>{t(language, "ivfHeroTitle")}</h1>
        <p>{t(language, "ivfHeroSubtitle")}</p>
      </section>

      <section className={styles.calculatorCard}>
        <IvfForm
          language={language}
          transferDate={transferDate}
          embryoDays={embryoDays}
          transferType={transferType}
          transferError={transferError}
          onTransferDateChange={setTransferDate}
          onEmbryoDaysChange={setEmbryoDays}
          onTransferTypeChange={setTransferType}
          onSubmit={handleSubmit}
          isLoading={primaryBusy === PRIMARY_ACTIONS.submitIvf}
        />
        {result && timeline.length > 0 && (
          <button type="button" className={styles.secondaryAction} onClick={handleReset}>
            {t(language, "resetLabel")}
          </button>
        )}
      </section>

      <ResultsSummary
        language={language}
        result={result}
        onReset={handleReset}
      />
      {result && showTransferNote && (
        <p className={styles.transferNote}>
          {t(language, "ivfTransferNoteLabel")}: {t(language, transferType === "fresh" ? "ivfTransferFresh" : "ivfTransferFrozen")}
        </p>
      )}

      <Timeline
        language={language}
        timeline={timeline}
        onOpenNode={(nodeId) => setActiveNodeId(nodeId)}
      />

      <ExportPanel
        language={language}
        privacyMode={privacyMode}
        onPrivacyToggle={setPrivacyMode}
        onExport={handleExport}
        exportError={exportError}
        isLoading={primaryBusy === PRIMARY_ACTIONS.exportTimeline}
      />

      <section className={styles.longform}>
        {longformContent[language]?.ivf?.sections.map((section) => (
          <div key={section.title} className={styles.longformBlock}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={`${section.title}-${index}`}>{paragraph}</p>
            ))}
          </div>
        ))}
      </section>

      <FooterNotes language={language} />

      <NodeInfoModal language={language} node={selectedNode} onClose={() => setActiveNodeId(null)} />
    </main>
  );
}
