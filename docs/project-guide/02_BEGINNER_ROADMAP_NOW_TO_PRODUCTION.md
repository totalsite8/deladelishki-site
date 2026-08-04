# Пошаговый план: от текущего состояния до стабильного production

Для Windows 11, VS Code, Astro static, GitHub Actions и Timeweb shared hosting.

> Абсолютную гарантию «без единого бага» не может дать ни разработчик, ни AI. Практическая цель — не пропускать известные ошибки через обязательные проверки, выпускать страницы по одной и иметь быстрый откат.

**Статус 21.07.2026:** Фазы 0–1 уже выполнены Данилой. Git clean; Node/npm/Git verified; Astro 7/Tailwind 4/React 19/framer-motion 12 actual; build/dev/preview/production deploy successful. Repository inspected through public GitHub; архив не требуется. Следующий этап — Kimi Code payment/connection, затем repository-specific prompt 13.

---

# Как пользоваться этим планом

- Выполняйте только один пронумерованный шаг за раз.
- Если команда завершилась ошибкой, не переходите дальше. Скопируйте полный текст ошибки без секретов.
- Команды ниже рассчитаны на **PowerShell в терминале VS Code**.
- Всё, что находится в `<угловых скобках>`, нужно заменить своим значением. Не вставляйте скобки буквально.
- Команды выполняются из корня репозитория — папки, где лежит `package.json` и `.git`.
- Не работайте непосредственно в `main`: merge в `main` запускает production deploy.

---

# ФАЗА 0. Зафиксировать исходную точку

## Шаг 0.1. Откройте репозиторий

В VS Code: **File → Open Folder → папка `deladelishki-site`**.

Откройте терминал: **Terminal → New Terminal**.

Проверьте текущую папку:

```powershell
Get-Location
Get-ChildItem
```

В списке должны быть как минимум `package.json`, `astro.config.mjs`, `src` и `.github`.

## Шаг 0.2. Проверьте Git до любых изменений

```powershell
git status --short
git branch --show-current
git remote -v
```

Ожидаемо:

- первая команда ничего не выводит — рабочая папка чистая;
- текущая ветка обычно `main`;
- `origin` указывает на ваш GitHub-репозиторий.

Если `git status --short` показывает файлы, не удаляйте их. Сначала выясните, что это за изменения, и сохраните их отдельным commit/stash по осознанному решению.

## Шаг 0.3. Зафиксируйте версии инструментов

```powershell
node -v
npm -v
git --version
```

Ожидаемо: Node начинается с `v24.`. Точную версию запишите в `docs/audit/current-state.md` позднее.

## Шаг 0.4. Обновите локальный `main` безопасно

Только если рабочая папка чистая:

```powershell
git switch main
git pull --ff-only
```

`--ff-only` не создаёт неожиданный merge commit. При нестабильном VPN повторите позже; не меняйте Git-настройки ради одного сетевого сбоя.

## Шаг 0.5. Создайте служебную ветку фундамента

```powershell
git switch -c chore/project-foundation
```

Проверьте:

```powershell
git branch --show-current
```

Должно быть `chore/project-foundation`.

---

# ФАЗА 1. Проверить, что текущий проект воспроизводится

## Шаг 1.1. Не обновляйте зависимости

Сейчас нельзя запускать:

```text
npm update
npm audit fix
npx @astrojs/upgrade
```

Сначала нужен аудит версий и рабочая baseline-сборка.

## Шаг 1.2. Установите ровно версии из lock-файла

Если `package-lock.json` существует:

```powershell
npm ci
```

Что делает команда: удаляет локальный `node_modules` и устанавливает точные версии из lock-файла. Для первого воспроизводимого запуска это правильно, но требуется доступ к npm registry.

При нестабильном VPN:

- не прерывайте работающую установку без необходимости;
- если зависимости уже установлены и сайт запускается, можно сначала выполнить build;
- не переходите на случайные CDN-копии библиотек.

## Шаг 1.3. Посмотрите фактический стек

