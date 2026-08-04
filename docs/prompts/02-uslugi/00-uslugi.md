# Prompt страницы: Услуги — главный хаб

**Маршрут:** `/uslugi/`  
**Родитель:** `/`  
**Дочерние/продолжение:** Разработка, Дизайн, Маркетинг, AI, Фотосъёмка, Обучение

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Услуги — главный хаб» (`/uslugi/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Показать полный спектр компетенций без перегрузки и помочь выбрать правильное направление.

ХАРАКТЕР СТРАНИЦЫ
Spatial explorer: энергичнее блога, но яснее experimental portfolio; ощущение системы компетенций.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Adaptive spatial/bento map категорий с осмысленным preview дочерних услуг; Motion усиливает focus/selection, но все ссылки существуют в HTML.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Короткий оффер; категории Разработка/Дизайн/Маркетинг/AI/Фотосъёмка/Обучение; принцип работы; кейсы; как выбрать; CTA.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /
- Дочерние/следующие пути: Разработка, Дизайн, Маркетинг, AI, Фотосъёмка, Обучение

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Не показывать все 30+ deep links одним полотном. Desktop может иметь category preview; mobile — вертикальные группы/accordion без скрытого контента.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Breadcrumb.
2. Hero: что объединяет направление, для кого и какой business outcome.
3. Диагностический блок «С какой задачей пришли?» — 3–5 реальных ситуаций.
4. Дочерние услуги: понятная карта, а не список всех deep URLs.
5. Leadership advantage Данилы для этого направления.
6. Selected case с релевантным доказательством.
7. Как строится работа: диагностика → план → исполнение/команда → контроль.
8. Что можно объединить с соседними направлениями.
9. FAQ по выбору услуги.
10. Routing form «Не уверены, с чего начать?» + direct contacts.
11. Related cases/articles и final CTA.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Услуги
2. Услуги для бизнеса — от задачи до работающей системы
3. Услуги: стратегия, реализация и контроль результата

Offer/subhead candidates:
1. Соединяю стратегию, управление и практическую реализацию — от сайта и рекламы до CRM, аналитики, дизайна и AI.
2. Данила Подшивалов может взять на себя постановку задачи, координацию специалистов и контроль результата по направлению «Услуги».
3. От диагностики текущей ситуации до понятного плана, deliverables и следующих шагов.

CTA set:
- Primary: `Выбрать направление`
- Secondary: `Посмотреть кейсы`
- Direct/micro: `Написать Даниле`

SEO title draft (38 chars): `Услуги для бизнеса | Данила Подшивалов`
Meta description draft (152 chars): `Соединяю стратегию, управление и практическую реализацию — от сайта и рекламы до CRM, аналитики, дизайна и AI. Руководитель проекта — Данила Подшивалов.`
Canonical draft: `https://deladelishki.ru/uslugi/`
Intent brief: Основной интент: «услуги». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: Service + BreadcrumbList; provider → Person `#danila-podshivalov`.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Выбрать из controlled case source только после проверки релевантности, доказательств и разрешения.

FORM И ПРЯМАЯ СВЯЗЬ
Routing form «Не уверены, с чего начать?»: имя; бизнес/сайт optional; задача; preferred contact; Russian phone/email; consent; captcha; hubId. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/uslugi/" "service_hub"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
