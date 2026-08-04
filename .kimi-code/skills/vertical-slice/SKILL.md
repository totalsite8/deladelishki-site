---
name: vertical-slice
description: Plan and implement one reviewable end-to-end route or component slice without spreading unfinished work across the repository.
type: prompt
whenToUse: When the user asks to create a page, route, section, feature, or reusable template as a complete vertical slice.
disableModelInvocation: true
arguments:
  - target
  - outcome
---

Implement a vertical slice for `$target` with the intended outcome: `$outcome`.

## Phase 0 — concept gate for a new page

If `$target` is a new page and no concept was explicitly selected in the current conversation:

1. Read the relevant content/IA context.
2. Offer 2–3 distinct concepts in beginner-friendly language.
3. Compare impression, content flow, signature interaction, mobile/reduced-motion fallback, complexity, and performance.
4. Recommend one and stop. Do not edit files until the user chooses.

## Phase 1 — inspect and plan after concept selection

1. Read `AGENTS.md`, approved page-swarm/page decision, profile/case source, contact/forms/share map, `package.json`, `astro.config.*`, `.github/workflows/deploy.yml`, current git status, and relevant source files.
2. Explain the current implementation and reusable brand/accessibility patterns.
3. Define the smallest complete slice: route/data → semantic UI → optional focused interaction → validation.
4. List files to create/change, acceptance criteria, content/media still needed, and risks.
5. Stop for user approval if this requires a new dependency, external service, data migration, output-mode change, auth/payment logic, CI/deployment change, or major visual decision.

## Phase 2 — implement

- Keep the diff narrow and preserve unrelated user work.
- Build static/semantic behavior first.
- Reuse the canonical navigation/content source; do not duplicate taxonomy.
- Add a React island only for real state or interaction.
- Add animation last and follow the project motion grammar.
- Include empty/loading/error/success states where applicable.
- Do not fill unknown business content with invented facts; use clearly labeled placeholders.

## Phase 3 — validate

Run existing, relevant scripts. At minimum, verify build behavior, console/hydration state, keyboard flow, reduced motion, and page-level overflow at 320px and a desktop width when the tooling permits.

Finish with:

- changed files and behavior;
- exact checks and results;
- acceptance criteria status;
- deferred work and risks;
- one recommended next slice.
