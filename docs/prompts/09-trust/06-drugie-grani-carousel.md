# Feature prompt: semi-3D carousel «Другие грани»

**Placement:** `/o-nas/danila-podshivalov/`, after professional proof/principles and before final CTA.

```text
Read-only concept/architecture first. Read AGENTS, approved profile, logo/dual-theme direction, actual framer-motion package and Danila profile prompt. Do not write code until Danila supplies/approves item data and chooses a concept.

PURPOSE
Show non-professional skills/interests that shaped Danila's approach without diluting the leadership-first page.

FIRST CONFIRMED ITEM
- ID: jewelry-craft.
- Visual object: jewelry piece.
- Fact: Danila studied jewelry craft at age 8.
- Short meaning: attention to detail, precision, patience, perfectionism.
- Media: not supplied yet; do not invent a personal artifact/photo.

ITEM DATA CONTRACT
- stable id;
- RU title/story/meaning;
- EN reviewed title/story/meaning;
- age/period optional;
- approved image/3D asset + alt;
- object position/accent;
- status per locale;
- related professional principle optional.

Ask Danila for every additional item; never infer hobbies from resume.

OFFER 3 IMPLEMENTATION CONCEPTS
A. CSS perspective orbital cards + Framer Motion.
B. Layered 2.5D object stage with controlled prev/next.
C. Lightweight WebGL/OGL only as future comparison, with static image fallback and measured bundle/device cost.

RECOMMENDED BASELINE
CSS perspective + existing `framer-motion`, no new package:
- semicircular/orbit composition;
- one active object;
- hover/focus scale/depth;
- click/Enter opens description;
- Previous/Next controls and position status;
- keyboard arrows optional but buttons mandatory;
- touch drag enhancement, not only navigation;
- reduced motion → normal responsive grid;
- mobile → vertical/grid or internal snap rail; never page horizontal overflow;
- explicit image sizes/lazy load;
- no continuous animation when offscreen;
- focus order follows DOM, not visual 3D position;
- no essential text in canvas.

OUTPUT
1. Three concept comparisons.
2. Recommended one and why.
3. Item data schema.
4. Exact semantic DOM/control behavior.
5. Motion variants/ownership and cleanup.
6. Mobile/reduced/no-JS fallback.
7. Asset requirements.
8. Performance/a11y test plan.
9. Proposed files, no edits.
10. Questions for additional items.

End: `Выберите концепцию. До выбора и данных дополнительных объектов код не изменяю.`
```