```powershell
npm list astro @astrojs/react react react-dom tailwindcss @tailwindcss/vite @astrojs/tailwind motion framer-motion @astrojs/sitemap --depth=0
```

Команда может вернуть ненулевой код, если части пакетов нет — это не всегда ошибка. Сохраните вывод. Важно определить:

- версию Astro;
- Tailwind 3 или 4;
- есть ли `@astrojs/react`;
- установлен `motion` или `framer-motion`;
- не установлены ли оба одновременно;
- подключён ли sitemap.

## Шаг 1.4. Выполните production build

```powershell
npm run build
```

Успех означает:

- команда завершилась без красной ошибки;
- появилась папка `dist`;
- в ней есть `index.html`, `_astro` и sitemap-файлы.

Проверьте:

```powershell
Get-ChildItem dist
```

Не добавляйте `dist` в Git, если он уже исключён через `.gitignore`.

## Шаг 1.5. Запустите локальную разработку

```powershell
npm run dev
```

Откройте URL, который покажет терминал — обычно `http://localhost:4321/`.

Проверьте:

- страница открылась;
- в DevTools Console нет ошибок;
- стили Tailwind применяются;
- после проверки остановите сервер `Ctrl+C`.

## Шаг 1.6. Проверьте именно production build

```powershell
npm run preview
```

Откройте показанный URL. Это ближе к тому, что попадёт на Timeweb. После проверки — `Ctrl+C`.

**Gate 1:** `npm ci`, `npm run build`, `npm run dev` и `npm run preview` работают либо все ошибки зафиксированы и понятны. Пока gate не пройден, дизайн не начинаем.

---

# ФАЗА 2. Подключить проектные инструкции

## Шаг 2.1. Скопируйте комплект

Из скачанного архива `deladelishki-kimi-kit.zip` скопируйте в корень репозитория:

```text
AGENTS.md
.kimi-code/
```

Документацию можно положить в:

```text
docs/project-guide/
```

Папку `prompts/` — в:

```text
docs/prompts/
```

Публичный профиль/кейсы — в:

```text
docs/content-source/PROFILE_AND_CASES_DRAFT.md
```

Файлы `docs/05...`–`docs/13...` копируются вместе с project guide. `planning/site-tree.json` и `planning/locales.json` поместите в `docs/planning/`. Содержимое `templates/` — в `docs/templates/`; `brand-source/` — как reference assets, не как автоматические production files.

Не заменяйте существующие файлы молча. Если в репозитории уже есть `AGENTS.md` или `.kimi-code`, сначала сравните содержимое.

## Шаг 2.2. Проверьте, что секреты не попали в изменения

```powershell
git status --short
```

Не должно быть:

- `.env`;
- private key;
- файлов с паролями;
- выгрузки логов Timeweb;
- Kimi API key;
- содержимого GitHub Secrets.

## Шаг 2.3. Добавьте только документацию

```powershell
git add AGENTS.md .kimi-code docs
git diff --cached --stat
git diff --cached
```

Прочитайте diff. Затем:

```powershell
git commit -m "docs: add project workflow and agent instructions"
```

Не push/merge, пока не проверите содержимое.

---

# ФАЗА 3. Read-only аудит стека и репозитория

Эта фаза выполняется после подключения и оплаты Kimi Code. Отдельную инструкцию по покупке и VS Code мы подготовим следующим этапом.

## Шаг 3.1. Дайте Kimi master prompt

Используйте:

```text
docs/prompts/00-foundation/13-actual-repo-foundation-plan.md
```

Public repository audit is already complete. This first Kimi turn is still read-only and produces an implementation plan; Kimi must not change files.

## Шаг 3.2. Получите обязательный отчёт

Kimi должен зафиксировать:

- confirmed actual versions against package-lock;
- Tailwind 4/@tailwindcss-vite remains unchanged;
- `framer-motion` import style remains unchanged;
- `output: "static"`;
- React integration;
- sitemap/site URL;
- структуру `src`;
- scripts;
- deploy workflow;
- Windows/Timeweb ограничения;
- current build status;
- предложения без установки библиотек.

