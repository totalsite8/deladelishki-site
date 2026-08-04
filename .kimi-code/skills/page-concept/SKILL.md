---
name: page-concept
description: Create and compare 2–3 distinct visual and interaction concepts for one deladelishki.ru page before any code is written.
type: prompt
whenToUse: When the user starts work on a new page or asks how a future page should look, feel, scroll, or interact.
disableModelInvocation: false
arguments:
  - route
  - purpose
---

Develop concepts for `$route`. Page purpose: `$purpose`.

Read the repository `AGENTS.md`, canonical navigation/content data, approved profile/cases source, contact/forms/share map, existing design tokens, related page files, any page-swarm brief, and supplied content. This is a concept-only stage: do not edit source files, install packages, or change configuration.

## First establish

- target visitor and their question;
- one primary page action;
- required content and real proof/assets available;
- relationship to parent, children, and related routes;
- shared brand elements that must remain consistent;
- how this page should differ in character from existing pages.

If critical business/content information is missing, ask no more than five focused questions before concepts.

## Produce 2–3 genuinely different concepts

For each concept provide:

1. **Name and one-line idea.**
2. **Visitor impression.** Explain without jargon.
3. **Story/content sequence.** An exact section-by-section outline, the user question answered by each block, and where proof/lead form/direct contacts/related links/share controls belong.
4. **Copy and SEO direction.** Draft RU H1/offer/CTA/title/description and EN localization intent/route/status, canonical/hreflang, internal links, and schema candidate.
5. **Signature interaction.** Why it helps this content, not merely decorates it.
6. **Typography, space, imagery, and category accent.** Reuse shared tokens.
7. **Desktop behavior.** Include scroll rhythm and navigation.
8. **Mobile behavior from 320px.** Do not shrink the desktop choreography mechanically.
9. **Reduced-motion/no-JS fallback.** Preserve all meaning and CTA.
10. **Implementation layer.** CSS/Astro, Motion island, and any optional advanced library.
11. **Complexity and risk.** Label Low/Medium/High and explain maintenance/performance implications.
12. **Content/media needed.** Never invent cases, numbers, or testimonials.

## Recommendation

Compare the concepts in a small table across:

- clarity/conversion;
- originality;
- fit with page content;
- mobile robustness;
- performance;
- development effort.

Recommend one option and explain why in practical terms. If suggesting GSAP/OGL/WebGL/video, also give a lighter alternative and state its visual trade-off.

End with: **“Выберите концепцию 1, 2 или 3. До выбора код не изменяю.”**
