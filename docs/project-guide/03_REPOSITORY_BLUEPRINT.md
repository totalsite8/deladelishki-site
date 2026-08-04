# Рекомендуемая структура репозитория deladelishki-site

Actual baseline: Astro 7.0.7, Tailwind 4.3.2/Vite, React 19.2.7, `framer-motion` 12.42.2, one page. Это целевая схема, а не команда немедленно создать все папки. Kimi должен сначала изучить реальный репозиторий и создавать директории только когда появляется первый используемый файл. Исправленная нумерация и recommended service depth находятся в `06_DEEP_INFORMATION_ARCHITECTURE_AND_CONTENT_MAP.md`; planned routes не создаются пустыми.

## Архитектурные принципы

1. Общий брендовый фундамент — один.
2. Каждая значимая страница — отдельная композиция и отдельная задача.
3. Навигационное дерево — один источник данных.
4. Повторяющийся массовый контент — collections/templates, а не копии разметки.
5. React 19 — только интерактивные islands; Motion imports from existing `framer-motion`.
6. Astro pages остаются static; future PHP leads API/admin is an isolated server-side subsystem.
7. RU manual route/page names use Latin transliteration; EN uses approved `/en/` localized route map.
8. Dynamic route `[slug].astro` допускается для repeatable content/team profiles after approval and locale-aware mapping.
9. JavaScript/JSX, not TS/TSX source. Keep Astro `tsconfig.json`; `content.config.js` is supported.
10. Не создавать пустые «future-proof» директории сотнями: blueprint разворачивается по мере страниц.

---

# Целевая схема

