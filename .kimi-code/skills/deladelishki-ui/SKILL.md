---
name: deladelishki-ui
description: Apply the deladelishki.ru design system, responsive invariants, accessibility, motion grammar, and performance rules when creating or reviewing any page or UI component.
type: prompt
whenToUse: When the user asks to design, implement, refactor, animate, or review UI in the deladelishki.ru repository.
disableModelInvocation: false
arguments:
  - target
---

Apply this skill to: `$target`.

First read the repository `AGENTS.md`, `package.json`, relevant layouts/styles, and the target files. Existing project instructions override this skill.

## Outcome

Create a premium but immediately understandable interface. Use one meaningful macro effect per section at most. Content, navigation, accessibility, and loading speed take priority over visual novelty.

## Checklist before editing

1. Identify the route, user goal, primary CTA, and semantic content order.
2. If this is a new page and the user has not selected a concept, propose 2–3 concepts (impression, content behavior, signature interaction, mobile fallback, complexity, performance), recommend one, and stop before code.
3. Confirm the selected concept in the current conversation.
4. Identify which parts can stay static Astro and which truly require a React island.
5. Reuse shared tokens/navigation/accessibility primitives without forcing the page into the same composition as other routes.
6. Inspect dependency versions and existing import conventions. Do not install anything.
7. State the planned files and acceptance criteria for multi-file work.

## Implementation rules

- Use semantic Astro/HTML by default; hydrate only focused interactions.
- Keep a no-JS path for core content and navigation.
- Use fluid type and spacing with `clamp()` and tokens.
- Use `min-height: 100vh; min-height: 100dvh` for full-screen sections.
- Prefer `width: 100%` over `100vw`/`100dvw`; prevent page-level horizontal overflow from 320px to ultrawide.
- Use CSS Grid/Flexbox and give grid/flex children `min-width: 0`.
- Keep readable prose measures; do not use fixed-pixel top-level containers.
- Provide 44px touch targets, visible focus, keyboard behavior, and safe Russian line wrapping.
- Motion priority: CSS → focused island using existing `framer-motion` imports → approved specialist library. Do not add `motion` package.
- Prefer transform/opacity; use clip-path/filter only after profiling.
- Below-fold islands use `client:visible`; only immediate controls use `client:load`.
- Implement reduced-motion behavior and a static media fallback.
- Do not add Lenis, GSAP, Canvas, WebGL, horizontal page scroll, or a custom cursor unless the user explicitly approves it for this target.
- Do not invent final copy, proof, prices, reviews, cases, or legal claims.
- Service-detail pages include personalised form contracts, Russian phone/email rules and direct fallback; do not simulate submission before PHP/API/admin/SmartCaptcha/deploy approval.
- Article, course/learning, master-prompt, published-case and published-app pages include approved native/copy/Telegram/VK sharing without social SDKs.

## Review before completion

- Core task is understandable without animation.
- No content is hidden solely behind hover or JavaScript.
- DOM order remains logical in sticky/scrollytelling layouts.
- No overflow at required widths.
- No hydration warnings, console errors, listener leaks, or unnecessary islands.
- Images/video have dimensions, poster/fallback, responsive loading, and appropriate alt text.
- Page metadata and heading hierarchy are valid.

Run the relevant existing checks and report exact results, remaining assumptions, and one next step.
