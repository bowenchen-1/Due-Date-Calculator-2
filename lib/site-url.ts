const DEFAULT_SITE_URL = "https://due-date-calculator.net";

const normalizeSiteUrl = (value: string): string => {
  return value.replace(/\/+$/, "");
};

const resolveSiteUrl = (): string => {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) {
    return DEFAULT_SITE_URL;
  }

  try {
    const url = new URL(configured);
    return normalizeSiteUrl(url.toString());
  } catch {
    return DEFAULT_SITE_URL;
  }
};

export const SITE_URL = resolveSiteUrl();