```text
deladelishki-site/
├─ .github/
│  └─ workflows/
│     └─ deploy.yml                  # protected: build + SSH/rsync dist
├─ .kimi-code/
│  └─ skills/
│     ├─ page-swarm/SKILL.md
│     ├─ page-concept/SKILL.md
│     ├─ deladelishki-ui/SKILL.md
│     ├─ vertical-slice/SKILL.md
│     └─ audit-page/SKILL.md
├─ docs/
│  ├─ audit/
│  │  └─ current-state.md
│  ├─ content-source/
│  │  └─ PROFILE_AND_CASES_DRAFT.md
│  ├─ decisions/
│  │  ├─ architecture/
│  │  └─ pages/
│  ├─ prompts/
│  ├─ planning/
│  │  ├─ site-tree.json
│  │  └─ locales.json
│  ├─ templates/
│  ├─ research/
│  │  └─ page-briefs/
│  ├─ qa/
│  └─ project-guide/
├─ brand-source/                     # reference/master assets, not necessarily shipped
│  └─ logo_dd.png
├─ public/
│  ├─ fonts/                         # self-hosted, licensed, subset/woff2
│  ├─ icons/
│  ├─ videos/                        # only optimized production media
│  ├─ fallback/                      # poster/static WebGL fallbacks
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ site.webmanifest
├─ src/
│  ├─ assets/
│  │  ├─ brand/                      # approved SVG/logo variants
│  │  ├─ images/                     # Astro-optimized imported images
│  │  └─ graphics/
│  ├─ components/
│  │  ├─ global/
│  │  │  ├─ SiteHeader.astro
│  │  │  ├─ SiteFooter.astro
│  │  │  ├─ SkipLink.astro
│  │  │  ├─ Breadcrumbs.astro
│  │  │  ├─ ContactMethods.astro      # email/phone/VK from site data
│  │  │  ├─ SeoHead.astro            # if BaseLayout does not own this
│  │  │  ├─ forms/
│  │  │  │  ├─ LeadForm.jsx          # only after endpoint/captcha ADR
│  │  │  │  ├─ FormStatus.jsx
│  │  │  │  └─ PhoneField.jsx
│  │  │  └─ navigation/
│  │  │     ├─ MegaMenu.jsx
│  │  │     └─ MobileMenu.jsx
│  │  ├─ ui/
│  │  │  ├─ Button.astro
│  │  │  ├─ LinkArrow.astro
│  │  │  ├─ MediaFrame.astro
│  │  │  ├─ SectionHeading.astro
│  │  │  ├─ ShareButtons.astro        # no social SDK; tiny progressive script
│  │  │  └─ VisuallyHidden.astro
│  │  └─ pages/
│  │     ├─ home/
│  │     │  ├─ HomeHero.astro
│  │     │  ├─ PortalReveal.jsx
│  │     │  ├─ PortalGateways.astro
│  │     │  └─ ServiceDirections.astro
│  │     ├─ uslugi/
│  │     ├─ keisy/
│  │     ├─ blog/
│  │     ├─ prompty/
│  │     ├─ kursy/
│  │     ├─ navyki-agentov/
│  │     └─ prilozheniya/
│  ├─ content/
│  │  ├─ blog/
│  │  ├─ cases/
│  │  ├─ prompts/
│  │  ├─ courses/
│  │  ├─ agent-skills/
│  │  └─ apps/
│  ├─ data/
│  │  ├─ site.js                     # brand/domain/Danila email/phone/VK constants
│  │  ├─ navigation.js               # canonical route IDs and RU/EN publication data
│  │  ├─ routes.js                   # localized RU/EN paths by stable ID
│  │  ├─ services.js                 # confirmed service taxonomy/metadata
│  │  ├─ team.js                     # approved real members only
│  │  └─ taxonomies.js               # blog/prompt categories
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  ├─ ArticleLayout.astro
│  │  ├─ ServiceLayout.astro         # semantic responsibilities, not fixed art
│  │  └─ ContentDetailLayout.astro
│  ├─ lib/
│  │  ├─ routes.js
│  │  ├─ breadcrumbs.js
│  │  ├─ seo.js
│  │  └─ content.js
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ uslugi.astro
│  │  ├─ uslugi/
│  │  │  ├─ razrabotka.astro
│  │  │  ├─ razrabotka/
│  │  │  │  ├─ landing-page.astro
│  │  │  │  ├─ saity.astro
│  │  │  │  └─ nastroika-crm.astro
│  │  │  ├─ dizain.astro
│  │  │  ├─ dizain/
│  │  │  ├─ marketing.astro
│  │  │  ├─ marketing/
│  │  │  ├─ ai.astro
│  │  │  ├─ ai/
│  │  │  ├─ fotosyomka.astro
│  │  │  ├─ fotosyomka/
│  │  │  └─ obuchenie.astro
│  │  ├─ poleznye-servisy.astro
│  │  ├─ poleznye-servisy/
│  │  │  └─ [slug].astro             # only after dynamic-route approval
│  │  ├─ blog.astro
│  │  ├─ blog/
│  │  │  └─ [slug].astro
│  │  ├─ baza-promptov.astro
│  │  ├─ baza-promptov/
│  │  │  └─ [slug].astro
│  │  ├─ kursy.astro
│  │  ├─ kursy/
│  │  │  └─ [slug].astro
│  │  ├─ navyki-agentov.astro
│  │  ├─ navyki-agentov/
│  │  │  └─ [slug].astro
│  │  ├─ prilozheniya.astro
│  │  ├─ prilozheniya/
│  │  │  └─ [slug].astro
│  │  ├─ keisy.astro
│  │  ├─ keisy/
│  │  │  └─ [slug].astro
│  │  ├─ o-nas.astro
│  │  ├─ o-nas/
│  │  │  ├─ danila-podshivalov.astro
│  │  │  └─ [slug].astro             # only for approved real team members
│  │  ├─ kontakty.astro
│  │  ├─ poisk.astro
│  │  ├─ politika-konfidencialnosti.astro
│  │  ├─ polzovatelskoe-soglashenie.astro
│  │  ├─ usloviya-oplaty-i-vozvrata.astro
│  │  ├─ raskrytie-partnerskih-ssylok.astro
│  │  └─ 404.astro
│  ├─ styles/
│  │  ├─ global.css
│  │  ├─ tokens.css
│  │  ├─ typography.css
│  │  └─ utilities.css
│  └─ content.config.js              # Astro collections, JS extension
├─ backend/                           # only after PHP/deploy ADR; exact location may differ
│  ├─ api/
│  ├─ admin/
│  ├─ migrations/
│  ├─ tests/
│  └─ config.example.php             # no secrets; real config outside public/deploy root
├─ .editorconfig
├─ .gitattributes
├─ .gitignore
├─ AGENTS.md
├─ astro.config.mjs
├─ package.json
├─ package-lock.json
└─ README.md
```

The RU tree above is illustrative. English URLs are not created by duplicating all business data: stable route IDs map RU paths to `/en/` localized paths. Exact Astro page-folder/generation approach is chosen in the i18n ADR before route implementation.

---

# Почему страницы и компоненты разделены

`src/pages/...` отвечает за URL и composition. В page-файле должно быть видно:

- какие данные загружены в верхнем `---`;
- какой layout используется;
- в каком порядке идут sections;
- какой React island и с какой client directive подключён.

Сложная внутренняя разметка живёт в `src/components/pages/<domain>/`, чтобы `.astro` page не превращалась в тысячи строк.

Не нужно делать один `UniversalPage.astro`, в который передаётся 40 параметров. Это уничтожит требование индивидуальной творческой разработки.

---

# Общий бренд и индивидуальность страниц

## Общее

- canvas/surface/text/action tokens;
- display/body fonts;
- header/footer/navigation;
- focus ring;
- button language;
- easing/springs;
- accessibility patterns;
- media fallback;
- route/breadcrumb logic.

