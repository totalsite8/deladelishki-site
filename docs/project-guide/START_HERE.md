# START HERE — актуальный следующий шаг
## deladelishki.ru · версия комплекта 4.0 · 21 июля 2026

---

# 1. Команды в терминале — правило для новичка

Да: вводите команды **строго по одной**.

```text
команда → Enter → дождаться результата → проверить → следующая команда
```

Не вводите часть приглашения PowerShell:

```text
PS C:\Users\Darel\Desktop\dela\Projects\deladelishki-site>
```

Вводится только то, что находится после `>`.

Если команда запускает server (`npm run dev`, `npm run preview`), terminal занят до `Ctrl+C`. Сначала остановите server, дождитесь возвращения `PS ...>`, затем вводите следующую команду.

Не вставляйте сразу блок из нескольких команд, пока инструкция явно не скажет, что это один готовый PowerShell block.

---

# 2. Текущая техническая проверка завершена

Подтверждено пользователем и публичным GitHub:

```text
Repository:            totalsite8/deladelishki-site
Commit:                f0d2945
Branch:                main = origin/main
Git working tree:      clean
Node local:            24.13.0
npm local:             11.18.0
Git Windows:           2.55.0.windows.2
Astro:                 7.0.7
Tailwind:              4.3.2 via @tailwindcss/vite
React/React DOM:       19.2.7
@astrojs/react:        6.0.1
Framer Motion:         12.42.2
Sitemap:               3.7.3
Build:                 successful, static
Dev/preview:           successful
Production deploy:     successful
Domain:                works
```

## Важные последствия

- Использовать imports из `framer-motion`.
- Не устанавливать package `motion`.
- Не устанавливать `@astrojs/tailwind`: Tailwind 4 подключён правильно.
- `tsconfig.json` оставить: TypeScript source не используется, файл нужен Astro/editor tooling.
- `CLAUDE.md` является Git symlink на `AGENTS.md`; размер 0/link в Windows — нормально.
- Node на Timeweb для Astro не нужен.
- ZIP репозитория присылать больше не нужно: публичный repository уже прочитан.

Фактический аудит:

```text
docs/09_ACTUAL_REPOSITORY_AUDIT_2026-07-21.md
```

---

# 3. Что уже настроено Данилой и не нужно повторять

- Node.js, Git, VS Code.
- GitHub account/config.
- SSH key и вход на Timeweb без пароля.
- Astro project.
- Tailwind, React, Sitemap, Framer Motion.
- GitHub repository.
- GitHub Secrets.
- `deploy.yml`.
- Successful GitHub Actions deploy.
- Production domain.
- Automatic `main → build → rsync Timeweb` flow.

Не предлагать повторную установку/инициализацию этих частей.

---

# 4. Approved product decisions

## Portal/audiences

Это многофункциональный портал, но на каждой странице выбирается свой audience и CTA:

- business/team → services/cases;
- private users/specialists → learning/courses/blog/prompts;
- digital/AI practitioners → skills/tools/apps.

Не писать на странице «для всех».

## Geography

Россия. Город/часовой пояс публично не показывать.

## Languages

RU + EN from first release.

Recommended:

```text
RU: /
RU: /uslugi/...
EN: /en/
EN: /en/services/...
```

English slugs map to Russian routes through stable IDs. Only human-reviewed English pages are published.

## Profile

- Display: Данила Подшивалов.
- Marketing, advertising, design, sites and scripts since 17.
- 18+ years of experience.
- Up to 20 people in direct reporting.
- Automation advocate.
- Practice over theory.
- Open to dialogue about genuinely interesting projects.
- No job-search wording.
- No city/timezone/response-time promise.

## About/team

```text
/o-nas/                         team/About hub
/o-nas/danila-podshivalov/      personal profile
/o-nas/[slug]/                  future real team profiles
```

No portrait on home initially. Personal profile contains optional semi-3D `Другие грани` carousel. First confirmed object: jewelry craft at age 8. Other objects require Danila's list.

## Cases

All four company/case names may be public. Case pages are built after relevant service pages for reciprocal links. Metrics/screenshots/logos still require evidence/asset review.

## Services

Owner-supplied service list remains authoritative. Recommended leadership topics are not promoted as priorities. They can first be blocks/subtopics inside existing parent pages; separate URLs only after content/SEO decision.

## Forms/backend

