# Prompt страницы: Обзоры — каталог

**Маршрут:** `/blog/obzory/`  
**Родитель:** `/blog/`  
**Дочерние/продолжение:** —

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Обзоры — каталог» (`/blog/obzory/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Собрать reviews/comparisons инструментов, сервисов и продуктов.

ХАРАКТЕР СТРАНИЦЫ
Сравнительная, практичная, transparent.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Comparison facets/fit labels; not affiliate-heavy.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Объект; критерии; дата проверки; pros/cons; alternatives; affiliate status; cards/pagination.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /blog/
- Дочерние/следующие пути: —

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Отделить редакционную оценку от партнёрства. Не смешивать с /poleznye-servisy/ без ясной cross-link logic.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Breadcrumb + H1/description типа материалов.
2. Featured/current item.
3. Filters/tags с shareable URL, если нужны.
4. Карточки с title, summary, date/update, author, read time.
5. Pagination.
6. Editorial/source policy.
7. Related topic clusters и services.
8. Search/author contact.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Обзоры
2. Обзоры: практические материалы без теории ради теории
3. Обзоры — опыт, разборы и применимые решения

Offer/subhead candidates:
1. Материалы о маркетинге, digital, управлении и автоматизации с источниками, контекстом и практическими выводами.
2. Разборы задач, решений и инструментов на основе hands-on и управленческого опыта.
3. Читать, применять, сохранять и делиться — без искусственного SEO-текста.

CTA set:
- Primary: `Читать материалы`
- Secondary: `Найти по теме`
- Direct/micro: `Обсудить применение`

SEO title draft (32 chars): `Обзоры — блог Данилы Подшивалова`
Meta description draft (116 chars): `Обзоры: практические материалы Данилы Подшивалова о маркетинге, сайтах, рекламе, CRM, аналитике, AI и автоматизации.`
Canonical draft: `https://deladelishki.ru/blog/obzory/`
Intent brief: Основной интент: «обзоры». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: Blog/CollectionPage for listings; Article or NewsArticle + BreadcrumbList for details.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Lead form не нужен. Author card + contextual link к услуге/контактам. Newsletter — только после отдельной consent architecture. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/blog/obzory/" "blog_listing"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
