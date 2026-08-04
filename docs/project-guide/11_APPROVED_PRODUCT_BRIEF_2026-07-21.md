# Approved product brief

Дата: 21 июля 2026 г.

## Product

`deladelishki.ru` — многофункциональный инновационный digital-портал, а не сайт одной услуги.

Аудитория не описывается на каждой странице словом «все». Портал имеет несколько audience lanes:

1. **Бизнес и команды** — услуги, кейсы, консультации, project work.
2. **Частные пользователи и специалисты** — обучение, курсы, статьи, промпты.
3. **Digital/AI-практики** — agent skills, tools, reviews, apps.

Каждая страница выбирает один главный audience/JTBD/CTA. Главная объясняет экосистему и распределяет по lanes.

## Geography

Первичный рынок: Россия.

Не показывать публично город и часовой пояс.

## Languages

Первый релиз: русский + английский.

Recommended URL strategy:

- Russian default without prefix: `/uslugi/...`;
- English with prefix and localized slugs: `/en/services/...`;
- each route has stable locale-neutral ID;
- switcher maps route ID, not string replacement;
- `hreflang="ru"`, `hreflang="en"`, `x-default` decision;
- self-canonical per language;
- sitemap contains only published translations;
- no indexable machine-only translation without review;
- content status may differ by locale.

This localized-slug recommendation remains an architecture decision to confirm before implementation. If simplicity wins, `/en/<same-translit-path>` is technically easier but weaker for English UX.

## Primary actions

No single CTA for the whole portal. Page-specific CTA map:

- Service detail: `Обсудить задачу` or contextual equivalent.
- Service hub: `Выбрать направление` / `Не уверены, с чего начать?`.
- Turnkey/complex project: `Обсудить проект`.
- Consulting/training: `Записаться на консультацию` / `Обсудить обучение`.
- Course: `Посмотреть программу` / purchase after commerce architecture.
- Article: `Обсудить применение` or related service.
- Prompt: `Копировать промпт`, share, related course/service.
- Case: `Обсудить похожую задачу`.
- App: real store/demo CTA.

Do not promise a response time.

## Identity

Public display name: **Данила Подшивалов**.

Approved facts:

- marketing, advertising, design, scripts and sites since age 17;
- **18+ years** of experience for public copy;
- up to **20 people in direct reporting**;
- automation advocate;
- practice over theory;
- open to dialogue about genuinely interesting projects.

Remove earlier `18+ years` and `up to 20 direct reports` from all public drafts.

## Team / About

Top-level route changes from `/o-nas/` to:

```text
/o-nas/
```

`О нас` describes:

- approach and principles;
- team model;
- Danila as founder/lead;
- capabilities;
- team cards;
- selected cases;
- collaboration CTA.

Personal pages:

```text
/o-nas/danila-podshivalov/
/o-nas/[team-member-slug]/
```

Danila personal page contains full leadership/hands-on biography and an optional semi-3D carousel of non-professional skills.

No portrait on home for now. A banner/visual may be created later. Team member photos/details are future content.

## Non-professional skills carousel

Separate section on Danila profile. First known object: jewelry craft at age 8. Additional objects only after Danila supplies them.

CSS perspective + Framer Motion first; WebGL only after prototype/performance decision.

## Cases

Permission to name all four organizations/cases: approved by Danila.

Cases are created **after relevant service pages**, so internal links are known first.

Metrics still require evidence/method/period even with permission.

## Services

There are no three selected priority services for the prompt-planning phase: the confirmed owner-supplied list remains the complete primary IA, and each service will be detailed later with Kimi page by page. Do not elevate recommended leadership services into top-level priorities.

Recommended topics may:

- appear as blocks/subtopics within existing parent pages;
- be future routes only after content/SEO decision;
- remain prompts/reference, not published navigation.

Parent page includes an interactive feature showing all children/descendants for that branch.

## Blog

Workflow:

```text
scheduled collection/research
→ AI draft
→ source/fact/copyright checks
→ draft branch/PR
→ manual approval/merge
→ existing main deploy workflow
```

No autonomous push directly to main. Existing production deploy remains unchanged in principle.

## Forms/backend

Desired:

- personalised per service;
- email notification;
- Telegram notification;
- later CRM;
- small backend/admin for viewing leads, not editing content;
- Russian phone numbers only;
- budget field only where relevant, especially turnkey;
- launch-time field decided per service;
- no promised response time.

Primary architecture candidate: Astro static frontend + isolated PHP lead API/admin on Timeweb + database, because Timeweb supports PHP. This is called a hybrid architecture only to distinguish static pages from server-executed lead handling; it is not a problem or criticism.

Must resolve rsync `--delete`, secret storage, DB, auth, captcha, mail/Telegram delivery before implementation.

Yandex Cloud is not required to execute the endpoint if PHP is used. A Yandex Cloud/SmartCaptcha account is needed only if SmartCaptcha is selected and keys are created there.

## Share

Approved actions:

- native share;
- copy canonical link;
- Telegram;
- VK.

Required on:

- article;
- course/learning detail;
- master prompt;
- case;
- app.

## Visual

Direction: mixed dual-canvas — dark technological + light minimal/editorial.

Logo supplied and stored as brand source.

Halo Grotesk is a display-font candidate only after exact font/license/Cyrillic/WOFF2 verification. Font must be replaceable through one token.

Hero media needs to be created after concept/storyboard. No portrait on home initially.

## Current repository

Public repo audited; archive no longer required.

Actual stack: Astro 7, Tailwind 4/Vite, React 19, Framer Motion 12, Node 24, static build.
