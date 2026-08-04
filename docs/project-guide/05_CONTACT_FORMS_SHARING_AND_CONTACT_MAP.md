# Формы обратной связи, контакты и кнопки «Поделиться»

## 1. Главный архитектурный факт

Astro static может отрисовать форму и валидировать поля в браузере, но не может безопасно:

- отправить письмо через секретный SMTP;
- проверить SmartCaptcha server key;
- выполнить rate limiting;
- скрыть секреты;
- гарантированно принять заявку.

Для реальной формы нужен server-side endpoint. С учётом решения Данилы и возможностей Timeweb основной кандидат — изолированный PHP lead API + read-only admin + database на Timeweb. Astro-страницы остаются статическими; термин `hybrid` означает только сочетание static frontend и маленькой server-side подсистемы заявок, а не проблему или смену всего стека.

Yandex SmartCaptcha выдаёт публичный client key и секретный server key. Client key можно использовать в браузере; server key должен храниться только на backend. Одноразовый token необходимо отправить с backend на Yandex validation endpoint. Виджет без серверной проверки не защищает форму [1](https://yandex.cloud/en/docs/smartcaptcha/operations/validate-captcha) [2](https://yandex.cloud/en/docs/smartcaptcha/concepts/keys).

---

# 2. Рекомендуемая карта контактов

## Глобальная шапка

- Primary utility CTA: `Обсудить проект` → `/kontakty/?tema=proekt`.
- На mobile — кнопка в menu, не постоянная перекрывающая плашка.

## Footer на всех страницах

- `totalsite@yandex.ru`;
- `+7 903 727-51-31`;
- `VK`;
- `/kontakty/`;
- legal pages;
- короткое позиционирование.

## Главная

- Hero CTA: `Обсудить проект`.
- Secondary: `Выбрать направление`.
- После кейсов: короткая форма/project selector.
- Финальный contact block: email, телефон, VK и переход на полную форму.

## Хабы услуг

Форма: **«Не уверены, с чего начать?»**

Поля:

- имя;
- компания/сайт — optional;
- краткая задача;
- удобный способ связи;
- телефон или email;
- consent;
- captcha.

## Каждая детальная услуга

Форма: **«Расскажите о задаче»**. Контекст услуги автоматически передаётся hidden field, но видимо отображается пользователю.

Поля:

1. Имя — required.
2. Компания/проект — optional.
3. Сайт или ссылка — optional, URL validation.
4. Что нужно решить — required, textarea.
5. Предпочтительный результат — contextual.
6. Срок/дата запуска — добавляется только там, где релевантно конкретной услуге.
7. Бюджетный диапазон — по умолчанию отсутствует; рассматривается прежде всего для `Под ключ`/сложных проектов.
8. Предпочтительный канал: телефон/email/VK.
9. Телефон.
10. Email.
11. Согласие с privacy — required.
12. SmartCaptcha token.
13. Honeypot — скрыто.
14. `sourcePage`, `serviceId`, UTM — hidden, но без чувствительных данных.

Правило: пользователь должен заполнить **хотя бы телефон или email**. Если выбран канал «телефон», телефон становится required; если email — required.

## Кейсы

Форма после результатов:

> «Есть похожая задача? Разберём, какие части этого подхода применимы к вашему проекту».

Поля короче service form: имя, контакт, задача, consent, captcha.

## О нас и персональная страница Данилы

Не вставлять тяжёлую форму в hero.

- `/o-nas/`: project/team CTA и переход на контакты.
- `/o-nas/danila-podshivalov/`: `Обсудить интересный проект`, email, телефон, VK и compact form или `/kontakty/?tema=sotrudnichestvo`.

## Контакты

Полная форма + прямые способы связи. Срок ответа не обещать.

## Блог/статьи

- Не ставить lead form в каждой статье.
- После author card: contextual CTA к связанной услуге или `/kontakty/`.
- Share buttons сверху/снизу.
- Newsletter только после отдельной consent/email architecture.

## Курсы

- Share buttons на course detail.
- Questions CTA: email/contact form.
- Purchase CTA отдельно от contact form.
- Payment support contact отдельной темой.

## Master prompts

- Share buttons;
- Copy prompt;
- Report an issue/contact;
- CTA к связанному курсу/услуге.

---

# 3. UX и валидация формы

## Телефон

Display format:

```text
+7 903 727-51-31
```

Mask for Russian number:

```text
+7 (___) ___-__-__
```

Но маска не должна быть единственной валидацией. Перед отправкой нормализовать до E.164:

```text
+79037275131
```

Требования:

- `type="tel"`;
- `autocomplete="tel"`;
- mobile numeric keyboard через appropriate input mode;
- paste полного номера работает;
- Backspace не ломает input;
- error text связан с input через `aria-describedby`;
- first-release form accepts Russian `+7` numbers only; explain the expected format and keep email as an alternative for international visitors.

Не устанавливать тяжёлую mask library без проверки. Для простой маски можно использовать маленькую локальную функцию или лёгкий approved package.

## Email

- `type="email"`;
- `autocomplete="email"`;
- trim пробелов;
- браузерная + серверная валидация;
- не использовать чрезмерно строгий regex, отклоняющий реальные адреса;
- повторная серверная проверка обязательна.

## Text fields

- limits на client и server;
- no HTML or sanitise;
- понятные examples;
- не очищать введённые данные после network error;
- error summary + field errors;
- disabled/loading button не должен оставлять пользователя без feedback.

## States

Обязательные:

```text
idle → validating → captcha → sending → success
                               ↘ validation error
                               ↘ captcha/network error
                               ↘ server/storage/email/Telegram error
```

Success должен показываться только после ответа endpoint. Redirect на `/spasibo/` сам по себе не доказывает успешную отправку.

## Accessibility

- labels, не placeholder вместо label;
- required indicator объяснён;
- errors не только красным цветом;
- `aria-live="polite"` для status;
- focus переходит к error summary при failed submit;
- captcha доступна keyboard;
- на captcha network failure есть альтернативный способ связи.

---

# 4. Anti-spam layers

Рекомендуемый минимум:

1. Server-side SmartCaptcha validation.
2. Honeypot field.
3. Минимальное время заполнения.
4. IP/rate limit на endpoint.
5. Размеры/length limits.
6. Origin/host validation.
7. CSRF/replay considerations по выбранной architecture.
8. Email header injection protection.
9. Логи без полного текста заявки/лишних персональных данных.
10. Не сообщать robot подробности, помогающие обходу.

---

# 5. Пошагово: Yandex SmartCaptcha

Yandex Cloud — кабинет, в котором создаётся SmartCaptcha и выдаются client/server keys. Он не нужен для размещения Astro или PHP, если endpoint работает на Timeweb. Аккаунт понадобится только на captcha-этапе. Создавать его сейчас не требуется.

Точные пункты интерфейса Yandex Cloud могут меняться; перед действиями сверяться с текущей официальной документацией.

## Этап 1 — только после выбора backend

1. Войти в Yandex Cloud.
2. Создать cloud/folder или выбрать существующий.
3. Открыть SmartCaptcha.
4. Создать captcha.
5. Добавить разрешённые hosts:
   - `deladelishki.ru`;
   - `www.deladelishki.ru`, если widget может загружаться до redirect;
   - local/test host по официальному способу или использовать test mode.
6. Получить:
   - client key — публичный;
   - server key — секретный.
7. Client key хранить в public frontend config/environment по правилам Astro.
8. Server key хранить только в secrets backend provider, например Lockbox/environment secret.
9. Никогда не присылать server key в чат и не добавлять в GitHub.

## Этап 2 — frontend

1. Загрузить официальный widget/script только на страницах с формой, а не глобально на всём сайте.
2. Передать client key.
3. Получить token в hidden input/callback.
4. Обработать success, token expired, network error.
5. Отправить token вместе с form data на approved endpoint.

## Этап 3 — backend

1. Получить form body.
2. Проверить method/content type/origin/limits.
3. Проверить honeypot/rate limit.
4. Провалидировать все поля повторно.
5. Отправить server-to-server POST на Yandex validation endpoint с server key/token/IP.
6. Проверить `status === "ok"` и ожидаемый host.
7. Только после успешной проверки сохранить lead, отправить email и Telegram notification; CRM integration later.
8. Read-only admin получает authenticated access to lead list/details without content editing.
9. Вернуть нейтральный JSON result.
10. Не выводить server key, bot token, DB password и raw personal data в logs.

## Этап 4 — test

- valid submit;
- invalid phone/email;
- empty contact;
- honeypot;
- expired token;
- captcha blocked/network unavailable;
- duplicate submit;
- endpoint timeout;
- email failure;
- mobile/keyboard/screen reader;
- production domain.

---

# 6. Варианты endpoint

## A. Yandex Cloud Function/API Gateway

**Плюсы:** Yandex ecosystem, server key можно хранить отдельно, основной сайт остаётся static.  
**Минусы:** настройка function/email delivery, CORS, logs и billing; сложнее новичку.

## B. Timeweb Cloud/VDS function/API

**Плюсы:** одна hosting ecosystem.  
**Минусы:** отдельная услуга/администрирование.

## C. PHP lead API + read-only admin на текущем Timeweb — основной кандидат

**Плюсы:** Timeweb уже используется и поддерживает PHP; не нужен отдельный Node/VDS; можно отправлять email/Telegram, хранить leads в MySQL и дать защищённый read-only admin. Astro-страницы остаются static.  
**Минусы/обязанности:** server-side validation, auth/session/CSRF, DB migration/backup, rate limit, mail deliverability, secret storage вне public Git, privacy/retention и отдельный security review.

**Deploy risk:** текущий rsync использует `--delete`. Нельзя вручную хранить backend/admin/runtime files в deploy directory без решения: они могут быть удалены. Backend code должен либо входить в controlled deployment, либо жить в отдельном remote path/subdomain; secrets/config — вне public/deploy root; leads — в DB, не JSON-файлах рядом с `dist`.

## D. Form provider

**Плюсы:** быстро.  
**Минусы:** vendor/runtime dependency, privacy, доступность из РФ/через VPN, branding/limits; Yandex CAPTCHA может не поддерживаться.

**Рекомендация после ответов Данилы:** исследовать PHP/MySQL вариант первым. Термин «исключение» больше не нужен; это осознанная hybrid architecture: static Astro frontend + small PHP leads subsystem. До кода проверить PHP version/modules, MySQL access, mail/SMTP, private config path, Telegram bot flow и поведение rsync `--delete`.

---

# 7. Share buttons

## Где обязательны

- каждая детальная статья;
- каждый course detail/обучающий материал;
- master prompt detail (`isMaster: true`);
- published case detail;
- published app detail.

## Набор

1. Native Web Share — когда поддерживается.
2. Copy link — всегда.
3. Telegram.
4. VK.

WhatsApp/email share не входят в утверждённый first-release набор.

Не подключать social SDK. Share URL формируется только при клике.

## Component behavior

- server-rendered buttons/links;
- маленький progressive script для native share/copy;
- `aria-label` с названием материала;
- visible focus;
- copy success через `aria-live`;
- fallback, если Clipboard API недоступен;
- popup открывается безопасно `noopener,noreferrer`;
- canonical URL, не случайный URL с UTM;
- analytics event только после consent strategy;
- no counters, если нет реального API.

## Расположение

### Статья

- компактный rail/row после lead;
- повтор после conclusion;
- на mobile — horizontal button group, который помещается без page overflow и переносится на строки.

### Курс

- один блок после hero/краткого описания;
- второй не нужен, если страница короткая.

### Master prompt

- рядом с `Копировать промпт`;
- copy prompt и share page — разные действия с разными labels.

### Case/App

- один share block после executive summary/hero;
- повтор в финале только для длинного case;
- share title/description/image используют approved public facts/assets.

---

# 8. Privacy data map

До формы нужно записать:

- какие поля собираются;
- зачем;
- куда отправляются;
- кто получает email;
- срок хранения;
- как удалить данные;
- captcha provider;
- hosting/logging;
- analytics events;
- international transfer, если появляется foreign provider.

Privacy policy создаётся из реального data map, а не наоборот.
