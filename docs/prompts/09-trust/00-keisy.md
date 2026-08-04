# Prompt страницы: Кейсы — хаб

**Маршрут:** `/keisy/`  
**Родитель:** `/`  
**Дочерние/продолжение:** Case details

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Кейсы — хаб» (`/keisy/`).

Перед началом прочитай @AGENTS.md, @docs/prompts/_COMMON_PAGE_PROTOCOL.md и @docs/content-source/PROFILE_AND_CASES_DRAFT.md (или их фактические пути), затем существующие layout/tokens/navigation data, четыре case prompts, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Доказать компетенции через реальные задачи, процесс и результаты.

ХАРАКТЕР СТРАНИЦЫ
Evidence-first cinematic portfolio; меньше саморекламы, больше фактов.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Case preview visual morph/reveal только при наличии optimized media; filters optional.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Featured cases; categories; problem/result summaries; role/services; dates; client permission; cards. Первые четыре draft-направления: premium-мебель/marketing system; B2B compressor launch; FoodTech brand launch; SEO/performance/brand growth. Не публиковать пустой detail и не показывать непроверенную цифру как факт.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /
- Дочерние/следующие пути: Case details

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Данила разрешил публично называть четыре resume-derived кейса, но metrics/screenshots/logos/assets still require evidence/rights review. Case pages создаются после связанных service pages, затем добавляется reciprocal internal linking. Нельзя выдумывать clients/metrics/testimonials. При NDA — честно описать ограничения и обезличить.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Hero: доказательства управленческой и практической работы.
2. Short leadership positioning.
3. Featured case.
4. Case grid by problem/service/industry; filters only when enough cases.
5. Verification note: role, period, sources.
6. Cross-service competence map.
7. CTA «Есть похожая задача?» + short contact form.
8. Related About/Services.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Кейсы: как стратегия превращается в работающую систему
2. Задачи, решения и результаты
3. Маркетинг и digital — с контекстом, процессом и доказательствами

Offer/subhead candidates:
1. Показываю не только финальную картинку, но и управленческие решения, командную работу, практическую реализацию и способ измерения результата.
2. Кейсы из B2B, B2C, premium-мебели, промышленного оборудования, FoodTech и отделочных материалов.
3. Каждый опубликованный результат сопровождается ролью, периодом и доступным подтверждением.

CTA set:
- Primary: `Посмотреть кейсы`
- Secondary: `Обсудить похожую задачу`
- Direct/micro: `О нас`

SEO title draft (57 chars): `Кейсы по маркетингу, сайтам и digital | Данила Подшивалов`
Meta description draft (120 chars): `Кейсы Данилы Подшивалова: запуск брендов, маркетинг с нуля, сайты, SEO, реклама, CRM, аналитика, дизайн и автоматизация.`
Canonical draft: `https://deladelishki.ru/keisy/`
Intent brief: Основной интент: «кейсы». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: CollectionPage + ItemList; each detail Article/CreativeWork.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Короткая форма «Есть похожая задача?»: имя; задача; preferred contact; Russian phone/email; consent; captcha; relatedCaseId. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/keisy/" "case_hub"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
