# deladelishki.ru — project instructions for coding agents

## 1. Product mission

Build `deladelishki.ru` as a fast, accessible, content-rich personal digital portal, not as an effects demo. The interface should feel premium and alive, while a first-time visitor must understand within seconds:

1. what the portal offers;
2. which section to choose;
3. what action to take next.

Core principle: **one meaningful WOW moment per section, never WOW everywhere**.

The portal has multiple lanes, not one undifferentiated audience: business/teams use services and cases; private users/specialists use education, courses, blog and prompts; digital/AI practitioners use agent skills, tools and apps. Every page must choose its own primary audience, job-to-be-done and CTA. Do not use «для всех» as page copy.

The owner-supplied service hierarchy is authoritative. Recommended leadership topics may be content blocks or later routes, but must not replace or outrank the confirmed services. Parent hubs expose their confirmed descendants through an accessible interactive feature.

Each page is a separate creative and technical project. Preserve the shared brand language (tokens, typography, navigation logic, focus states, and motion character), but do not force every page into the same composition or interaction. A blog page may be calm and text-led; a services page may be more spatial and dynamic.

Before writing code for any new page, propose **2–3 page concepts**, explain each in beginner-friendly terms (impression, content behavior, implementation complexity, and performance risk), recommend one, and wait for the user's explicit choice. Do not start page implementation before that choice.

First-release UI/content languages: Russian default plus human-reviewed English. Russian routes are unprefixed; recommended English architecture is `/en/` with route-ID-based localized slug mapping and `hreflang`, pending final foundation decision. Use English for code identifiers and technical comments. Manually named Russian page files use lowercase Latin transliteration, for example `uslugi.astro`, `o-nas.astro`, and `baza-promptov.astro`. Framework dynamic route templates such as `[slug].astro` require an explicit architecture decision before use. Do not publish raw machine translation or mix languages on one indexable page.

Approved public owner identity/contact source:

- Name: Данила Подшивалов (`Подшивалов Данила` in formal records).
- Email: `totalsite@yandex.ru` / `mailto:totalsite@yandex.ru`.
- Phone: display `+7 903 727-51-31`, link `tel:+79037275131`.
- VK: `https://vk.com/id990254`.
- Site: `https://deladelishki.ru`.

Use `docs/content-source/PROFILE_AND_CASES_DRAFT.md` and the approved product brief as controlled sources. Approved public positioning facts: marketing/advertising/design/sites/scripts since age 17; 18+ years of experience; up to 20 direct reports; automation advocate; practice over theory. Do not publish resume-only private/job-search details, city, timezone, age, salary, or response-time promises. Danila approved naming all four resume-derived cases; metrics, logos, screenshots, files, testimonials, methods and periods still require evidence/asset-rights review. Do not invent final claims, prices, cases, clients, testimonials, metrics, legal text, credentials or team members.

## 2. Required stack and boundaries

- Framework: Astro `7.0.7`, static build. Keep `output: "static"` as explicit intent when the config is updated.
- Package manager: npm only; local npm `11.18.0`; lockfile committed.
- Runtime: local Node `24.13.0`, CI Node 24, package engine `>=22.12.0`.
- Styling: Tailwind CSS `4.3.2` through `@tailwindcss/vite`; do not add legacy `@astrojs/tailwind`.
- Interactivity: React `19.2.7`/`@astrojs/react 6.0.1` islands only where state or interaction is genuinely needed.
- Motion: existing `framer-motion 12.42.2`; import from `"framer-motion"`. Do not install package `motion` or use `motion/react` unless a separate migration is approved.
- Language: JavaScript/Astro/JSX, not TypeScript source. Do not migrate to `.ts`/`.tsx`. Keep `tsconfig.json` and React type packages for editor/tooling. JSDoc is allowed.
- SEO: preserve the existing sitemap/domain setup.
- Source control: Git/GitHub. A push/merge to `main` triggers production deployment.
- Hosting: Timeweb shared hosting on Ubuntu 18.04. Astro pages remain static; an isolated PHP lead API/read-only admin is an approved architecture candidate because Timeweb supports PHP. Do not install/depend on Node 24 there or run a persistent Node web service.
- Deployment: current `.github/workflows/deploy.yml` builds on GitHub Actions Node 24 and uploads `dist/` with rsync `--delete`. Local Windows does not require rsync. Before PHP backend files exist, decide whether they are included in controlled deploy output or deployed separately; never leave manual backend/runtime files in a directory that `--delete` may erase.
- Timeweb serves static assets through Nginx; do not assume `.htaccess` controls cache/security headers for CSS, JS, images, fonts, or video. Verify production responses or ask hosting support.
- Development environment: VS Code terminal on Windows 11. Give commands in PowerShell-compatible form unless the user requests another shell.
- Network constraint: the user's VPN can be unstable. Prefer self-hosted fonts/assets and build-time dependencies; avoid runtime dependence on foreign CDNs or remote scripts unless essential and approved.

