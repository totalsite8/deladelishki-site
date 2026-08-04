# Production release checklist

Заполняется перед публичным заявлением о готовности и повторяется для крупных релизов.

Статусы: `[ ]` не проверено, `[x]` проверено, `[!]` известное отклонение с документированным решением.

## 1. Репозиторий и build

- [ ] `git status --short` чистый на release commit.
- [ ] Production commit находится в `main` через reviewed PR.
- [ ] `package-lock.json` committed и соответствует `package.json`.
- [ ] Node 24.x в local/CI.
- [ ] `npm ci` проходит на clean environment.
- [ ] `npm run build` проходит без ошибок.
- [ ] Все существующие lint/test/check scripts проходят.
- [ ] `dist/` содержит index, routes, `_astro`, sitemap, robots и 404.
- [ ] Нет secrets, `.env`, private keys, logs, `node_modules`, `dist` в Git.
- [ ] Нет неожиданных dependency upgrades в page PR.

## 2. GitHub Actions / deploy

- [ ] Workflow запускается только для production rule.
- [ ] Build завершается до SSH/rsync.
- [ ] Secrets не печатаются.
- [ ] Remote path подтверждён.
- [ ] `dist/` не вложен как `public_html/dist/`.
- [ ] `--delete` проверен и ограничен правильной директорией.
- [ ] `--delete` не может удалить PHP API/admin/private/runtime files; backend deploy boundary documented.
- [ ] Concurrency предотвращает гонку deploy.
- [ ] Последний workflow зелёный.
- [ ] Известен commit production.
- [ ] Проверен rollback через GitHub Revert.

## 3. Timeweb

- [ ] `https://deladelishki.ru/` открывается.
- [ ] HTTP делает один корректный 301 на HTTPS.
- [ ] www делает один корректный 301 на canonical без www.
- [ ] SSL auto-renew включён.
- [ ] Нет mixed content.
- [ ] Access/error logs включены или доступен понятный способ их заказать.
- [ ] Backup/recovery проверены.
- [ ] Неизвестный URL показывает branded 404 и возвращает реальный 404 status.
- [ ] Прямое открытие каждого nested URL работает.
- [ ] Cache/compression проверены для hashed CSS/JS/media.
- [ ] PHP version/extensions, DB connection, private config, SMTP and Telegram are verified without exposing secrets.
- [ ] Leads DB backup/restore and read-only admin auth are tested.

## 4. Routing / IA

- [ ] Canonical slugs утверждены и стабильны.
- [ ] Нет двух URL с одинаковым контентом без canonical/redirect.
- [ ] Header/footer/breadcrumb используют canonical data.
- [ ] Нет пустых published routes.
- [ ] Draft routes не индексируются/не публикуются.
- [ ] Все internal links проходят broken-link check или ручную проверку.
- [ ] Back/parent/sibling paths понятны на глубине 4 уровня.
- [ ] RU/EN language switch resolves the same stable route/content ID.
- [ ] Self-canonical and reciprocal hreflang are correct for published translations.
- [ ] Draft/missing EN pages are absent from sitemap and not linked as available.

## 5. Каждая страница

- [ ] Концепция утверждена и записана.
- [ ] Один понятный H1.
- [ ] Offer/purpose понятен без animation.
- [ ] Primary CTA реален и работает.
- [ ] Unique title/description/canonical.
- [ ] OG metadata/image.
- [ ] Semantic landmarks/headings.
- [ ] Content/proof реальны; placeholders удалены или явно маркированы.
- [ ] No page-level horizontal scroll.
- [ ] 320, 375, 768, 1024, 1440, 1920, ultrawide checked.
- [ ] Touch/keyboard/focus/Escape checked.
- [ ] Reduced motion checked.
- [ ] No-JS core path checked where practical.
- [ ] Console/hydration clean.
- [ ] Slow network/media fallback checked.
- [ ] Correct logo variant/compact mark/favicon used; the wide PNG is not treated as a tiny icon.
- [ ] Webfont license, Cyrillic/Latin coverage, WOFF2 size and one-token fallback are verified.

## 6. Accessibility

- [ ] Skip link работает.
- [ ] Focus всегда виден.
- [ ] Touch targets ≥44×44 CSS px.
- [ ] Contrast соответствует WCAG 2.2 AA.
- [ ] Hover имеет focus/tap equivalent.
- [ ] Menu/modal/accordion/filter keyboard-operable.
- [ ] Focus trap/restore только там, где нужен.
- [ ] Alt/captions у media.
- [ ] Essential text не спрятан в canvas/video/color/motion.
- [ ] Sticky/scrollytelling DOM order логичен.
- [ ] Copy/filter/form feedback объявляется доступно.

