# Prompt: testing и quality gates

```text
Read-only architecture task. Inspect package.json scripts, current dependencies, GitHub workflow and repository structure. Do not install packages or edit CI.

Propose a staged quality system for a beginner-maintained Astro static portal:
Stage 0: existing build + manual checklist;
Stage 1: formatting/lint only if absent and justified;
Stage 2: unit tests for data/navigation utilities;
Stage 3: Playwright critical routes/interactions/overflow;
Stage 4: axe accessibility checks;
Stage 5: Lighthouse CI budgets and broken-link checks;
Stage 6: visual regression for page-specific designs.

For each stage explain practical benefit, package/version compatibility, Windows commands, CI time, maintenance and false-positive risk. Define exact acceptance for home/menu/deep service/filter/contact/404. Recommend the minimum first addition and wait for approval. Never promise zero bugs; design release gates and rollback.
```
