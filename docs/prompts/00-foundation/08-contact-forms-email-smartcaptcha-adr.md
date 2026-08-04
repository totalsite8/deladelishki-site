# ADR prompt: personalised forms → PHP leads backend + email/Telegram + SmartCaptcha

```text
Работай как security-minded PHP/Astro solution architect и наставник для новичка. Read-only.

Прочитай:
- AGENTS.md;
- approved product brief;
- actual repository audit;
- contact/forms/share map;
- PHP leads backend candidate;
- FORM_CONTRACT_TEMPLATE;
- current deploy.yml (`rsync --delete`);
- Timeweb hosting constraints.

ФАКТИЧЕСКИЙ СТЕК
Astro 7 static + Tailwind 4 + React 19 + framer-motion 12; GitHub Actions deploys `dist/` to Timeweb. Timeweb supports PHP. Данила хочет email + Telegram notifications, later CRM, and a small read-only leads admin.

РЕЖИМ
Не меняй files/workflow/hosting. Не создавай DB, bot, captcha or keys. Не проси и не печатай secrets.

ЦЕЛЬ
Выбрать безопасную architecture for:
- personalised form per service;
- Russian phone mask + server normalisation;
- email validation;
- Yandex SmartCaptcha server verification;
- lead persistence;
- email to totalsite@yandex.ru;
- Telegram notification;
- read-only authenticated admin;
- CRM integration later.

PRIMARY CANDIDATES
A. PHP API/admin in a separate Timeweb path/subdomain with separate deploy.
B. PHP API/admin included in controlled public deploy output; secrets/DB outside deploy root.
C. Exact rsync excludes — analyse but do not prefer without strong reason.
D. External/serverless fallback only if PHP constraints make A/B unsuitable.

CRITICAL DEPLOY QUESTION
Current frontend uses `rsync --delete`. Explain exactly how each option prevents backend/admin files from being deleted and how rollback works.

FORM CONTRACTS
Define base envelope and service-specific `contextSchema` for every confirmed service. Russian phone only for first release; email is alternative. Budget omitted by default and considered mainly for turnkey/complex project. Timeframe is per service, not global.

LEAD/API CONTRACT
Define allowlisted request/response, status codes, length limits, normalisation, sanitisation, Origin/host, CSRF/replay, body size, honeypot, minimum fill time, rate limit, idempotency/double-submit and error mapping.

DATABASE
Propose minimal MySQL schema/migration/backup/retention. Do not store captcha token/server key/bot token. Decide privacy-safe treatment of IP/rate-limit keys and UTM.

ADMIN
One protected admin user initially; secure password hash/session cookie/login rate limit; list/filter/view only; no public registration/edit/delete/export. Explain why read-only still requires full access control.

EMAIL/TELEGRAM
- authenticated email/deliverability/header-injection safety;
- Telegram bot token/chat ID server-side only;
- notification failure does not lose lead;
- minimal necessary data in Telegram;
- later CRM adapter interface.

SMARTCAPTCHA
Explain that Yandex Cloud account is only needed to create/manage keys; PHP performs validation. Define public client key vs secret server key, allowed hosts, test mode, token expiry, server validation and fallback when captcha/network fails. Never request server key in chat/Git.

OUTPUT
1. Recommended A/B architecture.
2. Directory/deploy diagram.
3. Timeweb facts Danila must check later.
4. DB schema.
5. API/form contracts.
6. Admin/security model.
7. Email/Telegram flow.
8. SmartCaptcha steps.
9. Privacy/retention.
10. Test matrix.
11. Rollback.
12. Exact proposed files, no edits.
13. Beginner sequence: one action/command at a time.

Stop for approval before code or hosting changes.
```
