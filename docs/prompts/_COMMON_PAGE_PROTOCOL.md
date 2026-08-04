# Общий протокол любого page prompt

Этот файл не запускается отдельно. Каждый page prompt требует от Kimi прочитать его вместе с корневым `AGENTS.md`.

## Неподвижные правила

1. Одна страница — одна задача до production smoke test.
2. До кода: 2–3 разные концепции → сравнение → рекомендация → остановка → выбор пользователя.
3. Общий бренд сохраняется, композиция/interaction подбираются под содержание страницы.
4. Actual stack: Astro 7 static, Tailwind 4 via Vite, React 19 islands, `framer-motion` 12 imports, JavaScript/JSX, npm, Node 24.
5. Не устанавливать package `motion`, legacy Tailwind integration или другие зависимости без решения.
6. Без CDN, CI/deploy, payment/auth/backend changes без разрешения.
7. Timeweb отдаёт `dist`; isolated PHP leads API/admin is a separate approved candidate. Node на хостинге не используется.
8. Ручные RU filenames/slugs — латиница-транслит; English `/en/` route mapping and dynamic templates only by approved i18n architecture.
9. First release RU + human-reviewed EN; English code identifiers.
10. Page meta title/description/canonical обязательны.
11. 100% width, full-screen sections: `100vh` fallback → `100dvh`.
12. Нет page-level horizontal scroll 320px → ultrawide. `overflow-x-hidden` не исправляет причину.
13. CSS/transform/opacity first; Motion only for meaningful interaction.
14. `client:load` только для immediately required controls; ниже fold — `client:visible`.
15. Reduced-motion/no-JS/static media fallback обязателен.
16. Никаких выдуманных кейсов, цифр, отзывов, клиентов, цен и обещаний.
17. Self-hosted assets/fonts; runtime CDN только по отдельному разрешению.
18. Не менять/не push/не merge `main`; `main` автоматически деплоит production.

## Approved owner/contact context

- Данила Подшивалов — leadership-first позиционирование: руководитель маркетинга и digital-проектов; marketing/advertising/design/sites/scripts с 17 лет; 18+ years; до 20 direct reports.
- Ключевая ценность: умеет выстроить систему, поставить задачи команде/подрядчикам и оценить эффективность, потому что сам выполнял исследования, сайты, SEO, рекламу, CRM, аналитику, дизайн/content/production.
- Public contacts: `totalsite@yandex.ru`, `+7 903 727-51-31`, `https://vk.com/id990254`.
- Использовать только подтверждённые facts/cases из controlled content source. Не писать как соискатель; формулировка: открыт к диалогу о по-настоящему интересных проектах.

## Concrete deliverables required from every page prompt

- audience/JTBD and one primary action;
- exact block order and question answered by each block;
- 3 H1 candidates, 3 offer/subhead candidates, primary/secondary/direct-contact CTA microcopy;
- one recommended H1/offer/CTA package;
- SEO title/description with character counts, canonical, indexability, OG needs;
- intent/query cluster without invented search volume;
- schema type/property map tied to visible facts;
- internal links to parent/children/cases/materials/contact;
- proof/permission checklist;
- contextual form or explicit reason no form is needed;
- share controls for article/course/master prompt/published case/published app;
- desktop/mobile/reduced-motion/no-JS plan;
- content/media/data that Danila must supply.

## Обязательный процесс

### Этап A — прочитать, не менять

- `AGENTS.md`;
- `package.json`, lock, Astro/Tailwind config;
- `src/data/navigation.js`/фактический источник IA;
- BaseLayout/header/footer/tokens;
- parent/sibling pages;
- текущий git status;
- page decision, если уже существует.

### Этап B — page swarm brief, без кода

Если задача стратегически важна или имеет коммерческий/SEO интент, запустить `/skill:page-swarm <route> <page_type>` либо выполнить те же шесть streams последовательно. Исследовать: intent/market language; leadership-first copy; SEO/schema; UX/forms/share; proof/compliance; accessibility/performance. Main agent выдаёт согласованный brief, а не сырые отчёты.

### Этап C — концепции, без кода

Для каждой из 2–3 концепций:

- впечатление посетителя;
- section-by-section story;
- signature interaction и его смысл;
- desktop/mobile/reduced-motion;
- CSS/Motion/advanced implementation layer;
- Low/Medium/High complexity;
- performance/accessibility/maintenance risks;
- необходимые реальные copy/media/proof.

Сравнить clarity, originality, mobile, performance, effort. Рекомендовать одну. Остановиться.

### Этап D — план после выбора

- selected concept;
- content inventory;
- exact files;
- reused shared components;
- new page-specific components;
- island ownership/client directive;
- SEO/structured data;
- responsive and accessibility acceptance;
- performance budget;
- validation commands;
- anything requiring separate approval.

### Этап E — implementation после команды пользователя

Сначала static semantic page, затем responsive/a11y, затем один signature interaction. Не расширять scope.

### Этап F — definition of done

- build succeeds;
- no console/hydration errors;
- keyboard/focus/touch;
- reduced motion;
- 320/375/768/1024/1440/1920/ultrawide;
- no horizontal overflow;
- metadata/canonical/heading;
- media fallback/slow network;
- report-only audit P0/P1/P2;
- diff review;
- production smoke only after reviewed merge.