- Personalised per service.
- Russian phone only + email alternative.
- Budget mainly for turnkey/complex projects.
- Timeframe per service.
- Email + Telegram notification.
- CRM later.
- Small read-only leads admin desired.
- Primary candidate: PHP/MySQL lead API/admin on Timeweb while Astro pages remain static.
- Current rsync `--delete` must be solved before backend files are placed on server.
- Yandex Cloud account is needed only if/when SmartCaptcha keys are created; not needed for Astro/PHP hosting.

## Share

Approved:

- native share;
- copy canonical link;
- Telegram;
- VK.

Required: articles, courses/learning, master prompts, published cases and apps.

## Blog

```text
scheduled research → AI draft → branch/PR → manual review/merge → existing main deploy
```

Automation never writes generated content directly to `main`.

## Visual

- Supplied logo stored in `brand-source/logo_dd.png`.
- Direction: dark technological + light minimal/editorial dual canvas.
- Halo Grotesk is a candidate only after license/Cyrillic/WOFF2 checks.
- Font must be replaceable through one token.
- Hero image/video must be created after storyboard/concept.

Approved brief:

```text
docs/11_APPROVED_PRODUCT_BRIEF_2026-07-21.md
```

---

# 5. Canonical structure sources

```text
planning/site-tree.json
planning/locales.json
docs/06_DEEP_INFORMATION_ARCHITECTURE_AND_CONTENT_MAP.md
docs/08_ROUTE_AND_NUMBERING_REGISTRY.md
```

Confirmed correction:

```text
1.1.3 Настройка CRM
```

Team:

```text
9   О нас
9.1 Данила Подшивалов
9.T Участник команды template
```

---

# 6. Logo/font/visual docs

```text
brand-source/logo_dd.png
docs/10_LOGO_FONT_AND_DUAL_THEME_DIRECTION.md
prompts/00-foundation/12-logo-font-dual-theme-concepts.md
```

The current wide PNG is a brand reference, not a favicon/mobile mark. Future assets: SVG, dark/light, monochrome, compact DD/mark, favicon, square avatar and OG version.

---

# 7. PHP leads backend docs

```text
docs/12_PHP_LEADS_BACKEND_CANDIDATE.md
prompts/00-foundation/08-contact-forms-email-smartcaptcha-adr.md
```

Do not create PHP/API/admin/database/Telegram bot/captcha keys now. First inspect Timeweb PHP/MySQL/mail capabilities and design deploy isolation.

Never send:

- SSH private key;
- GitHub Secrets;
- database password;
- Telegram bot token;
- SmartCaptcha server key;
- SMTP password;
- `.env`.

---

# 8. The first Kimi prompt is now repository-specific

After Kimi Code payment/install/VS Code connection, start with:

```text
prompts/00-foundation/13-actual-repo-foundation-plan.md
```

It is read-only and knows the real Astro 7/Tailwind 4/React 19/framer-motion stack. It does not create the home page immediately.

---

# 9. No more terminal commands are needed right now

Baseline checks are complete. Do not run:

```text
npm update
npm audit fix
npx @astrojs/upgrade
npm install motion
npm install @astrojs/tailwind
git reset --hard
git clean -fd
```

Do not modify `deploy.yml` or put PHP files manually into Timeweb `public_html` yet.

The next stage is Kimi Code payment and connection to VS Code, not another Astro/Git command.

---

# 10. Remaining information — not blocking Kimi installation

These questions are intentionally not repeated from the completed questionnaire. They can be answered later at their relevant stage:

1. Confirm recommended English localized slugs (`/en/services/...`) versus same translit paths under `/en/`.
2. Provide original vector/logo source if available; otherwise say PNG is the only source.
3. Provide exact Halo Grotesk source/foundry, license and font files when available. Do not send unlicensed files.
4. List future objects for `Другие грани`: object, skill/story, age/period, image idea, influence on current approach.
5. Team members: add only when names, roles, copy, photos and permissions exist.
6. Case evidence/assets: provide when each related service page is ready.
7. Timeweb PHP/MySQL/SMTP details: collect during backend ADR, not now.
8. Telegram bot: create only during backend implementation; token remains secret.

Default if no answer to item 1 before foundation: use RU root + EN `/en/` localized English slugs and stable route IDs.

---

# 11. What to send in the next message

No archive and no command output are needed.

For the next stage, send only:

```text
Готов перейти к оплате и подключению Kimi Code в VS Code на Windows 11.
```

If you already have a Kimi account/subscription, add:

```text
Аккаунт Kimi: есть/нет
Подписка/оплата: есть/нет
Kimi Code extension уже установлено: да/нет
```

Do not send payment-card data, password, API key or any authentication code.
