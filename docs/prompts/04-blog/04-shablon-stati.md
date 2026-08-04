# Prompt страницы: Шаблон детальной статьи

**Маршрут:** `/blog/[slug]/`  
**Родитель:** `/blog/`  
**Дочерние/продолжение:** —

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Шаблон детальной статьи» (`/blog/[slug]/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Обеспечить быструю, читаемую и SEO-корректную страницу материала.

ХАРАКТЕР СТРАНИЦЫ
Типографическая, спокойная, focused reading.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Reading progress и sticky TOC только если они улучшают длинный текст; CSS/static fallback.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Category/date/author/update; H1/lead; TOC; body; sources; correction policy; related; CTA.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /blog/
- Дочерние/следующие пути: —

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Content collection + dynamic build route. No Motion just for paragraph reveals. Avoid infinite related content.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Breadcrumb.
2. Article header: category, H1, lead, author, publish/update date, read time.
3. Share row: native/copy/Telegram/VK.
4. Hero media с caption/source.
5. TOC для длинного материала.
6. Body с evidence, examples, callouts и корректной heading hierarchy.
7. Contextual related-service/prompt CTA без разрыва чтения.
8. Вывод/actionable checklist.
9. Sources, methodology, correction/update note.
10. Author card Данилы + «Обсудить применение».
11. Share row повторно.
12. Related articles/cases/prompts/courses.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Статья блога
2. Статья блога: практические материалы без теории ради теории
3. Статья блога — опыт, разборы и применимые решения

Offer/subhead candidates:
1. Материалы о маркетинге, digital, управлении и автоматизации с источниками, контекстом и практическими выводами.
2. Разборы задач, решений и инструментов на основе hands-on и управленческого опыта.
3. Читать, применять, сохранять и делиться — без искусственного SEO-текста.

CTA set:
- Primary: `Читать материалы`
- Secondary: `Найти по теме`
- Direct/micro: `Обсудить применение`

SEO title draft (38 chars): `Статья блога — блог Данилы Подшивалова`
Meta description draft (122 chars): `Статья блога: практические материалы Данилы Подшивалова о маркетинге, сайтах, рекламе, CRM, аналитике, AI и автоматизации.`
Canonical draft: `https://deladelishki.ru<resolved-public-route>`
Intent brief: Основной интент: «статья блога». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: Blog/CollectionPage for listings; Article or NewsArticle + BreadcrumbList for details.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Lead form не нужен. Author card + contextual link к услуге/контактам. Newsletter — только после отдельной consent architecture. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Обязательно после lead и после conclusion: native share + copy canonical URL + Telegram + VK.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/blog/[slug]/" "article"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
