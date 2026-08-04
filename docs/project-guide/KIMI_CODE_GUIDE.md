# deladelishki.ru × Kimi Code
## Общий паттерн, инструкция, рабочий процесс и первый промпт

Дата подготовки: 14 июля 2026 г.

---

## 0. Что подготовлено

Этот комплект переводит два приложенных исследования (`claude.pdf` и `grok.pdf`) из набора идей в рабочий контракт для разработки.

Файлы комплекта:

- `AGENTS.md` — главная проектная инструкция для Kimi Code и других coding agents;
- `.kimi-code/skills/page-swarm/SKILL.md` — рой из шести исследовательских ролей для content/SEO/UX/proof/performance;
- `.kimi-code/skills/page-concept/SKILL.md` — обязательные 2–3 концепции новой страницы до кода;
- `.kimi-code/skills/deladelishki-ui/SKILL.md` — UI/motion/performance правила;
- `.kimi-code/skills/vertical-slice/SKILL.md` — реализация одной страницы до полного результата;
- `.kimi-code/skills/audit-page/SKILL.md` — аудит страницы перед релизом;
- `docs/01_HOSTING_AND_STATIC_ARCHITECTURE.md` — глубокий разбор Timeweb/Ubuntu 18.04;
- `docs/02_BEGINNER_ROADMAP_NOW_TO_PRODUCTION.md` — пошаговый путь для Windows/VS Code;
- `docs/03_REPOSITORY_BLUEPRINT.md` — целевая структура репозитория;
- `docs/05_CONTACT_FORMS_SHARING_AND_CONTACT_MAP.md` — forms/email/SmartCaptcha/share architecture;
- `docs/06_DEEP_INFORMATION_ARCHITECTURE_AND_CONTENT_MAP.md` — исправленная и расширенная IA;
- `docs/07_SEO_COPY_SCHEMA_MATRIX.md` — сводная RU-draft карта H1/title/description/schema/forms/share для 89 routes/templates;
- `docs/08_ROUTE_AND_NUMBERING_REGISTRY.md` — каноническая нумерация и routes;
- `docs/09_ACTUAL_REPOSITORY_AUDIT_2026-07-21.md` — фактический Astro 7 repository audit;
- `docs/10_LOGO_FONT_AND_DUAL_THEME_DIRECTION.md` — supplied logo/Halo/dual-canvas direction;
- `docs/11_APPROVED_PRODUCT_BRIEF_2026-07-21.md` — ответы Данилы как source of truth;
- `docs/12_PHP_LEADS_BACKEND_CANDIDATE.md` — PHP/MySQL/read-only admin candidate;
- `docs/13_I18N_RU_EN_ARCHITECTURE.md` — RU root + EN architecture;
- `planning/site-tree.json`/`locales.json` — machine-readable IA/i18n;
- `content-source/PROFILE_AND_CASES_DRAFT.md` — professional profile and four draft-cases;
- `prompts/00-foundation/01-repository-audit-and-architecture.md` — новый master prompt;
- `prompts/PROMPTS_INDEX.md` — индекс всех page prompts;
- `FIRST_PROMPT.md` — короткий указатель на правильный первый запуск;
- `GLOBAL_AGENTS.md.example` — универсальный контракт безопасности.

Установка в репозиторий выполняется на Windows в отдельной ветке `chore/project-foundation`: `AGENTS.md` — в корень, `.kimi-code/skills` — в `.kimi-code/skills`, содержимое `docs/` — в `docs/project-guide/`, содержимое `prompts/` — в `docs/prompts/`. Точные PowerShell/Git шаги находятся в `docs/02_BEGINNER_ROADMAP_NOW_TO_PRODUCTION.md`; не копируйте комплект непосредственно в production-ветку `main`.

## 0.1. Фактическое обновление от 21 июля 2026

Публичный репозиторий проверен. Реальный стек: Astro 7.0.7, Tailwind 4.3.2 через `@tailwindcss/vite`, React 19.2.7, `framer-motion` 12.42.2, Node 24.13.0. Build/dev/preview/deploy работают. Использовать imports из `framer-motion`; пакет `motion` не устанавливать. RU + EN — first release. `О нас` заменяет личный top-level About; Данила получает `/o-nas/danila-podshivalov/`. Формы ориентируются на PHP lead API/read-only admin на Timeweb, email + Telegram, CRM later. Supplied service list остаётся основой; recommended leadership topics не становятся top priorities автоматически.

Подробности: approved product brief и actual repository audit.

