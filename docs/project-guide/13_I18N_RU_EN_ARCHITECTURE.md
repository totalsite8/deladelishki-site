# RU + EN architecture for Astro static

Approved languages: Russian + English from first release.

## Recommended public URL strategy

```text
RU default:
/
/uslugi/
/uslugi/marketing/analitika/
/o-nas/

EN prefixed and localized:
/en/
/en/services/
/en/services/marketing/analytics/
/en/about/
```

Astro supports an unprefixed default locale while non-default locales receive a prefix through `prefixDefaultLocale: false` [1](https://docs.astro.build/en/guides/internationalization/) [2](https://docs.astro.build/en/reference/configuration-reference/).

Localized English slugs are recommended for English UX/SEO, but they require a route-ID mapping. Do not generate the English route by simply adding `/en` to a Russian translit URL if final English slugs are localized.

## Stable route identity

Every page/content item needs locale-independent ID:

```js
{
  id: "service-marketing-analytics",
  paths: {
    ru: "/uslugi/marketing/analitika/",
    en: "/en/services/marketing/analytics/"
  }
}
```

The language switcher resolves the current ID and target-locale path.

## Content status

```text
planned → draft → review → published
```

Status is per locale:

```js
status: {
  ru: "published",
  en: "draft"
}
```

If English is not reviewed/published:

- do not put it in sitemap;
- do not show a link to a nonexistent translation as if available;
- do not serve raw Russian content under an English canonical;
- switcher may show disabled/coming later or go to the English hub only if explicitly designed.

## SEO

For each published pair:

- self-canonical in its language;
- reciprocal `hreflang="ru"` and `hreflang="en"`;
- decide `x-default` (normally Russian/root or language selector, but root is Russian here);
- localized title/description/H1/OG, not word-for-word mechanical translation;
- same real schema entity IDs where appropriate;
- `inLanguage` per page/content;
- sitemap contains both published URLs;
- no duplicate canonical from EN to RU if EN is a real translated page.

## Architecture options

### A. Astro native i18n + localized page folders

Good for explicit pages; can duplicate composition imports, not full component code.

### B. Route registry + dynamic/static generation

Good for collections and localized slugs; one template with per-locale content.

### Recommended hybrid

- unique creative hubs/services: explicit route composition using shared locale data and route registry;
- blog/prompts/courses/cases/apps/team profiles: collections/templates with locale fields/entries;
- stable IDs connect language paths and internal links.

## Navigation

- switcher in header/menu;
- labels `RU` / `EN` with accessible full names;
- preserve current entity/route;
- current locale indicated without relying only on color;
- keyboard/touch;
- no flag icons as the only language label;
- menu data filtered by locale publication status.

## Copy workflow

1. Russian brief/copy approved.
2. English localization draft.
3. Human review for meaning, professional terminology and CTA.
4. Metadata/schema/internal links reviewed.
5. Mark EN published.
6. Build/sitemap/link/hreflang tests.

AI may create a draft, but publication requires manual review.

## Forms

- `locale` submitted with lead;
- labels/errors/consent/privacy localized;
- Russian phone only may be a mismatch for English visitors: email remains available and copy must state accepted phone format;
- email/Telegram/admin notification can include locale/source route;
- no city/timezone promise.

## Share

Share current locale canonical URL/title. Do not share RU URL from an EN page or vice versa.

## Testing

- direct URL for every locale;
- language switch preserves page;
- 404 behavior;
- sitemap/hreflang/canonical reciprocity;
- no broken links to draft translations;
- RU/EN text expansion at 320px;
- font has Latin + Cyrillic;
- translated form validation/errors;
- social OG per locale.
