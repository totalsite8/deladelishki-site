---
name: page-swarm
description: Orchestrate focused sub-agents to research and produce a reconciled content, SEO, conversion, proof, accessibility, and performance brief for one deladelishki.ru page before concepts or code.
type: prompt
whenToUse: When planning a page, offer, service, content hub, case, article, course, prompt, or major page revision that benefits from multi-disciplinary analysis.
disableModelInvocation: true
arguments:
  - route
  - page_type
---

Create a read-only page brief for `$route`, page type `$page_type`.

First read `AGENTS.md`, the canonical route/numbering registry and machine-readable site-tree, current navigation data, approved public profile/case source, contact/form/share map, SEO/copy/schema matrix, related parent/children pages, and any existing page decision. Inspect actual repository versions and content, but do not edit files, install packages, or change configuration.

Use independent sub-agents when the current Kimi environment supports them. If sub-agents are unavailable, perform the same streams sequentially and state that clearly. Never pretend parallel agents ran when they did not.

## Swarm streams

### Agent 1 — Search intent and market language

- Identify audiences, jobs-to-be-done, problems, objections, commercial/informational intents, and vocabulary.
- Research current SERP/competitor patterns only from accessible current sources.
- Separate observed patterns from recommendations.
- Never invent search volume, difficulty, ranking, or competitor facts.
- Propose a query cluster and content gaps, not keyword stuffing.

### Agent 2 — Leadership-first offer and copy

- Use approved facts: Danila is a marketing/digital leader; marketing/advertising/design/sites/scripts since 17; 18+ years; up to 20 direct reports; hands-on cross-functional practice.
- Respect the multi-lane portal: business services vs private learning vs digital/AI practitioner content. Do not write «for everyone».
- Propose 3 H1s, 3 offers/subheads, page-specific primary/secondary CTAs, section headings, microcopy, and objections.
- Do not sound like a job seeker.
- Position him as open to genuinely interesting projects, able to lead, set tasks, and assess efficiency.
- Use only approved profile/case facts.

### Agent 3 — SEO and structured data

- Draft title and meta description with character counts.
- Recommend RU default + EN localized route/title/description/OG/canonical/hreflang/publication status, internal links, breadcrumbs, and schema types/properties.
- Validate that schema matches visible facts.
- Never add fake FAQ, rating, review, price, availability, address, employer, or organization data.
- State which facts/media are missing for complete schema.

### Agent 4 — UX, conversion, contact, and sharing

- Define page goal, primary action, section order, user questions answered by each block, and mobile behavior.
- Select the personalised per-service form, exact fields/states, Russian phone/email rules, and PHP leads/API/admin dependencies; budget mainly for turnkey and timeframe only where relevant.
- Place direct email/phone/VK without clutter; no response-time promise.
- Add approved native/copy/Telegram/VK share controls where required: article, course/learning detail, master prompt, published case and published app.
- Map related pages and next steps.

### Agent 5 — Proof, claims, compliance, and editorial quality

- Audit every proposed claim against profile/resume/case sources.
- Label claim status: approved public fact / needs evidence / needs permission / do not publish.
- Identify privacy, affiliate, payment, copyright, client-name, logo, testimonial, and legal risks.
- For cases, specify evidence and client permission needed.

### Agent 6 — Accessibility, motion, and performance

- Recommend one meaningful interaction direction and a lighter fallback.
- Define semantic/no-JS, keyboard, touch, reduced-motion, mobile, overflow, media, and hydration constraints.
- Estimate complexity qualitatively; do not invent Lighthouse or bundle measurements.
- Identify which parts remain Astro/CSS and which require one focused island.

## Main-agent synthesis

Reconcile the reports. Resolve conflicts in favor of truth, user clarity, accessibility, and maintainability. Do not concatenate raw agent outputs.

Return one page brief following `PAGE_BRIEF_TEMPLATE.md` with:

1. Page role, audience, intent, and primary CTA.
2. Approved facts and proof gaps.
3. Recommended H1, offer, CTA set.
4. Exact section sequence and purpose of every block.
5. Contextual form/contact/share plan.
6. SEO package: title, description, query cluster, canonical, OG, schema, internal links.
7. Three concept directions suitable for the subsequent concept gate.
8. Motion/mobile/reduced fallback and performance boundaries.
9. Content/media/data checklist for Danila.
10. Risks P0/P1/P2.
11. Open decisions, maximum five.

End with: `Swarm brief complete. No files changed. Ready for the 2–3 concept selection stage.`
