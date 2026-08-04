# Prompt страницы: Детальная страница курса

**Маршрут:** `/kursy/[slug]/`  
**Родитель:** `/kursy/`  
**Дочерние/продолжение:** —

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Детальная страница курса» (`/kursy/[slug]/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Дать достаточно информации для осознанной покупки курса.

ХАРАКТЕР СТРАНИЦЫ
Structured learning journey with evidence and clarity.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Curriculum accordion/progress preview; keyboard accessible, no fake logged-in state.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Outcome; audience/prerequisites; curriculum; format/duration; author; preview; price/tax; access; refund; FAQ; CTA.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /kursy/
- Дочерние/следующие пути: —

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Dynamic template after approval. Price/VAT/refund/access must come from actual commerce decision.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Breadcrumb.
2. Hero: H1, outcome, audience, level, format, purchase CTA.
3. Share controls.
4. Who it is/is not for and prerequisites.
5. Measurable learning outcomes without exaggerated promises.
6. Curriculum/modules.
7. Format, duration, access, updates.
8. Preview/sample lesson.
9. Author/experience and relevant cases.
10. Price/VAT/payment/access/refund only from approved commerce data.
11. FAQ and questions contact.
12. Purchase CTA + related prompts/courses/services.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Курс
2. Курс: практика, которую можно применить
3. Курс без отрыва от реальных задач

Offer/subhead candidates:
1. Самостоятельное обучение на основе практического управленческого и hands-on опыта.
2. Понятные результаты, программа, формат и ограничения до покупки.
3. Материалы связывают стратегию, инструменты и применение в бизнесе.

CTA set:
- Primary: `Посмотреть программу`
- Secondary: `Задать вопрос`
- Direct/micro: `Перейти к покупке`

SEO title draft (24 chars): `Курс | Данила Подшивалов`
Meta description draft (106 chars): `Курс: практическое обучение маркетингу, digital, CRM, аналитике, AI и автоматизации от Данилы Подшивалова.`
Canonical draft: `https://deladelishki.ru<resolved-public-route>`
Intent brief: Основной интент: «курс». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: CollectionPage/ItemList for hub; Course for detail; Offer only from real commerce data.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Questions contact отдельно от purchase: имя; email/phone; вопрос; courseId; consent; captcha. Не смешивать с подтверждением оплаты. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Обязательно на detail: native/copy/Telegram/VK; purchase и share — разные действия.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/kursy/[slug]/" "course_detail"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
