import { LanguageCode } from "../lib/types";

export type TranslationKey =
  | "siteName"
  | "languageLabel"
  | "heroTitle"
  | "heroSubtitle"
  | "tabLmp"
  | "tabConception"
  | "lmpLabel"
  | "lmpHelper"
  | "dateFormatHelper"
  | "cycleLengthLabel"
  | "cycleLengthHelper"
  | "conceptionLabel"
  | "conceptionHelper"
  | "submitLmp"
  | "submitConception"
  | "calculating"
  | "resultsTitle"
  | "eddLabel"
  | "gestationalAgeLabel"
  | "daysRemainingLabel"
  | "daysElapsedLabel"
  | "equivalentLmpLabel"
  | "conceptionNote"
  | "resetLabel"
  | "timelineTitle"
  | "timelineEmpty"
  | "timelineOpenInfo"
  | "timelineCheckLabel"
  | "weekLabel"
  | "weeksLabel"
  | "startsInLabel"
  | "endsInLabel"
  | "endedLabel"
  | "daysLabel"
  | "statusPast"
  | "statusCurrent"
  | "statusFuture"
  | "exportTitle"
  | "exportButton"
  | "exportInProgress"
  | "privacyModeLabel"
  | "privacyModeHelper"
  | "exportError"
  | "exportImageTitle"
  | "exportImageTimelineTitle"
  | "exportImageDueDateLabel"
  | "exportImageGestationalAgeLabel"
  | "exportImageDaysRemainingLabel"
  | "exportImageGeneratedOnLabel"
  | "exportImageStatusLabel"
  | "exportImageCheckItemsLabel"
  | "footerDisclaimer"
  | "requiredDateError"
  | "cycleRangeError"
  | "ivfHeroTitle"
  | "ivfHeroSubtitle"
  | "ivfHelper"
  | "ivfDateLabel"
  | "ivfEmbryoLabel"
  | "ivfEmbryoD3"
  | "ivfEmbryoD5"
  | "ivfTransferLabel"
  | "ivfTransferFresh"
  | "ivfTransferFrozen"
  | "submitIvf"
  | "closeLabel"
  | "ivfTransferNoteLabel";

