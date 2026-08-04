# Prompt страницы: Настройка AI-агента

**Маршрут:** `/uslugi/ai/nastroika-agenta/`  
**Родитель:** `/uslugi/ai/`  
**Дочерние/продолжение:** —

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Настройка AI-агента» (`/uslugi/ai/nastroika-agenta/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Объяснить проектирование роли, знаний, инструментов, ограничений и оценки агента.

ХАРАКТЕР СТРАНИЦЫ
Диалоговая, но не gimmick chatbot page.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Agent blueprint раскрывает роль → контекст → tools → guardrails → evaluation; interactive demo только локальное UI state.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Use cases; knowledge; tools; prompts; guardrails; tests; monitoring; handoff; CTA.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /uslugi/ai/
- Дочерние/следующие пути: —

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Не отправлять пользовательские данные в реальный AI без consent/backend decision. Demo не должен изображать production intelligence.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Breadcrumb и ссылка на parent hub.
2. Hero: H1, outcome-led offer, primary CTA «Обсудить задачу», secondary «Посмотреть кейсы».
3. «Когда услуга нужна»: симптомы/ситуации бизнеса.
4. «Что изменится»: результаты и честные границы без гарантий.
5. Scope: что входит и что не входит.
6. Deliverables: что клиент получает на руки.
7. Почему Данила: leadership + релевантная hands-on практика.
8. Процесс по этапам, checkpoints, роль клиента и зависимости.
9. Релевантный кейс/доказательство; если proof нет — список требуемых материалов.
10. FAQ по срокам, данным, взаимодействию, стоимости без выдуманных цен.
11. Contextual form «Расскажите о задаче» + email/phone/VK fallback.
12. Related services, cases, articles/prompts и final CTA.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Настройка AI-агента
2. Настройка AI-агента для бизнеса — от задачи до работающей системы
3. Настройка AI-агента: стратегия, реализация и контроль результата

Offer/subhead candidates:
1. Проектирую роль, контекст, знания, инструменты, ограничения и тесты AI-агента под конкретную рабочую задачу.
2. Данила Подшивалов может взять на себя постановку задачи, координацию специалистов и контроль результата по направлению «Настройка AI-агента».
3. От диагностики текущей ситуации до понятного плана, deliverables и следующих шагов.

CTA set:
- Primary: `Обсудить AI-агента`
- Secondary: `Посмотреть кейсы`
- Direct/micro: `Написать Даниле`

SEO title draft (51 chars): `Настройка AI-агента для бизнеса | Данила Подшивалов`
Meta description draft (150 chars): `Проектирую роль, контекст, знания, инструменты, ограничения и тесты AI-агента под конкретную рабочую задачу. Руководитель проекта — Данила Подшивалов.`
Canonical draft: `https://deladelishki.ru/uslugi/ai/nastroika-agenta/`
Intent brief: Основной интент: «настройка ai-агента». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: Service + BreadcrumbList; provider → Person `#danila-podshivalov`.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Millargo: AI-generated furniture visuals; EnergoReserve: prompt work. Не представлять это как автономного production-агента без отдельного кейса.

FORM И ПРЯМАЯ СВЯЗЬ
Contextual form «Расскажите о задаче»: имя; компания optional; процесс для автоматизации; инструменты/данные; ограничения безопасности; human approvals; задача; preferred contact; Russian phone/email (at least one); consent; captcha; serviceId/sourcePage/UTM; honeypot. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/uslugi/ai/nastroika-agenta/" "service_detail"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