## Шаг 3.3. Не принимайте массовое обновление автоматически

### Tailwind

- Actual: Tailwind 4.3.2 + `@tailwindcss/vite`.
- Keep `@import "tailwindcss";`.
- Do not add `@astrojs/tailwind` or Tailwind 3 config.

### Motion

- Actual: `framer-motion@12.42.2`.
- Use imports from `framer-motion`.
- Do not add package `motion`/`motion/react` without separate migration.

### Astro

- Не обновлять major-версию одновременно с созданием главной.
- Сначала стабильный foundation commit; upgrade — отдельная ветка с build regression check.

**Gate 2:** утверждён письменный отчёт «оставить / обновить позже / исправить сейчас» по каждому элементу стека.

---

# ФАЗА 4. Утвердить архитектуру до страниц

## Шаг 4.1. Выберите правила URL

Рекомендуемая схема:

```text
/uslugi/
/uslugi/razrabotka/
/uslugi/razrabotka/landing-page/
/uslugi/marketing/analitika/email-treking/
/poleznye-servisy/
/blog/
/baza-promptov/
/kursy/
/navyki-agentov/
/prilozheniya/
/keisy/
/o-nas/
/kontakty/
```

Важно один раз выбрать варианты транслита: `analitika`, `fotosyomka`, `email-treking`, `keisy`. После публикации slug не менять без redirect plan.

## Шаг 4.2. Выберите два типа страниц

1. **Уникальные хабы и услуги:** отдельные `.astro` композиции с латинским транслитом.
2. **Массовый контент:** blog/cases/prompts/courses/apps могут использовать content collections и технический `[slug].astro`, при этом публичные slugs остаются транслитом.

Это рекомендуемое исключение из правила имён: `[slug].astro` — не публичное имя, а один build-time шаблон. Без него сотни статей потребуют сотни копий кода. Решение должно быть утверждено вами до реализации.

## Шаг 4.3. Утвердите repository blueprint

См. `docs/03_REPOSITORY_BLUEPRINT.md`.

## Шаг 4.4. Утвердите общий брендовый фундамент

До главной нужны только общие системы:

- BaseLayout;
- SEO props;
- header/footer/skip link;
- focus states;
- typography/color/spacing/motion tokens;
- canonical navigation data;
- media component/fallback conventions;
- `robots.txt`;
- 404;
- базовая error-free static build.

Не создавайте универсальный «конструктор всех страниц». Страницы должны иметь отдельную композицию.

**Gate 3:** foundation работает и не содержит hero/WebGL/сложных страниц.

---

# ФАЗА 5. Универсальный цикл для каждой страницы

Повторять без исключений.

## Шаг 5.1. Начните с обновлённого main

После merge предыдущей страницы:

```powershell
git switch main
git pull --ff-only
git switch -c page/<korotkoe-imya>
```

Пример:

```powershell
git switch -c page/glavnaya
```

## Шаг 5.2. Запустите page swarm и prompt концепции

Откройте соответствующий файл из `docs/prompts/`. Для коммерчески важной страницы prompt сначала вызывает:

```text
/skill:page-swarm "<route>" "<page_type>"
```

Swarm/последовательные streams готовят H1, offer, CTA, блоки, form/contact/share, title/description/schema, internal links и proof gaps. Затем Kimi предлагает 2–3 визуальные концепции и останавливается.

Kimi не должен выдавать выдуманные search volume, достижения, отзывы или legal claims.

Вы выбираете по ощущениям:

- какую эмоцию вызывает;
- насколько быстро понятна;
- подходит ли контенту;
- насколько отличается от других страниц;
- что происходит на мобильном;
- сколько это стоит в производительности и поддержке.

## Шаг 5.3. Зафиксируйте выбранную концепцию

Попросите Kimi сохранить короткое решение в:

```text
docs/decisions/pages/<route-name>.md
```

Там должны быть:

- выбранный вариант;
- отклонённые варианты;
- sections;
- signature interaction;
- mobile/reduced fallback;
- assets/copy placeholders;
- performance limits.