## 7. Performance

- [ ] Production Lighthouse/Web Vitals measurement зафиксирован.
- [ ] LCP target ≤2.5 s mobile p75, когда появятся field data.
- [ ] INP target ≤200 ms.
- [ ] CLS ≤0.1, project target ≤0.05.
- [ ] Home initial JS target ≤150 kB gzip; exception documented.
- [ ] Content pages существенно легче home.
- [ ] LCP asset доступен в initial HTML и не зависит от video/JS.
- [ ] Images responsive, dimensions/aspect ratio present.
- [ ] Below-fold media lazy.
- [ ] Video poster/muted/playsinline/preload/fallback.
- [ ] Motion uses transform/opacity where practical.
- [ ] No permanent global `will-change`.
- [ ] Canvas/WebGL pauses offscreen/hidden and has static fallback.
- [ ] Runtime critical assets do not depend on unstable foreign CDN.

## 8. SEO

- [ ] `robots.txt` доступен и содержит sitemap.
- [ ] Sitemap содержит indexable production routes.
- [ ] Canonical uses HTTPS without www.
- [ ] Structured data validates and contains only real facts.
- [ ] Article author/date/update/source correct.
- [ ] Case metrics have context/source.
- [ ] 404 not indexed.
- [ ] Search/filter query pages indexing policy decided.
- [ ] Image alt/OG and social preview checked.

## 9. Content/editorial

- [ ] Blog post passed source/fact/copyright/duplicate review.
- [ ] Human approved every auto-collected draft.
- [ ] News has primary source/date/correction path.
- [ ] Reviews disclose affiliate status.
- [ ] Prompts have provenance/license/model/date/limitations.
- [ ] Course claims/curriculum/pricing/access current.
- [ ] Apps have real store/privacy/support links.
- [ ] No fabricated testimonials/ratings/results.

## 10. Privacy/legal/commerce

- [ ] Real privacy policy matches actual tools/data flows.
- [ ] Consent strategy matches analytics/forms/cookies.
- [ ] Contact form destination/spam/error/success verified.
- [ ] Every published detail service has the correct contextual form or an explicitly approved alternative.
- [ ] Form sends allowlisted `formId`/`serviceId`/`sourcePage` and locale.
- [ ] Lead is stored once; email reaches `totalsite@yandex.ru`; Telegram notification works; a notification failure does not lose the lead.
- [ ] Read-only admin auth/list/filter/view are protected and tested.
- [ ] At least Russian phone or email rule passes client and server validation.
- [ ] Phone mask supports paste/edit and normalizes to the chosen format.
- [ ] SmartCaptcha token is validated server-side; server key is absent from client bundle/Git/logs.
- [ ] Captcha blocked/network/server error preserves data and offers email/phone/VK fallback.
- [ ] Article/course/master-prompt/published-case/published-app share actions work: native/copy/Telegram/VK and current-locale canonical URL.
- [ ] Affiliate disclosure visible near links.
- [ ] `rel="sponsored nofollow"` on applicable links.
- [ ] Terms/payment/refund text legally reviewed.
- [ ] Checkout success is verified by provider/backend, not query string alone.
- [ ] Access grant/revoke/refund tested.
- [ ] VAT/invoice/geography decided.
- [ ] No secrets or privileged API calls in browser bundle.

## 11. Final smoke matrix

- [ ] Chrome Windows desktop.
- [ ] Edge Windows desktop.
- [ ] Safari iPhone/iPad real device or reliable service.
- [ ] Chrome Android real/low-end device when available.
- [ ] Keyboard-only.
- [ ] Reduced motion.
- [ ] Slow 4G.
- [ ] Private window/cold cache.
- [ ] Production direct nested URL.
- [ ] Production submit/copy/filter/search/navigation paths.

## Release decision

- [ ] P0 = 0.
- [ ] P1 = 0 or explicitly accepted with owner/deadline.
- [ ] Known P2 documented.
- [ ] Rollback owner and commit known.
- [ ] Production smoke completed after deploy.

**Release verdict:** Ready / Not ready  
**Commit:**  
**Workflow run:**  
**Checked by/date:**  
**Known exceptions:**