## Индивидуальное

- композиция;
- signature interaction;
- scroll rhythm;
- section geometry;
- доменный accent;
- image treatment;
- density;
- степень motion.

Примеры:

- Главная: cinematic portal expansion.
- Услуги: spatial category explorer.
- Маркетинг/аналитика: data narrative.
- AI: controlled generative visual.
- Фотосъёмка: editorial/cinematic gallery.
- Блог: calm text-first magazine.
- База промптов: tool-like filter workspace.
- Курсы: доверительный product/learning flow.
- Кейсы: evidence-led before/after narrative.
- О нас: personal manifesto/timeline.

---

# Canonical navigation data

Не копировать меню по компонентам. Один узел должен включать как минимум:

```js
{
  id: "marketing-analitika",
  title: "Аналитика",
  href: "/uslugi/marketing/analitika/",
  parentId: "marketing",
  summary: "",
  order: 20,
  status: "planned",
  accent: "marketing",
  children: [],
  relatedIds: [],
}
```

Статусы:

```text
planned → draft → review → published → archived
```

До публикации link можно:

- не показывать в main navigation;
- показывать как «скоро», но не делать пустой indexable URL;
- вести на parent hub.

Решение должно быть единым.

---

# Content Collections без TypeScript

Astro поддерживает `src/content.config.js` и `.mjs`, поэтому можно соблюдать правило JavaScript-only.

Рекомендуемые collections:

- `blog`;
- `cases`;
- `prompts`;
- `courses`;
- `agentSkills`;
- `apps`;
- при необходимости `usefulServices`.

Схемы валидируют:

- title/description;
- slug/id;
- draft/status;
- dates;
- taxonomy;
- image/alt;
- SEO;
- related IDs;
- affiliate/payment flags.

Не создавать все collections в первом commit. Начать с navigation/services data, затем добавить collection вместе с первым реальным разделом.

---

# Actual Tailwind 4 structure

Фактически установлен Tailwind 4.3.2 through `@tailwindcss/vite`; `global.css` already uses `@import "tailwindcss";`. Не устанавливать `@astrojs/tailwind` и не создавать Tailwind 3 config по старому tutorial.

Design tokens/theme/font mapping use Tailwind 4/CSS variables in one source. Dual dark/light contexts change semantic tokens, not hardcoded page colors.

---

# Media policy

## Изображения

- Исходники, которые импортируются в Astro и оптимизируются: `src/assets/images`.
- Размеры/aspect ratio задаются заранее.
- Hero LCP не прячется в CSS background, если это мешает приоритетной загрузке.
- AVIF/WebP + fallback по Astro pipeline.

## Видео

- Только короткий оптимизированный loop.
- Poster обязателен.
- `muted`, `playsinline`, разумный `preload`.
- Контент не зависит от video.
- Mobile/reduced-data/reduced-motion получает poster или облегчённый вариант.
- Не хранить огромные source masters в production Git.

## Шрифты

- self-hosted WOFF2;
- лицензия проверена;
- минимальное число weights;
- variable font, если он реально заменяет несколько файлов;
- никакой обязательной загрузки Google Fonts/CDN в runtime.

---

# Forms и share architecture

- `ShareButtons.astro` без React/social SDK: native share + copy + Telegram/VK, tiny progressive script.
- Share обязателен на article, course detail, master prompt, published case и published app.
- `LeadForm` не создавать до PHP/deploy/captcha ADR.
- SmartCaptcha server key, DB/SMTP/Telegram/admin secrets never enter Astro client/Git/chat.
- Service forms передают canonical `serviceId`/`formId`/`sourcePage`, Russian phone/email and allowlisted personalised context.
- PHP lead API/read-only admin is a separate reviewed subsystem. Current rsync `--delete` requires controlled backend deployment or separate path.
- Подробности: forms map + PHP leads backend candidate docs.

# Что не должно быть в репозитории

- `.env` и keys;
- SSH private key;
- Timeweb logs;
- пользовательские данные;
- `node_modules`;
- `dist`;
- source video masters гигабайтного размера;
- AI session dumps с секретами;
- дубли navigation arrays;
- сгенерированные отзывы/кейсы;
- runtime dependency на неизвестные CDN snippets.

---

# Минимальные документы решений

```text
docs/decisions/architecture/001-static-boundary.md
docs/decisions/architecture/002-url-and-slugs.md
docs/decisions/architecture/003-content-model.md
docs/decisions/architecture/004-motion-ownership.md
docs/decisions/architecture/005-payment-and-access.md  # позже
docs/decisions/pages/glavnaya.md
docs/decisions/pages/uslugi.md
...
```

Каждый ADR/page decision — 1–2 страницы, не бюрократия. Цель: следующая Kimi-сессия не переизобретает уже принятые решения.
