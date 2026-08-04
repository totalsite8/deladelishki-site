# Prompt: RU + EN i18n architecture for Astro 7 static

```text
Read-only architecture task. Read AGENTS, approved product brief, actual repo audit, canonical site-tree/route registry/locales.json, SEO matrix, Astro 7 i18n docs and current file structure. Do not edit config/routes/content.

GOAL
Russian default at root plus English switcher/translation from first release, while preserving static output, page-specific creative layouts, SEO and scalable deep routes.

COMPARE
A. Same transliterated path after `/en/`.
B. Localized English slugs connected by stable route IDs.
C. Fully prefixed `/ru/` and `/en/` — explain why it would change existing canonical strategy.

RECOMMENDATION TO EVALUATE
RU unprefixed, EN `/en/` with localized slugs; `prefixDefaultLocale: false`; hybrid explicit creative pages + collection templates.

DESIGN
- route-ID map RU/EN;
- Astro config compatible with actual Astro 7.0.7;
- directory/file approach;
- language switch preserving current page;
- per-locale publication status;
- content schema and internal links;
- title/description/H1/OG localization;
- canonical/hreflang/x-default;
- sitemap;
- 404/fallback behavior;
- no raw machine translation or mixed-language indexable page;
- RU/EN forms/privacy/errors;
- share current locale URL;
- fonts Cyrillic + Latin;
- text expansion/overflow;
- scheduled AI translation draft + manual review only if later approved.

OUTPUT
1. Recommended option.
2. Exact sample mapping for home, services, analytics, blog article, prompt, course, case, About/Danila/contact.
3. Proposed config diff — do not apply.
4. Proposed directories/data schema.
5. Migration impact on current one-page repo.
6. SEO rules.
7. Content/editorial workflow.
8. Test matrix.
9. Decisions/risks.
10. Smallest foundation implementation slice.

Stop before code.
```