Never assume library versions. Before implementation, inspect at least:

- `package.json` and `package-lock.json`;
- `astro.config.*`;
- Tailwind configuration and global styles;
- existing layouts, pages, components, content/data files, scripts, and tests;
- `git status --short`.

Do not install, remove, or upgrade dependencies; change Astro output mode; add a hosted service; or alter CI/deployment without explicit user approval. Treat `astro.config.mjs`, `package-lock.json`, `.github/workflows/deploy.yml`, GitHub secrets, SSH destinations, and Timeweb paths as protected configuration. Inspect and report first; never expose secret values. Final output must remain deployable as static files in `dist/`.

## 3. Standard workflow for every page or non-trivial task

1. Restate the goal, affected route, intended visitor, primary action, and acceptance criteria in concise terms.
2. Inspect existing patterns before proposing new ones.
3. For page planning, use focused sub-agents when available: search intent/market, leadership-first offer/copy, SEO/schema, UX/conversion/forms, proof/compliance, and accessibility/performance. Sub-agents research and report; they do not edit the same files in parallel. The main agent reconciles conflicts, removes unsupported claims, and presents one coherent recommendation using `PAGE_BRIEF_TEMPLATE.md`. Never invent keyword volume, rankings, legal conclusions, or test results.
4. For a new page, present 2–3 genuinely different concepts before code. For each concept describe:
   - how it feels to a visitor;
   - how the content is explored;
   - the signature interaction;
   - mobile/reduced-motion behavior;
   - implementation complexity and performance risk.
5. Recommend one concept with a plain-language reason, then **stop and wait for the user's choice**.
6. After the choice, record the selected/rejected concepts in `PAGE_DECISION_TEMPLATE.md`, then present a plan with the smallest viable file set, content needs, visual assets, acceptance criteria, and risks.
7. Ask for a decision before any new dependency, irreversible migration, payment/auth architecture, CMS, analytics vendor, deployment change, or major visual direction.
8. Implement one page from start to complete validated result before starting another page. Prefer editing existing primitives over duplicating them.
9. Run the narrowest relevant checks, then the project-wide checks that already exist.
10. Review the diff for scope creep, accidental generated files, secrets, broken imports, duplicate data, and production-deploy risk.
11. Report: changed files, behavior, validation results, known trade-offs, and the next recommended step.

Do not commit, push, force-reset, delete user work, rewrite history, or use destructive shell commands unless explicitly asked. Never use a blanket auto-approval/YOLO mode for normal development.

## 4. Information architecture rules

The site must be data-driven because its hierarchy will grow to four or more levels. The corrected numbering and confirmed/recommended hierarchy in `docs/project-guide/06_DEEP_INFORMATION_ARCHITECTURE_AND_CONTENT_MAP.md`, `08_ROUTE_AND_NUMBERING_REGISTRY.md`, and the machine-readable `docs/planning/site-tree.json` (or actual copied paths) are the planning sources; do not recreate the earlier mistaken CRM nesting. «Настройка CRM» is 1.1.3 under Development.

