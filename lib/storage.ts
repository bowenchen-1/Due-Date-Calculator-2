import { PregnancyResult, LanguageCode } from "./types";
import { resolveLanguage } from "./i18n";

const RESULT_KEY = "pdc:lastResult";
const LANGUAGE_KEY = "pdc:language";

export const saveLastResult = (result: PregnancyResult): void => {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(RESULT_KEY, JSON.stringify(result));
  } catch {
    // ignore storage errors
  }
};

export const loadLastResult = (): PregnancyResult | null => {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(RESULT_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw) as PregnancyResult;
  } catch {
    return null;
  }
};

export const clearLastResult = (): void => {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.removeItem(RESULT_KEY);
  } catch {
    // ignore storage errors
  }
};

export const saveLanguagePreference = (lang: LanguageCode): void => {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(LANGUAGE_KEY, lang);
  } catch {
    // ignore storage errors
  }
};

export const loadLanguagePreference = (): LanguageCode => {
  if (typeof window === "undefined") {
    return "en";
  }
  try {
    const raw = window.localStorage.getItem(LANGUAGE_KEY);
    return resolveLanguage(raw);
  } catch {
    return "en";
  }
};
