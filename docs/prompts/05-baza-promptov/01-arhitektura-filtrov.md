# Prompt страницы: Архитектура фильтров базы промптов

**Маршрут:** `/baza-promptov/?...`  
**Родитель:** `/baza-promptov/`  
**Дочерние/продолжение:** —

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Архитектура фильтров базы промптов» (`/baza-promptov/?...`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Спроектировать масштабируемую taxonomy и воспроизводимое URL-state.

ХАРАКТЕР СТРАНИЦЫ
Tool UX: быстро, ясно, предсказуемо.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Filter chips/sidebar/bottom sheet with Motion state feedback; no page horizontal scroll.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Тип задачи; домен; формат; модель; стиль; аудитория; сложность; фото-подтипы love story/family/child/vacation/studio/luxury; обучение/бизнес/анализ.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /baza-promptov/
- Дочерние/следующие пути: —

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Это feature prompt, не обязательная indexable page. Сначала schema and sample data, потом UI. URL params на латинице, labels на русском.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Taxonomy/data schema.
2. Search behavior.
3. Filter groups and dependencies.
4. URL state and reset.
5. Result count/sort.
6. Empty/error/loading.
7. Mobile bottom sheet/accordion.
8. Keyboard/screen-reader announcement.
9. Scale/performance and migration thresholds.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Архитектура фильтров базы промптов
2. Архитектура фильтров базы промптов: находите, настраивайте и применяйте
3. Архитектура фильтров базы промптов для реальных задач, а не коллекции ради количества

Offer/subhead candidates:
1. Структурированные промпты с назначением, переменными, примерами, ограничениями и датой проверки.
2. Умные фильтры помогают найти промпт по задаче, а не угадывать формулировку.
3. Master prompts можно адаптировать, копировать и делиться их канонической страницей.

CTA set:
- Primary: `Найти промпт`
- Secondary: `Копировать промпт`
- Direct/micro: `Поделиться`

SEO title draft (52 chars): `Архитектура фильтров базы промптов | deladelishki.ru`
Meta description draft (145 chars): `Архитектура фильтров базы промптов: умный поиск, фильтры, примеры и master prompts для бизнеса, маркетинга, анализа, обучения, фото и AI-агентов.`
Canonical draft: `https://deladelishki.ru<resolved-public-route>`
Intent brief: Основной интент: «архитектура фильтров базы промптов». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: CollectionPage/ItemList for hub; CreativeWork for detail.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Форма заявки не нужна; добавить report issue/contact CTA. Для коммерческого интереса — ссылка на связанную услугу/курс. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/baza-promptov/?..." "prompt_feature"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