- Maintain one canonical source for the navigation/service tree. Do not repeat the same service arrays in the header, footer, breadcrumbs, and pages.
- Every node should support at least: stable `id`, `title`, `slug`, `summary`, `parentId` or nested `children`, `order`, `status`, `accent`, `seo`, `relatedIds`, and CTA metadata.
- Derive mega-menu items, breadcrumbs, child cards, related links, and static routes from canonical data/content where practical.
- Use stable lowercase ASCII URL slugs. Do not silently change published slugs. Add redirects when URL structure changes.
- Deep pages must provide breadcrumbs, sibling/child navigation, a clear way back, and related content.
- Do not expose all deep links in the main header. Main navigation should lead to hubs; the mega-menu/search handles depth.

Preferred top-level hubs and URL language:

- `/uslugi/` — services
- `/poleznye-servisy/` — useful/referral tools
- `/blog/`
- `/baza-promptov/`
- `/kursy/`
- `/navyki-agentov/`
- `/prilozheniya/`
- `/keisy/` — build case details after their related service pages, then add reciprocal internal links
- `/o-nas/` — team/about hub
- `/o-nas/danila-podshivalov/` — personal founder/lead profile; future real team members get approved child pages
- `/kontakty/` and `/poisk/` as utility destinations

All public URL segments should use stable lowercase Latin transliteration unless the user approves another scheme. Blog labels such as Статьи, Новости, and Обзоры should normally be taxonomies/filter views rather than unnecessary route nesting unless SEO research justifies dedicated landing pages.

The navigation/content tree is shared data, but each page composition remains separately designed and implemented. Data-driven navigation must not turn all pages into one visually identical template.

## 5. Reusable page pattern

Use a shared semantic page grammar while allowing each route its own creative composition and interaction. These are content responsibilities, not a requirement to repeat the same block layout:

1. **Context** — skip link, header, breadcrumb where needed.
2. **Hero** — eyebrow, one clear H1, short promise, primary CTA, optional secondary CTA, purposeful visual.
3. **Orientation** — who this is for / what problem is solved / child destinations.
4. **Value or proof** — outcomes, case, demonstration, or useful content; never fabricated proof.
5. **Process or exploration** — steps, capabilities, filters, or chapter-based story.
6. **Related paths** — siblings, related services, posts, prompts, or courses.
7. **Final CTA and footer** — one next action with clear expectations.

A page may omit irrelevant blocks, but semantic order and comprehension come before visual choreography.

### 5.1. Required service-detail content order

Every detail service page must plan these responsibilities explicitly, even if the visual composition is unusual:

1. breadcrumb and clear relationship to the parent service;
2. H1 and one outcome-led offer;
3. situations/problems indicating when the service is useful;
4. outcomes and boundaries — what changes and what is not promised;
5. scope/deliverables;
6. Danila's leadership and hands-on advantage relevant to this service;
7. process, checkpoints, client inputs, and ownership;
8. relevant verified case/proof or an honest proof-needed state;
9. FAQ based on real objections, not invented SEO filler;
10. contextual lead form plus direct email/phone/VK alternatives;
11. related services/cases/materials;
12. final CTA.

Each service prompt must provide draft H1, offer, primary/secondary CTA, title, description, target query/intents, internal-link plan, and schema recommendation. These are drafts to validate, not permission to fabricate keyword volume or claims.

### 5.2. Contact and form rules

- Header CTA: `Обсудить проект` → `/kontakty/?tema=proekt`.
- Approved direct contacts come from one site-data source and appear in footer, contacts, final team/personal CTA, and beside service forms.
- Every detail service has a genuinely personalised form titled `Расскажите о задаче`; fields for timeframe, source data, integrations, media, etc. vary by service. Hubs use `Не уверены, с чего начать?`.
- Base fields: name; company/project optional; website optional; task; preferred contact; Russian phone and email with at least one required; consent; captcha token; canonical `serviceId`/`sourcePage`; honeypot. Budget is omitted by default and considered mainly for turnkey/complex-project forms. No response-time promise.
- Russian phone mask/normalisation and email validation occur client-side for usability and again server-side. Do not use a mask as the only validation.
- Approved delivery goal: email + Telegram notification; CRM later; optional read-only leads admin. Primary architecture candidate is isolated PHP/MySQL or equivalent endpoint on Timeweb while Astro pages remain static.
- Do not implement fake client-only captcha/form. Keep SmartCaptcha server key, mail/Telegram/database/admin secrets outside client bundle, Git and chat.
- Required states: idle, validating, captcha, sending, success, validation error, captcha/network error, server/storage/email/Telegram error. Preserve input on errors and provide direct contact fallback.
- Read the detailed form/data map before implementation.

