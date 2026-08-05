// Approved locales: Russian default (unprefixed) + English under /en/.
// Mirrors astro.config.mjs i18n and docs/planning/locales.json.
export const defaultLocale = "ru";

export const locales = ["ru", "en"];

export const localeMeta = {
  ru: {
    label: "RU",
    name: "Русский",
    htmlLang: "ru",
    ogLocale: "ru_RU",
  },
  en: {
    label: "EN",
    name: "English",
    htmlLang: "en",
    ogLocale: "en_US",
  },
};

export function isLocale(value) {
  return locales.includes(value);
}

export function assertLocale(value) {
  if (!isLocale(value)) {
    throw new Error(`Unknown locale: ${String(value)}. Expected one of: ${locales.join(", ")}.`);
  }
  return value;
}

export function getLocaleMeta(locale) {
  return localeMeta[assertLocale(locale)];
}
