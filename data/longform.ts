import { LanguageCode } from "../lib/types";

export interface LongformSection {
  title: string;
  paragraphs: string[];
}

export interface LongformContent {
  sections: LongformSection[];
}

export const longformContent: Record<LanguageCode, { home: LongformContent; ivf: LongformContent }> = {
  "en": {
    home: {
      sections: [
        {
          title: "Due date calculator overview",
          paragraphs: [
            "A due date calculator estimates the expected delivery date using the first day of the last menstrual period (LMP) or an equivalent conception date. This tool converts your input into a gestational timeline so you can see the pregnancy week, approximate milestones, and overall progress at a glance. It is intended to support planning and general understanding rather than replace clinical care.",
            "Because pregnancy dating is typically described in gestational weeks, most calculators follow a standard 280‑day model. That model provides a consistent starting point for comparing timelines, even though individual pregnancies can vary. The output here is a general estimate and should always be discussed with your clinician if you need medical guidance.",
            "Use the estimate as a reference when organizing personal plans, tracking general milestones, and preparing questions for appointments. If you are ever uncertain about dates or expectations, a qualified health professional should be your primary source of guidance."
          ]
        },
        {
          title: "Why LMP and conception dates are used",
          paragraphs: [
            "Pregnancy dating commonly starts from the first day of the last menstrual period, even though conception typically occurs about two weeks later. Using LMP gives a standardized reference point for estimating gestational age, scheduling routine visits, and communicating timeline expectations across providers.",
            "If you only know the conception or ovulation date, the calculator converts it into an equivalent LMP by subtracting 14 days. This aligns your timeline with the same gestational framework used for LMP‑based dating. While individual physiology varies, this approach is widely used for general estimation.",
            "Some people receive clinical dating based on ultrasound. If that happens, consider the ultrasound date as your authoritative timeline and use this calculator as a helpful comparison rather than a final answer."
          ]
        },
        {
          title: "Cycle length adjustments",
          paragraphs: [
            "Not everyone has a 28‑day cycle. If your cycle is longer or shorter, the estimated due date shifts by the difference from the 28‑day baseline. For example, a 30‑day cycle moves the estimated due date about two days later, while a 26‑day cycle moves it about two days earlier.",
            "This adjustment helps align the estimated timeline with your own cycle length while preserving the 280‑day gestational model. It does not replace ultrasound dating or clinical judgment, but it can improve the accuracy of a general estimate for personal planning.",
            "If your cycles are irregular, or you are unsure about your typical length, you can still use the calculator with the default value and discuss any uncertainty with your clinician."
          ]
        },
        {
          title: "Gestational age and week counting",
          paragraphs: [
            "Gestational age is presented as weeks and days. A reading of 12w 3d means twelve full weeks have elapsed and three additional days have passed. This is calculated from the reference LMP date and updated based on your local date.",
            "Clinicians may adjust gestational age based on ultrasound measurements or medical history. If your provider has given you a specific due date, use that as the authoritative timeline. This calculator is a consistent reference tool rather than a substitute for medical evaluation.",
            "When sharing information with others, it can be helpful to mention both your due date and your gestational week, since these are common ways of describing pregnancy progress."
          ]
        },
        {
          title: "Understanding the pregnancy timeline",
          paragraphs: [
            "The timeline presents common prenatal milestones in week ranges. Each node shows a week range, an estimated date range, and a status (past, current, or future). These milestones are based on a general U.S. schedule and are not individualized to your care plan.",
            "After 36 weeks, the timeline focuses on broader stage prompts because visit frequency and monitoring often change in late pregnancy. Use the timeline as a guide for planning and conversation, not as a definitive schedule.",
            "If your clinic provides a different visit schedule or milestone timing, follow their guidance. The timeline is meant to be informational and adaptable."
          ]
        },
        {
          title: "Days remaining and days elapsed",
          paragraphs: [
            "Days remaining reflects the number of days between today and the estimated due date. Days elapsed counts the number of days since the reference LMP date. These metrics help you track progress through the 280‑day framework.",
            "If you receive updated clinical dating, the day counts here may differ. In that case, treat this tool as a general reference and follow the guidance provided by your clinician.",
            "Because the calculation uses your local date, the counts update daily. This makes the timeline useful for regular check‑ins without requiring manual recalculation."
          ]
        },
        {
          title: "Privacy‑focused export",
          paragraphs: [
            "The export feature produces a 9:16 PNG that is easy to share or print. Privacy mode is on by default. When enabled, the export hides your input dates and only includes the estimated due date and gestational progress.",
            "This makes it possible to share a timeline without revealing sensitive dates. You can turn privacy mode off if you want the full date ranges included in the image.",
            "Use the exported image for personal reminders, sharing with family, or keeping a non‑medical summary. It is not intended for clinical documentation."
          ]
        },
        {
          title: "How to use this tool with clinical care",
          paragraphs: [
            "This calculator is designed for planning, education, and communication. It helps you visualize the overall pregnancy timeline and prepare for typical milestones. It does not provide diagnosis, treatment recommendations, or individualized medical advice.",
            "If you have questions about your dates, symptoms, or schedule, consult a qualified health professional. Your clinician’s guidance should always take priority over general calculators.",
            "Bring the timeline to appointments if it helps you ask questions or organize information, but rely on your care team for decisions about tests and timing."
          ]
        },
        {
          title: "Limitations and reminders",
          paragraphs: [
            "Every pregnancy is unique. Variations in cycle length, ovulation timing, and clinical findings can change estimated dates. This tool provides a standardized estimate for general use.",
            "Use the results as a reference point, and rely on medical professionals for decisions about care.",
            "If you are concerned about symptoms or milestones, do not wait for an app or calculator—seek clinical guidance."
          ]
        }
      ]
    },
    ivf: {
      sections: [
        {
          title: "IVF due date calculator overview",
          paragraphs: [
            "An IVF due date calculator estimates the expected delivery date by converting embryo transfer details into an equivalent gestational timeline. Unlike standard LMP dating, IVF dating starts from a known transfer date and embryo age, then maps that to the same 280‑day gestational framework.",
            "The result is a general estimate intended for planning and reference. It does not replace clinical advice or individualized IVF protocols.",
            "Use the estimate to support planning, but follow your fertility clinic’s specific guidance for medical decisions."
          ]
        },
        {
          title: "How embryo age changes the timeline",
          paragraphs: [
            "Embryo age determines how many days are subtracted from the transfer date to calculate the equivalent LMP. A Day 3 transfer assumes the embryo is three days post‑fertilization, while a Day 5 transfer assumes five days.",
            "This shifts the equivalent LMP and therefore the estimated due date. After the equivalent LMP is determined, the 280‑day model is applied consistently.",
            "If your clinic uses a different convention, treat their dating as authoritative."
          ]
        },
        {
          title: "Why IVF uses an equivalent LMP",
          paragraphs: [
            "Clinical pregnancy dating is usually expressed in gestational weeks based on LMP. IVF cycles provide known dates, but gestational language still anchors to LMP‑style timelines for consistency across prenatal care.",
            "Using an equivalent LMP helps align IVF dating with standard prenatal milestones and scheduling practices. This supports clearer communication across care teams.",
            "It also allows IVF pregnancies to be described in the same format as non‑IVF pregnancies, which simplifies planning."
          ]
        },
        {
          title: "Fresh vs frozen transfer",
          paragraphs: [
            "Transfer type—fresh or frozen—does not change the gestational calculation. It only affects descriptive context. The calculation is based solely on transfer date and embryo age.",
            "If your clinic follows a specific dating protocol, you should follow their guidance.",
            "This tool is meant to mirror standard practice, not override clinical instructions."
          ]
        },
        {
          title: "Gestational age and progress tracking",
          paragraphs: [
            "The results summary includes gestational age expressed in weeks and days, along with days remaining until the estimated due date. These values update based on your local date.",
            "If your provider gives an ultrasound‑based adjustment, that date should take precedence. This tool is meant for general planning rather than clinical decision‑making.",
            "Use the summary as a simple snapshot of progress rather than a diagnostic statement."
          ]
        },
        {
          title: "Timeline milestones after IVF",
          paragraphs: [
            "The timeline mirrors common U.S. prenatal milestones. Each node shows a week range, estimated dates, and a status (past, current, or future). It is informational and may not match your clinic’s schedule exactly.",
            "After 36 weeks, the timeline emphasizes late‑pregnancy stage prompts because visit frequency often increases.",
            "If your clinic provides a detailed monitoring plan, use that plan for appointment scheduling."
          ]
        },
        {
          title: "Privacy and export",
          paragraphs: [
            "The export feature creates a 9:16 PNG suitable for printing or sharing. Privacy mode is enabled by default and hides IVF input dates. Only the estimated due date and progress are included in the privacy‑safe export.",
            "You can turn privacy mode off to include full date ranges in the image if you prefer.",
            "The export is intended for personal use and sharing, not for formal medical records."
          ]
        },
        {
          title: "Using this tool with your care team",
          paragraphs: [
            "IVF patients often have detailed clinical schedules. This calculator provides a standardized gestational timeline for general reference and communication. It should not replace your clinic’s individualized plan.",
            "Bring timeline questions to your fertility specialist or obstetric provider, and rely on their guidance for clinical decisions.",
            "The most accurate timeline for your care is the one given by your clinical team."
          ]
        },
        {
          title: "Limitations and reminders",
          paragraphs: [
            "This tool provides general information only. Ultrasound findings, clinical history, and provider judgment can change dating. Use this timeline as a planning reference rather than a medical directive.",
            "Always follow the advice of qualified health professionals for personalized care.",
            "If you notice discrepancies, discuss them with your clinic rather than relying on automated calculations."
          ]
        }
      ]
    }
  },
  "fr": {
    home: {
      sections: [
        {
          title: "Aperçu du calculateur de date d’accouchement",
          paragraphs: [
            "Un calculateur de date d’accouchement estime la date prévue à partir du premier jour des dernières règles (DDM) ou d’une date de conception équivalente. Cet outil transforme l’entrée en chronologie gestationnelle afin de visualiser les semaines de grossesse et les étapes clés. Il s’agit d’un repère de planification, non d’un substitut aux soins médicaux.",
            "La datation s’appuie généralement sur un modèle de 280 jours. Ce cadre fournit un point de référence cohérent, même si chaque grossesse est unique. Le résultat reste une estimation générale.",
            "Utilisez l’estimation pour organiser vos projets personnels et préparer des questions pour vos rendez‑vous, tout en privilégiant l’avis de votre équipe médicale."
          ]
        },
        {
          title: "Pourquoi la DDM et la conception sont utilisées",
          paragraphs: [
            "La grossesse est habituellement datée à partir du premier jour des dernières règles, même si la conception survient plus tard. Cette méthode facilite la communication entre professionnels et l’organisation des suivis.",
            "Si seule la date de conception est connue, elle est convertie en DDM équivalente en retirant 14 jours. Cela aligne la chronologie sur le même référentiel gestationnel.",
            "En cas de datation échographique, considérez la date clinique comme référence principale."
          ]
        },
        {
          title: "Ajustements selon la durée du cycle",
          paragraphs: [
            "Les cycles ne font pas tous 28 jours. Si votre cycle est plus long ou plus court, la date prévue se décale du même nombre de jours. Un cycle de 30 jours décale la date de deux jours, un cycle de 26 jours l’avance de deux jours.",
            "Cet ajustement améliore l’estimation générale mais ne remplace pas la datation clinique.",
            "Si vos cycles sont irréguliers, utilisez une valeur moyenne et discutez‑en avec votre clinicien."
          ]
        },
        {
          title: "Âge gestationnel et comptage des semaines",
          paragraphs: [
            "L’âge gestationnel est affiché en semaines et jours. 12s 3j signifie douze semaines complètes et trois jours supplémentaires. Le calcul est basé sur la date de référence et la date locale.",
            "Votre clinicien peut ajuster la datation selon l’échographie ou l’historique médical.",
            "Pour la communication, mentionner l’âge gestationnel et la date prévue peut aider à clarifier votre progression."
          ]
        },
        {
          title: "Comprendre la chronologie",
          paragraphs: [
            "La chronologie présente des étapes courantes par plages de semaines. Chaque nœud affiche une plage de dates estimées et un statut (passé, en cours, à venir). C’est un modèle général pour les États‑Unis, non personnalisé.",
            "Après 36 semaines, la chronologie se concentre sur des repères de fin de grossesse.",
            "Si votre suivi clinique diffère, suivez la planification proposée par votre équipe médicale."
          ]
        },
        {
          title: "Jours restants et jours écoulés",
          paragraphs: [
            "Les jours restants indiquent l’écart entre aujourd’hui et la date prévue. Les jours écoulés comptent depuis la DDM de référence. Cela permet de suivre la progression globale.",
            "Si votre suivi clinique modifie la date prévue, privilégiez la datation médicale.",
            "Ces indicateurs se mettent à jour quotidiennement selon la date locale."
          ]
        },
        {
          title: "Export et confidentialité",
          paragraphs: [
            "L’export génère une image PNG 9:16. Le mode confidentialité est activé par défaut : il masque les dates saisies et ne conserve que la date prévue et la progression.",
            "Vous pouvez désactiver ce mode pour inclure toutes les dates dans l’image.",
            "L’image exportée est conçue pour un usage personnel et ne remplace pas un document médical."
          ]
        },
        {
          title: "Utiliser l’outil avec les soins médicaux",
          paragraphs: [
            "Cet outil sert à planifier et à comprendre le calendrier général de grossesse. Il ne fournit ni diagnostic ni recommandation médicale.",
            "Pour toute question, consultez un professionnel de santé qualifié.",
            "Apportez la chronologie en consultation si cela vous aide à structurer vos échanges."
          ]
        },
        {
          title: "Limites et rappels",
          paragraphs: [
            "Chaque grossesse est différente et la datation peut changer selon les résultats cliniques. Les résultats restent des estimations générales.",
            "Utilisez cette chronologie comme repère et suivez les recommandations de votre équipe médicale.",
            "En cas d’inquiétude, demandez rapidement un avis médical."
          ]
        }
      ]
    },
    ivf: {
      sections: [
        {
          title: "Aperçu du calculateur FIV",
          paragraphs: [
            "Un calculateur FIV estime la date prévue à partir de la date de transfert et de l’âge embryonnaire, puis convertit ces données en DDM équivalente. Le modèle gestationnel de 280 jours est ensuite appliqué.",
            "Le résultat est une estimation générale destinée à la planification.",
            "Il ne remplace pas les recommandations spécifiques de votre clinique."
          ]
        },
        {
          title: "Impact de l’âge embryonnaire",
          paragraphs: [
            "Un transfert J3 signifie un embryon de trois jours, un transfert J5 signifie cinq jours. Cette différence modifie la DDM équivalente et donc la date prévue.",
            "Une fois la DDM équivalente établie, le calcul suit la même logique gestationnelle.",
            "Si votre clinique utilise une autre convention, fiez‑vous à celle‑ci."
          ]
        },
        {
          title: "Pourquoi utiliser une DDM équivalente",
          paragraphs: [
            "La grossesse est exprimée en semaines de gestation basées sur la DDM. En FIV, la DDM équivalente permet d’aligner la datation avec les repères prénataux standard.",
            "Cela facilite la communication entre les équipes de soins.",
            "Elle permet aussi de comparer plus facilement les étapes avec les calendriers prénataux habituels."
          ]
        },
        {
          title: "Transfert frais ou congelé",
          paragraphs: [
            "Le type de transfert n’affecte pas le calcul. Il sert uniquement de contexte dans le texte explicatif. La date de transfert et l’âge embryonnaire restent les variables clés.",
            "Suivez toujours le protocole de votre clinique.",
            "Ce calculateur fournit un repère général, pas une règle clinique."
          ]
        },
        {
          title: "Âge gestationnel et progression",
          paragraphs: [
            "Les résultats indiquent l’âge gestationnel (semaines et jours) et les jours restants. Ces valeurs se mettent à jour selon la date locale.",
            "En cas de datation clinique ajustée, utilisez la date fournie par votre équipe médicale.",
            "La synthèse est utile pour suivre le progrès global, pas pour prendre des décisions médicales."
          ]
        },
        {
          title: "Chronologie après FIV",
          paragraphs: [
            "La chronologie reprend des repères prénataux courants. Chaque nœud affiche une plage de semaines et un statut. C’est informatif et peut différer du suivi réel.",
            "Après 36 semaines, les repères reflètent une phase de suivi plus rapproché.",
            "Si votre clinique fournit un calendrier détaillé, utilisez‑le en priorité."
          ]
        },
        {
          title: "Confidentialité et export",
          paragraphs: [
            "L’export crée une image PNG 9:16. Le mode confidentialité masque les dates d’entrée, ne conservant que la date prévue et la progression.",
            "Vous pouvez désactiver ce mode si vous souhaitez inclure l’ensemble des dates.",
            "L’image exportée est destinée à un usage personnel."
          ]
        },
        {
          title: "Utiliser l’outil avec votre équipe",
          paragraphs: [
            "Les parcours FIV incluent souvent un calendrier clinique détaillé. Ce calculateur fournit un repère standard mais ne remplace pas les recommandations de votre clinique.",
            "Pour toute décision, suivez l’avis de votre spécialiste.",
            "N’hésitez pas à discuter des écarts entre cette estimation et le calendrier clinique."
          ]
        },
        {
          title: "Limites et rappels",
          paragraphs: [
            "Cet outil fournit une information générale. Les mesures cliniques peuvent ajuster la datation.",
            "Utilisez la chronologie comme repère et consultez des professionnels pour une prise en charge personnalisée.",
            "Si vous avez des doutes, privilégiez toujours l’avis médical."
          ]
        }
      ]
    }
  },
  "de": {
    home: {
      sections: [
        {
          title: "Überblick zum Geburtsterminrechner",
          paragraphs: [
            "Ein Geburtsterminrechner schätzt den voraussichtlichen Entbindungstermin anhand des ersten Tages der letzten Periode (LMP) oder eines äquivalenten Empfängnisdatums. Das Tool erstellt daraus eine gestationelle Zeitleiste, um Schwangerschaftswochen und Meilensteine zu visualisieren. Es dient der Orientierung und ersetzt keine medizinische Beratung.",
            "Das Modell basiert üblicherweise auf 280 Tagen. Diese Standardisierung erleichtert den Vergleich von Zeitplänen, obwohl individuelle Verläufe variieren.",
            "Nutzen Sie die Schätzung für Planung und Vorbereitung, nicht als Ersatz für ärztliche Entscheidungen."
          ]
        },
        {
          title: "Warum LMP und Empfängnis genutzt werden",
          paragraphs: [
            "Die Datierung beginnt meist mit dem ersten Tag der letzten Periode, auch wenn die Empfängnis später stattfindet. Diese Methode schafft einen konsistenten Referenzpunkt für die Kommunikation im medizinischen Umfeld.",
            "Ist nur das Empfängnisdatum bekannt, wird es durch Abzug von 14 Tagen in eine äquivalente LMP umgerechnet.",
            "Bei Ultraschall‑Datierung hat die klinische Angabe Vorrang."
          ]
        },
        {
          title: "Anpassung an die Zykluslänge",
          paragraphs: [
            "Zykluslängen unterscheiden sich. Ein längerer oder kürzerer Zyklus verschiebt den Termin entsprechend. Ein 30‑Tage‑Zyklus verschiebt den Termin um zwei Tage nach hinten, ein 26‑Tage‑Zyklus um zwei Tage nach vorn.",
            "Diese Anpassung verbessert die allgemeine Schätzung, ersetzt aber keine klinische Datierung.",
            "Bei unregelmäßigen Zyklen ist eine ärztliche Einschätzung besonders hilfreich."
          ]
        },
        {
          title: "Schwangerschaftsalter und Wochenzählung",
          paragraphs: [
            "Das Schwangerschaftsalter wird in Wochen und Tagen angezeigt. 12w 3d bedeutet zwölf volle Wochen plus drei Tage. Die Berechnung nutzt die Referenz‑LMP und das lokale Datum.",
            "Ärztliche Anpassungen durch Ultraschall können die Datierung verändern.",
            "Für Gespräche ist es hilfreich, sowohl Termin als auch Schwangerschaftswoche anzugeben."
          ]
        },
        {
          title: "Die Zeitleiste verstehen",
          paragraphs: [
            "Die Zeitleiste zeigt gängige Meilensteine in Wochenbereichen. Jeder Knoten enthält einen Datumsbereich und einen Status. Es handelt sich um ein allgemeines U.S.-Muster, nicht um einen individuellen Plan.",
            "Nach 36 Wochen verschiebt sich der Fokus auf die spätere Schwangerschaftsphase.",
            "Wenn Ihr Betreuungsteam andere Termine vorgibt, orientieren Sie sich daran."
          ]
        },
        {
          title: "Verbleibende und vergangene Tage",
          paragraphs: [
            "Verbleibende Tage zeigen den Abstand bis zum Termin, vergangene Tage den Zeitraum seit der Referenz‑LMP. So lässt sich der Fortschritt grob nachvollziehen.",
            "Bei klinisch angepassten Terminen gilt der ärztliche Zeitplan.",
            "Die Zählung aktualisiert sich täglich basierend auf dem lokalen Datum."
          ]
        },
        {
          title: "Datenschutz‑Export",
          paragraphs: [
            "Der Export erzeugt eine 9:16‑PNG. Im Datenschutzmodus werden Eingabedaten verborgen und nur Termin und Fortschritt angezeigt.",
            "Der Modus kann deaktiviert werden, um vollständige Datumsbereiche anzuzeigen.",
            "Das Bild ist für persönliche Nutzung gedacht, nicht als medizinisches Dokument."
          ]
        },
        {
          title: "Nutzung mit klinischer Betreuung",
          paragraphs: [
            "Dieses Tool ist für Planung und Verständnis gedacht und ersetzt keine medizinische Beratung.",
            "Bei Fragen wenden Sie sich an medizinisches Fachpersonal.",
            "Die Zeitleiste kann helfen, Gespräche zu strukturieren, ersetzt aber keine ärztliche Entscheidung."
          ]
        },
        {
          title: "Grenzen und Hinweise",
          paragraphs: [
            "Jede Schwangerschaft ist individuell. Klinische Befunde können die Datierung verändern.",
            "Nutzen Sie die Zeitleiste als Orientierung und folgen Sie professionellen Empfehlungen.",
            "Bei Unsicherheiten ist eine medizinische Rücksprache wichtig."
          ]
        }
      ]
    },
    ivf: {
      sections: [
        {
          title: "Überblick zum IVF‑Rechner",
          paragraphs: [
            "Der IVF‑Rechner nutzt Transferdatum und Embryoalter, um eine äquivalente LMP zu bestimmen. Danach wird das 280‑Tage‑Modell angewendet.",
            "Das Ergebnis ist eine allgemeine Schätzung und ersetzt keine klinischen Vorgaben.",
            "Die Schätzung dient der Orientierung und Planung."
          ]
        },
        {
          title: "Einfluss des Embryoalters",
          paragraphs: [
            "Tag‑3‑ und Tag‑5‑Transfers unterscheiden sich um zwei Tage. Diese Differenz verändert die äquivalente LMP und damit den Termin.",
            "Die anschließende Berechnung folgt dem gleichen gestationellen Standard.",
            "Wenn Ihre Klinik andere Regeln nutzt, hat deren Datierung Vorrang."
          ]
        },
        {
          title: "Warum eine äquivalente LMP",
          paragraphs: [
            "Gestationswochen werden klinisch an der LMP‑Logik ausgerichtet. Eine äquivalente LMP macht IVF‑Datierung kompatibel mit Standard‑Meilensteinen.",
            "So lassen sich Zeitpläne zwischen Teams leichter abstimmen.",
            "Die Kommunikation mit Betreuungspersonen wird dadurch einfacher."
          ]
        },
        {
          title: "Frisch‑ vs. Gefroren‑Transfer",
          paragraphs: [
            "Der Transfer‑Typ beeinflusst den Rechenweg nicht, sondern nur den erklärenden Text. Entscheidend sind Transferdatum und Embryoalter.",
            "Halten Sie sich an die klinischen Vorgaben Ihrer Einrichtung.",
            "Dieser Rechner ist eine allgemeine Orientierungshilfe."
          ]
        },
        {
          title: "Schwangerschaftsalter und Fortschritt",
          paragraphs: [
            "Die Ergebnisse zeigen Schwangerschaftsalter sowie verbleibende Tage. Diese Werte aktualisieren sich mit dem lokalen Datum.",
            "Wenn Ihre Klinik eine Anpassung vorgibt, gilt deren Datum.",
            "Verwenden Sie die Angaben als Überblick, nicht als Diagnose."
          ]
        },
        {
          title: "Meilensteine nach IVF",
          paragraphs: [
            "Die Zeitleiste orientiert sich an gängigen pränatalen Meilensteinen. Sie ist informativ und kann vom individuellen Plan abweichen.",
            "Nach 36 Wochen rücken häufig engere Kontrollen in den Fokus.",
            "Ihr klinischer Plan sollte immer Vorrang haben."
          ]
        },
        {
          title: "Datenschutz und Export",
          paragraphs: [
            "Der Export erzeugt eine 9:16‑PNG. Im Datenschutzmodus werden Eingabedaten ausgeblendet, nur Termin und Fortschritt bleiben sichtbar.",
            "Der Modus kann deaktiviert werden, wenn vollständige Datumsbereiche gewünscht sind.",
            "Das Bild dient vor allem der persönlichen Nutzung."
          ]
        },
        {
          title: "Nutzung mit Ihrem Behandlungsteam",
          paragraphs: [
            "IVF‑Zyklen folgen oft detaillierten klinischen Plänen. Dieses Tool ist ein allgemeiner Referenzrahmen.",
            "Für Entscheidungen sollten Sie die Empfehlungen Ihres Behandlungsteams priorisieren.",
            "Sprechen Sie Unklarheiten mit Ihrem Team ab."
          ]
        },
        {
          title: "Grenzen und Hinweise",
          paragraphs: [
            "Klinische Befunde können die Datierung ändern. Nutzen Sie dieses Tool als Orientierung, nicht als Diagnose.",
            "Bei Fragen wenden Sie sich an qualifizierte Fachkräfte.",
            "Vertrauen Sie auf die individuellen Empfehlungen Ihrer Klinik."
          ]
        }
      ]
    }
  },
  "zh-CN": {
    home: {
      sections: [
        {
          title: "预产期计算器概览",
          paragraphs: [
            "预产期计算器通常以末次月经第一天（LMP）或等效受孕日为起点，估算预产期。它会将输入转换为孕周时间轴，帮助你了解当前孕周、关键阶段与整体进度。此工具用于规划与理解，并不替代医疗建议。",
            "大多数计算使用 280 天的孕期模型，以提供统一的时间参考。每位孕妇情况不同，结果仅为一般性估算。",
            "你可以把它当作日常规划工具，例如准备工作安排、家庭计划或沟通问题清单，但重要结论仍以医生意见为准。"
          ]
        },
        {
          title: "为什么使用末次月经与受孕日",
          paragraphs: [
            "临床沟通通常以末次月经作为孕周起算点，即使受孕发生在之后。这种方法有利于统一表达与随访安排。",
            "当仅知道受孕/排卵日时，通常通过减去 14 天换算为等效末次月经日期，从而进入同一孕周体系。",
            "若医生给出基于超声的时间，应以临床时间为主，并把本工具当作参考。"
          ]
        },
        {
          title: "周期长度调整",
          paragraphs: [
            "不同人群的月经周期长度不同。若周期长于或短于 28 天，预产期会相应前移或后移。比如 30 天周期通常让预产期延后约 2 天，26 天周期则提前约 2 天。",
            "该调整用于提高一般性估算的贴合度，但不能替代临床评估。",
            "如果周期不规律，可以先使用默认值，并与医生讨论更合适的起算方式。"
          ]
        },
        {
          title: "孕周与周内天数",
          paragraphs: [
            "孕周以“周+天”表示，例如 12w3d 表示已完成 12 周并进入第 13 周的第 3 天。该值基于参考 LMP 与当前日期计算。",
            "若医生根据超声或病史调整孕周，应以医生给出的时间为准。",
            "在沟通时同时说明预产期与孕周，通常更方便理解进度。"
          ]
        },
        {
          title: "如何理解时间轴",
          paragraphs: [
            "时间轴按孕周区间展示常见产检节点，每个节点包含日期范围与状态（已过/当前/未到）。它基于通用美国模板，并非个性化随访计划。",
            "36 周后，时间轴以阶段提示为主，因为末期随访可能更加频繁。",
            "如果你的机构安排不同，请以临床计划为准。"
          ]
        },
        {
          title: "剩余天数与已过天数",
          paragraphs: [
            "剩余天数表示从今天到预产期的天数，已过天数表示从参考 LMP 到今天的天数。这些指标帮助你把握总体进度。",
            "若临床调整预产期，应以临床时间为准。",
            "系统按本地日期每日更新，不需要手动刷新数据。"
          ]
        },
        {
          title: "隐私导出",
          paragraphs: [
            "导出功能生成 9:16 PNG 图片，适合分享或打印。隐私模式默认开启，可隐藏输入日期，仅显示预产期与孕周进度。",
            "如需完整日期，可关闭隐私模式。",
            "导出图片用于个人记录或家庭分享，不作为医疗文件。"
          ]
        },
        {
          title: "与临床随访配合使用",
          paragraphs: [
            "本工具用于规划与沟通，不提供诊断或治疗建议。可用于了解整体进度与常见节点。",
            "如需个性化指导，请咨询专业医生。",
            "你也可以把时间轴作为问题清单的整理工具，帮助与医生沟通。"
          ]
        },
        {
          title: "限制与提醒",
          paragraphs: [
            "每次妊娠都不同，周期、排卵时间及临床发现可能改变估算日期。结果仅作参考。",
            "重要决策请以医疗专业建议为准。",
            "若出现不适或担忧，请及时咨询医疗机构。"
          ]
        }
      ]
    },
    ivf: {
      sections: [
        {
          title: "IVF 预产期计算概览",
          paragraphs: [
            "IVF 计算以移植日期和胚胎天数换算为等效末次月经日期，再采用 280 天模型估算预产期。该时间轴用于一般参考，不替代临床方案。",
            "结果适合用于计划安排与理解总体孕周进度。",
            "若医生给出专门的时间安排，应以临床计划为准。"
          ]
        },
        {
          title: "胚胎天数的影响",
          paragraphs: [
            "D3 与 D5 的胚胎天数不同，会影响等效 LMP 的换算，因此也会影响预产期。",
            "一旦等效 LMP 确定，后续算法与常规孕周模型一致。",
            "若机构采用不同的换算方法，请优先遵循机构标准。"
          ]
        },
        {
          title: "为何使用等效 LMP",
          paragraphs: [
            "临床常以 LMP 表达孕周。IVF 虽有明确日期，但使用等效 LMP 有助于与标准孕周表达一致，便于跨机构沟通。",
            "这使 IVF 计算结果能与常规产检节点对齐。",
            "在多学科团队协作时，统一表达方式也更高效。"
          ]
        },
        {
          title: "鲜胚与冻胚",
          paragraphs: [
            "移植类型不影响计算，仅用于文案说明。关键仍是移植日期与胚胎天数。",
            "如有特殊流程，应遵循医疗机构指导。",
            "该工具不会替代临床标准，只提供一般性参考。"
          ]
        },
        {
          title: "孕周与进度",
          paragraphs: [
            "结果包含孕周与剩余天数，随本地日期更新。",
            "若临床给出调整后的预产期，应以临床为准。",
            "请将此结果作为规划信息，而非诊断结论。"
          ]
        },
        {
          title: "IVF 的时间轴节点",
          paragraphs: [
            "时间轴使用通用节点模板，提供参考性的周区间与状态显示。实际随访可能因个人情况与机构而不同。",
            "36 周后以阶段提示为主，反映末期随访频率增加的常见情况。",
            "如果你的机构有具体日程，请以其安排为准。"
          ]
        },
        {
          title: "隐私与导出",
          paragraphs: [
            "导出为 9:16 图片，隐私模式默认开启，隐藏输入日期，仅显示预产期与孕周进度。",
            "如需完整日期范围，可关闭隐私模式。",
            "导出内容仅用于个人记录与沟通。"
          ]
        },
        {
          title: "与医疗团队协作",
          paragraphs: [
            "IVF 往往有详细的临床安排。本工具用于参考与沟通，不替代临床计划。",
            "请以生殖中心或产科医生的指导为准。",
            "如有差异，建议在随访中确认最新时间表。"
          ]
        },
        {
          title: "限制与提醒",
          paragraphs: [
            "临床检查可能改变预产期。此结果为一般性估算。",
            "重要决策请咨询专业医疗人员。",
            "如果出现异常状况，请及时就医。"
          ]
        }
      ]
    }
  },
  "ja": {
    home: {
      sections: [
        {
          title: "出産予定日計算ツールの概要",
          paragraphs: [
            "このツールは最終月経日（LMP）または受胎日の換算値を基準に出産予定日を推定し、妊娠のタイムラインを可視化します。計画や理解の補助を目的とし、医療的助言の代替ではありません。",
            "一般的な推定は 280 日モデルに基づきます。個々の妊娠は異なるため、結果は参考情報です。",
            "予定の整理や疑問点の準備に役立ちますが、最終判断は医療者の意見を優先してください。"
          ]
        },
        {
          title: "LMP と受胎日が使われる理由",
          paragraphs: [
            "臨床では妊娠週数を LMP 起点で表すことが多く、情報共有がしやすくなります。",
            "受胎日のみが分かる場合は 14 日を差し引いて等価 LMP に変換します。",
            "超音波などで修正がある場合は臨床の指示を優先してください。"
          ]
        },
        {
          title: "周期の長さによる調整",
          paragraphs: [
            "周期が 28 日より長い・短い場合、予定日は差分だけ後ろまたは前にずれます。",
            "この調整は一般的な精度向上のためであり、臨床評価を置き換えるものではありません。",
            "周期が不規則な場合は医療者に相談すると安心です。"
          ]
        },
        {
          title: "妊娠週数と日数",
          paragraphs: [
            "妊娠週数は「週＋日」で表示されます。12w3d は 12 週が経過し 3 日進んだ状態です。",
            "医療機関の超音波評価により調整される場合は、その日付を優先してください。",
            "予定日と週数の両方を把握すると進捗を伝えやすくなります。"
          ]
        },
        {
          title: "タイムラインの見方",
          paragraphs: [
            "タイムラインは一般的な検査時期を週区間で示します。各ノードには日付範囲と状態（過去・現在・未来）が表示されます。",
            "36 週以降は後期の段階的な目安を示します。",
            "個別のスケジュールがある場合はそちらを優先してください。"
          ]
        },
        {
          title: "残り日数と経過日数",
          paragraphs: [
            "残り日数は今日から予定日までの日数、経過日数は LMP 起点からの経過日数です。",
            "臨床で予定日が調整された場合はそちらを優先してください。",
            "日付はローカルの日にちで毎日更新されます。"
          ]
        },
        {
          title: "プライバシーと出力",
          paragraphs: [
            "9:16 の PNG 画像として出力できます。プライバシーモードでは入力日付を隠し、予定日と進捗のみを表示します。",
            "必要に応じてプライバシーモードを解除できます。",
            "出力画像は個人利用向けで、医療記録の代替ではありません。"
          ]
        },
        {
          title: "医療との併用",
          paragraphs: [
            "このツールは計画と理解のための参考情報です。診断や治療の判断には使用しないでください。",
            "疑問があれば専門家に相談してください。",
            "タイムラインは相談の準備に役立ててください。"
          ]
        },
        {
          title: "注意点",
          paragraphs: [
            "個々の妊娠は異なり、臨床所見で日付が変わることがあります。",
            "重要な判断は医療者の指示を優先してください。",
            "不安があれば早めに医療機関へ相談しましょう。"
          ]
        }
      ]
    },
    ivf: {
      sections: [
        {
          title: "IVF 予定日計算の概要",
          paragraphs: [
            "IVF の予定日は移植日と胚の日数から等価 LMP を算出し、280 日モデルで推定します。一般的な参考情報であり、臨床指示の代替ではありません。",
            "結果は計画やコミュニケーションの補助として利用してください。",
            "臨床での指示がある場合はそちらを優先してください。"
          ]
        },
        {
          title: "胚日数の影響",
          paragraphs: [
            "Day 3 と Day 5 は等価 LMP の計算に影響し、予定日が変わります。",
            "等価 LMP が決まれば、あとは同じ gestational モデルで計算します。",
            "施設の基準がある場合はそちらを優先してください。"
          ]
        },
        {
          title: "等価 LMP を使う理由",
          paragraphs: [
            "妊娠週数は LMP 基準で表されることが多いため、IVF でも等価 LMP による表現が便利です。",
            "標準的な妊婦健診の目安と整合しやすくなります。",
            "共通の表現にすることで情報共有がスムーズになります。"
          ]
        },
        {
          title: "新鮮胚と凍結胚",
          paragraphs: [
            "移植タイプは計算自体に影響せず、説明文の文脈にのみ影響します。",
            "臨床の方針がある場合はそちらを優先してください。",
            "この計算は一般的な目安として利用してください。"
          ]
        },
        {
          title: "妊娠週数と進捗",
          paragraphs: [
            "結果には妊娠週数と残り日数が含まれます。ローカル日付により更新されます。",
            "医療者が示す日付がある場合はそちらを使用してください。",
            "数値は進捗の目安として活用してください。"
          ]
        },
        {
          title: "IVF のタイムライン",
          paragraphs: [
            "タイムラインは一般的な産科の目安を示しています。個別の診療計画とは異なる場合があります。",
            "36 週以降は後期の段階的な目安を示します。",
            "臨床の計画がある場合はそちらを優先してください。"
          ]
        },
        {
          title: "プライバシーと出力",
          paragraphs: [
            "9:16 PNG に出力できます。プライバシーモードでは入力日付を隠し、予定日と進捗のみ表示します。",
            "必要に応じてプライバシーモードを解除できます。",
            "出力は個人用途向けです。"
          ]
        },
        {
          title: "医療チームとの連携",
          paragraphs: [
            "IVF は詳細な臨床計画を伴います。本ツールは一般的な参考情報です。",
            "治療に関する判断は必ず医療者の指示に従ってください。",
            "不明点は医療チームと相談してください。"
          ]
        },
        {
          title: "注意点",
          paragraphs: [
            "臨床所見によって日付が変わることがあります。結果は一般的な目安です。",
            "重要な判断は専門家に相談してください。",
            "疑問があれば早めに医療者に相談しましょう。"
          ]
        }
      ]
    }
  },
  "es": {
    home: {
      sections: [
        {
          title: "Resumen de la calculadora de fecha de parto",
          paragraphs: [
            "Una calculadora de fecha de parto estima la fecha prevista a partir del primer día de la última menstruación (FUM) o de una fecha de concepción equivalente. Convierte tu entrada en una línea de tiempo gestacional para visualizar semanas y hitos. Es una referencia general y no reemplaza la atención médica.",
            "La mayoría de los cálculos usan el modelo de 280 días, que ofrece un marco consistente aunque cada embarazo es único.",
            "Úsalo para planificar y organizar información, pero no como sustituto de indicaciones clínicas."
          ]
        },
        {
          title: "Por qué se usan FUM y concepción",
          paragraphs: [
            "La datación suele empezar en la FUM, aunque la concepción ocurra después. Esto facilita la comunicación clínica.",
            "Si solo conoces la concepción, se resta 14 días para obtener una FUM equivalente y mantener el mismo marco gestacional.",
            "Si tu proveedor ajusta la fecha, prioriza la indicada clínicamente."
          ]
        },
        {
          title: "Ajustes por duración del ciclo",
          paragraphs: [
            "Los ciclos no siempre son de 28 días. Si tu ciclo es más largo o corto, la fecha prevista se ajusta según la diferencia.",
            "Este ajuste mejora la estimación general, pero no reemplaza la evaluación clínica.",
            "Si tu ciclo es irregular, consulta con tu profesional de salud."
          ]
        },
        {
          title: "Edad gestacional y semanas",
          paragraphs: [
            "La edad gestacional se muestra en semanas y días. 12w 3d significa doce semanas completas y tres días adicionales.",
            "Si tu clínica ajusta la fecha con ecografía, usa esa referencia.",
            "Indicar semanas y fecha prevista ayuda a comunicar tu progreso."
          ]
        },
        {
          title: "Cómo leer la cronología",
          paragraphs: [
            "La cronología muestra hitos comunes por rangos de semanas, con fechas estimadas y estado (pasado, actual, futuro). Es un modelo general, no un plan personalizado.",
            "Después de la semana 36 se enfatizan etapas finales porque la frecuencia de visitas suele aumentar.",
            "Si tu calendario clínico difiere, sigue el plan de tu proveedor."
          ]
        },
        {
          title: "Días restantes y transcurridos",
          paragraphs: [
            "Días restantes es el tiempo entre hoy y la fecha prevista. Días transcurridos cuenta desde la FUM de referencia.",
            "Si hay cambios clínicos, prioriza la fecha indicada por tu profesional.",
            "Los conteos se actualizan diariamente con la fecha local."
          ]
        },
        {
          title: "Exportación con privacidad",
          paragraphs: [
            "La exportación crea una imagen PNG 9:16. El modo privacidad oculta fechas de entrada y muestra solo la fecha prevista y el progreso.",
            "Puedes desactivar el modo privacidad si deseas incluir fechas completas.",
            "La imagen es para uso personal y no sustituye registros médicos."
          ]
        },
        {
          title: "Uso con atención médica",
          paragraphs: [
            "Este recurso ayuda a planificar y comprender el cronograma general. No ofrece diagnóstico ni tratamiento.",
            "Ante dudas, consulta a un profesional de salud.",
            "La cronología puede ayudarte a preparar preguntas para tus citas."
          ]
        },
        {
          title: "Limitaciones y recordatorios",
          paragraphs: [
            "Cada embarazo es diferente y la datación puede cambiar por hallazgos clínicos.",
            "Usa esta cronología como referencia general.",
            "Si tienes síntomas preocupantes, busca atención médica."
          ]
        }
      ]
    },
    ivf: {
      sections: [
        {
          title: "Resumen de la calculadora IVF",
          paragraphs: [
            "La calculadora IVF usa la fecha de transferencia y la edad del embrión para calcular una FUM equivalente y aplicar el modelo de 280 días.",
            "El resultado es una estimación general, útil para planificación.",
            "No sustituye el criterio clínico de tu equipo médico."
          ]
        },
        {
          title: "Impacto de la edad del embrión",
          paragraphs: [
            "Day 3 y Day 5 cambian la FUM equivalente y la fecha prevista.",
            "Después de definir la FUM equivalente, el cálculo sigue el mismo marco gestacional.",
            "Si tu clínica usa otra referencia, prioriza esa guía."
          ]
        },
        {
          title: "Por qué usar FUM equivalente",
          paragraphs: [
            "La edad gestacional se comunica habitualmente según la FUM. La FUM equivalente alinea la datación IVF con hitos prenatales estándar.",
            "Esto facilita la coordinación entre equipos.",
            "Mantener un lenguaje común ayuda en la planificación."
          ]
        },
        {
          title: "Transferencia fresca o congelada",
          paragraphs: [
            "El tipo de transferencia no cambia el cálculo, solo el texto explicativo.",
            "Sigue siempre la guía de tu clínica.",
            "Este cálculo es un apoyo general, no una indicación médica."
          ]
        },
        {
          title: "Edad gestacional y progreso",
          paragraphs: [
            "Los resultados incluyen edad gestacional y días restantes. Se actualizan con la fecha local.",
            "Si hay ajustes clínicos, usa la fecha indicada por tu proveedor.",
            "Tómalos como referencia de progreso, no como diagnóstico."
          ]
        },
        {
          title: "Cronología después de IVF",
          paragraphs: [
            "La cronología muestra hitos generales por semanas. Puede diferir del calendario clínico personalizado.",
            "Después de la semana 36 se destacan etapas finales.",
            "Tu plan clínico debe ser la prioridad."
          ]
        },
        {
          title: "Privacidad y exportación",
          paragraphs: [
            "La exportación genera un PNG 9:16. El modo privacidad oculta fechas de entrada y muestra solo la fecha prevista y el progreso.",
            "Puedes desactivar el modo si deseas ver fechas completas.",
            "La imagen está pensada para uso personal."
          ]
        },
        {
          title: "Uso con tu equipo médico",
          paragraphs: [
            "Los ciclos IVF suelen tener calendarios clínicos detallados. Este recurso es un marco de referencia general.",
            "Para decisiones clínicas, sigue las indicaciones del especialista.",
            "Consulta cualquier discrepancia con tu equipo."
          ]
        },
        {
          title: "Limitaciones y recordatorios",
          paragraphs: [
            "Los hallazgos clínicos pueden cambiar la fecha prevista. Esta estimación es general.",
            "Consulta a profesionales para orientación personalizada.",
            "Ante dudas, busca atención médica."
          ]
        }
      ]
    }
  }
};
