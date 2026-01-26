import { languageNames, translations, TranslationKey } from "../data/i18n";
import { LanguageCode } from "./types";

export const supportedLanguages: LanguageCode[] = ["en", "fr", "de", "zh-CN", "ja", "es"];

export const resolveLanguage = (value: string | null): LanguageCode => {
  if (!value) {
    return "en";
  }
  const match = supportedLanguages.find((lang) => lang === value);
  return match ?? "en";
};

export const t = (lang: LanguageCode, key: TranslationKey): string => {
  const table = translations[lang] ?? translations.en;
  return table[key] ?? translations.en[key];
};

export const getLanguageName = (lang: LanguageCode): string => languageNames[lang];
