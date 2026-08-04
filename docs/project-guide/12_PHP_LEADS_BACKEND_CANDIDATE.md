# PHP leads backend candidate for Timeweb

Status: architecture candidate; no implementation until Timeweb/PHP/MySQL/deploy checks.

## Why PHP is reasonable here

Timeweb shared hosting supports PHP. The earlier phrase «исключение из static-only» meant only that PHP is server-executed while Astro pages are prebuilt files. It did not mean PHP is unsupported or a bad choice.

Recommended model:

```text
Astro 7 static pages
  ↓ POST JSON/form-data
PHP Lead API on Timeweb
  ↓ server validation + captcha
MySQL lead storage
  ├→ email totalsite@yandex.ru
  ├→ Telegram notification
  └→ read-only authenticated admin
       ↘ CRM later
```

## Goals

- Personalised form contracts by service.
- Russian phone + email validation.
- SmartCaptcha when configured.
- Email and Telegram notification.
- Durable lead record.
- Read-only admin: list/filter/view, no website content editing.
- CRM integration later without rewriting frontend forms.

## Not a goal initially

- Full CRM.
- Website CMS.
- Editing pages/courses/prompts.
- Complex roles.
- File uploads.
- Customer account.
- Payment backend.

## Candidate endpoints

```text
POST /api/v1/leads
GET  /admin/leads          protected HTML admin
GET  /admin/leads/{id}     protected detail
POST /admin/login          protected session
POST /admin/logout
GET  /api/v1/health        minimal/no secret details
```

Actual PHP filenames/routes depend on Timeweb rewrite support. Do not expose raw stack traces.

## Candidate lead schema

```text
id
created_at
locale                 ru/en
source_page
service_id
form_id
name
company
website
message/task
preferred_contact
phone_normalized
email_normalized
context_json           allowlisted service-specific answers
utm_json               allowlisted campaign fields
consent_version
captcha_provider/status
notification_email_status
notification_telegram_status
status                 new only initially; admin remains read-only
ip_hash_or_rate_key    privacy decision, not raw forever
user_agent_optional    avoid unless justified
```

Do not store captcha token, server key, bot token or unnecessary raw IP in lead data.

## Personalised frontend contract

All service forms share a base envelope, but each page defines `contextSchema`:

- Landing Page: current page/product, objective, desired action, integrations, launch date.
- Sites: current site, type, content volume, integrations, languages.
- CRM: current CRM/process, lead sources, team size, routing issues.
- Design: assets, channels/formats, brand status, deadline.
- Marketing: product, audience, channels, current metrics/data.
- Analytics: systems/counters/CRM, questions, data access.
- AI: process, tools/data, privacy, human approvals.
- Photography: product, formats, quantity, date/location.
- Training: audience, level, format, topic.
- Turnkey: scope, current team, objectives, optional budget range and timeframe.

Backend accepts only fields allowed by known `form_id`/`service_id`; it does not blindly email arbitrary client JSON.

## Admin

First release:

- one admin user;
- password hash, never plaintext;
- secure session cookie;
- login rate limit;
- CSRF for login/logout where relevant;
- list newest leads;
- filter by date/form/service;
- view lead;
- no edit/delete/export initially;
- no public registration;
- no secret values in HTML/logs.

Read-only does not remove the need for authentication and security: leads contain personal data.

## Notification

### Email

- Recipient: `totalsite@yandex.ru`.
- Prefer authenticated SMTP or provider supported by Timeweb; verify deliverability/SPF/DKIM/From/Reply-To.
- User email goes to Reply-To only after injection-safe validation.
- Do not set arbitrary user input as mail headers.

### Telegram

- Bot token stored server-side only.
- Chat ID stored server-side.
- Message contains minimum necessary lead summary and admin link, not every sensitive field.
- Telegram failure must not discard a valid lead.

## SmartCaptcha

Yandex Cloud account is needed to create/manage SmartCaptcha keys, not to host PHP. PHP sends the one-time token and server key to Yandex validation endpoint. Client key is public; server key stays outside public root/repository.

Captcha can be added after the endpoint works with test anti-spam layers. Do not create/send keys yet.

## Deploy problem to solve first

Current workflow:

```text
rsync dist/ to DEPLOY_PATH with --delete
```

Unsafe naive scenario:

```text
manual public_html/api/lead.php
next deploy --delete
→ API may be deleted
```

Candidate solutions:

### 1. Backend code as controlled public assets

PHP code stored in a dedicated repository folder copied into `dist/api`/`dist/admin`; secrets config and database outside public/deploy root. One deploy owns all public files.

Pros: simple consistency.  
Risk: Astro/public copying and PHP execution paths must be tested; backend code changes deploy with frontend.

### 2. Separate backend directory/subdomain

`api.deladelishki.ru` or separate remote path, deployed by a separate workflow/job without frontend `--delete` crossing it.

Pros: clean isolation.  
Risk: CORS, second deploy, configuration complexity.

### 3. Rsync excludes

Keep backend inside same tree but exclude exact paths from deletion.

Pros: fewer paths.  
Risk: stale/manual files and accidental misconfiguration; least preferred for a beginner unless carefully tested.

Recommended research order: separate directory/subdomain vs controlled backend-in-deploy. Do not edit current successful deploy until a test/rollback plan exists.

## Timeweb facts to collect later

From panel/support, without secrets:

- active PHP version;
- required extensions: PDO MySQL, cURL, JSON, mbstring, OpenSSL/session;
- MySQL availability/version;
- private config path outside web root;
- SMTP/mail limits and recommended authenticated method;
- rewrite/router behavior for `/api` and `/admin`;
- access/error logs;
- backup for DB;
- HTTPS/security headers;
- whether separate subdomain/path changes SSH deploy settings.

## Privacy/legal

Before production:

- privacy policy names all processors;
- consent text/version;
- retention period;
- deletion/contact process;
- access control;
- backup/restore;
- breach/update process;
- data sent to Telegram considered explicitly;
- English privacy version reviewed.

## Release sequence

1. ADR and Timeweb checks.
2. DB/schema/private config plan.
3. Local/test PHP endpoint outside production.
4. Server validation/honeypot/rate limit.
5. Lead storage.
6. Email.
7. Telegram.
8. Read-only admin.
9. SmartCaptcha test/prod keys.
10. One service form pilot.
11. Security/privacy test.
12. Production deploy/rollback.
13. Replicate personalised forms.