## Шаг 5.4. Реализуйте статическую версию

Порядок:

1. semantic HTML/Astro;
2. реальный heading structure;
3. Russian copy/placeholders;
4. meta title/description/canonical;
5. responsive layout 320 → ultrawide;
6. keyboard/focus;
7. изображения с размерами;
8. local build.

На этом шаге страница должна быть полноценной без Motion.

## Шаг 5.5. Добавьте interaction island

Только после статической версии:

- один владелец эффекта;
- `client:load` только для сразу нужных controls;
- `client:visible` ниже первого экрана;
- reduced-motion/no-JS fallback;
- cleanup listeners/observers;
- CSS/transform/opacity first.

## Шаг 5.6. Выполните локальную проверку

```powershell
npm run build
npm run preview
```

В браузере вручную:

- 320×568;
- 375×667;
- 768×1024;
- 1024×768;
- 1440×900;
- 1920×1080;
- 2560×1080 или другой ultrawide;
- keyboard Tab/Shift+Tab/Enter/Escape;
- DevTools → Rendering → prefers-reduced-motion;
- Slow 4G / Disable cache;
- Console без errors/warnings;
- страница не двигается влево-вправо.

## Шаг 5.7. Запустите audit skill

```text
/skill:audit-page "/route/" "report-only"
```

Сначала исправляются P0, затем P1. P2 можно вынести в polish backlog.

## Шаг 5.8. Проверьте Git diff

```powershell
git status --short
git diff --stat
git diff
```

Проверьте:

- нет секретов;
- нет `dist`/`node_modules`;
- нет случайного изменения deploy workflow;
- нет новой зависимости без решения;
- нет выдуманных отзывов/метрик;
- page metadata заполнены;
- scope — только текущая страница и необходимые shared primitives.

## Шаг 5.9. Commit и push ветки

```powershell
git add <перечислите нужные файлы>
git commit -m "feat: add <название страницы> page"
git push -u origin page/<korotkoe-imya>
```

Не используйте `git add .`, пока не научитесь уверенно читать status/diff.

## Шаг 5.10. Pull Request

На GitHub:

1. создайте PR в `main`;
2. прочитайте Files changed;
3. убедитесь, что build checks зелёные;
4. merge только после review;
5. merge запустит production deploy;
6. дождитесь зелёного workflow.

## Шаг 5.11. Production smoke test

После deploy:

- открыть URL в приватном окне;
- hard refresh;
- проверить mobile;
- проверить Console/Network;
- проверить прямую ссылку на страницу;
- проверить header/breadcrumb/back;
- проверить sitemap после добавления route;
- проверить unknown URL/404;
- проверить CTA;
- записать deploy commit.

Только после этого страница считается завершённой.

---

# ФАЗА 6. Рекомендуемый порядок страниц

1. Project instructions + deploy hardening + Astro 7/Tailwind 4/i18n/tokens foundation.
2. Header/footer/language switch/SEO/robots/404.
3. Главная.
4. О нас → Данила profile; team profiles only when real content exists.
5. Контакты UI; PHP backend/form submission remains separate until ADR.
6. Услуги — hub.
7. Confirmed service branches one page at a time: Разработка, Дизайн, Маркетинг/Аналитика, AI, Фотосъёмка, Обучение. Danila chooses sequence; no optional leadership page is promoted automatically.
8. After a relevant service page is production-ready, create its case detail and add reciprocal links. Cases hub after real case details exist.
9. Блог + article template + scheduled AI-draft PR/manual approval workflow.
10. Полезные сервисы + affiliate disclosure.
11. База промптов + filter architecture.
12. Курсы — catalog/detail UI, then separate payment/access ADR.
13. Skills/навыки для агентов.
14. Приложения when real products/assets exist.
15. Поиск.
16. Privacy/terms/refund/affiliate/legal pages based on real data flows.
17. PHP leads backend pilot + one personalised service form, then replicate.
18. Общий RU/EN release audit.