### 5.3. Share-button rules

Provide accessible share controls on every article, course/learning detail, master-prompt detail, published case detail, and published app detail:

- native Web Share when available;
- copy canonical link fallback;
- Telegram and VK; do not add WhatsApp/email unless later approved;
- no social SDK or share counter dependency;
- canonical clean URL, not incidental UTM URL;
- visible focus, descriptive labels, safe popup attributes, `aria-live` copy feedback;
- share links generated on interaction and do not leak form/user data.

### 5.4. Structured-data rules

Use one stable Person entity ID for Danila and reference it from pages. Recommended page-level types are candidates, not automatic promises of rich results:

- home: `WebSite` + `Person`;
- service: `Service` + `BreadcrumbList`, provider references Person;
- `/o-nas/`: `AboutPage`; add Organization only after factual business/legal decision;
- `/o-nas/danila-podshivalov/`: `ProfilePage` + `Person`;
- real team member: `ProfilePage` + `Person` only after approved content;
- contacts: `ContactPage`;
- article/news: `Article`/`NewsArticle`;
- prompt: `CreativeWork`;
- course: `Course` with real provider/offer only;
- app: `SoftwareApplication`;
- case: `Article`/`CreativeWork`, never a fake `Review`;
- skill: `TechArticle` or `SoftwareSourceCode` only if applicable.

Structured data must match visible content and pass validation. Do not add `FAQPage`, ratings, prices, availability, review, address, or organization facts merely for SEO.

## 6. Home-page pattern: “Living Portal”

The home page should be implemented in layers:

1. **Static semantic version first.** H1, positioning, CTA, navigation, and all content work without client JavaScript.
2. **Portal expansion.** A compact central visual expands toward the viewport during the first scroll chapter. Prefer `transform: scale()` plus border-radius/opacity changes. Use `clip-path` only after profiling.
3. **Four main gateways.** Services; Knowledge (blog/prompts/courses); Tools (useful services/agent skills); Products (apps). This prevents the hero from becoming a directory of dozens of links.
4. **Service domains.** Development, Design, Marketing, AI, Photography, Education in an adaptive grid or vertical chapters.
5. **Proof/content preview.** Real cases, latest useful material, or process. Use placeholders only when visibly marked.
6. **Final conversion block.** One primary action.

Do not implement a page-level horizontal scroller. On mobile, convert spatial layouts into a normal vertical reading flow.

## 7. Responsive layout invariants

These are release blockers:

- The page must work from 320px through ultrawide screens without page-level horizontal scrolling.
- Use `width: 100%`, CSS Grid/Flexbox, fractional tracks, percentages, logical properties, and `clamp()`.
- For full-screen sections use a fallback followed by dynamic viewport units:

```css
.fullscreen-section {
  min-height: 100vh;
  min-height: 100dvh;
}
```

- Prefer `w-full`/`max-w-full` for normal page wrappers. Tailwind arbitrary values such as `w-[100dvw]` are allowed for a deliberately viewport-bound canvas only when `100%` cannot express the design and overflow has been verified; viewport-width units can create overflow around scrollbars and transformed children.
- Internal readable text measures such as `max-width: 65ch` are allowed. Do not use fixed-pixel widths for top-level page containers. Small controls/icons may use fixed sizes when appropriate; the prohibition applies to major responsive layout containers.
- Do not treat `overflow-x-hidden` as a fix. Find the offending element. Root-level `overflow-x: clip` may be a final safety net only after debugging and focus behavior testing.
- Grid children need `min-width: 0`; media needs `max-width: 100%`; long URLs/words need safe wrapping.
- Touch targets should be at least 44×44 CSS px, with visible keyboard focus.
- Validate at 320, 360/375, 768, 1024, 1440, 1920, and an ultrawide viewport.

