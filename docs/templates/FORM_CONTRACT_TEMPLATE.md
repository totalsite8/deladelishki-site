# Form contract: [Form name]

## Placement

- Routes/page types:
- Purpose:
- Email recipient: totalsite@yandex.ru
- Telegram recipient/bot config: secret server-side, define later
- CRM adapter: later
- Endpoint architecture/deploy decision:

## Fields

| Field | Type | Required | Client validation | Server validation | Stored/sent |
|---|---|---:|---|---|---|
| name | text | yes | trim/length | trim/length/sanitize | email payload |
| phone | tel | conditional | mask/usability | normalize/validate | email payload |
| email | email | conditional | browser/reasonable | normalize/validate | email payload |
| message | textarea | yes | length | length/sanitize | email payload |
| consent | checkbox | yes | checked | checked/version | audit field |
| captchaToken | hidden | yes | present | Yandex server validation | do not log raw |
| honeypot | hidden | no | empty | reject if filled | do not send |
| sourcePage | hidden | yes | canonical | allowlist/length | email metadata |
| serviceId | hidden | contextual | canonical | allowlist | email metadata |

Rule: at least Russian `+7` phone or email; preferred channel makes the matching field required. Budget is absent by default and usually considered only for turnkey/complex projects. Timeframe/context fields are defined per `formId`.

## States

- idle:
- validating:
- captcha:
- sending:
- success:
- validation error:
- captcha/network error:
- server/email error:

## Direct fallback

- Email: totalsite@yandex.ru
- Phone: +7 903 727-51-31
- VK: https://vk.com/id990254

## Security/privacy

- Server key storage:
- Origin/host:
- Rate limit:
- Body/length limits:
- Email header injection:
- Logs/retention:
- Consent text/version:
- Privacy link:

## Tests

- [ ] Valid phone.
- [ ] Valid email.
- [ ] Neither phone nor email.
- [ ] Paste/edit phone.
- [ ] Invalid/expired captcha.
- [ ] Honeypot/rate limit.
- [ ] Timeout/email failure.
- [ ] Double submit.
- [ ] Keyboard/mobile/screen reader.
- [ ] Production host.
