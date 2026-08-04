---
name: audit-page
description: Audit an Astro page for UX clarity, responsive overflow, accessibility, performance, SEO, hydration, and animation quality, then produce prioritized actionable findings.
type: prompt
whenToUse: When the user asks to check, review, test, optimize, or audit a page or section before release.
disableModelInvocation: false
arguments:
  - route
  - mode
---

Audit `$route` in mode `$mode` (`report-only` by default; edit only if the user explicitly requests fixes).

Read `AGENTS.md`, inspect the route and all imported components/data/styles, then run the relevant existing project checks.

## Audit dimensions

1. **Purpose and conversion** — Can a new visitor identify the offer and next action quickly?
2. **Information architecture** — Correct hierarchy, breadcrumbs, internal links, and canonical data reuse.
3. **Responsive layout** — 320, 360/375, 768, 1024, 1440, 1920/ultrawide; page-level horizontal overflow is blocking.
4. **Accessibility** — semantics, headings, landmarks, keyboard/focus, target size, contrast, labels, alt text, reduced motion, logical DOM order.
5. **Performance** — LCP asset, island count/directives, JavaScript cost, media formats/dimensions/loading, font behavior, animation main-thread cost, cleanup.
6. **SEO/trust** — title, description, canonical, H1, OG, structured data validity, indexability, claims/placeholders.
7. **Motion quality** — each effect has purpose; no competing scroll controllers; static/reduced fallback works.
8. **Forms/contact/share** — correct contextual fields/source IDs, phone/email validation, server-side captcha boundary, error/success states, direct contact fallback, and required share controls.
9. **Claims/schema/i18n** — copy matches approved profile/case evidence; RU/EN route/canonical/hreflang/publication status align; structured data matches visible facts and contains no fake ratings/prices/reviews.
10. **Brand/media** — correct logo variant, font license/fallback, dual-theme contrast, current-locale OG/share asset.
11. **Robustness/security** — no console errors, hydration warnings, broken links, empty-state failures, secret exposure, or rsync/backend boundary risk.

## Output format

- Executive verdict: Ready / Ready with minor fixes / Not ready.
- Blocking findings (P0), important findings (P1), polish (P2).
- For every finding: evidence (file/selector/route), user impact, exact recommended fix, and how to verify it.
- Measurements and commands actually run; never invent results.
- A minimal fix order that avoids unrelated refactors.
