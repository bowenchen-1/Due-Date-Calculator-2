"use client";

import { seoContent } from "../data/seo";
import { t } from "../lib/i18n";
import { LanguageCode } from "../lib/types";

export default function SeoJsonLd({
  language,
  page
}: {
  language: LanguageCode;
  page: "home" | "ivf";
}) {
  const content = seoContent[language] ?? seoContent.en;
  const block = content[page];
  const title = page === "home" ? t(language, "heroTitle") : t(language, "ivfHeroTitle");
  const description = page === "home" ? t(language, "heroSubtitle") : t(language, "ivfHeroSubtitle");
  const path = page === "home" ? "/" : "/ivf";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        description,
        inLanguage: language,
        url: path,
        isPartOf: {
          "@type": "WebSite",
          name: t(language, "siteName")
        }
      },
      {
        "@type": "FAQPage",
        inLanguage: language,
        mainEntity: block.faq.map((item) => ({
          "@type": "Question",
          name: item.name,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.text
          }
        }))
      },
      {
        "@type": "HowTo",
        inLanguage: language,
        name: block.howToName,
        step: block.howTo.map((item) => ({
          "@type": "HowToStep",
          name: item.name,
          text: item.text
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}