## 8. Motion grammar

Every animation must answer one of these purposes: orient, explain hierarchy, reveal meaning, confirm an action, or preserve continuity.

Priority order:

1. no-JS semantic HTML;
2. CSS transitions/animations and native browser capabilities;
3. Motion inside a focused React island;
4. an isolated GSAP/Canvas/OGL/WebGL solution only after approval and only when the previous layers cannot express the concept maintainably.

Rules:

- Prefer `transform` and `opacity`.
- Avoid continuous animation of layout properties (`width`, `height`, `top`, `left`, margins, padding).
- Keep most microinteractions around 160–320 ms; larger reveals around 400–700 ms. Use a small shared easing/spring vocabulary.
- Do not animate more elements than the user can meaningfully perceive.
- Use `client:visible` for below-fold islands. Use `client:load` only for immediately required interactions such as an accessible menu.
- Never hydrate an entire static section just to fade it in.
- Respect `prefers-reduced-motion`; reduced mode must preserve content, focus, navigation, and state feedback.
- Do not smooth native touch scrolling by default. Lenis is an optional enhancement, not a baseline requirement.
- Never combine Motion, GSAP, and Lenis for the same animation responsibility.
- Autoplay video must be muted, `playsinline`, have a poster, and not be required to understand the page. Provide static/reduced-data fallbacks.
- WebGL/canvas must have a static fallback, suspend when off-screen or the tab is hidden, and be excluded from the first production slice.
- Custom cursors must never replace the native cursor and are postponed until usability and performance are proven.

## 9. Visual system

Create and reuse design tokens instead of arbitrary one-off values:

- canvas/surface/text/muted/border/action colors;
- one global brand accent plus optional domain accents;
- fluid display/body typography;
- spacing, radii, shadows, z-index, content measure;
- motion durations/easings/springs;
- focus ring and state colors.

Use one dual-canvas token system: dark technological contexts for portal/services/AI/apps and light minimal/editorial contexts for blog/courses/forms/legal. Do not build two unrelated design systems or add a theme toggle before it has a UX reason. The supplied purple-gradient `logo_dd.png` is a reference wordmark; require SVG, light/dark/monochrome and compact/favicon variants before production use. Halo Grotesk is only a display-font candidate after web license, Cyrillic, WOFF2 and size checks; bind fonts through `--font-display`/`--font-body` so replacement is one-token work. Contrast must meet WCAG 2.2 AA. Glass is reserved for navigation, overlays, or a single depth cue; large Russian headings must wrap safely at 320px.

## 10. Performance budget

Treat these as targets measured on production builds, not assumptions:

- LCP ≤ 2.5 s at the 75th percentile on mobile.
- INP ≤ 200 ms.
- CLS ≤ 0.1; project target ≤ 0.05.
- Initial home-page JavaScript target ≤ 150 kB gzip; hard ceiling 200 kB gzip unless a measured exception is approved.
- Content routes should ship materially less client JavaScript than the home page.
- The LCP asset must not be a delayed background image or autoplay video.

Use Astro image optimization, explicit media dimensions/aspect ratios, AVIF/WebP where appropriate, responsive `srcset`/`sizes`, local optimized fonts, and intentional preload behavior. Do not add `will-change` globally. Lazy-load below-fold media and disconnect observers/listeners during cleanup.

## 11. Accessibility and semantics

- Meet WCAG 2.2 AA as the working standard.
- Include a skip link, semantic landmarks, one logical H1, ordered headings, labels, alt text, and visible focus.
- Menus, dialogs, accordions, filters, and bottom sheets must be keyboard-operable with correct focus management and escape behavior.
- Do not put essential text only in canvas/video, hover, color, or motion.
- Hover has an equivalent focus/tap state.
- Announce copy/filter/purchase feedback appropriately without noisy live regions.
- Sticky/scrollytelling sections must retain a logical DOM reading order.