export const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  "en": {
    siteName: "Pregnancy Timeline Tool",
    languageLabel: "Language",
    heroTitle: "Pregnancy Due Date Calculator",
    heroSubtitle:
      "Calculate your estimated due date using LMP or conception date, then view a clear pregnancy timeline and export a privacy-safe summary.",
    tabLmp: "LMP",
    tabConception: "Conception",
    lmpLabel: "Last menstrual period (LMP)",
    lmpHelper: "Enter the first day of your last menstrual period.",
    dateFormatHelper: "Format: YYYY-MM-DD",
    cycleLengthLabel: "Cycle length (days)",
    cycleLengthHelper: "Default is 28 days. Range 22–45 days.",
    conceptionLabel: "Conception (ovulation) date",
    conceptionHelper: "Conception is usually treated as the ovulation date.",
    submitLmp: "Calculate from LMP",
    submitConception: "Calculate from conception date",
    calculating: "Calculating...",
    resultsTitle: "Results summary",
    eddLabel: "Estimated due date (EDD)",
    gestationalAgeLabel: "Gestational age",
    daysRemainingLabel: "Days remaining",
    daysElapsedLabel: "Days elapsed",
    equivalentLmpLabel: "Equivalent LMP",
    conceptionNote: "Conception dates are typically treated as ovulation dates for gestational calculations.",
    resetLabel: "Reset and recalculate",
    timelineTitle: "Pregnancy timeline",
    timelineEmpty: "Enter a date to generate your personalized timeline.",
    timelineOpenInfo: "What does this mean?",
    timelineCheckLabel: "Check focus",
    weekLabel: "Week",
    weeksLabel: "Weeks",
    startsInLabel: "Starts in",
    endsInLabel: "Ends in",
    endedLabel: "Ended",
    daysLabel: "days",
    statusPast: "Past",
    statusCurrent: "Current",
    statusFuture: "Future",
    exportTitle: "Export timeline",
    exportButton: "Export timeline",
    exportInProgress: "Preparing export...",
    privacyModeLabel: "Privacy mode",
    privacyModeHelper:
      "When on, your input dates are hidden. Only due date and progress are included.",
    exportError: "Export failed. Please try again.",
    exportImageTitle: "Pregnancy Timeline",
    exportImageTimelineTitle: "Timeline milestones",
    exportImageDueDateLabel: "Estimated due date",
    exportImageGestationalAgeLabel: "Gestational age",
    exportImageDaysRemainingLabel: "Days remaining",
    exportImageGeneratedOnLabel: "Generated on",
    exportImageStatusLabel: "Status",
    exportImageCheckItemsLabel: "Check items",
    footerDisclaimer:
      "This tool provides general information and is not medical advice. Always consult a qualified health professional for personal guidance.",
    requiredDateError: "Please select a valid date.",
    cycleRangeError: "Cycle length must be between 22 and 45 days.",
    ivfHeroTitle: "IVF Due Date Calculator",
    ivfHeroSubtitle:
      "Enter embryo transfer details to calculate an estimated due date and view the same timeline format.",
    ivfHelper: "Transfer type is used only for text context, not the calculation.",
    ivfDateLabel: "Embryo transfer date",
    ivfEmbryoLabel: "Embryo age",
    ivfEmbryoD3: "Day 3 (D3)",
    ivfEmbryoD5: "Day 5 (D5)",
    ivfTransferLabel: "Transfer type",
    ivfTransferFresh: "Fresh",
    ivfTransferFrozen: "Frozen",
    submitIvf: "Calculate from IVF transfer",
    closeLabel: "Close",
    ivfTransferNoteLabel: "Transfer type (context only)"
  },
  "fr": {
    siteName: "Outil de calendrier de grossesse",
    languageLabel: "Langue",
    heroTitle: "Calculateur de date d’accouchement",
    heroSubtitle:
      "Calculez la date prévue selon la DDM ou la date de conception, puis consultez une chronologie claire et exportez un résumé respectueux de la vie privée.",
    tabLmp: "DDM",
    tabConception: "Conception",
    lmpLabel: "Date des dernières règles (DDM)",
    lmpHelper: "Saisissez le premier jour de vos dernières règles.",
    dateFormatHelper: "Format : AAAA-MM-JJ",
    cycleLengthLabel: "Durée du cycle (jours)",
    cycleLengthHelper: "Valeur par défaut 28 jours. Plage 22–45 jours.",
    conceptionLabel: "Date de conception (ovulation)",
    conceptionHelper: "La conception est généralement traitée comme la date d’ovulation.",
    submitLmp: "Calculer à partir de la DDM",
    submitConception: "Calculer à partir de la conception",
    calculating: "Calcul en cours...",
    resultsTitle: "Résumé des résultats",
    eddLabel: "Date prévue d’accouchement",
    gestationalAgeLabel: "Âge gestationnel",
    daysRemainingLabel: "Jours restants",
    daysElapsedLabel: "Jours écoulés",
    equivalentLmpLabel: "DDM équivalente",
    conceptionNote:
      "Les dates de conception sont généralement traitées comme des dates d’ovulation pour les calculs gestationnels.",
    resetLabel: "Réinitialiser et recalculer",
    timelineTitle: "Chronologie de grossesse",
    timelineEmpty: "Saisissez une date pour générer votre chronologie personnalisée.",
    timelineOpenInfo: "Que signifie ceci ?",
    timelineCheckLabel: "Point à vérifier",
    weekLabel: "Semaine",
    weeksLabel: "Semaines",
    startsInLabel: "Commence dans",
    endsInLabel: "Se termine dans",
    endedLabel: "Terminé",
    daysLabel: "jours",
    statusPast: "Passé",
    statusCurrent: "En cours",
    statusFuture: "À venir",
    exportTitle: "Exporter la chronologie",
    exportButton: "Exporter la chronologie",
    exportInProgress: "Préparation de l’export...",
    privacyModeLabel: "Mode confidentialité",
    privacyModeHelper:
      "Lorsque activé, vos dates saisies sont masquées. Seules la date prévue et la progression sont incluses.",
    exportError: "Échec de l’export. Veuillez réessayer.",
    exportImageTitle: "Chronologie de grossesse",
    exportImageTimelineTitle: "Étapes de la chronologie",
    exportImageDueDateLabel: "Date prévue",
    exportImageGestationalAgeLabel: "Âge gestationnel",
    exportImageDaysRemainingLabel: "Jours restants",
    exportImageGeneratedOnLabel: "Généré le",
    exportImageStatusLabel: "Statut",
    exportImageCheckItemsLabel: "Examens",
    footerDisclaimer:
      "Cet outil fournit des informations générales et ne constitue pas un avis médical. Consultez toujours un professionnel de santé qualifié.",
    requiredDateError: "Veuillez sélectionner une date valide.",
    cycleRangeError: "La durée du cycle doit être comprise entre 22 et 45 jours.",
    ivfHeroTitle: "Calculateur de date d’accouchement FIV",
    ivfHeroSubtitle:
      "Saisissez les détails du transfert embryonnaire pour calculer une date prévue et consulter la même chronologie.",
    ivfHelper: "Le type de transfert n’influence que le texte explicatif, pas le calcul.",
    ivfDateLabel: "Date de transfert embryonnaire",
    ivfEmbryoLabel: "Âge de l’embryon",
    ivfEmbryoD3: "Jour 3 (J3)",
    ivfEmbryoD5: "Jour 5 (J5)",
    ivfTransferLabel: "Type de transfert",
    ivfTransferFresh: "Frais",
    ivfTransferFrozen: "Congelé",
    submitIvf: "Calculer à partir du transfert FIV",
    closeLabel: "Fermer",
    ivfTransferNoteLabel: "Type de transfert (contexte uniquement)"
  },
  "de": {
    siteName: "Schwangerschaftszeitplan-Tool",
    languageLabel: "Sprache",
    heroTitle: "Geburtstermin-Rechner",
    heroSubtitle:
      "Berechnen Sie den voraussichtlichen Termin anhand der letzten Periode oder des Empfängnisdatums und sehen Sie eine klare Zeitleiste mit privatem Export.",
    tabLmp: "LMP",
    tabConception: "Empfängnis",
    lmpLabel: "Letzte Menstruation (LMP)",
    lmpHelper: "Geben Sie den ersten Tag der letzten Menstruation ein.",
    dateFormatHelper: "Format: JJJJ-MM-TT",
    cycleLengthLabel: "Zykluslänge (Tage)",
    cycleLengthHelper: "Standard 28 Tage. Bereich 22–45 Tage.",
    conceptionLabel: "Empfängnisdatum (Ovulation)",
    conceptionHelper: "Empfängnis wird meist als Ovulationsdatum behandelt.",
    submitLmp: "Berechnen anhand LMP",
    submitConception: "Berechnen anhand Empfängnisdatum",
    calculating: "Berechnung läuft...",
    resultsTitle: "Ergebnisübersicht",
    eddLabel: "Voraussichtlicher Geburtstermin",
    gestationalAgeLabel: "Schwangerschaftsalter",
    daysRemainingLabel: "Verbleibende Tage",
    daysElapsedLabel: "Vergangene Tage",
    equivalentLmpLabel: "Äquivalente LMP",
    conceptionNote:
      "Empfängnisdaten werden für die Schwangerschaftsberechnung in der Regel als Ovulationsdaten behandelt.",
    resetLabel: "Zurücksetzen und neu berechnen",
    timelineTitle: "Schwangerschaftszeitplan",
    timelineEmpty: "Geben Sie ein Datum ein, um Ihre persönliche Zeitleiste zu erstellen.",
    timelineOpenInfo: "Was bedeutet das?",
    timelineCheckLabel: "Hinweis",
    weekLabel: "Woche",
    weeksLabel: "Wochen",
    startsInLabel: "Beginnt in",
    endsInLabel: "Endet in",
    endedLabel: "Beendet",
    daysLabel: "Tage",
    statusPast: "Vergangen",
    statusCurrent: "Aktuell",
    statusFuture: "Zukünftig",
    exportTitle: "Zeitleiste exportieren",
    exportButton: "Zeitleiste exportieren",
    exportInProgress: "Export wird vorbereitet...",
    privacyModeLabel: "Datenschutzmodus",
    privacyModeHelper:
      "Wenn aktiviert, werden Eingabedaten verborgen. Nur Termin und Fortschritt werden angezeigt.",
    exportError: "Export fehlgeschlagen. Bitte erneut versuchen.",
    exportImageTitle: "Schwangerschaftszeitplan",
    exportImageTimelineTitle: "Zeitplan-Meilensteine",
    exportImageDueDateLabel: "Voraussichtlicher Termin",
    exportImageGestationalAgeLabel: "Schwangerschaftsalter",
    exportImageDaysRemainingLabel: "Verbleibende Tage",
    exportImageGeneratedOnLabel: "Erstellt am",
    exportImageStatusLabel: "Status",
    exportImageCheckItemsLabel: "Checks",
    footerDisclaimer:
      "Dieses Tool liefert allgemeine Informationen und ist keine medizinische Beratung. Bitte wenden Sie sich an medizinisches Fachpersonal.",
    requiredDateError: "Bitte ein gültiges Datum auswählen.",
    cycleRangeError: "Die Zykluslänge muss zwischen 22 und 45 Tagen liegen.",
    ivfHeroTitle: "IVF-Geburtstermin-Rechner",
    ivfHeroSubtitle:
      "Geben Sie Details zum Embryotransfer ein, um einen voraussichtlichen Termin und dieselbe Zeitleiste zu erhalten.",
    ivfHelper: "Die Transferart beeinflusst nur den Erklärungstext, nicht die Berechnung.",
    ivfDateLabel: "Datum des Embryotransfers",
    ivfEmbryoLabel: "Embryoalter",
    ivfEmbryoD3: "Tag 3 (D3)",
    ivfEmbryoD5: "Tag 5 (D5)",
    ivfTransferLabel: "Transferart",
    ivfTransferFresh: "Frisch",
    ivfTransferFrozen: "Gefroren",
    submitIvf: "Berechnen anhand IVF-Transfer",
    closeLabel: "Schließen",
    ivfTransferNoteLabel: "Transferart (nur Kontext)"
  },
  "zh-CN": {
    siteName: "孕期时间轴工具",
    languageLabel: "语言",
    heroTitle: "孕期预产期计算器",
    heroSubtitle: "通过末次月经或受孕日计算预产期，查看清晰时间轴，并导出隐私安全的摘要。",
    tabLmp: "末次月经",
    tabConception: "受孕日",
    lmpLabel: "末次月经日期",
    lmpHelper: "请输入末次月经的第一天。",
    dateFormatHelper: "格式：YYYY-MM-DD",
    cycleLengthLabel: "周期长度（天）",
    cycleLengthHelper: "默认 28 天，范围 22–45 天。",
    conceptionLabel: "受孕日期（排卵日）",
    conceptionHelper: "受孕通常按排卵日处理。",
    submitLmp: "按末次月经计算",
    submitConception: "按受孕日计算",
    calculating: "计算中…",
    resultsTitle: "结果摘要",
    eddLabel: "预产期",
    gestationalAgeLabel: "孕周",
    daysRemainingLabel: "剩余天数",
    daysElapsedLabel: "已过天数",
    equivalentLmpLabel: "等效末次月经",
    conceptionNote: "受孕日期通常按排卵日用于孕周计算。",
    resetLabel: "重置并重新计算",
    timelineTitle: "孕期时间轴",
    timelineEmpty: "请输入日期以生成个性化时间轴。",
    timelineOpenInfo: "了解说明",
    timelineCheckLabel: "检查项",
    weekLabel: "第",
    weeksLabel: "周",
    startsInLabel: "距离开始",
    endsInLabel: "距离结束",
    endedLabel: "已结束",
    daysLabel: "天",
    statusPast: "已过",
    statusCurrent: "当前",
    statusFuture: "未到",
    exportTitle: "导出时间轴",
    exportButton: "导出时间轴",
    exportInProgress: "正在生成导出…",
    privacyModeLabel: "隐私模式",
    privacyModeHelper: "开启后隐藏输入日期，仅保留预产期与进度。",
    exportError: "导出失败，请重试。",
    exportImageTitle: "孕期时间轴",
    exportImageTimelineTitle: "时间轴节点",
    exportImageDueDateLabel: "预产期",
    exportImageGestationalAgeLabel: "孕周",
    exportImageDaysRemainingLabel: "剩余天数",
    exportImageGeneratedOnLabel: "生成日期",
    exportImageStatusLabel: "状态",
    exportImageCheckItemsLabel: "检查项",
    footerDisclaimer: "本工具仅提供一般性信息，不构成医疗建议，请咨询专业人士。",
    requiredDateError: "请选择有效日期。",
    cycleRangeError: "周期长度必须在 22 到 45 天之间。",
    ivfHeroTitle: "IVF 预产期计算器",
    ivfHeroSubtitle: "输入胚胎移植信息，计算预产期并查看同样的时间轴。",
    ivfHelper: "移植类型仅用于文案说明，不影响计算。",
    ivfDateLabel: "胚胎移植日期",
    ivfEmbryoLabel: "胚胎天数",
    ivfEmbryoD3: "第 3 天（D3）",
    ivfEmbryoD5: "第 5 天（D5）",
    ivfTransferLabel: "移植类型",
    ivfTransferFresh: "鲜胚",
    ivfTransferFrozen: "冻胚",
    submitIvf: "按 IVF 移植计算",
    closeLabel: "关闭",
    ivfTransferNoteLabel: "移植类型（仅用于说明）"
  },
  "ja": {
    siteName: "妊娠タイムラインツール",
    languageLabel: "言語",
    heroTitle: "出産予定日計算ツール",
    heroSubtitle:
      "最終月経日または受胎日から予定日を計算し、わかりやすいタイムラインを表示してプライバシーに配慮した概要を出力します。",
    tabLmp: "最終月経日",
    tabConception: "受胎日",
    lmpLabel: "最終月経日の初日",
    lmpHelper: "最終月経が始まった日を入力してください。",
    dateFormatHelper: "形式：YYYY-MM-DD",
    cycleLengthLabel: "周期（日）",
    cycleLengthHelper: "既定は 28 日。範囲は 22–45 日。",
    conceptionLabel: "受胎日（排卵日）",
    conceptionHelper: "受胎日は排卵日として扱われることが一般的です。",
    submitLmp: "最終月経日から計算",
    submitConception: "受胎日から計算",
    calculating: "計算中...",
    resultsTitle: "結果の概要",
    eddLabel: "出産予定日",
    gestationalAgeLabel: "妊娠週数",
    daysRemainingLabel: "残り日数",
    daysElapsedLabel: "経過日数",
    equivalentLmpLabel: "換算 LMP",
    conceptionNote: "受胎日は妊娠週数計算では排卵日として扱われるのが一般的です。",
    resetLabel: "リセットして再計算",
    timelineTitle: "妊娠タイムライン",
    timelineEmpty: "日付を入力するとタイムラインが生成されます。",
    timelineOpenInfo: "説明を見る",
    timelineCheckLabel: "確認ポイント",
    weekLabel: "週",
    weeksLabel: "週",
    startsInLabel: "開始まで",
    endsInLabel: "終了まで",
    endedLabel: "終了",
    daysLabel: "日",
    statusPast: "過去",
    statusCurrent: "現在",
    statusFuture: "予定",
    exportTitle: "タイムラインを出力",
    exportButton: "タイムラインを出力",
    exportInProgress: "出力を準備中...",
    privacyModeLabel: "プライバシーモード",
    privacyModeHelper:
      "有効にすると入力日付は非表示になり、予定日と進捗のみが含まれます。",
    exportError: "出力に失敗しました。もう一度お試しください。",
    exportImageTitle: "妊娠タイムライン",
    exportImageTimelineTitle: "タイムラインの節目",
    exportImageDueDateLabel: "出産予定日",
    exportImageGestationalAgeLabel: "妊娠週数",
    exportImageDaysRemainingLabel: "残り日数",
    exportImageGeneratedOnLabel: "生成日",
    exportImageStatusLabel: "ステータス",
    exportImageCheckItemsLabel: "確認項目",
    footerDisclaimer:
      "このツールは一般的な情報を提供するもので、医療的助言ではありません。必ず専門家に相談してください。",
    requiredDateError: "有効な日付を選択してください。",
    cycleRangeError: "周期は 22〜45 日の間で入力してください。",
    ivfHeroTitle: "IVF 出産予定日計算ツール",
    ivfHeroSubtitle:
      "胚移植の情報を入力し、予定日と同じ形式のタイムラインを確認できます。",
    ivfHelper: "移植タイプは説明文のみに使われ、計算には影響しません。",
    ivfDateLabel: "胚移植日",
    ivfEmbryoLabel: "胚の日数",
    ivfEmbryoD3: "3日目（D3）",
    ivfEmbryoD5: "5日目（D5）",
    ivfTransferLabel: "移植タイプ",
    ivfTransferFresh: "新鮮胚",
    ivfTransferFrozen: "凍結胚",
    submitIvf: "IVF で計算",
    closeLabel: "閉じる",
    ivfTransferNoteLabel: "移植タイプ（文脈のみ）"
  },
  "es": {
    siteName: "Herramienta de cronograma del embarazo",
    languageLabel: "Idioma",
    heroTitle: "Calculadora de fecha de parto",
    heroSubtitle:
      "Calcula la fecha estimada con FUM o fecha de concepción, visualiza una cronología clara y exporta un resumen respetuoso con la privacidad.",
    tabLmp: "FUM",
    tabConception: "Concepción",
    lmpLabel: "Fecha de última menstruación (FUM)",
    lmpHelper: "Ingresa el primer día de tu última menstruación.",
    dateFormatHelper: "Formato: AAAA-MM-DD",
    cycleLengthLabel: "Duración del ciclo (días)",
    cycleLengthHelper: "Por defecto 28 días. Rango 22–45 días.",
    conceptionLabel: "Fecha de concepción (ovulación)",
    conceptionHelper: "La concepción suele tratarse como la fecha de ovulación.",
    submitLmp: "Calcular desde FUM",
    submitConception: "Calcular desde concepción",
    calculating: "Calculando...",
    resultsTitle: "Resumen de resultados",
    eddLabel: "Fecha estimada de parto",
    gestationalAgeLabel: "Edad gestacional",
    daysRemainingLabel: "Días restantes",
    daysElapsedLabel: "Días transcurridos",
    equivalentLmpLabel: "FUM equivalente",
    conceptionNote:
      "Las fechas de concepción se consideran normalmente como fechas de ovulación para cálculos gestacionales.",
    resetLabel: "Restablecer y recalcular",
    timelineTitle: "Cronología del embarazo",
    timelineEmpty: "Ingresa una fecha para generar tu cronología personalizada.",
    timelineOpenInfo: "¿Qué significa esto?",
    timelineCheckLabel: "Punto a revisar",
    weekLabel: "Semana",
    weeksLabel: "Semanas",
    startsInLabel: "Empieza en",
    endsInLabel: "Termina en",
    endedLabel: "Finalizó",
    daysLabel: "días",
    statusPast: "Pasado",
    statusCurrent: "Actual",
    statusFuture: "Futuro",
    exportTitle: "Exportar cronología",
    exportButton: "Exportar cronología",
    exportInProgress: "Preparando la exportación...",
    privacyModeLabel: "Modo privacidad",
    privacyModeHelper:
      "Al activarlo, se ocultan las fechas de entrada. Solo se incluyen la fecha estimada y el progreso.",
    exportError: "Falló la exportación. Inténtalo de nuevo.",
    exportImageTitle: "Cronología del embarazo",
    exportImageTimelineTitle: "Hitos de la cronología",
    exportImageDueDateLabel: "Fecha estimada",
    exportImageGestationalAgeLabel: "Edad gestacional",
    exportImageDaysRemainingLabel: "Días restantes",
    exportImageGeneratedOnLabel: "Generado el",
    exportImageStatusLabel: "Estado",
    exportImageCheckItemsLabel: "Revisiones",
    footerDisclaimer:
      "Esta herramienta ofrece información general y no es consejo médico. Consulta siempre a un profesional de salud.",
    requiredDateError: "Por favor selecciona una fecha válida.",
    cycleRangeError: "La duración del ciclo debe estar entre 22 y 45 días.",
    ivfHeroTitle: "Calculadora de fecha de parto IVF",
    ivfHeroSubtitle:
      "Ingresa los datos de transferencia embrionaria para calcular la fecha estimada y ver la misma cronología.",
    ivfHelper: "El tipo de transferencia solo afecta el texto, no el cálculo.",
    ivfDateLabel: "Fecha de transferencia embrionaria",
    ivfEmbryoLabel: "Edad del embrión",
    ivfEmbryoD3: "Día 3 (D3)",
    ivfEmbryoD5: "Día 5 (D5)",
    ivfTransferLabel: "Tipo de transferencia",
    ivfTransferFresh: "Fresco",
    ivfTransferFrozen: "Congelado",
    submitIvf: "Calcular desde transferencia IVF",
    closeLabel: "Cerrar",
    ivfTransferNoteLabel: "Tipo de transferencia (solo contexto)"
  }
};

export const languageNames: Record<LanguageCode, string> = {
  "en": "English",
  "fr": "Français",
  "de": "Deutsch",
  "zh-CN": "简体中文",
  "ja": "日本語",
  "es": "Español"
};
