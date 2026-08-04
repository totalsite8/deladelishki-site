# Prompt: реализовать утверждённый фундамент

Использовать только после read-only аудита и утверждения решений.

```text
Прочитай @AGENTS.md, actual repository audit, approved product brief, route/i18n/logo docs and approved architecture decisions. Actual stack is Astro 7 + Tailwind 4 Vite + React 19 + `framer-motion` 12. Не переоткрывай принятые решения и не расширяй scope.

Перед изменениями:
1. Покажи `git status --short` и текущую ветку.
2. Если ветка `main` или есть неизвестные изменения — остановись и объясни новичку безопасный следующий шаг.
3. Повтори согласованный file plan и acceptance criteria.
4. Не устанавливай/не обновляй зависимости и не меняй deploy.yml без отдельного подтверждённого дефекта.

Реализуй только foundation:
- BaseLayout metadata/i18n contract: RU/EN lang, title, description, canonical, hreflang, OG defaults, structured-data slot;
- viewport and semantic landmarks;
- Tailwind 4 semantic dual dark/light tokens; no Tailwind 3 config;
- `--font-display`/`--font-body` hooks without unlicensed Halo files;
- skip link и видимые focus states;
- базовый SiteHeader/SiteFooter;
- canonical route-ID/navigation/service data with corrected hierarchy and RU/EN publication paths;
- `/o-nas/`, Danila profile and team-template route contracts, but no fake team pages;
- site/owner constants: Данила Подшивалов, 18+/20 direct reports, approved contacts, no city/timezone/response promise;
- stable Person ID; AboutPage/ProfilePage boundaries;
- breadcrumb utility/component, если он уже нужен первому route;
- `public/robots.txt` с корректным sitemap URL;
- `src/pages/404.astro` с понятным возвратом;
- site constants;
- минимальные architecture decision docs;
- `.editorconfig`/`.gitattributes` только если аудит подтвердил отсутствие и пользователь это одобрил.

Не реализуй дизайн/анимацию главной, lead-form submission/SmartCaptcha endpoint, share component, mega-menu island, Lenis, GSAP, WebGL, фильтры, блог, оплату, CMS, поиск и пустые future pages.

Правила:
- JavaScript/JSX only; keep tsconfig/tooling, no TS/TSX source;
- RU filenames/slugs translit; EN localized mapping by approved route IDs;
- use existing `framer-motion`, never add `motion`;
- `.astro`: JS frontmatter сверху, markup ниже;
- YAML UTF-8 without BOM;
- `width: 100%`; full-screen fallback 100vh → 100dvh;
- no horizontal overflow root cause;
- RU + human-reviewed EN foundation; no raw machine translation;
- без выдуманных business/team/case claims;
- protected deploy/hosting config untouched.

После implementation:
1. Запусти существующие format/lint/test scripts, если они есть.
2. Запусти `npm run build`.
3. Проверь generated `dist`: index, robots, 404, sitemap, assets.
4. Сообщи warnings честно.
5. Покажи diff summary и проверь secrets/generated files.
6. Не commit/push/merge.

Финальный отчёт:
- Changed;
- Validated (exact commands/results);
- Not changed;
- Risks/assumptions;
- Manual checks for user in PowerShell/browser;
- Next smallest step: concepts for home page, not code.
```
