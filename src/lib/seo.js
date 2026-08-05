// SEO helpers: canonical URLs, hreflang for published locales only,
// safe JSON-LD serialization and base WebSite/Person entities.
import { site } from "../data/site.js";
import { defaultLocale, locales, getLocaleMeta } from "../data/locales.js";
import { findNodeById } from "../data/site-tree.js";

// Builds an absolute canonical URL from a site-relative path.
export function canonicalUrl(path) {
  return new URL(path, site.url).href;
}

// Absolute canonical URL of a route node for a concrete locale, or null when
// the route is unknown, the locale is not published, or the path is missing.
export function localizedCanonical(routeId, locale) {
  getLocaleMeta(locale);
  const node = findNodeById(routeId);
  if (!node) return null;
  if (node.localeStatus?.[locale] !== "published") return null;
  const path = node.paths?.[locale];
  return path ? canonicalUrl(path) : null;
}

// hreflang links for a route: only locales whose translation is published.
// x-default always points to the Russian URL (RU is the default locale).
export function buildHreflangLinks(routeId) {
  const node = findNodeById(routeId);
  if (!node) return [];
  const links = [];
  for (const locale of locales) {
    const path = node.paths?.[locale];
    if (path && node.localeStatus?.[locale] === "published") {
      links.push({ hreflang: locale, href: canonicalUrl(path) });
    }
  }
  const defaultPath = node.paths?.[defaultLocale];
  if (defaultPath && node.localeStatus?.[defaultLocale] === "published") {
    links.push({ hreflang: "x-default", href: canonicalUrl(defaultPath) });
  }
  return links;
}

// Serializes JSON-LD for inline <script> embedding. "<" is escaped as
// < so the payload can never break out of the script tag; U+2028 and
// U+2029 are escaped because they are valid in JSON but not in JavaScript
// string literals parsed by older engines.
export function serializeJsonLd(data) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

// Stable Person entity for Danila. Referenced by @id from pages.
// Deliberately no Organization, address, ratings, awards or job-search facts.
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": site.person.id,
    name: site.person.name,
    url: `${site.url}/`,
    email: site.email,
    sameAs: [site.vk],
  };
}

// WebSite entity without SearchAction (search page is not implemented).
export function websiteJsonLd(locale = defaultLocale) {
  const meta = getLocaleMeta(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: meta.htmlLang,
    publisher: { "@id": site.person.id },
  };
}
