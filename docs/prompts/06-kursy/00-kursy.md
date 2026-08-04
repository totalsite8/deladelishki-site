# Prompt страницы: Курсы и самостоятельное обучение

**Маршрут:** `/kursy/`  
**Родитель:** `/`  
**Дочерние/продолжение:** Course details

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Курсы и самостоятельное обучение» (`/kursy/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Показать программы, помочь выбрать и начать безопасный purchase path.

ХАРАКТЕР СТРАНИЦЫ
Доверительная product/learning page, не flashy pricing wall.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Learning paths/cards with restrained Motion; no fake progress/purchase state.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Кому; outcomes; course cards; format; preview; author/trust; FAQ; payment/access explanation; CTA.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /
- Дочерние/следующие пути: Course details

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
На static host каталог возможен, но secure checkout/access требует hosted provider или backend ADR. Не реализовывать оплату до решения.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Hero: practical learning promise.
2. Who learning products are for.
3. Categories/paths.
4. Published course cards with outcome/format/level.
5. Why learn from Danila: leadership + hands-on practice.
6. Preview/free materials.
7. How purchase/access works after approved architecture.
8. FAQ.
9. Questions/contact.
10. Related articles/prompts/services.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Курсы и самостоятельное обучение
2. Курсы и самостоятельное обучение: практика, которую можно применить
3. Курсы и самостоятельное обучение без отрыва от реальных задач

Offer/subhead candidates:
1. Самостоятельное обучение на основе практического управленческого и hands-on опыта.
2. Понятные результаты, программа, формат и ограничения до покупки.
3. Материалы связывают стратегию, инструменты и применение в бизнесе.

CTA set:
- Primary: `Посмотреть программу`
- Secondary: `Задать вопрос`
- Direct/micro: `Перейти к покупке`

SEO title draft (52 chars): `Курсы и самостоятельное обучение | Данила Подшивалов`
Meta description draft (134 chars): `Курсы и самостоятельное обучение: практическое обучение маркетингу, digital, CRM, аналитике, AI и автоматизации от Данилы Подшивалова.`
Canonical draft: `https://deladelishki.ru/kursy/`
Intent brief: Основной интент: «курсы и самостоятельное обучение». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: CollectionPage/ItemList for hub; Course for detail; Offer only from real commerce data.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Questions contact отдельно от purchase: имя; email/phone; вопрос; courseId; consent; captcha. Не смешивать с подтверждением оплаты. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/kursy/" "course_hub"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