Проектные правила должны находиться в репозитории, а не в глобальном профиле. У Kimi Code глобальная инструкция может жить в `~/.kimi-code/AGENTS.md`, проектная — в корневом `AGENTS.md` или `.kimi-code/AGENTS.md`; проектные Skills сканируются из `.kimi-code/skills/` и имеют более высокий приоритет, чем пользовательские [1](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/sub-agents.html) [2](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).

---

# 1. Главное из двух исследований

## 1.1. Что точно стоит взять

Оба исследования сходятся в правильном основном выводе:

> **Премиальность создаётся не количеством эффектов, а цельностью системы: сильная типографика, пространство, один осмысленный WOW-момент, плавная реакция интерфейса и безупречная скорость.**

Практический набор для проекта:

1. **Scrollytelling с целью.** Скролл раскрывает смысл и ведёт по главам, а не просто двигает декорации.
2. **Кинетическая типографика.** Изменение веса/интервала/позиции помогает иерархии, но H1 остаётся читаемым без JS.
3. **Bento/spatial grid.** Хорош для хабов услуг, сервисов и базы промптов; на мобильном превращается в обычную вертикальную сетку.
4. **Dark-first и доменные акценты.** Тёмная основа может объединить digital/AI/визуал, а категории получают собственные акцентные токены.
5. **Glass только как указатель глубины.** Навигация, overlay, modal — не каждая карточка.
6. **React islands.** Интерактивность локализуется; основной контент остаётся Astro/HTML.
7. **Progressive enhancement.** Сайт работает без WebGL, видео, smooth scroll и даже без клиентского JS для ключевого пути.
8. **Mobile-first и reduced motion.** Мобильная версия — отдельное осознанное поведение, а не сжатый desktop.
9. **Контентные разделы легче лендинга.** Блог и статьи не должны платить JS-цену главной страницы.
10. **Одна система для глубокой вложенности.** Навигация, breadcrumbs, страницы и related links строятся из канонического дерева данных.

## 1.2. Что из исследований нужно скорректировать

