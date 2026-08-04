# Prompt страницы: Главная — «Живой портал»

**Маршрут:** `/`  
**Родитель:** `—`  
**Дочерние/продолжение:** /uslugi/, /blog/, /baza-promptov/, /kursy/, /poleznye-servisy/, /navyki-agentov/, /prilozheniya/

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Главная — «Живой портал»» (`/`).

Перед началом прочитай AGENTS, common protocol, approved product brief, actual repo audit, i18n architecture, logo/dual-theme direction, route registry/site-tree, then current layout/styles and `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
За несколько секунд объяснить личный бренд, распределить посетителя по четырём главным шлюзам и привести к первичному действию.

ХАРАКТЕР СТРАНИЦЫ
Кинематографичная, уверенная, пространственная; самый сильный WOW сайта, но навигация и оффер понятны до анимации.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Небольшой центральный poster/image при первом скролле расширяется почти до полного viewport через один Motion island (`useScroll`/`useTransform`). После раскрытия — обычный вертикальный поток. Video рассматривается как progressive enhancement после image prototype.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
H1/экосистема; audience lanes для бизнеса/частного обучения/digital-AI практиков; contextual CTA; четыре шлюза Услуги/Знания/Инструменты/Продукты; шесть подтверждённых направлений услуг; краткий Данила/О нас bridge; кейсы только после создания связанных service pages; свежие материалы; финальный CTA.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: —
- Дочерние/следующие пути: /uslugi/, /blog/, /baza-promptov/, /kursy/, /poleznye-servisy/, /navyki-agentov/, /prilozheniya/

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Первый production slice: actual package `framer-motion`, без Lenis/GSAP/WebGL. Visual expansion преимущественно scale/radius/opacity; clip-path только после profiling. LCP — специально созданный poster/image, не portrait Данилы и не delayed video. Supplied logo is a wordmark/reference, not the full hero background. Mobile/reduced-motion получает короткий/static вариант. Не делать 5–7 pinned глав и page-level horizontal scroller. RU + EN structure planned from the start.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Skip link + прозрачный header с CTA «Обсудить проект».
2. Hero: H1, leadership-first offer, primary/secondary CTA, небольшой LCP-poster.
3. Portal expansion: poster расширяется к viewport; copy остаётся читаемой без Motion.
4. Три audience lanes: бизнес/команды; частное обучение; digital/AI практика.
5. Четыре шлюза: Услуги / Знания / Инструменты / Продукты.
6. Шесть подтверждённых направлений услуг с доступным child explorer.
7. Краткий `О нас`/Данила bridge: leadership and hands-on facts, без portrait на первом этапе.
8. Selected cases только когда service pages и evidence готовы; 2–3 результата с контекстом, не набор счётчиков.
9. Подход: исследование → система → команда/реализация → измерение → автоматизация.
10. Свежие статьи/master prompts/courses — только опубликованные данные.
11. Короткая форма «Обсудить проект» + email/телефон/VK.
12. Footer с контактами, legal и основными hubs.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Маркетинг, digital и AI — как единая система
2. От стратегии до работающей digital-системы
3. Данила Подшивалов — руководитель маркетинга, который умеет делать руками

Offer/subhead candidates:
1. Выстраиваю маркетинг как управляемую систему: исследование, стратегия, команда, сайт, реклама, CRM, аналитика и автоматизация.
2. Соединяю управленческий взгляд с практической реализацией — от идеи и дорожной карты до запуска и оценки эффективности.
3. Открыт к диалогу о по-настоящему интересных проектах, где нужно связать маркетинг, digital и бизнес-результат.

CTA set:
- Primary: `Обсудить проект`
- Secondary: `Выбрать направление`
- Direct/micro: `Посмотреть кейсы`

SEO title draft (54 chars): `Данила Подшивалов — маркетинг, digital и автоматизация`
Meta description draft (126 chars): `Руководитель маркетинга с 18+ годами практики в B2B и B2C: стратегия, команда, сайты, реклама, CRM, аналитика и автоматизация.`
Canonical draft: `https://deladelishki.ru/`
Intent brief: Основной интент: «главная». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: WebSite + Person; SearchAction только после рабочего поиска.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Короткая форма «Обсудить проект»: имя; задача/направление; preferred contact; Russian phone/email at least one; consent; captcha; sourcePage. Budget/timeframe отсутствуют на общей форме. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + email/Telegram + database + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены; срок ответа не обещать.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/" "home"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
<!-- V2_CONTENT_BRIEF_END -->

ЭТАП 1 — ТОЛЬКО КОНЦЕПЦИИ, БЕЗ КОДА
1. Проверь, достаточно ли информации об аудитории, primary CTA, реальном content/proof/media. Если не хватает критичного — задай максимум 5 точных вопросов.
2. Предложи 2–3 действительно разные концепции этой страницы. Не меняй только цвета одного layout.
3. Для каждой объясни простыми словами:
   - какое ощущение получит посетитель;
   - как он проходит содержание section by section;
   - в чём signature interaction и зачем оно помогает именно этому content;
   - desktop behavior;
   - отдельное mobile behavior от 320px;
   - reduced-motion/no-JS/static fallback;
   - CSS/Astro vs Motion island vs optional advanced layer;
   - Low/Medium/High complexity;
   - performance/accessibility/maintenance risks;
   - какие реальные тексты, изображения, видео, данные или кейсы потребуются.
4. Сравни концепции по clarity/conversion, originality, fit, mobile, performance, effort.
5. Рекомендуй одну, объяснив сначала практический результат, потом technical reason.
6. Остановись фразой: «Выберите концепцию 1, 2 или 3. До выбора код не изменяю».

НЕ ДЕЛАЙ НА ЭТАПЕ 1
- не редактируй файлы;
- не устанавливай пакеты;
- не создавай placeholder page;
- не меняй shared design system/IA/deploy;
- не генерируй вымышленные факты/кейсы/метрики.

ЭТАП 2 — ТОЛЬКО ПОСЛЕ МОЕГО ВЫБОРА
Сначала сохрани короткое page decision, затем дай exact file plan и acceptance. После отдельной команды реализуй static semantic page → responsive/a11y → signature interaction → tests/audit. Не начинай соседнюю страницу.

ОБЯЗАТЕЛЬНО ДЛЯ FINAL PAGE
- Astro 7 static, JavaScript/JSX, Tailwind 4 via @tailwindcss/vite;
- React 19/framer-motion island only when needed; import from `framer-motion`;
- RU default + human-reviewed EN; locale-aware canonical/hreflang/route mapping; translit RU filenames/slugs;
- unique title/description/canonical и один H1;
- 100vh fallback + 100dvh для fullscreen;
- no page horizontal scroll 320px → ultrawide;
- keyboard/focus/touch 44px;
- reduced motion/no-JS/media fallback;
- self-hosted assets, no unnecessary runtime CDN;
- build и report-only audit;
- no commit/push/main/deploy без пользователя.
```
