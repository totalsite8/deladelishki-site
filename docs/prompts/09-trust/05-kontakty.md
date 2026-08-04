# Prompt страницы: Контакты

**Маршрут:** `/kontakty/`  
**Родитель:** `/`  
**Дочерние/продолжение:** —

Скопируйте блок ниже в новую Kimi-сессию для этой страницы.

```text
Мы работаем ТОЛЬКО над страницей «Контакты» (`/kontakty/`).

Перед началом прочитай @AGENTS.md и @docs/prompts/_COMMON_PAGE_PROTOCOL.md (или их фактические пути), затем существующие layout/tokens/navigation data, родительскую страницу и `git status --short`.

КОНТЕКСТ И ЦЕЛЬ
Сделать следующий шаг простым, понятным и безопасным.

ХАРАКТЕР СТРАНИЦЫ
Тёплая минималистичная страница с быстрым откликом интерфейса.

НАПРАВЛЕНИЕ SIGNATURE INTERACTION
Form state feedback/magnetic nuance only after real form destination; contact methods remain links.

ОБЯЗАТЕЛЬНЫЙ КОНТЕНТ
Как связаться; темы обращения; contact links; персонализированная форма/consent; alternative if form fails. Не обещать срок ответа и не показывать город/часовой пояс.

РОДИТЕЛЬ/СВЯЗИ
- Родитель: /
- Дочерние/следующие пути: —

СПЕЦИАЛЬНЫЕ ОГРАНИЧЕНИЯ
Static site needs approved form provider/server endpoint, spam protection, consent and privacy. Не внедрять до ADR; placeholder form не должен обещать отправку.

<!-- V2_CONTENT_BRIEF_START -->
ОБЯЗАТЕЛЬНАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ БЛОКОВ ДЛЯ ПРОРАБОТКИ
1. H1 «Обсудим задачу» + short expectation-setting offer.
2. What topics/projects are welcome.
3. Direct contacts: email, phone, VK with working links.
4. Full general form.
5. What happens after submit without a response-time promise: accepted/failed, email + Telegram notification, future CRM status.
6. Privacy/SmartCaptcha/data-storage/admin-view note.
7. Alternative contact if captcha/form is unavailable.
8. Related About/Cases/Services.

DRAFT COPY/SEO PACKAGE — SWARM ДОЛЖЕН ПРОВЕРИТЬ И УЛУЧШИТЬ
H1 candidates:
1. Обсудим задачу
2. Расскажите, что нужно изменить или запустить
3. Открыт к диалогу о сильных и действительно интересных проектах

Offer/subhead candidates:
1. Опишите задачу — от маркетинговой системы и запуска бренда до сайта, CRM, аналитики или автоматизации.
2. Можно начать с короткого сообщения: я помогу определить, какой формат работы и набор компетенций нужен.
3. Свяжитесь по email, телефону, VK или отправьте форму после подключения защищённого endpoint.

CTA set:
- Primary: `Отправить задачу`
- Secondary: `Написать на email`
- Direct/micro: `Позвонить`

SEO title draft (45 chars): `Контакты Данилы Подшивалова — обсудить проект`
Meta description draft (123 chars): `Связаться с Данилой Подшиваловым: маркетинг, сайты, CRM, аналитика, AI и автоматизация. Email, телефон, VK и форма проекта.`
Canonical draft: `https://deladelishki.ru/kontakty/`
Intent brief: Основной интент: «контакты». Swarm должен уточнить коммерческие/информационные/навигационные формулировки по актуальной выдаче без выдуманных частотностей.
Schema candidate: ContactPage + Person/ContactPoint only with approved public details.
OG: отдельные title/description и реальное/approved image; не использовать случайный screenshot.

PROOF/CASE PLAN
Использовать только approved profile/case/content facts; перечислить missing proof/media/permissions.

FORM И ПРЯМАЯ СВЯЗЬ
Полная general form: имя; компания/сайт optional; тема; задача; preferred contact; Russian Russian phone/email (at least one); contextual срок only when relevant; budget omitted by default; consent; captcha; source/UTM/honeypot. Прямые альтернативы: `mailto:totalsite@yandex.ru`, `tel:+79037275131`, `https://vk.com/id990254`.
Submission target: approved PHP lead API/admin on Timeweb or another selected endpoint; notify email + Telegram, CRM later. Форма не реализуется до server-side validation/storage/auth/SmartCaptcha/deploy ADR. Client-only success/captcha запрещены.

SHARE
Не требуется на этой странице.

INTERNAL LINKS
Обязательно перечислить parent, children/siblings, 1–2 релевантных case, 1 материал/промпт/курс при наличии, `/o-nas/`, `/kontakty/`. Не создавать ссылки на пустые planned routes.

SWARM BEFORE CONCEPTS
Запусти `/skill:page-swarm "/kontakty/" "contact"` при доступности sub-agents. Иначе выполни шесть streams последовательно и честно укажи это. Main agent должен вернуть согласованный brief с recommended H1/offer/CTA/title/description/schema/block order/form/proof plan.
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
