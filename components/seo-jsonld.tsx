"use client";

import { seoContent } from "../data/seo";
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: block.faq.map((item) => ({
      "@type": "Question",
      name: item.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.text
      }
    }))
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: block.howToName,
    step: block.howTo.map((item) => ({
      "@type": "HowToStep",
      name: item.name,
      text: item.text
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    </>
  );
}