Причина такого порядка: первые шесть страниц дают понятный бренд, доверие и контакт. Сложные базы, оплата и приложения строятся после стабильного content/route фундамента.

---

# ФАЗА 6.5. Контакты, формы и share

До разработки `LeadForm`:

1. Выполнить `prompts/00-foundation/08-contact-forms-email-smartcaptcha-adr.md`.
2. Сначала проверить primary candidate: PHP API + MySQL + read-only admin на Timeweb.
3. Решить deploy isolation, потому что current rsync uses `--delete`.
4. Настроить private config/DB/auth/rate limit/server validation.
5. Добавить lead storage, email и Telegram; CRM later.
6. Создать SmartCaptcha account/keys только на captcha-этапе; server key никогда не передавать Kimi/в чат/Git.
7. Только затем подключить одну personalised service form pilot.
8. Проверить valid/invalid/captcha blocked/timeout/storage/email/Telegram failure/duplicate/admin/mobile/a11y.

Share buttons реализуются отдельным prompt без social SDK и ставятся на article, course detail, master prompt, published case и published app.

# ФАЗА 7. Content-системы

## Блог

Не делать автоматический auto-publish из собранных источников.

Безопасный поток:

```text
сбор ссылок → draft → указание источников → фактчекинг → проверка цитат/прав
→ human approval → commit/PR → GitHub Actions → публикация
```

## База промптов

Сначала JSON/Markdown collection + client filter + URL params. Только после измерения объёма решать вопрос внешнего search/vector backend.

## Курсы

Статический сайт может показывать каталог и отправлять в hosted checkout, но не может хранить секреты, принимать webhook и безопасно выдавать доступ. До оплаты нужен ADR.

## Полезные сервисы

Нужны disclosure, `rel="sponsored nofollow"`, честная маркировка выгоды и события outbound-click без скрытого перенаправления.

---

# ФАЗА 8. Финальная production-проверка

## Контент

- нет lorem ipsum;
- нет выдуманных кейсов;
- все CTA ведут на существующий следующий шаг;
- контакты актуальны;
- alt-тексты описывают смысл;
- даты/автор/обновление статей корректны.

## SEO

- уникальные title/description;
- один H1;
- canonical HTTPS без www;
- sitemap;
- robots;
- 404;
- OG image;
- structured data без выдуманных полей;
- noindex для draft/служебных страниц.

## UX/a11y

- keyboard-only;
- visible focus;
- 44×44 touch targets;
- contrast;
- reduced motion;
- нет hover-only content;
- формы имеют labels/errors/success.

## Performance

- mobile LCP target ≤2.5 s;
- CLS ≤0.1, внутренняя цель ≤0.05;
- INP ≤200 ms;
- no page-level horizontal scroll;
- hero poster не задерживается JS;
- below-fold media lazy;
- video muted/playsinline/poster и не обязательно для понимания;
- WebGL имеет static fallback и не блокирует main path.

## Infrastructure

- GitHub Actions зелёный;
- `dist` deploy path верный;
- HTTPS/www redirect;
- SSL auto-renew;
- Timeweb logs/backups;
- секреты только в GitHub Secrets;
- documented rollback;
- production smoke test.

---

# ФАЗА 9. Откат, если production сломан

Не используйте `git reset --hard` и force push.

Самый простой вариант для новичка:

1. Откройте merged PR на GitHub.
2. Нажмите **Revert**.
3. Создайте revert PR.
4. Merge revert PR в `main`.
5. GitHub Actions развернёт предыдущую рабочую версию.

Если кнопки Revert нет, попросите Kimi/меня составить безопасную команду `git revert` по конкретному commit hash. Не вставляйте случайный hash.

---

# Критерий «проект готов»

Проект готов к публичному запуску, когда:

- все P0 и P1 release-аудита закрыты;
- ключевые user journeys проходят вручную;
- build/deploy воспроизводим;
- есть rollback;
- content/legal/payment ограничения честно реализованы;
- каждая страница прошла собственный concept → static → motion → audit → production smoke цикл;
- нет известных blocking/high bugs.
