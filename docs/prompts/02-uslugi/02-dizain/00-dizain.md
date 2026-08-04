# Prompt страницы: Дизайн — хаб

**Маршрут:** `/uslugi/dizain/`  
**Родитель:** `/uslugi/`  
**Дочерние/продолжение:** Бренд, Коммерческий дизайн, Маркетплейсы, Социальные сети, Веб-интерфейсы

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Дизайн — хаб» (`/uslugi/dizain/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Показать дизайн как коммерческий инструмент и целостный визуальный язык.

ХАРАКТЕР СТРАНИЦЫ
Тактильная editorial-подача, смелая типографика и контролируемая галерейность.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Visual materials/frames меняют композицию при выборе направления; без drag-only navigation.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Бренд; коммерческий дизайн; маркетплейсы; соцсети; веб-интерфейсы; подход; кейсы; CTA.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /uslugi/
- Дочерние/следующие пути: Бренд, Коммерческий дизайн, Маркетплейсы, Социальные сети, Веб-интерфейсы

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Следовать общему протоколу; дополнительных исключений нет.

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
1. Дизайн
2. Дизайн для бизнеса — от задачи до работающей системы
3. Дизайн: стратегия, реализация и контроль результата

Offer/subhead candidates:
1. Создаю визуальные системы, которые помогают бренду быть узнаваемым, понятным и последовательным в digital и offline.
2. Данила Подшивалов может взять на себя постановку задачи, координацию специалистов и контроль результата по направлению «Дизайн».
3. От диагностики текущей ситуации до понятного плана, deliverables и следующих шагов.

CTA set:
- Primary: `Обсудить дизайн-задачу`
- Secondary: `Посмотреть кейсы`
- Direct/micro: `Написать Даниле`

SEO title draft (38 chars): `Дизайн для бизнеса | Данила Подшивалов`
Meta description draft (158 chars): `Создаю визуальные системы, которые помогают бренду быть узнаваемым, понятным и последовательным в digital и offline. Руководитель проекта — Данила Подшивалов.`
Canonical draft: `https://deladelishki.ru/uslugi/dizain/`
Intent brief: Основной интент: «дизайн». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: Service + BreadcrumbList; provider → Person `#danila-podshivalov`.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
EAZZYPIZZY (naming/identity/packaging) и Millargo (brand/logobook/presentations/POS); использовать только разрешённые visual assets.

FORM И ПРЯМАЯ СВЯЗЬ
Routing form «Не уверены, с чего начать?»: имя; бизнес/сайт optional; задача; preferred contact; Russian phone/email; consent; captcha; hubId. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/uslugi/dizain/" "service_hub"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
