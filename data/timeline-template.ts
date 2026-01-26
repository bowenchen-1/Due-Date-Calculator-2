import { LanguageCode, TimelineTemplateNode } from "../lib/types";

export const timelineTemplates: Record<LanguageCode, TimelineTemplateNode[]> = {
  "en": [
    {
      id: "confirm-pregnancy",
      title: "Early pregnancy confirmation",
      week_range: { start_week: 6, end_week: 8 },
      description: "Early pregnancy overview and timing confirmation.",
      check_items: [
        "Confirmation ultrasound",
        "Intrauterine location check",
        "Heartbeat check (if visible)",
        "Basic blood tests",
        "Medical history review"
      ]
    },
    {
      id: "dating-window",
      title: "Dating and baseline screening window",
      week_range: { start_week: 10, end_week: 12 },
      description: "Baseline screening window and timeline setup.",
      check_items: [
        "Dating ultrasound",
        "NT scan",
        "First‑trimester screen",
        "Optional NIPT",
        "Baseline blood work"
      ]
    },
    {
      id: "first-trimester",
      title: "First trimester milestone",
      week_range: { start_week: 12, end_week: 14 },
      description: "Transition point at the end of the first trimester.",
      check_items: [
        "Routine visit",
        "Heartbeat check",
        "Screening results review",
        "Blood pressure & weight"
      ]
    },
    {
      id: "anatomy-scan",
      title: "Mid‑pregnancy anatomy review",
      week_range: { start_week: 18, end_week: 22 },
      description: "Mid‑pregnancy anatomy review window.",
      check_items: [
        "Anatomy ultrasound",
        "Placenta check",
        "Amniotic fluid check",
        "Cervix length (if indicated)"
      ]
    },
    {
      id: "glucose-screen",
      title: "Glucose screening window",
      week_range: { start_week: 24, end_week: 28 },
      description: "Typical window for glucose screening logistics.",
      check_items: [
        "Glucose screen",
        "Anemia screen",
        "Antibody screen (if indicated)",
        "Routine measurements"
      ]
    },
    {
      id: "third-trimester-start",
      title: "Third trimester begins",
      week_range: { start_week: 28, end_week: 32 },
      description: "Start of third‑trimester planning.",
      check_items: [
        "Routine visits",
        "Fundal height or growth",
        "Fetal movement guidance",
        "BP/urine screen"
      ]
    },
    {
      id: "late-pregnancy",
      title: "Late pregnancy monitoring",
      week_range: { start_week: 32, end_week: 36 },
      description: "Late‑pregnancy monitoring and planning.",
      check_items: [
        "Fetal position check",
        "NST if indicated",
        "Growth ultrasound (if needed)",
        "Ongoing monitoring"
      ]
    },
    {
      id: "final-weeks",
      title: "Final weeks and weekly check‑ins",
      week_range: { start_week: 36, end_week: 40 },
      description: "Final weeks with routine check‑ins.",
      check_items: [
        "Weekly visits",
        "Fetal heart rate check",
        "Cervical exam (if indicated)",
        "Labor readiness review"
      ]
    }
  ],
  "fr": [
    {
      id: "confirm-pregnancy",
      title: "Confirmation précoce de grossesse",
      week_range: { start_week: 6, end_week: 8 },
      description: "Aperçu précoce et confirmation du timing.",
      check_items: [
        "Échographie de confirmation",
        "Localisation intra‑utérine",
        "Battements cardiaques (si visibles)",
        "Bilans sanguins de base",
        "Revue des antécédents"
      ]
    },
    {
      id: "dating-window",
      title: "Fenêtre de datation et dépistage initial",
      week_range: { start_week: 10, end_week: 12 },
      description: "Fenêtre de dépistage et mise en place du calendrier.",
      check_items: [
        "Échographie de datation",
        "Clarté nucale (NT)",
        "Dépistage du 1er trimestre",
        "NIPT (optionnel)",
        "Bilans sanguins de base"
      ]
    },
    {
      id: "first-trimester",
      title: "Fin du premier trimestre",
      week_range: { start_week: 12, end_week: 14 },
      description: "Repère de fin du premier trimestre.",
      check_items: [
        "Visite prénatale",
        "Contrôle du rythme cardiaque",
        "Revue des résultats",
        "Tension artérielle/poids"
      ]
    },
    {
      id: "anatomy-scan",
      title: "Revue anatomique de mi‑grossesse",
      week_range: { start_week: 18, end_week: 22 },
      description: "Fenêtre de revue anatomique de mi‑grossesse.",
      check_items: [
        "Échographie morphologique",
        "Contrôle du placenta",
        "Contrôle du liquide amniotique",
        "Longueur cervicale (si indiquée)"
      ]
    },
    {
      id: "glucose-screen",
      title: "Fenêtre de dépistage du glucose",
      week_range: { start_week: 24, end_week: 28 },
      description: "Fenêtre typique pour l’organisation du dépistage.",
      check_items: [
        "Dépistage du glucose",
        "Anémie (hémoglobine)",
        "Dépistage d’anticorps (si indiqué)",
        "Mesures de routine"
      ]
    },
    {
      id: "third-trimester-start",
      title: "Début du troisième trimestre",
      week_range: { start_week: 28, end_week: 32 },
      description: "Début des échanges du troisième trimestre.",
      check_items: [
        "Visites prénatales",
        "Hauteur utérine/croissance",
        "Conseils sur les mouvements",
        "Tension artérielle/urine"
      ]
    },
    {
      id: "late-pregnancy",
      title: "Suivi de fin de grossesse",
      week_range: { start_week: 32, end_week: 36 },
      description: "Suivi et planification en fin de grossesse.",
      check_items: [
        "Position fœtale",
        "Test NST si indiqué",
        "Échographie de croissance (si besoin)",
        "Suivi prénatal"
      ]
    },
    {
      id: "final-weeks",
      title: "Dernières semaines et contrôles réguliers",
      week_range: { start_week: 36, end_week: 40 },
      description: "Dernières semaines avec contrôles réguliers.",
      check_items: [
        "Visites plus fréquentes",
        "Rythme cardiaque fœtal",
        "Évaluation du col (si indiquée)",
        "Préparation à l’accouchement"
      ]
    }
  ],
  "de": [
    {
      id: "confirm-pregnancy",
      title: "Frühe Schwangerschaftsbestätigung",
      week_range: { start_week: 6, end_week: 8 },
      description: "Frühe Bestätigung und zeitliche Einordnung.",
      check_items: [
        "Bestätigungs‑Ultraschall",
        "Intrauterine Lage",
        "Herzschlag‑Kontrolle (falls sichtbar)",
        "Basis‑Bluttests",
        "Anamnese"
      ]
    },
    {
      id: "dating-window",
      title: "Datierung und Basis‑Screening",
      week_range: { start_week: 10, end_week: 12 },
      description: "Fenster für Screening und Zeitplan.",
      check_items: [
        "Datierungs‑Ultraschall",
        "NT‑Messung",
        "Ersttrimester‑Screening",
        "NIPT (optional)",
        "Basis‑Blutwerte"
      ]
    },
    {
      id: "first-trimester",
      title: "Meilenstein erstes Trimester",
      week_range: { start_week: 12, end_week: 14 },
      description: "Übergang am Ende des ersten Trimesters.",
      check_items: [
        "Routine‑Termin",
        "Herzschlag‑Kontrolle",
        "Ergebnisse besprechen",
        "Blutdruck/Gewicht"
      ]
    },
    {
      id: "anatomy-scan",
      title: "Anatomie‑Überblick zur Halbzeit",
      week_range: { start_week: 18, end_week: 22 },
      description: "Fenster für die Anatomie‑Besprechung.",
      check_items: [
        "Anatomie‑Ultraschall",
        "Plazenta‑Kontrolle",
        "Fruchtwasser‑Kontrolle",
        "Zervixlänge (bei Bedarf)"
      ]
    },
    {
      id: "glucose-screen",
      title: "Glukose‑Screening‑Fenster",
      week_range: { start_week: 24, end_week: 28 },
      description: "Typisches Fenster für Screening‑Abläufe.",
      check_items: [
        "Glukose‑Screening",
        "Anämie‑Check",
        "Antikörper‑Screening (bei Bedarf)",
        "Routine‑Messungen"
      ]
    },
    {
      id: "third-trimester-start",
      title: "Beginn des dritten Trimesters",
      week_range: { start_week: 28, end_week: 32 },
      description: "Start der Planungen im dritten Trimester.",
      check_items: [
        "Routine‑Besuche",
        "Fundushöhe/Wachstum",
        "Kindsbewegungen‑Hinweise",
        "Blutdruck/Urin"
      ]
    },
    {
      id: "late-pregnancy",
      title: "Überwachung in der Spätschwangerschaft",
      week_range: { start_week: 32, end_week: 36 },
      description: "Spätschwangerschaftliches Monitoring.",
      check_items: [
        "Lage des Fetus",
        "NST bei Bedarf",
        "Wachstums‑Ultraschall (bei Bedarf)",
        "Laufende Kontrollen"
      ]
    },
    {
      id: "final-weeks",
      title: "Letzte Wochen und wöchentliche Kontrollen",
      week_range: { start_week: 36, end_week: 40 },
      description: "Letzte Wochen mit regelmäßigen Kontrollen.",
      check_items: [
        "Wöchentliche Termine",
        "Fetale Herzfrequenz",
        "Zervix‑Untersuchung (bei Bedarf)",
        "Geburtsbereitschaft"
      ]
    }
  ],
  "zh-CN": [
    {
      id: "confirm-pregnancy",
      title: "早孕确认与首次咨询",
      week_range: { start_week: 6, end_week: 8 },
      description: "早孕阶段的基本确认与沟通。",
      check_items: [
        "妊娠确认超声",
        "宫内位置确认",
        "胎心检查（如可见）",
        "基础血液检查",
        "病史与情况了解"
      ]
    },
    {
      id: "dating-window",
      title: "孕周校正与初筛窗口",
      week_range: { start_week: 10, end_week: 12 },
      description: "用于建立时间轴与初筛安排。",
      check_items: [
        "孕周确认超声",
        "NT 检查",
        "一孕期筛查",
        "NIPT（可选）",
        "基础产检血检"
      ]
    },
    {
      id: "first-trimester",
      title: "第一孕期收尾阶段",
      week_range: { start_week: 12, end_week: 14 },
      description: "第一孕期结束的过渡阶段。",
      check_items: [
        "常规产检",
        "胎心检查",
        "筛查结果回顾",
        "血压/体重"
      ]
    },
    {
      id: "anatomy-scan",
      title: "中期结构评估窗口",
      week_range: { start_week: 18, end_week: 22 },
      description: "结构评估的常见时间窗口。",
      check_items: [
        "结构超声",
        "胎盘位置评估",
        "羊水量评估",
        "宫颈长度（如需）"
      ]
    },
    {
      id: "glucose-screen",
      title: "糖筛窗口",
      week_range: { start_week: 24, end_week: 28 },
      description: "糖筛安排的常见时间段。",
      check_items: [
        "糖筛",
        "贫血/血红蛋白",
        "抗体筛查（如需）",
        "常规测量"
      ]
    },
    {
      id: "third-trimester-start",
      title: "第三孕期开始",
      week_range: { start_week: 28, end_week: 32 },
      description: "进入第三孕期的规划阶段。",
      check_items: [
        "常规产检",
        "宫高/生长评估",
        "胎动指导",
        "血压/尿检"
      ]
    },
    {
      id: "late-pregnancy",
      title: "晚期孕期随访",
      week_range: { start_week: 32, end_week: 36 },
      description: "晚期随访与计划的阶段。",
      check_items: [
        "胎位评估",
        "NST（如需）",
        "生长超声（如需）",
        "持续随访"
      ]
    },
    {
      id: "final-weeks",
      title: "最后几周与每周检查",
      week_range: { start_week: 36, end_week: 40 },
      description: "最后阶段的常规检查提示。",
      check_items: [
        "每周产检",
        "胎心监测",
        "宫颈评估（如需）",
        "临产准备评估"
      ]
    }
  ],
  "ja": [
    {
      id: "confirm-pregnancy",
      title: "妊娠初期の確認",
      week_range: { start_week: 6, end_week: 8 },
      description: "妊娠初期の基本的な確認段階。",
      check_items: [
        "妊娠確認超音波",
        "子宮内位置の確認",
        "心拍確認（見える場合）",
        "基本的な血液検査",
        "既往歴の確認"
      ]
    },
    {
      id: "dating-window",
      title: "週数確認と基礎スクリーニング",
      week_range: { start_week: 10, end_week: 12 },
      description: "週数確認と初期スクリーニングの時期。",
      check_items: [
        "週数確認の超音波",
        "NT検査",
        "第1三半期スクリーニング",
        "NIPT（任意）",
        "基礎血液検査"
      ]
    },
    {
      id: "first-trimester",
      title: "第一三半期の節目",
      week_range: { start_week: 12, end_week: 14 },
      description: "第一三半期の節目。",
      check_items: [
        "定期健診",
        "心拍確認",
        "結果の確認",
        "血圧・体重"
      ]
    },
    {
      id: "anatomy-scan",
      title: "中期の構造評価",
      week_range: { start_week: 18, end_week: 22 },
      description: "構造評価の時期。",
      check_items: [
        "形態超音波",
        "胎盤の確認",
        "羊水量の確認",
        "子宮頸長（必要時）"
      ]
    },
    {
      id: "glucose-screen",
      title: "耐糖スクリーニング期間",
      week_range: { start_week: 24, end_week: 28 },
      description: "糖代謝スクリーニングの時期。",
      check_items: [
        "糖代謝スクリーニング",
        "貧血検査",
        "抗体スクリーニング（必要時）",
        "定期測定"
      ]
    },
    {
      id: "third-trimester-start",
      title: "第三三半期の開始",
      week_range: { start_week: 28, end_week: 32 },
      description: "第三三半期の計画開始。",
      check_items: [
        "定期健診",
        "子宮底長/成長評価",
        "胎動ガイド",
        "血圧・尿検査"
      ]
    },
    {
      id: "late-pregnancy",
      title: "後期のモニタリング",
      week_range: { start_week: 32, end_week: 36 },
      description: "後期のモニタリング段階。",
      check_items: [
        "胎位の確認",
        "NST（必要時）",
        "成長超音波（必要時）",
        "継続フォロー"
      ]
    },
    {
      id: "final-weeks",
      title: "最終週と毎週のチェック",
      week_range: { start_week: 36, end_week: 40 },
      description: "最終週の定期チェック。",
      check_items: [
        "毎週の健診",
        "胎児心拍確認",
        "子宮頸部評価（必要時）",
        "出産準備の確認"
      ]
    }
  ],
  "es": [
    {
      id: "confirm-pregnancy",
      title: "Confirmación temprana del embarazo",
      week_range: { start_week: 6, end_week: 8 },
      description: "Confirmación inicial y ubicación del embarazo.",
      check_items: [
        "Ecografía de confirmación",
        "Ubicación intrauterina",
        "Latido (si visible)",
        "Analíticas básicas",
        "Revisión de antecedentes"
      ]
    },
    {
      id: "dating-window",
      title: "Ventana de datación y evaluación básica",
      week_range: { start_week: 10, end_week: 12 },
      description: "Ventana de cribado y organización del calendario.",
      check_items: [
        "Ecografía de datación",
        "Translucencia nucal (NT)",
        "Cribado del primer trimestre",
        "NIPT (opcional)",
        "Analítica básica"
      ]
    },
    {
      id: "first-trimester",
      title: "Hito del primer trimestre",
      week_range: { start_week: 12, end_week: 14 },
      description: "Transición al final del primer trimestre.",
      check_items: [
        "Visita de rutina",
        "Chequeo del latido",
        "Revisión de resultados",
        "Presión arterial/peso"
      ]
    },
    {
      id: "anatomy-scan",
      title: "Revisión anatómica de mitad del embarazo",
      week_range: { start_week: 18, end_week: 22 },
      description: "Ventana de revisión anatómica.",
      check_items: [
        "Ecografía anatómica",
        "Evaluación de placenta",
        "Evaluación de líquido amniótico",
        "Longitud cervical (si indicado)"
      ]
    },
    {
      id: "glucose-screen",
      title: "Ventana de prueba de glucosa",
      week_range: { start_week: 24, end_week: 28 },
      description: "Ventana típica para organización del cribado.",
      check_items: [
        "Prueba de glucosa",
        "Cribado de anemia",
        "Cribado de anticuerpos (si aplica)",
        "Mediciones de rutina"
      ]
    },
    {
      id: "third-trimester-start",
      title: "Inicio del tercer trimestre",
      week_range: { start_week: 28, end_week: 32 },
      description: "Inicio de la planificación del tercer trimestre.",
      check_items: [
        "Visitas de rutina",
        "Altura uterina/crecimiento",
        "Guía de movimientos fetales",
        "Presión arterial/orina"
      ]
    },
    {
      id: "late-pregnancy",
      title: "Monitoreo de embarazo avanzado",
      week_range: { start_week: 32, end_week: 36 },
      description: "Etapa de monitoreo y planificación.",
      check_items: [
        "Posición fetal",
        "NST (si aplica)",
        "Ecografía de crecimiento (si aplica)",
        "Seguimiento continuo"
      ]
    },
    {
      id: "final-weeks",
      title: "Semanas finales y controles semanales",
      week_range: { start_week: 36, end_week: 40 },
      description: "Semanas finales con controles regulares.",
      check_items: [
        "Visitas semanales",
        "Frecuencia cardíaca fetal",
        "Evaluación cervical (si aplica)",
        "Preparación para el parto"
      ]
    }
  ]
};

export const getTimelineTemplate = (language: LanguageCode): TimelineTemplateNode[] => {
  return timelineTemplates[language] ?? timelineTemplates.en;
};
