# Prompt страницы: Спасибо / подтверждение заявки

**Маршрут:** `/spasibo/`  
**Родитель:** `/kontakty/ или checkout`  
**Дочерние/продолжение:** —

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Спасибо / подтверждение заявки» (`/spasibo/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Подтвердить реально выполненное действие и объяснить следующий шаг.

ХАРАКТЕР СТРАНИЦЫ
Тёплая микро-кульминация без ложного успеха.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Subtle success motion/confetti only reduced-safe and only after verified submission.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Что получено; когда ответ; что делать; links back; privacy note.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /kontakty/ или checkout
- Дочерние/следующие пути: —

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Не показывать success по прямому URL без подтверждённого flow. Payment success требует provider verification; статическая query string не доказывает оплату.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. Verified success heading only after actual form/payment flow.
2. What was received.
3. What happens next and response-time placeholder.
4. Direct contacts.
5. Links back to relevant route.
6. No claim of payment success without provider verification.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Спасибо / подтверждение заявки
2. Спасибо / подтверждение заявки: понятный путь к нужному действию
3. Спасибо / подтверждение заявки на deladelishki.ru

Offer/subhead candidates:
1. Спасибо / подтверждение заявки с ясной структурой, честными данными и понятным следующим шагом.
2. Контент остаётся доступным без декоративной перегрузки.
3. Все действия, статусы и ограничения объясняются до взаимодействия.

CTA set:
- Primary: `Продолжить`
- Secondary: `Связаться`
- Direct/micro: `На главную`

SEO title draft (48 chars): `Спасибо / подтверждение заявки | deladelishki.ru`
Meta description draft (94 chars): `Спасибо / подтверждение заявки на deladelishki.ru — личном digital-портале Данилы Подшивалова.`
Canonical draft: `https://deladelishki.ru/spasibo/`
Intent brief: Основной интент: «спасибо / подтверждение заявки». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: WebPage + noindex
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Форма не добавляется автоматически. Указать direct contact или support/contact route, если это соответствует странице. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Форма не реализуется до PHP lead API/admin + database + email/Telegram + SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/spasibo/" "thanks"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
