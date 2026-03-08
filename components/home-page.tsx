"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "../app/page.module.css";
import Header from "./header";
import CalculatorTabs from "./calculator-tabs";
import LmpForm from "./lmp-form";
import ConceptionForm from "./conception-form";
import ResultsSummary from "./results-summary";
import Timeline from "./timeline";
import ExportPanel from "./export-panel";
import FooterNotes from "./footer-notes";
import NodeInfoModal from "./node-info-modal";
import SeoJsonLd from "./seo-jsonld";
import { longformContent } from "../data/longform";
import { calculateFromConception, calculateFromLmp } from "../lib/calculations";
import { buildTimeline } from "../lib/timeline";
import { getTimelineTemplate } from "../data/timeline-template";
import { isValidISODate } from "../lib/date-utils";
import { PregnancyResult, LanguageCode, TimelineNode } from "../lib/types";
import { loadLastResult, saveLastResult, clearLastResult, loadLanguagePreference, saveLanguagePreference } from "../lib/storage";
import { resolveLanguage, t } from "../lib/i18n";
import { exportTimelineImage } from "../lib/export-image";

const PRIMARY_ACTIONS = {
  submitLmp: "submitLmp",
  submitConception: "submitConception",
  exportTimeline: "exportTimeline"
} as const;

type PrimaryAction = (typeof PRIMARY_ACTIONS)[keyof typeof PRIMARY_ACTIONS];

type TabOption = "LMP" | "CONCEPTION";

export default function HomePage() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [tab, setTab] = useState<TabOption>("LMP");
  const [lmpDate, setLmpDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [conceptionDate, setConceptionDate] = useState("");
  const [result, setResult] = useState<PregnancyResult | null>(null);
  const [timeline, setTimeline] = useState<TimelineNode[]>([]);
  const [lmpError, setLmpError] = useState<string | null>(null);
  const [cycleError, setCycleError] = useState<string | null>(null);
  const [conceptionError, setConceptionError] = useState<string | null>(null);
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

  const computeLmp = () => {
    const nextResult = calculateFromLmp(lmpDate, cycleLength);
    if (!nextResult) {
      setLmpError(t(language, "requiredDateError"));
      return;
    }
    setResult(nextResult);
    setTimeline(buildTimeline(nextResult.reference_lmp_date, getTimelineTemplate(language)));
    saveLastResult(nextResult);
  };

  const computeConception = () => {
    const nextResult = calculateFromConception(conceptionDate);
    if (!nextResult) {
      setConceptionError(t(language, "requiredDateError"));
      return;
    }
    setResult(nextResult);
    setTimeline(buildTimeline(nextResult.reference_lmp_date, getTimelineTemplate(language)));
    saveLastResult(nextResult);
  };

  const handleLmpSubmit = () => {
    setLmpError(null);
    setCycleError(null);
    if (!isValidISODate(lmpDate)) {
      setLmpError(t(language, "requiredDateError"));
      return;
    }
    if (cycleLength < 22 || cycleLength > 45) {
      setCycleError(t(language, "cycleRangeError"));
      return;
    }
    handlePrimary(PRIMARY_ACTIONS.submitLmp, () => {
      computeLmp();
    });
  };

  const handleConceptionSubmit = () => {
    setConceptionError(null);
    if (!isValidISODate(conceptionDate)) {
      setConceptionError(t(language, "requiredDateError"));
      return;
    }
    handlePrimary(PRIMARY_ACTIONS.submitConception, () => {
      computeConception();
    });
  };

  const handleReset = () => {
    setResult(null);
    setTimeline([]);
    clearLastResult();
  };

  useEffect(() => {
    if (tab !== "LMP") {
      return;
    }
    setLmpError(null);
    setCycleError(null);
    if (!lmpDate) {
      return;
    }
    if (!isValidISODate(lmpDate)) {
      if (lmpDate.length === 10) {
        setLmpError(t(language, "requiredDateError"));
      }
      return;
    }
    if (cycleLength < 22 || cycleLength > 45 || Number.isNaN(cycleLength)) {
      setCycleError(t(language, "cycleRangeError"));
      return;
    }
    const timer = window.setTimeout(() => {
      handlePrimary(PRIMARY_ACTIONS.submitLmp, () => {
        computeLmp();
      });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [tab, lmpDate, cycleLength, language]);

  useEffect(() => {
    if (tab !== "CONCEPTION") {
      return;
    }
    setConceptionError(null);
    if (!conceptionDate) {
      return;
    }
    if (!isValidISODate(conceptionDate)) {
      if (conceptionDate.length === 10) {
        setConceptionError(t(language, "requiredDateError"));
      }
      return;
    }
    const timer = window.setTimeout(() => {
      handlePrimary(PRIMARY_ACTIONS.submitConception, () => {
        computeConception();
      });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [tab, conceptionDate, language]);

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
      <SeoJsonLd language={language} page="home" />
      <Header language={language} onLanguageChange={setLanguage} />

      <section className={styles.hero}>
        <img className={styles.heroLogo} src="/logo.png" alt="" aria-hidden="true" />
        <h1>{t(language, "heroTitle")}</h1>
        <p>{t(language, "heroSubtitle")}</p>
      </section>

      <section className={styles.calculatorCard}>
        <CalculatorTabs active={tab} onChange={setTab} language={language} />
        {tab === "LMP" ? (
          <LmpForm
            language={language}
            lmpDate={lmpDate}
            cycleLength={cycleLength}
            lmpError={lmpError}
            cycleError={cycleError}
            onLmpDateChange={setLmpDate}
            onCycleLengthChange={setCycleLength}
            onSubmit={handleLmpSubmit}
            isLoading={primaryBusy === PRIMARY_ACTIONS.submitLmp}
          />
        ) : (
          <ConceptionForm
            language={language}
            conceptionDate={conceptionDate}
            conceptionError={conceptionError}
            onConceptionDateChange={setConceptionDate}
            onSubmit={handleConceptionSubmit}
            isLoading={primaryBusy === PRIMARY_ACTIONS.submitConception}
          />
        )}
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
        {longformContent[language]?.home?.sections.map((section) => (
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