## 12. SEO, content, and trust

Every indexable page needs a unique title, description, canonical URL, meaningful H1, internal links, Open Graph metadata, and appropriate structured data where valid (e.g. Person/Organization, Service, Article, BreadcrumbList, Course).

- Never generate fake reviews, FAQs, authorship, dates, or schema properties.
- Blog workflow: scheduled research/collection → AI draft → source/fact/duplicate/copyright checks → draft branch/PR → manual approval/merge → existing main deploy. Never let an automation push generated content directly to `main` or auto-publish scraped/lightly rewritten material.
- Affiliate links require a visible disclosure and appropriate link attributes (normally `rel="sponsored nofollow"`).
- Preserve drafts from indexing.

## 13. Static-site security boundary

Astro static pages cannot securely provide form delivery, captcha verification, payment webhooks, authenticated course access, entitlements, private user data, admin views, or secret API calls by themselves. Any PHP/serverless backend is an isolated reviewed subsystem with separate secrets, validation, auth, storage, deploy and rollback rules.

- Never place secrets or privileged logic in browser JavaScript.
- For payments/auth/course access, first produce an architecture decision: hosted checkout/LMS/merchant-of-record versus approved serverless/server mode.
- Sanitize any external or user-provided rich content.
- Keep `.env*`, credentials, API keys, customer data, and session exports out of commits and logs.
- Forms need consent, client-and-server validation, spam/rate-limit protection, failure states, and an approved data destination.
- Yandex SmartCaptcha client key may be public; its server key is private and must be validated server-to-server by the approved endpoint. Never expose or request the server key in chat.

## 14. Repository and deployment file rules

- Keep Astro page frontmatter JavaScript between the opening and closing `---`; render markup below it.
- Do not introduce `.ts`/`.tsx` source files. Do not remove Astro-generated support files merely because their names mention TypeScript.
- Every page must provide a real Russian `title` and `description` through the existing layout/SEO component. Do not postpone metadata until the end.
- `.yml`/`.yaml` files must be UTF-8 without BOM. Preserve valid YAML indentation.
- Do not run `rsync` locally on Windows. Local validation ends at `npm run build`/`npm run preview`; the existing GitHub Action owns SSH/rsync deployment.
- Do not push or merge to `main` as part of an implementation task. Recommend a page-specific branch and a reviewed merge because `main` deploys to production.
- Do not add runtime CDN dependencies for fonts, scripts, images, or core UI. Prefer repository-hosted assets and npm packages bundled at build time.

## 15. Communication for a beginner

- Explain choices first in terms of visitor impression and practical result, then give the technical reason.
- Give PowerShell-compatible commands one step at a time, state the folder where each command runs, and explain what successful output looks like.
- Never tell the user to copy a command containing placeholders without clearly marking what must be replaced.
- When an error occurs, ask for the exact terminal output and solve that error before adding more steps.
- Distinguish clearly between: inspect only, local change, local build, Git commit, GitHub push, and production deploy.

## 16. Validation and definition of done

Use scripts already present in `package.json`. Do not invent successful results. A feature is done only when applicable checks pass:

- production build;
- lint/format checks;
- relevant unit/component tests;
- navigation and interaction by keyboard;
- reduced-motion behavior;
- no console errors or hydration warnings;
- no page-level horizontal overflow at required viewport widths;
- media fallback and slow-network behavior;
- Lighthouse/Core Web Vitals review for major pages;
- automated accessibility scan plus a short manual check;
- route metadata, canonical, sitemap inclusion, and 404 behavior.

If the repository lacks testing/audit tooling, report the gap and propose the minimum setup; do not install it without approval.

## 17. Required completion report

End each implementation response with:

1. **Changed** — files and user-visible behavior.
2. **Validated** — exact commands and results.
3. **Not changed** — relevant scope intentionally deferred.
4. **Risks/assumptions** — especially placeholders, browser support, static/backend boundaries.
5. **Next step** — one smallest useful follow-up task.