| Идея из исследований | Решение |
|---|---|
| Lenis — обязательный базис | **Нет.** Начать с native scroll + CSS/Motion. Добавлять Lenis только после теста прототипа и не сглаживать touch-scroll по умолчанию. |
| GSAP + Lenis + Motion на главной сразу | **Не начинать так.** Три владельца скролла усложняют cleanup, accessibility и debugging. Motion достаточно для первого среза; GSAP — только для одной доказанно сложной timeline. |
| 5–7 pinned полноэкранных глав | **Слишком рискованно для MVP.** Это увеличивает длину, motion fatigue и проблемы iOS/keyboard. Первый релиз: одна scroll-expansion глава, дальше нормальный поток. |
| Горизонтальный pinned scroller | **Исключить.** Он конфликтует с запретом горизонтального скролла и неудобен для trackpad/keyboard/mobile. |
| WebGL/Spline/particles в первом hero | **Отложить.** Сначала оптимизированный poster/image и измеренная Motion-анимация. WebGL допускается после performance gate. |
| Custom cursor | **P2-полировка.** Не заменяет native cursor и не входит в фундамент. |
| `overflow-x-hidden` на всех блоках | **Не исправление.** Это маскирует ошибку и может скрыть focus/контент. Сначала найти источник overflow. |
| `w-[100dvw]` как общий стандарт | **Не использовать для обычных контейнеров.** Безопаснее `width: 100%`; viewport-width units могут конфликтовать со scrollbar/transforms. |
| Animate `clip-path` как основной дешёвый приём | **Профилировать.** Для первого раскрытия предпочтительнее `transform: scale()` + radius/opacity; clip-path может быть дороже. |
| Infinite scroll блога | **Не по умолчанию.** Pagination/«Показать ещё» лучше для навигации, URL, возврата и SEO. |
| Stripe redirect = полностью готовые платные курсы без backend | **Только оплата, не защищённый доступ.** Entitlements, webhooks, возвраты и личный кабинет требуют hosted LMS/MoR или серверной части. |
| `<ViewTransitions>` как актуальный компонент Astro | **Проверить версию.** В Astro v6 официальный migration guide требует заменить `ViewTransitions` на `ClientRouter` [3](https://docs.astro.build/en/guides/upgrade-to/v6/). |
| Motion package/import | **Фактически установлен `framer-motion@12.42.2`.** Использовать imports из `framer-motion`; не добавлять параллельно `motion`/`motion/react` без отдельной миграции. |
| CLS должен быть ровно 0 | **Хорошая внутренняя цель, но release threshold — ≤0.1.** Для проекта разумная цель ≤0.05. |
| «80–85% CSS» как KPI | **Не измерять архитектуру процентами.** Правильная метрика — сколько контента работает без hydration и какой реальный JS/performance budget. |

Motion поддерживает уменьшение initial bundle через `LazyMotion`/`m`, но это нужно применять только после анализа фактического бандла, а не механически [5](https://motion.dev/docs/react-reduce-bundle-size). Lenis остаётся допустимым инструментом, но даже его официальный README описывает отдельную интеграцию с GSAP ticker — это дополнительная система, а не бесплатная строка кода [6](https://github.com/darkroomengineering/lenis).

---

## 1.3. Итог по Timeweb и Ubuntu 18.04

Менять Ubuntu или устанавливать Node.js на Timeweb сейчас **не нужно**. Актуальный Node 24 выполняется на GitHub Actions, Astro генерирует `dist/`, а shared hosting только отдаёт статические файлы. Документация Timeweb прямо указывает, что Node на виртуальном хостинге доступен только как консольная утилита и не может работать как постоянная web-служба; для Ubuntu 18.04 рекомендован Node 16, поэтому переносить современную сборку на hosting нельзя и незачем [11](https://timeweb.com/ru/docs/virtualnyj-hosting/prilozheniya-i-frejmvorki/ispolzovanie-node-js-i-npm/).

Публичная проверка 14 июля 2026 г. показала: HTTP→HTTPS и www→без www работают; TLS 1.2/1.3 активны; Astro CSS сжимается gzip и кэшируется год; sitemap существует. Пока отсутствуют `robots.txt` и custom 404, а security headers требуют отдельного вопроса поддержке. Timeweb отдаёт статические assets через Nginx, поэтому `.htaccess` не управляет их cache/security headers [12](https://timeweb.com/ru/docs/virtualnyj-hosting/obshchaya-informaciya-o-hostinge/osobennosti-tekhnicheskogo-resheniya/).

Полный разбор и checklist: `docs/01_HOSTING_AND_STATIC_ARCHITECTURE.md`.

---

# 2. Общий паттерн будущего сайта

## 2.1. Формула продукта

```text
PORTAL → HUB → DETAIL → RELATED PATH → CTA
```

- **Portal:** главная быстро распределяет человека по крупным намерениям.
- **Hub:** раздел объясняет область и показывает дочерние направления.
- **Detail:** услуга/статья/промпт/курс решает одну конкретную задачу.
- **Related path:** предлагает логичное продолжение, не тупик.
- **CTA:** ведёт к одному следующему действию.

Это масштабируется лучше, чем уникальная «вау-страница» для каждого URL.

## 2.2. Четыре шлюза главной

На главной не следует равноправно показывать несколько десятков ссылок. Рекомендуемая группировка:

1. **Услуги** — разработка, дизайн, маркетинг, AI, фотосъёмка, обучение.
2. **Знания** — блог, база промптов, курсы.
3. **Инструменты** — полезные сервисы и skills для агентов.
4. **Продукты** — Android/iOS-приложения и будущие собственные продукты.

В шапке можно оставить 5–7 ясных пунктов, а глубину раскрывать через полноэкранное mega-menu, поиск и breadcrumbs. Не нужно превращать header в карту всего дерева.

## 2.3. Рекомендуемая карта маршрутов

```text
/
/uslugi/
/uslugi/razrabotka/
/uslugi/razrabotka/landing-page/
/uslugi/marketing/
/uslugi/marketing/analitika/
/uslugi/marketing/analitika/email-treking/
...
/poleznye-servisy/          # партнёрские и полезные сервисы
/blog/
/blog/stati/
/blog/novosti/
/blog/obzory/
/blog/[slug]/               # technical build template after approval
/baza-promptov/
/baza-promptov/[slug]/
/kursy/
/kursy/[slug]/
/navyki-agentov/
/navyki-agentov/[slug]/
/prilozheniya/
/prilozheniya/[slug]/
/keisy/
/keisy/[slug]/
/o-nas/
/o-nas/danila-podshivalov/
/o-nas/[slug]/              # only approved real team members
/kontakty/
/poisk/
/en/...                     # English localized paths by stable route ID
```

Все вручную названные page-файлы и публичные slugs используют латиницу-транслит. `[slug].astro` — допустимое только после утверждения техническое исключение для массового контента; оно не видно пользователю и позволяет не копировать template для сотен статей/промптов.

Почему нужны **Кейсы, О нас/команда и Контакты**: без доказательств, ответственного лица/команды и понятного контакта портал будет выглядеть технологично, но продавать слабее. Кейсы важнее WebGL.

## 2.4. Каноническое дерево данных

Минимальная модель узла:

```js
{
  id: "marketing-analitika",
  title: "Аналитика",
  slug: "analitika",
  parentId: "marketing",
  summary: "...",
  order: 20,
  status: "published", // draft | published | archived
  accent: "marketing",
  children: [],
  relatedIds: [],
  seo: {
    title: "...",
    description: "..."
  },
  cta: {
    label: "Обсудить аналитику",
    href: "/kontakty/?tema=analitika"
  }
}
```

Из одного источника должны строиться:

- desktop mega-menu;
- mobile accordion/bottom sheet;
- breadcrumbs;
- hub cards;
- child/sibling navigation;
- related services;
- sitemap/static paths, где это оправдано.

Не следует держать отдельные вручную синхронизируемые массивы в `Header`, `Footer` и каждой странице.

## 2.5. Универсальные обязанности, но индивидуальная композиция

Каждая страница разрабатывается отдельно: сначала 2–3 концепции, затем ваш выбор и только потом код. Общими остаются брендовые tokens, навигация, accessibility, SEO и характер движения. Section geometry, signature interaction и scroll rhythm подбираются под содержание конкретной страницы.

Следующий список — не одинаковый шаблон блоков, а обязанности страницы:

1. **Context:** skip link, header, breadcrumbs.
2. **Hero:** eyebrow, H1, обещание, primary CTA, secondary CTA, визуал.
3. **Orientation:** кому подходит, что внутри или дочерние направления.
4. **Proof/value:** реальный кейс, результат, демонстрация или полезный материал.
5. **Process/exploration:** этапы, функции, фильтры или главы.
6. **Related:** соседние услуги, статьи, промпты, курсы.
7. **Final CTA + Footer:** одно следующее действие.

### Шаблон страницы услуги

```text
Breadcrumb
H1 + результат + CTA
Кому и когда подходит
Что входит / deliverables
Как проходит работа
Доказательство / кейс
FAQ (только реальные вопросы)
Связанные услуги/материалы
CTA
```

### Шаблон статьи

```text
Категория + дата + автор + read time
H1 + лид
Оглавление
Семантический article body
Источники / обновление
Связанные статьи + релевантные услуги/промпты
CTA без агрессивной вставки в каждый экран
```

## 2.6. Паттерн главной «Живой портал»

### Слой 1 — всегда работающая база

- Полноэкранный hero: `100vh` fallback + `100dvh`.
- Один понятный H1 и короткое позиционирование.
- Primary CTA и ссылка «Исследовать портал».
- Небольшой центральный poster/image с заданным aspect-ratio.
- Навигация и контент работают без JS.

Черновой смысл оффера, не финальный текст:

> «Цифровые продукты, бренды и AI-системы — от идеи до запуска».

Его нужно заменить после определения основной аудитории и коммерческого приоритета.

### Слой 2 — единственный macro-WOW первого релиза

```text
scroll chapter 180–240dvh
└── sticky stage 100dvh
    ├── visual: scale примерно 0.28 → 1
    ├── radius: крупный → мягко уменьшается
    ├── background/foreground copy crossfade
    └── progress cue
```

Реализация: один React/Motion island с `useScroll`/`useTransform`; transform/opacity как база. В reduced-motion — обычный крупный poster без sticky choreography. На слабом мобильном устройстве — более короткая дистанция или статический блок.

### Слой 3 — обычный вертикальный поток

- четыре шлюза;
- шесть направлений услуг;
- кейс/доказательство;
- свежие материалы;
- финальный CTA.

Не нужно держать каждый из шести разделов pinned на весь экран. WOW уже произошёл в portal expansion; дальше интерфейс должен быстро отдавать содержание.

## 2.7. Motion grammar

| Уровень | Инструмент | Применение |
|---|---|---|
| 0 | HTML/Astro | Контент, структура, ссылки, формы, SEO |
| 1 | CSS/Tailwind | Hover/focus, простые reveal, transitions, media queries |
| 2 | Motion island | Scroll expansion, menu state, filter layout, gestures |
| 3 | GSAP | Одна сложная timeline, только после отдельного решения |
| 4 | Canvas/OGL/WebGL | Уникальный брендовый визуал с fallback, после performance gate |

Общий ритм:

- micro feedback: 160–320 ms;
- reveal: 400–700 ms;
- крупный scroll-linked эффект привязан к прогрессу, а не к длинному autoplay;
- 2–3 easing/spring-токена на весь проект;
- один эффект имеет одного владельца;
- reduced motion не теряет content/state.

## 2.8. Leadership-first личный бренд

Главная роль Данилы — не «универсальный исполнитель» и не соискатель, а **руководитель маркетинга и digital-проектов, который понимает исполнение изнутри**. Approved public facts: marketing/advertising/design/sites/scripts с 17 лет; 18+ years; до 20 человек в прямом подчинении. Hands-on опыт подтверждает способность ставить задачи, собирать команду, видеть зависимости между сайтом/рекламой/CRM/аналитикой и оценивать эффективность.

Основная формула:

> Выстраиваю маркетинг как управляемую систему: от исследования, стратегии и команды до сайта, рекламы, CRM, аналитики и автоматизации.

Top-level `/o-nas/` показывает подход и реальную team model. Подробная leadership biography находится на `/o-nas/danila-podshivalov/`, не копирует HR-резюме и включает capability map, отрасли, cases, принципы и semi-3D `Другие грани`. Формулировка: открыт к диалогу о по-настоящему интересных проектах.

Четыре draft-case из резюме:

1. маркетинг с нуля для двух premium-брендов мебели;
2. запуск B2B-направления компрессорного оборудования;
3. создание FoodTech-бренда с нуля;
4. SEO/performance/репутация/партнёрская сеть бренда отделочных материалов.

Названия компаний, логотипы, screenshots и показатели публикуются только после proof/permission gate.

## 2.9. Формы и связь

Каждая детальная услуга получает contextual form `Расскажите о задаче` и прямые альтернативы:

- `totalsite@yandex.ru`;
- `+7 903 727-51-31`;
- `vk.com/id990254`.

Форма персонализируется по услуге и собирает имя, контекст задачи, preferred channel и Russian phone/email (минимум один), consent/captcha и canonical form/service/source IDs. Budget в основном рассматривается для `Под ключ`; срок — только где релевантен. Phone mask не заменяет server validation.

Primary candidate: static Astro pages + isolated PHP/MySQL leads API/read-only admin on Timeweb; email + Telegram, CRM later. Current rsync `--delete` must not erase backend files. SmartCaptcha server key, DB/SMTP/Telegram/admin secrets never enter browser/Git/chat. До ADR форма не имитирует success.

## 2.10. Share buttons

Обязательны на article detail, course/learning detail, master prompt, published case и published app. Реализация без social SDK: native Web Share, copy canonical link, Telegram, VK; mobile wrap без page overflow, keyboard/focus и `aria-live` feedback.

## 2.11. Page swarm

Перед концепциями коммерческой страницы запускаются шесть независимых streams:

1. search intent/market language;
2. leadership-first offer/copy;
3. SEO/meta/schema/internal links;
4. UX/conversion/form/share;
5. proof/permission/compliance;
6. accessibility/motion/performance.

Main agent не склеивает сырые ответы, а устраняет противоречия и выдаёт один доказуемый brief. Если sub-agents недоступны, streams выполняются последовательно с честным указанием этого факта.

---

# 3. Общая настройка Kimi Code

## 3.1. Не один гигантский глобальный промпт, а три слоя

1. **Глобальный `~/.kimi-code/AGENTS.md`:** только универсальная безопасность, Git, секреты, честные проверки. Пример — `GLOBAL_AGENTS.md.example`.
2. **Корневой `AGENTS.md` репозитория:** продукт, стек, архитектура, UI, performance, definition of done. Готовый файл включён.
3. **Проектные Skills:** узкие повторяемые процессы. Готовы `page-swarm`, `page-concept`, `deladelishki-ui`, `vertical-slice`, `audit-page`.

Это эффективнее, чем постоянно вставлять 10 страниц требований: Kimi Code умеет автоматически подбирать Skill по `description/whenToUse`, а ручной запуск делается командой `/skill:<name>` [2](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).

## 3.2. Как запускать Skills

```text
/skill:page-swarm "/uslugi/marketing/analitika/" "service_hub"

/skill:page-concept "/uslugi/marketing/analitika/" "Хаб аналитики с дочерними услугами"

/skill:vertical-slice "/uslugi/marketing/analitika/" "Реализовать выбранную концепцию хаба"

/skill:audit-page "/" "report-only"

/skill:deladelishki-ui "Hero главной страницы"
```

`vertical-slice` намеренно отключён от автоматического запуска: он должен включаться вами для ограниченной задачи. UI и audit могут подхватываться автоматически.

## 3.3. Техническое уточнение по VS Code

На дату подготовки официальная документация Kimi Code содержит переход на новый Node.js CLI и отдельное предупреждение о совместимости: новые установки VS Code extension могут быть ограничены для пользователей нового TS/Node CLI; ACP-инструкции официально описаны для поддерживаемых IDE [7](https://www.kimi.com/code/docs/en/) [8](https://www.kimi.com/code/docs/kimi-code-cli/guides/ides.html). Если расширение уже установлено и работает — используйте его. Если нет, сначала проверьте актуальный статус расширения, а не настраивайте устаревший Python CLI вслепую.

---

# 4. Лучшие типы взаимодействия с Kimi Code

## 4.1. Формула хорошего задания

```text
Контекст → Цель → Scope → Ограничения → Критерии приёмки → Проверки → Формат отчёта
```

Плохо:

> «Сделай инновационную главную как Lusion».

Хорошо:

> «Изучи `@src/pages/index.astro`, `@src/layouts/BaseLayout.astro` и текущие стили. Предложи один scroll-expansion island без новых зависимостей. Сохрани semantic H1/CTA без JS, reduced-motion fallback и отсутствие overflow на 320/1440. Сначала план, после утверждения — код и build report».

Kimi Code официально поддерживает `@`-ссылки на файлы, `/plan`, Skills и управление сессиями; для multi-file изменений рекомендуется сначала Plan mode [9](https://www.kimi.com/code/docs/en/kimi-code-cli/guides/interaction.html) [10](https://www.kimi.com/code/docs/en/kimi-code-cli/guides/use-cases.html).

## 4.2. Семь рабочих режимов

### 1. Read-only аудит

Используйте в начале проекта и перед крупным изменением.

```text
Не меняй файлы. Изучи package.json, astro.config, src и git status. Дай карту архитектуры, риски и список решений, требующих меня.
```

### 2. Plan-first

Для главной, навигации, taxonomy, рефакторинга и нескольких файлов.

```text
Включи plan mode. Предложи 2 варианта, сравни bundle/accessibility/сложность. Не редактируй до моего выбора.
```

### 3. Vertical slice

Лучший режим реализации: один route/section полностью, а не десять незаконченных заготовок.

```text
/skill:vertical-slice "/prompts" "MVP фильтрации с URL params и static data"
```

### 4. Точечное исправление с `@files`

Для ограниченного diff:

```text
Исправь только overflow в @src/components/home/PortalReveal.jsx и связанном CSS. Не рефактори соседние компоненты. Покажи корневую причину и проверки 320/375/1440.
```

### 5. Review-only после реализации

Просите проверить diff, не «улучшать всё»:

```text
Проверь текущий git diff на scope creep, hydration, cleanup, reduced motion, accessibility и bundle risk. Сначала только отчёт P0/P1/P2.
```

### 6. Architecture Decision Record

Перед CMS, оплатой, поиском, аналитикой, auth:

```text
Сравни 3 варианта для платных курсов при Astro static: hosted LMS/MoR, отдельный backend, отдельное app-subdomain. Критерии: EU VAT, РФ/международные платежи, защищённый доступ, стоимость, vendor lock-in, сроки. Код не меняй.
```

### 7. Visual QA итерациями

Не просить «сразу идеально». Цикл:

```text
Сначала semantic/static → затем responsive → затем one macro motion → затем audit → затем media/WebGL decision.
```

## 4.3. Чего не поручать одним запросом

- «Создай весь портал со всеми разделами, оплатой и блогом»;
- «подключи лучшие библиотеки» без budget/обоснования;
- «сам выбери CMS, оплату и аналитику»;
- «сделай как референс» без описания, что именно берём;
- «почини всё» при незакоммиченном diff;
- YOLO/auto-approval на основном репозитории.

---

# 5. План работы

## Этап 0. Product brief и решения

**Результат:** одна страница решения до дизайна.

Нужно определить:

- основную аудиторию и географию;
- главный коммерческий продукт первого релиза;
- primary CTA и KPI;
- язык(и), платёжную географию;
- доступные реальные кейсы, фото, видео, логотип/портрет;
- контентный процесс и владельца публикации.

**Gate:** нельзя финализировать hero и IA, пока неизвестно, кого и куда он ведёт.

## Этап 1. Аудит репозитория

- версии и текущий stack;
- существующие маршруты/компоненты;
- build/deploy/CI;
- media и performance baseline;
- debt и незакоммиченные изменения.

**Gate:** согласован список изменений фундамента.

## Этап 2. IA + content model + design tokens

- каноническое дерево услуг;
- top-level routes;
- BaseLayout, metadata, header/footer, breadcrumbs;
- цвета, type scale, spacing, radii, motion tokens;
- схема контента для услуг/блога/промптов.

**Gate:** header/mobile navigation работают без визуальных эффектов.

## Этап 3. Главная — статический вертикальный срез

- семантический hero;
- четыре шлюза;
- шесть направлений;
- proof placeholder или реальный кейс;
- CTA/footer;
- responsive 320 → ultrawide;
- no-JS и SEO.

**Gate:** понятная и быстрая главная без Motion.

## Этап 4. Главная — один macro-WOW

- portal expansion как один Motion island;
- reduced-motion/mobile fallback;
- poster/media pipeline;
- performance profiling;
- только после этого решение о Lenis/GSAP/WebGL.

**Gate:** CWV/a11y/overflow не ухудшились.

## Этап 5. Услуги и кейсы

- reusable service hub/detail templates;
- дерево 4 уровней;
- breadcrumbs/related;
- cases как отдельная коллекция;
- контакты/lead form → CRM после выбора безопасной архитектуры.

**Gate:** новая услуга добавляется данными/контентом, а не копированием страницы.

## Этап 6. Блог и поиск

- content collections/MDX или утверждённый CMS;
- editorial workflow;
- Pagefind для начального static search;
- RSS/sitemap/canonical/structured data;
- taxonomy вместо лишних вложенных папок.

**Gate:** draft не индексируется; автопубликации без human approval нет.

## Этап 7. База промптов

- схема prompt metadata;
- multi-select filters + URL params;
- search/copy/share;
- virtualisation/search backend только при реальном объёме;
- лицензирование и provenance контента.

**Gate:** фильтры доступны с keyboard, ссылка воспроизводит состояние.

## Этап 8. Монетизация

- ADR по оплате и доступу;
- курсы, чеки/налоги/возвраты/entitlements;
- affiliate disclosure и tracking;
- privacy/consent.

**Gate:** нельзя считать checkout готовым, пока не проверен доступ после оплаты и возврат.

## Этап 9. Apps и рост

- `/prilozheniya/` как продуктовый hub;
- live demo только лёгкими React states;
- реальные store links, privacy pages, support;
- отдельная app/backend архитектура при необходимости.

## Этап 10. Release hardening

- Playwright/axe/Lighthouse CI — после отдельного согласования зависимостей;
- browser/device matrix;
- 404/redirects/robots/sitemap/OG;
- monitoring, analytics events, backup/rollback;
- legal review.

---

# 6. Чем я могу помочь дальше

| Задача | Что я могу сделать |
|---|---|
| Репозиторий | Если вы загрузите архив/файлы, провести аудит структуры, версий, build и diff. |
| Архитектура | Спроектировать data model, routes, content collections, taxonomy и ADR по static/backend. |
| Главная | Сделать wireframe, content hierarchy, Motion prototype и fallback-логику. |
| Design system | Подготовить tokens, fluid type/spacing, component contracts и motion grammar. |
| Kimi prompts | Писать prompts на каждый vertical slice и проверять ответы/изменения Kimi. |
| Code review | Проверять компоненты на overflow, hydration, a11y, cleanup, CWV и SEO. |
| Контент | Сформировать шаблоны услуг, кейсов, статей, промптов и editorial checklist. |
| Монетизация | Сравнить Stripe/MoR/LMS/serverless с учётом вашей географии и рынка. |
| QA | Составить browser matrix, Playwright/axe/Lighthouse сценарии и release checklist. |
| Визуалы | Подготовить storyboard hero, poster/video requirements и промпты для генерации ассетов. |

Оптимальный совместный режим: **вы даёте решение по бизнесу и визуальному направлению → я формирую спецификацию/промпт → Kimi реализует в репозитории → вы присылаете diff/архив → я делаю независимый аудит.**

---

# 7. Что пока не учтено и как улучшить

## P0 — решить до полноценной разработки

### 1. Главная аудитория и приоритет оффера

Сейчас портал одновременно продаёт разработку, дизайн, маркетинг, AI, фото, обучение, курсы, промпты, партнёрки и приложения. Это сильная экосистема, но слабый first impression, если всё одинаково важно.

**Решение:** выбрать одну главную формулу, например:

- «Digital + AI под ключ для малого бизнеса»;
- «Личный экспертный портал для ресторанного/food-бизнеса»;
- «Создаю, продвигаю и автоматизирую цифровые продукты».

Остальные направления становятся доказательством широты, а не конкурирующими офферами hero.

### 2. Primary conversion и KPI

Нужно решить, что главное:

- заявка на проект;
- консультация;
- покупка курса;
- подписка;
- переход по партнёрской ссылке;
- скачивание приложения.

**Решение:** один primary CTA на странице; события аналитики проектируются до запуска.

### 3. Кейсы и доверие

Исследования много говорят об эффектах, но мало — о доказательствах.

**Решение:** раздел Cases и модель `problem → approach → result → stack → testimonial/source`. Без выдуманных метрик. Если кейсов мало — показывать процесс, демонстрационные прототипы и честный статус.

### 4. Static vs dynamic boundary

`output: "static"` отлично подходит маркетинговому порталу, но не является backend для:

- защищённых курсов;
- пользователей/личного кабинета;
- webhooks оплаты;
- приватных prompt collections;
- серверной AI-автоматизации;
- секретных API/CRM операций.

**Актуальное решение:** Astro pages остаются static. Для заявок сначала исследуется small PHP/MySQL API + read-only admin on Timeweb, email + Telegram, CRM later. Payment/auth/course access и более крупная app-динамика остаются отдельными managed/backend/subdomain ADR. Current rsync `--delete` требует deploy isolation для PHP.

### 5. Оплата и география

Нужны ответы:

- где зарегистрирован продавец;
- покупатели: ЕС, РФ, СНГ, весь мир;
- валюта, VAT, чеки, refund/cancellation;
- нужен ли Merchant of Record;
- как выдаётся и отзывается доступ.

**Решение:** отдельный ADR и проверка актуальной доступности провайдеров. Не выбирать Stripe/Lemon Squeezy только по удобству UI.

### 6. Юридический слой

Для пользователя/бизнеса в ЕС особенно важны:

- privacy policy, cookie/consent strategy;
- GDPR lawful basis и сроки хранения лидов;
- terms, refund/cancellation, VAT/invoices;
- affiliate disclosure;
- лицензии изображений, видео, шрифтов и prompt content;
- accessibility obligations.

**Решение:** заложить маршруты и data flow до подключения аналитики/форм. Юридический текст должен проверять профильный специалист.

## P1 — заложить в архитектуру

### 7. CMS и editorial workflow

Git/MDX хорош для старта, но «блог по свежей информации с автодеплоем» требует процесса:

```text
источники → сбор → draft → ссылки/provenance → fact-check → duplicate/copyright check
→ human approval → PR → build → publish → update/expiry
```

**Не делать:** автономный scrape → rewrite → auto-publish. Это риск ошибок, авторских претензий и низкого доверия/SEO.

### 8. Поиск и масштаб базы промптов

Pagefind подходит для начального статического корпуса. При десятках тысяч документов, персонализации или semantic search потребуется внешний индекс/backend.

**Решение:** фазы:

1. static Pagefind + URL filters;
2. измерить объём/latency;
3. только затем выбрать Algolia/Meilisearch/Typesense/vector search.

### 9. Контентная модель курсов

Нужно определить:

- одноразовая покупка или подписка;
- видео/файлы/тесты/сертификаты;
- прогресс и аккаунт;
- drip content;
- возврат/отзыв доступа;
- внешняя LMS или собственная.

Это продукт, а не просто pricing card.

### 10. Международность

Если рынок включает Финляндию/ЕС, стоит заранее решить `ru` only или `ru/en/fi`. Позднее добавление i18n меняет slugs, canonical/hreflang, content model и меню.

### 11. Analytics и privacy

Нужен event map:

- portal gateway click;
- service depth navigation;
- CTA submit;
- prompt copy;
- course checkout start/success;
- affiliate outbound click;
- app-store click.

Не добавлять тяжёлые trackers без consent/performance оценки.

### 12. Операции

Не учтены:

- preview deployments;
- content staging;
- redirects;
- broken-link checks;
- monitoring и error reporting;
- backup/rollback;
- dependency/security updates;
- media storage и CDN limits.

## P2 — только после фундамента

- Lenis;
- GSAP timeline;
- WebGL/OGL/particles;
- custom cursor;
- voice UI;
- сложная gamification;
- глобальные shared-element transitions.

Каждый из этих пунктов проходит отдельный вопрос: **улучшает ли он понимание/бренд сильнее, чем увеличивает bundle, motion risk и стоимость поддержки?**

---

# 8. Первый промпт

Готовый первый промпт находится в `FIRST_PROMPT.md`. Он намеренно начинает с read-only аудита и структуры, а не с генерации всей главной. Это снижает главный риск AI-разработки: получить красивую, но несовместимую с существующим репозиторием и нерасширяемую демо-страницу.

Короткая последовательность:

1. открыть репозиторий в рабочей среде Kimi;
2. запустить новую сессию из корня `.git`;
3. вставить промпт из `FIRST_PROMPT.md`;
4. проверить разделы A–H и принять/скорректировать план;
5. дать вторую команду «План принят…»;
6. после реализации запустить:

```text
/skill:audit-page "/" "report-only"
```

7. только после исправления P0/P1 обсуждать Lenis, GSAP, video или WebGL.

---

# 9. Итоговая стратегия

```text
Сильный оффер
→ ясная IA
→ data-driven дерево
→ semantic/static page
→ responsive/a11y
→ один Motion WOW
→ measured performance
→ только затем advanced effects
```

**Главная рекомендация:** не начинать с 3D и не строить весь портал одним запросом. Начать с архитектуры, затем сделать один безупречный вертикальный срез главной. Если он работает без анимации, не ломается на 320px, объясняет бренд за секунды и проходит performance/a11y gate — Motion усилит его. Если фундамент не работает, WebGL только дороже скроет проблему.
