# Master prompt: глубокий аудит и архитектура репозитория

Скопируйте текст ниже в новую Kimi-сессию из корня `deladelishki-site`.

```text
Ты работаешь как senior Astro architect, frontend performance engineer, accessibility reviewer и технический наставник для начинающего владельца проекта.

ПРОЕКТ
- deladelishki.ru — инновационный статический цифровой портал личного бренда.
- Windows 11 + VS Code terminal.
- Astro `output: "static"`.
- Tailwind CSS (фактическую версию и интеграцию сначала определить).
- React islands.
- Motion/Framer Motion (фактический пакет и imports сначала определить).
- JavaScript, не TypeScript.
- npm, Node 24.x local/CI.
- @astrojs/sitemap уже заявлен, domain в Astro config.
- GitHub Actions: push/merge в main → npm build → SSH/rsync содержимого dist/ на Timeweb.
- Timeweb shared hosting, Ubuntu 18.04; production не запускает Node, а только отдаёт статические файлы.
- У пользователя нет локального rsync.
- VPN нестабилен: избегать runtime CDN и ненужных remote dependencies.
- Пользователь начинающий: объяснять сначала практический результат и ощущение, затем техническую причину.

ОБЯЗАТЕЛЬНО СНАЧАЛА ПРОЧИТАЙ
- @AGENTS.md
- @docs/project-guide/01_HOSTING_AND_STATIC_ARCHITECTURE.md, если путь существует
- @docs/project-guide/03_REPOSITORY_BLUEPRINT.md, если путь существует
- @docs/project-guide/05_CONTACT_FORMS_SHARING_AND_CONTACT_MAP.md, если путь существует
- @docs/project-guide/06_DEEP_INFORMATION_ARCHITECTURE_AND_CONTENT_MAP.md, если путь существует
- @docs/content-source/PROFILE_AND_CASES_DRAFT.md, если путь существует
- @docs/project-guide/08_ROUTE_AND_NUMBERING_REGISTRY.md, если путь существует
- @docs/planning/site-tree.json или фактический copied path, если существует
- package.json и package-lock.json
- astro.config.*
- Tailwind/global CSS config
- src/**/* в объёме, необходимом для карты проекта
- public/**/*
- .gitignore, .editorconfig, .gitattributes
- .github/workflows/deploy.yml
- git status --short и текущую ветку

РЕЖИМ ЭТОГО ЗАПРОСА
ТОЛЬКО READ-ONLY АУДИТ И ПРОЕКТИРОВАНИЕ. НЕ МЕНЯЙ ФАЙЛЫ. НЕ СОЗДАВАЙ ПАПКИ. НЕ УСТАНАВЛИВАЙ/НЕ ОБНОВЛЯЙ ПАКЕТЫ. НЕ ЗАПУСКАЙ DEPLOY. НЕ PUSH/COMMIT. НЕ ПЕЧАТАЙ СЕКРЕТЫ. Если для вывода нужен секрет — укажи только имя переменной и наличие/отсутствие, не значение.

ЗАДАЧА 1 — ФАКТИЧЕСКОЕ СОСТОЯНИЕ
1. Покажи краткий git status и предупреди о незакоммиченных изменениях.
2. Зафиксируй точные версии Node requirement, Astro, Vite, Tailwind, @astrojs/react, React, sitemap, motion/framer-motion и других важных пакетов.
3. Определи:
   - Tailwind 3 + @astrojs/tailwind или Tailwind 4 + @tailwindcss/vite;
   - не смешаны ли два способа;
   - `motion` (`motion/react`) или `framer-motion`;
   - не установлены ли оба;
   - корректно ли React integration подключён;
   - действительно ли output static;
   - site/canonical domain;
   - current ClientRouter/ViewTransitions usage с учётом фактической Astro major version.
4. Перечисли npm scripts и что реально можно запустить.
5. Проверь file naming/code style против project rules.
6. Опиши существующую страницу и технический долг без оценочного драматизма.

ЗАДАЧА 2 — ВОСПРОИЗВОДИМОСТЬ
1. Не меняя файлов, выполни только существующие безопасные команды:
   - npm run build;
   - другие lint/test/check scripts только если они уже объявлены.
2. Не запускай npm update/audit fix/astro upgrade.
3. Зафиксируй точные результаты, warnings и dist structure.
4. Если build падает — остановись на root cause и не маскируй ошибку.

ЗАДАЧА 3 — DEPLOY И TIMEWEB
Проведи read-only review deploy.yml:
- Node 24 explicitly;
- npm ci;
- cache correctness;
- build before deploy;
- exact dist source and remote destination semantics;
- secrets only;
- main-only production trigger;
- concurrency/timeout;
- rsync --delete risk;
- YAML UTF-8 no BOM;
- rollback path;
- no local rsync requirement.

Не предлагай устанавливать Node 24 на Timeweb: Node нужен GitHub runner, production отдаёт dist. Укажи, есть ли хоть одна реальная причина переносить shared account с Ubuntu 18.04 сейчас.

ЗАДАЧА 4 — INFORMATION ARCHITECTURE
Спроектируй расширяемую карту:
- /;
- /uslugi/ со всей переданной иерархией минимум 4 уровня;
- /poleznye-servisy/;
- /blog/ (статьи/новости/обзоры как taxonomy или отдельные hubs — сравни);
- /baza-promptov/;
- /kursy/;
- /navyki-agentov/;
- /prilozheniya/;
- /keisy/;
- /o-nas/;
- /kontakty/;
- /poisk/;
- legal/404/utility routes.

Для URL используй lowercase Latin transliteration. Составь таблицу canonical slugs для спорных слов: сайты, настройка CRM, фотосъёмка, кейсы, email-трекинг, сквозная аналитика и т.д. Slugs после публикации стабильны.

Сравни два route-подхода:
A. Все страницы как явно названные translit .astro files.
B. Уникальные hubs/services — explicit .astro; массовые blog/cases/prompts/courses/apps — content collections + technical [slug].astro.
Рекомендуй один с учётом правила «каждая творческая страница отдельно» и будущих сотен материалов.

ЗАДАЧА 5 — CANONICAL DATA MODEL
Предложи единственный источник для navigation/service tree. Он должен поддерживать:
- id/title/href/slug/parent/order/status;
- summary/accent;
- children/related IDs;
- SEO;
- CTA;
- draft/published state.

Объясни, что строится из данных, а что остаётся индивидуальной page composition. Не создавай universal 40-prop page builder.

ЗАДАЧА 6 — REPOSITORY BLUEPRINT
Сравни фактическую структуру с целевой:
- global/shared components;
- page-specific components;
- data;
- layouts;
- lib;
- styles/tokens;
- assets/public media;
- content collections в `src/content.config.js` (JS поддерживается; не создавать .ts);
- docs/decisions/prompts/qa;
- tests только после отдельного package decision.

Для каждого предлагаемого файла укажи:
- зачем он нужен сейчас;
- создать сейчас / позже / не создавать;
- кто его использует;
- риск overengineering.

ЗАДАЧА 7 — DESIGN SYSTEM БЕЗ УНИФИКАЦИИ СТРАНИЦ
Определи минимальные общие tokens/patterns:
- colors/surfaces/text/domain accents;
- fluid typography;
- spacing/radius/z-index;
- focus states;
- buttons/links;
- motion durations/easings/springs;
- media frame/fallback.

Объясни, какие решения общие, а какие каждая страница получает индивидуально. Перед каждой страницей нужен отдельный concept gate: 2–3 концепции, comparison, choice, только потом code.

ЗАДАЧА 8 — RESPONSIVE, MOTION, PERFORMANCE
Зафиксируй invariants:
- full width;
- fullscreen: 100vh fallback then 100dvh;
- no page-level horizontal scroll 320 → ultrawide;
- w-full normally; w-[100dvw] only deliberate/verified viewport canvas;
- overflow-x-hidden не является root-cause fix;
- transform/opacity first;
- CSS → Motion island → approved GSAP/OGL/WebGL;
- no shared scroll ownership conflict;
- reduced-motion/no-JS/static fallback;
- self-hosted fonts/assets;
- client directives;
- home JS budget and CWV targets.

Определи page-level performance acceptance и какие измерения нельзя честно заявить без browser tooling/production data.

ЗАДАЧА 9 — SEO/CONTENT/TRUST
Проверь и предложи:
- title/description/canonical/OG;
- one H1;
- sitemap/robots/404;
- Person/Organization/Service/Article/Breadcrumb/Course schema только с реальными данными;
- leadership-first About based only on approved profile source;
- four resume-derived case drafts with evidence/permission gates;
- cases/about/contact as trust layer;
- contextual forms on every detail service and direct email/phone/VK placement;
- static-site form/email/SmartCaptcha server-validation boundary;
- share buttons on article/course/master-prompt details without social SDK;
- editorial human approval for blog;
- affiliate disclosure;
- draft noindex;
- payment/static boundary.

ЗАДАЧА 10 — FOUNDATION SCOPE
Составь самый маленький первый implementation slice БЕЗ дизайна главной:
- BaseLayout + page meta contract;
- global CSS/tokens compatible with actual Tailwind version;
- skip/header/footer/breadcrumb foundations;
- canonical navigation data;
- robots;
- 404;
- basic route placeholders только если действительно нужны;
- docs decisions;
- deploy unchanged unless a confirmed defect exists.

Не создавать все будущие страницы пустыми. Не добавлять GSAP/Lenis/WebGL/pagefind/payment/CMS/test libraries сейчас.

ЗАДАЧА 11 — РИСКИ И РЕШЕНИЯ ПОЛЬЗОВАТЕЛЯ
Сделай список решений, которые должен принять владелец:
- target audience/primary offer/CTA;
- final brand palette/fonts;
- URL transliteration;
- dynamic route exception;
- content source;
- assets/cases;
- analytics/consent;
- payment geography/access model;
- services priority.

ФОРМАТ ОТВЕТА
A. Executive verdict: можно ли начинать foundation.
B. Git/build facts.
C. Dependency/version matrix: Keep / Fix now / Upgrade later / Remove only after approval.
D. Deploy/Timeweb verdict.
E. Current repository map.
F. Proposed IA with canonical URLs.
G. Canonical data/content model.
H. Repository blueprint with Now/Later/No.
I. Design/motion/performance contract.
J. First foundation slice exact file plan.
K. Acceptance commands/checklist.
L. Decisions/questions for user (не более 10, только важные).
M. Risks P0/P1/P2.

В конце напиши: «Аудит завершён. Файлы не изменялись. Жду ваших решений и команды на implementation foundation».
```
