# Фактический аудит репозитория deladelishki-site

Дата: 21 июля 2026 г.  
Источник: публичный GitHub `totalsite8/deladelishki-site`, commit `f0d2945`.

## Executive verdict

Проект находится в правильном минимальном состоянии для начала архитектурного foundation-этапа. Локальная и production static-сборка работают. Обновлять зависимости сейчас не требуется.

Это пока Astro starter, а не разработанный портал: одна placeholder-страница, базовый layout и один Tailwind import. Такая исходная точка хороша — почти нет legacy-кода, который пришлось бы переделывать.

---

# Фактический стек

```text
Node local:            24.13.0
npm local:             11.18.0
Astro:                 7.0.7
@astrojs/react:        6.0.1
React / React DOM:     19.2.7
Tailwind CSS:          4.3.2
@tailwindcss/vite:     4.3.2
Framer Motion:         12.42.2
@astrojs/sitemap:      3.7.3
Package manager:       npm
Source language:       JavaScript/Astro
Build:                 static
```

## Зафиксированные решения

- Использовать Tailwind 4 через `@tailwindcss/vite`; не добавлять `@astrojs/tailwind`.
- Использовать существующий пакет `framer-motion` и imports из `framer-motion`.
- Не добавлять параллельно package `motion` без отдельной миграции.
- React islands создаются в `.jsx`, не `.tsx`.
- `tsconfig.json` и `@types/react` не означают переход на TypeScript и не удаляются: они обеспечивают редактор/JSX tooling.
- Node 24 используется локально и в GitHub Actions; Node на Timeweb не нужен для Astro build.

---

# Фактическая структура

```text
.github/workflows/deploy.yml
.vscode/extensions.json
.vscode/launch.json
AGENTS.md
CLAUDE.md -> AGENTS.md (Git symlink)
README.md
astro.config.mjs
package.json
package-lock.json
public/favicon.ico
public/favicon.svg
src/layouts/Layout.astro
src/pages/index.astro
src/styles/global.css
tsconfig.json
```

## Что уже хорошо

- Git clean.
- `main` синхронизирован с `origin/main`.
- Node engine: `>=22.12.0`.
- `site: "https://deladelishki.ru"` задан.
- React и sitemap integrations подключены.
- Tailwind 4 Vite plugin подключён корректно.
- `global.css` импортирует Tailwind 4 через `@import "tailwindcss";`.
- Build успешно создаёт `dist/index.html`, `_astro`, favicons и sitemap.
- `dist`, `.astro`, `node_modules`, `.env` исключены через `.gitignore`.
- Push в `main` успешно разворачивается на Timeweb.

## Текущее состояние контента

- `Layout.astro` имеет фиксированный `<title>DelaDelishki</title>` и ещё не принимает page metadata.
- `index.astro` содержит один H1 `DelaDelishki`.
- Нет header/footer/skip link/navigation.
- Нет design tokens.
- Нет React islands несмотря на установленный Framer Motion.
- Нет content collections/data/navigation tree.
- Нет `robots.txt` и custom 404.
- В production пока Astro default favicon, а не новый logo/mark.
- README — стандартный Astro starter.

Это ожидаемые foundation-задачи, не ошибки текущего setup.

---

# Deploy workflow — факты и улучшения

Текущий pipeline:

```yaml
push main
→ checkout@v4
→ setup-node@v4 node 24
→ npm install
→ npm run build
→ burnett01/rsync-deployments@7.0.1
→ dist/ → secrets.DEPLOY_PATH
```

Он работает, но перед активной разработкой рекомендуется отдельным reviewed commit:

1. заменить `npm install` на `npm ci` для точного `package-lock.json`;
2. добавить `cache: npm` в `setup-node`;
3. добавить `permissions: contents: read`;
4. добавить `timeout-minutes`;
5. добавить `concurrency`, чтобы старый deploy не обогнал новый;
6. оставить `--delete` только при подтверждённом `DEPLOY_PATH`;
7. не выводить secret values;
8. сохранить YAML UTF-8 без BOM.

## Критично для будущего PHP backend

`rsync --delete` удаляет с remote path файлы, которых нет в `dist/`.

Если form API/admin PHP будут размещены внутри этой же production-директории, есть только безопасные варианты:

- backend PHP code входит в controlled build/deploy output, а secrets/database находятся вне public/deploy directory;
- backend разворачивается в отдельный remote path/subdomain отдельным job;
- rsync получает точные excludes после архитектурного решения.

Нельзя просто вручную положить `lead.php`/admin/data в `public_html`, если каждый deploy делает `--delete`: файл может исчезнуть при следующем push.

MySQL/другая внешняя база и private config вне public root не удаляются `rsync`, но это необходимо подтвердить путями Timeweb.

---

# AGENTS.md и CLAUDE.md

Текущий `AGENTS.md` — общий Astro helper, недостаточный для проекта. `CLAUDE.md` является Git symlink на `AGENTS.md`; в Windows он поэтому отображается как link-файл размером 0, что нормально.

После review корневой `AGENTS.md` нужно заменить расширенной проектной инструкцией. Symlink позволит Claude/Kimi-compatible tools видеть те же правила. Не создавать второй противоречащий `CLAUDE.md`.

Строку про `astro dev --background` не использовать как обязательную для новичка. Фактические проверенные команды проекта:

```text
npm run dev
npm run build
npm run preview
```

---

# Astro configuration decisions before foundation

Нужно отдельно утвердить:

- явный `output: "static"` для документирования намерения, хотя default/build уже static;
- RU default + English `/en/` i18n strategy;
- trailing slash policy;
- canonical/hreflang mapping;
- route ID/localized slugs;
- ClientRouter/page transitions: не добавлять до foundation/performance decision;
- content collections в `.js` config;
- image/font pipeline.

---

# Logo факты

Получен `logo_dd.png`:

```text
Dimensions: 1102 × 338
Mode: RGBA
Transparency: yes
Visual: italic uppercase wordmark; deep violet → bright purple/magenta gradient; white DELISHKI
```

Он подходит как brand reference и широкий wordmark, но для production ещё нужны:

- vector/SVG master;
- dark/light/monochrome variants;
- compact mark для mobile header;
- favicon/app-icon variant;
- safe area/minimum size;
- contrast tests;
- alt/title usage;
- confirmation font/licensing if logo typography uses a licensed face.

Не заменять Astro favicon широким PNG целиком: нужен отдельный compact mark.

---

# Текущие P0/P1/P2

## P0 before code generation

- Утвердить i18n URL architecture RU/EN.
- Утвердить replacement AGENTS/project docs.
- Утвердить confirmed IA; recommended pages не публиковать автоматически.
- Уточнить PHP/backend/admin architecture before any form code.
- Уточнить logo variants/font license.

## P1 foundation

- Deploy hardening (`npm ci`, cache, concurrency, permissions, timeout).
- BaseLayout metadata contract.
- route/site data, RU/EN mapping.
- tokens/themes/font variables.
- header/footer/skip/focus.
- robots/404.
- default social metadata/Person source.
- logo asset pipeline.

## P2 after foundation

- home concept/Motion prototype;
- mega-menu;
- forms backend/admin;
- share component;
- content workflows;
- page transitions;
- advanced WebGL/video.

---

# Conclusion

Архив репозитория не нужен: публичный commit успешно прочитан и соответствует локальным выводам пользователя. Следующая безопасная работа должна происходить в отдельной ветке и начинаться не с главной страницы, а с обновления project instructions и read-only/plan foundation.
