# Prompt страницы: Раскрытие партнёрских ссылок

**Маршрут:** `/raskrytie-partnerskih-ssylok/`  
**Родитель:** `footer/legal`  
**Дочерние/продолжение:** —

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Раскрытие партнёрских ссылок» (`/raskrytie-partnerskih-ssylok/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Прозрачно объяснить партнёрское вознаграждение и принцип рекомендаций.

ХАРАКТЕР СТРАНИЦЫ
Короткая, честная, спокойная.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
No motion needed.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Что является affiliate; влияет ли цена; критерии отбора; editorial independence; contact.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: footer/legal
- Дочерние/следующие пути: —

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Краткое disclosure также показывается рядом с affiliate links, не только на отдельной странице.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. H1 and effective/update date.
2. Plain-language summary.
3. TOC.
4. Legally reviewed sections matching real data/payment/affiliate flow.
5. Contact.
6. Change history where appropriate.
7. No decorative motion or invented compliance.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Раскрытие партнёрских ссылок
2. Раскрытие партнёрских ссылок: понятный путь к нужному действию
3. Раскрытие партнёрских ссылок на deladelishki.ru

Offer/subhead candidates:
1. Раскрытие партнёрских ссылок с ясной структурой, честными данными и понятным следующим шагом.
2. Контент остаётся доступным без декоративной перегрузки.
3. Все действия, статусы и ограничения объясняются до взаимодействия.

CTA set:
- Primary: `Продолжить`
- Secondary: `Связаться`
- Direct/micro: `На главную`

SEO title draft (46 chars): `Раскрытие партнёрских ссылок | deladelishki.ru`
Meta description draft (92 chars): `Раскрытие партнёрских ссылок на deladelishki.ru — личном digital-портале Данилы Подшивалова.`
Canonical draft: `https://deladelishki.ru/raskrytie-partnerskih-ssylok/`
Intent brief: Основной интент: «раскрытие партнёрских ссылок». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: WebPage
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
Запусти `/skill:page-swarm "/raskrytie-partnerskih-ssylok/" "legal"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
