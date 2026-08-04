# Prompt страницы: Детальная страница кейса

**Маршрут:** `/keisy/[slug]/`  
**Родитель:** `/keisy/`  
**Дочерние/продолжение:** —

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Детальная страница кейса» (`/keisy/[slug]/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Провести посетителя через problem → constraints → process → solution → verified result.

ХАРАКТЕР СТРАНИЦЫ
Кинематографичная, но доказательная.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Before/process/after narrative; image expansion only if content supports it; text remains primary evidence.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Context; role; problem; constraints; research; process; solution; result with source; stack; gallery; testimonial only real; CTA.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /keisy/
- Дочерние/следующие пути: —

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Dynamic template after approval. Result metrics need period/baseline/source. Accessibility for before/after slider.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Breadcrumb.
2. Hero: project, role, period, one verified result.
3. Executive summary.
4. Business context and constraints.
5. Initial problem/baseline.
6. Research and decisions.
7. Strategy/roadmap.
8. Danila's leadership role, team/contractors and hands-on contribution.
9. Implementation by workstreams.
10. Deliverables/media.
11. Verified results with method/period/source; planned ≠ achieved.
12. Lessons/next steps.
13. Related services.
14. Form «Есть похожая задача?» + direct contacts.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Кейс
2. Кейс: задача, решения и подтверждённый результат
3. Кейс — что было сделано и почему

Offer/subhead candidates:
1. Контекст, роль Данилы, управленческие решения, практическая работа и способ измерения результата.
2. Без планов, выданных за достижения, и цифр без периода/методики.
3. Связанные услуги показывают, какие части подхода можно применить к другой задаче.

CTA set:
- Primary: `Обсудить похожую задачу`
- Secondary: `Посмотреть услуги`
- Direct/micro: `Написать Даниле`

SEO title draft (30 chars): `Кейс | Кейс Данилы Подшивалова`
Meta description draft (100 chars): `Кейс: контекст, стратегия, команда, реализация и подтверждённые результаты. Кейс Данилы Подшивалова.`
Canonical draft: `https://deladelishki.ru<resolved-public-route>`
Intent brief: Основной интент: «кейс». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: Article/CreativeWork + BreadcrumbList; never fake Review.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Короткая форма «Есть похожая задача?»: имя; задача; preferred contact; Russian phone/email; consent; captcha; relatedCaseId. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Обязательно для опубликованного кейса: native share + copy canonical URL + Telegram + VK. До proof/asset review кейс остаётся draft/noindex и share не публикуется.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/keisy/[slug]/" "case_detail"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
