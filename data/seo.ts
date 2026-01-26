import { LanguageCode } from "../lib/types";

export interface SeoBlock {
  howToName: string;
  faq: { name: string; text: string }[];
  howTo: { name: string; text: string }[];
}

export interface SeoContent {
  home: SeoBlock;
  ivf: SeoBlock;
}

export const seoContent: Record<LanguageCode, SeoContent> = {
  "en": {
    home: {
      howToName: "How to calculate a pregnancy due date",
      faq: [
        {
          name: "How does a due date calculator work?",
          text:
            "Most calculators estimate the due date by counting 280 days from the first day of the last menstrual period or by converting a conception date into an equivalent LMP. This is a general estimate and does not replace clinical guidance."
        },
        {
          name: "Can I use a conception date instead of LMP?",
          text:
            "Yes. A conception date is typically treated as the ovulation date and converted into an equivalent LMP for gestational calculations."
        },
        {
          name: "Is this a medical diagnosis?",
          text:
            "No. This tool provides general information and is not medical advice. Always consult a qualified health professional for personal guidance."
        }
      ],
      howTo: [
        {
          name: "Choose the calculator method",
          text: "Select either the LMP or conception date method."
        },
        {
          name: "Enter your date",
          text: "Provide the first day of your last menstrual period or your conception date."
        },
        {
          name: "Review your timeline",
          text: "View your estimated due date, gestational age, and timeline milestones."
        }
      ]
    },
    ivf: {
      howToName: "How to calculate an IVF due date",
      faq: [
        {
          name: "How is an IVF due date calculated?",
          text:
            "The transfer date and embryo age are converted into an equivalent LMP, then 280 days are added to estimate the due date. This is a general estimate and does not replace clinical guidance."
        },
        {
          name: "Does transfer type change the calculation?",
          text:
            "No. Fresh or frozen transfer only changes the explanatory text. The calculation uses transfer date and embryo age."
        },
        {
          name: "Is this a medical diagnosis?",
          text:
            "No. This tool provides general information and is not medical advice. Always consult a qualified health professional for personal guidance."
        }
      ],
      howTo: [
        {
          name: "Enter embryo transfer date",
          text: "Provide the embryo transfer date from your IVF cycle."
        },
        {
          name: "Select embryo age",
          text: "Choose whether the embryo was Day 3 or Day 5."
        },
        {
          name: "Review results",
          text: "View the estimated due date, equivalent LMP, and timeline milestones."
        }
      ]
    }
  },
  "fr": {
    home: {
      howToName: "Comment calculer une date d’accouchement",
      faq: [
        {
          name: "Comment fonctionne un calculateur de date d’accouchement ?",
          text:
            "La plupart des calculateurs estiment la date d’accouchement en comptant 280 jours depuis le premier jour des dernières règles ou en convertissant une date de conception en DDM équivalente. Il s’agit d’une estimation générale, sans remplacer un avis médical."
        },
        {
          name: "Puis-je utiliser une date de conception au lieu de la DDM ?",
          text:
            "Oui. La date de conception est généralement considérée comme la date d’ovulation et convertie en DDM équivalente pour les calculs gestationnels."
        },
        {
          name: "Est-ce un diagnostic médical ?",
          text:
            "Non. Cet outil fournit des informations générales et ne constitue pas un avis médical. Consultez toujours un professionnel de santé qualifié."
        }
      ],
      howTo: [
        {
          name: "Choisir la méthode",
          text: "Sélectionnez la méthode DDM ou la date de conception."
        },
        {
          name: "Saisir la date",
          text: "Indiquez le premier jour des dernières règles ou votre date de conception."
        },
        {
          name: "Consulter la chronologie",
          text: "Visualisez la date prévue, l’âge gestationnel et les étapes clés."
        }
      ]
    },
    ivf: {
      howToName: "Comment calculer une date d’accouchement en FIV",
      faq: [
        {
          name: "Comment calcule-t-on une date d’accouchement en FIV ?",
          text:
            "La date de transfert et l’âge embryonnaire sont convertis en DDM équivalente, puis 280 jours sont ajoutés. C’est une estimation générale, sans remplacer un avis médical."
        },
        {
          name: "Le type de transfert change-t-il le calcul ?",
          text:
            "Non. Le transfert frais ou congelé ne change que le texte explicatif. Le calcul utilise la date de transfert et l’âge de l’embryon."
        },
        {
          name: "Est-ce un diagnostic médical ?",
          text:
            "Non. Cet outil fournit des informations générales et ne constitue pas un avis médical. Consultez toujours un professionnel de santé qualifié."
        }
      ],
      howTo: [
        {
          name: "Saisir la date de transfert",
          text: "Indiquez la date de transfert embryonnaire de votre cycle de FIV."
        },
        {
          name: "Choisir l’âge de l’embryon",
          text: "Sélectionnez Jour 3 ou Jour 5."
        },
        {
          name: "Consulter les résultats",
          text: "Visualisez la date prévue, la DDM équivalente et les étapes clés."
        }
      ]
    }
  },
  "de": {
    home: {
      howToName: "So berechnen Sie einen Geburtstermin",
      faq: [
        {
          name: "Wie funktioniert ein Geburtsterminrechner?",
          text:
            "Die meisten Rechner schätzen den Termin, indem sie 280 Tage ab dem ersten Tag der letzten Periode zählen oder ein Empfängnisdatum in eine äquivalente LMP umwandeln. Das ist eine allgemeine Schätzung und ersetzt keine ärztliche Beratung."
        },
        {
          name: "Kann ich ein Empfängnisdatum statt LMP verwenden?",
          text:
            "Ja. Ein Empfängnisdatum wird meist als Ovulationsdatum behandelt und in eine äquivalente LMP umgerechnet."
        },
        {
          name: "Ist das eine medizinische Diagnose?",
          text:
            "Nein. Dieses Tool liefert allgemeine Informationen und ist keine medizinische Beratung. Bitte wenden Sie sich an Fachpersonal."
        }
      ],
      howTo: [
        {
          name: "Methode auswählen",
          text: "Wählen Sie LMP oder Empfängnisdatum."
        },
        {
          name: "Datum eingeben",
          text: "Geben Sie den ersten Tag der letzten Periode oder Ihr Empfängnisdatum ein."
        },
        {
          name: "Zeitplan ansehen",
          text: "Sehen Sie Termin, Schwangerschaftsalter und Meilensteine."
        }
      ]
    },
    ivf: {
      howToName: "So berechnen Sie einen IVF-Geburtstermin",
      faq: [
        {
          name: "Wie wird ein IVF-Geburtstermin berechnet?",
          text:
            "Transferdatum und Embryoalter werden in eine äquivalente LMP umgerechnet, dann werden 280 Tage addiert. Das ist eine allgemeine Schätzung und ersetzt keine ärztliche Beratung."
        },
        {
          name: "Ändert die Transferart die Berechnung?",
          text:
            "Nein. Frisch oder gefroren beeinflusst nur den Erklärungstext. Die Berechnung nutzt Transferdatum und Embryoalter."
        },
        {
          name: "Ist das eine medizinische Diagnose?",
          text:
            "Nein. Dieses Tool liefert allgemeine Informationen und ist keine medizinische Beratung. Bitte wenden Sie sich an Fachpersonal."
        }
      ],
      howTo: [
        {
          name: "Transferdatum eingeben",
          text: "Geben Sie das Embryotransferdatum Ihres IVF-Zyklus ein."
        },
        {
          name: "Embryoalter auswählen",
          text: "Wählen Sie Tag 3 oder Tag 5."
        },
        {
          name: "Ergebnisse ansehen",
          text: "Sehen Sie Termin, äquivalente LMP und Meilensteine."
        }
      ]
    }
  },
  "zh-CN": {
    home: {
      howToName: "如何计算预产期",
      faq: [
        {
          name: "预产期计算器是如何工作的？",
          text:
            "通常通过从末次月经第一天起计算 280 天，或将受孕日换算为等效末次月经日期来估算预产期。这是一般性估算，不替代医疗建议。"
        },
        {
          name: "可以用受孕日代替末次月经吗？",
          text:
            "可以。受孕日通常按排卵日处理，并换算为等效末次月经日期用于孕周计算。"
        },
        {
          name: "这算医学诊断吗？",
          text:
            "不是。本工具仅提供一般性信息，不构成医疗建议。如需个性化指导，请咨询专业医生。"
        }
      ],
      howTo: [
        {
          name: "选择计算方式",
          text: "选择末次月经或受孕日计算方式。"
        },
        {
          name: "输入日期",
          text: "输入末次月经第一天或受孕日期。"
        },
        {
          name: "查看时间轴",
          text: "查看预产期、孕周与关键时间节点。"
        }
      ]
    },
    ivf: {
      howToName: "如何计算 IVF 预产期",
      faq: [
        {
          name: "IVF 预产期如何计算？",
          text:
            "将移植日期与胚胎天数换算为等效末次月经日期，再加 280 天得到预产期。这是一般性估算，不替代医疗建议。"
        },
        {
          name: "移植类型会影响计算吗？",
          text:
            "不会。鲜胚或冻胚只影响说明文案，计算使用移植日期与胚胎天数。"
        },
        {
          name: "这算医学诊断吗？",
          text:
            "不是。本工具仅提供一般性信息，不构成医疗建议。如需个性化指导，请咨询专业医生。"
        }
      ],
      howTo: [
        {
          name: "输入移植日期",
          text: "输入本次 IVF 周期的胚胎移植日期。"
        },
        {
          name: "选择胚胎天数",
          text: "选择 Day 3 或 Day 5。"
        },
        {
          name: "查看结果",
          text: "查看预产期、等效末次月经与时间轴节点。"
        }
      ]
    }
  },
  "ja": {
    home: {
      howToName: "出産予定日の計算方法",
      faq: [
        {
          name: "出産予定日計算はどのように行われますか？",
          text:
            "最終月経日の初日から 280 日を数えるか、受胎日を換算して LMP に置き換えることで予定日を推定します。一般的な推定であり医療助言ではありません。"
        },
        {
          name: "受胎日を LMP の代わりに使えますか？",
          text:
            "はい。受胎日は通常、排卵日として扱われ、妊娠週数計算のために LMP に換算されます。"
        },
        {
          name: "これは医療診断ですか？",
          text:
            "いいえ。本ツールは一般的な情報を提供するもので、医療助言ではありません。必ず専門家に相談してください。"
        }
      ],
      howTo: [
        {
          name: "計算方法を選ぶ",
          text: "LMP か受胎日の計算方法を選択します。"
        },
        {
          name: "日付を入力する",
          text: "最終月経日の初日または受胎日を入力します。"
        },
        {
          name: "タイムラインを見る",
          text: "予定日、妊娠週数、主要なマイルストーンを確認します。"
        }
      ]
    },
    ivf: {
      howToName: "IVF の予定日の計算方法",
      faq: [
        {
          name: "IVF の予定日はどう計算しますか？",
          text:
            "移植日と胚の経過日数を LMP に換算し、そこから 280 日を足して予定日を推定します。一般的な推定であり医療助言ではありません。"
        },
        {
          name: "移植タイプで計算は変わりますか？",
          text:
            "いいえ。新鮮胚/凍結胚は説明文にのみ影響し、計算は移植日と胚の日数を使用します。"
        },
        {
          name: "これは医療診断ですか？",
          text:
            "いいえ。本ツールは一般的な情報を提供するもので、医療助言ではありません。必ず専門家に相談してください。"
        }
      ],
      howTo: [
        {
          name: "移植日を入力",
          text: "IVF サイクルの胚移植日を入力します。"
        },
        {
          name: "胚の日数を選択",
          text: "Day 3 または Day 5 を選択します。"
        },
        {
          name: "結果を確認",
          text: "予定日、換算 LMP、タイムラインを確認します。"
        }
      ]
    }
  },
  "es": {
    home: {
      howToName: "Cómo calcular una fecha de parto",
      faq: [
        {
          name: "¿Cómo funciona una calculadora de fecha de parto?",
          text:
            "La mayoría estima la fecha contando 280 días desde el primer día de la última menstruación o convirtiendo la fecha de concepción en una FUM equivalente. Es una estimación general y no sustituye la orientación clínica."
        },
        {
          name: "¿Puedo usar la fecha de concepción en lugar de la FUM?",
          text:
            "Sí. La fecha de concepción suele tratarse como la de ovulación y se convierte en una FUM equivalente."
        },
        {
          name: "¿Es un diagnóstico médico?",
          text:
            "No. Esta herramienta ofrece información general y no es consejo médico. Consulta siempre a un profesional."
        }
      ],
      howTo: [
        {
          name: "Elegir el método",
          text: "Selecciona LMP/FUM o fecha de concepción."
        },
        {
          name: "Ingresar la fecha",
          text: "Indica el primer día de tu última menstruación o tu fecha de concepción."
        },
        {
          name: "Revisar la cronología",
          text: "Consulta fecha estimada, edad gestacional y hitos."
        }
      ]
    },
    ivf: {
      howToName: "Cómo calcular una fecha de parto en IVF",
      faq: [
        {
          name: "¿Cómo se calcula la fecha de parto en IVF?",
          text:
            "La fecha de transferencia y la edad del embrión se convierten en una FUM equivalente y se suman 280 días. Es una estimación general y no sustituye la orientación clínica."
        },
        {
          name: "¿El tipo de transferencia cambia el cálculo?",
          text:
            "No. Fresco o congelado solo cambia el texto explicativo. El cálculo usa fecha de transferencia y edad del embrión."
        },
        {
          name: "¿Es un diagnóstico médico?",
          text:
            "No. Esta herramienta ofrece información general y no es consejo médico. Consulta siempre a un profesional."
        }
      ],
      howTo: [
        {
          name: "Ingresar fecha de transferencia",
          text: "Indica la fecha de transferencia embrionaria del ciclo IVF."
        },
        {
          name: "Elegir edad del embrión",
          text: "Selecciona Día 3 o Día 5."
        },
        {
          name: "Revisar resultados",
          text: "Consulta la fecha estimada, la FUM equivalente y los hitos."
        }
      ]
    }
  }
};
