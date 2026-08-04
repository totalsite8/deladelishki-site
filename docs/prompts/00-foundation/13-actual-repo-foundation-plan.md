# First Kimi prompt for the actual deladelishki-site repository

Use after Kimi Code is installed/connected in VS Code. Start from repository root. First run in Plan/read-only mode.

```text
Работаем с реальным публичным репозиторием `totalsite8/deladelishki-site`, current commit based on `f0d2945` or newer. Сначала прочитай root AGENTS.md and project docs. If root instructions have not yet been updated, compare them with the supplied project kit and do not overwrite blindly.

FACTUAL BASELINE ALREADY VERIFIED
- Windows 11 / VS Code / npm.
- Node 24.13.0 local; npm 11.18.0.
- Astro 7.0.7 static build.
- Tailwind 4.3.2 via @tailwindcss/vite.
- React 19.2.7; @astrojs/react 6.0.1.
- `framer-motion` 12.42.2; use imports from `framer-motion`; do not install package `motion`.
- Sitemap 3.7.3; site URL configured.
- Current source: Layout.astro, index.astro, global.css only.
- GitHub Actions deploys `dist/` to Timeweb via rsync `--delete`; current step uses `npm install`.
- Production/local build works.
- CLAUDE.md is a symlink to AGENTS.md.
- Logo PNG supplied as brand reference.
- RU + EN first release.
- `/o-nas/` team hub + `/o-nas/danila-podshivalov/` + future team profiles.
- Forms target: personalised service forms, Russian phone/email, PHP leads API/read-only admin on Timeweb candidate, email + Telegram, CRM later.

THIS TURN IS READ-ONLY PLAN
- Show `git status --short`, branch and current commit.
- Do not edit/install/upgrade/commit/push/deploy.
- Do not request/show secrets.
- Do not redesign the home yet.

READ
- package.json/lock, astro.config.mjs, deploy.yml;
- Layout/index/global.css;
- current AGENTS/CLAUDE symlink;
- approved product brief;
- actual repo audit;
- route registry/site-tree/locales;
- deep IA;
- profile/cases source;
- forms/PHP leads candidate;
- logo/font/dual-theme doc;
- i18n doc;
- templates and prompt index.

PRODUCE THE FIRST FOUNDATION PLAN
1. Exact branch strategy from clean main.
2. Which project-kit files should be copied and exact destination paths.
3. Root AGENTS merge/replacement plan preserving useful Astro docs and removing unverified background-server command.
4. Deploy hardening patch proposal: npm ci, cache, permissions, timeout, concurrency; explain rsync `--delete` and future PHP boundary. Do not apply in same commit as visual foundation unless explicitly chosen.
5. Astro 7 config proposal: explicit static, RU/EN i18n, route mapping, trailing slash/canonical decisions.
6. Repository folders to create now vs later; no empty future routes.
7. BaseLayout metadata/i18n contract.
8. Site/owner/contact/route data contracts.
9. Tailwind 4 semantic tokens for dual dark/light canvas; font variables with no unlicensed Halo file.
10. Logo asset plan: current PNG reference + missing SVG/compact/favicon variants.
11. Header/footer/skip/focus/language-switch skeleton.
12. robots and 404.
13. Person/About/team schema boundaries.
14. Content collections to defer until first content section.
15. Form/backend code fully deferred to its own ADR/branch.
16. Exact files for the smallest implementation commit.
17. Exact build/manual checks.
18. Risks P0/P1/P2 and decisions still required.

COMMIT BOUNDARIES
Propose separate reviewable commits/PRs:
A. project instructions/docs;
B. deploy hardening;
C. Astro/i18n/design-token foundation;
D. navigation/footer/robots/404;
E. home concepts later;
F. PHP leads backend later.

OUTPUT
Use plain Russian for Danila. Commands must be PowerShell and shown one at a time, but do not ask him to run any until plan approval. End with: `План фундамента готов. Файлы не менял. Жду выбора решений и команды на отдельную ветку.`
```
