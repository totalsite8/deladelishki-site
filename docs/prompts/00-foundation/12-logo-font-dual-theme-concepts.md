# Prompt: logo system, Halo Grotesk and dual dark/light tokens

```text
Read-only brand/design-system task. Read AGENTS, approved product brief, logo/font/dual-theme doc, supplied `brand-source/logo_dd.png`, actual Tailwind 4 repo and design-system concept prompt. Do not convert/edit the logo or install fonts.

FACTS
- PNG RGBA 1102×338, transparent, wide wordmark.
- Deep violet → bright purple/magenta gradient, white DELISHKI, italic uppercase.
- Desired feel: dark technological + light minimal/editorial.
- Halo Grotesk is only a candidate; license/Cyrillic/WOFF2 not yet verified.

PRODUCE 2–3 BRAND SYSTEM DIRECTIONS
For each:
- practical impression;
- how logo geometry influences but does not dominate layout;
- dark and light semantic tokens;
- gradient/glow limits;
- typography direction/fallback;
- header/mobile logo behavior;
- compact mark/favicon concept requirements;
- article/form readability;
- domain accents;
- motion vocabulary;
- contrast/accessibility;
- implementation effort/performance.

REQUIRED ASSET LIST
Primary SVG, dark/light, monochrome, compact DD/mark, favicon, square avatar, OG safe version, safe area/min size. Explain what requires the original vector source/designer.

FONT ARCHITECTURE
Use `--font-display`/`--font-body` and Tailwind 4 token mapping so Halo can be replaced in one file. Define a no-Halo fallback stage. No external font CDN.

OUTPUT
- logo audit;
- 3 directions;
- recommended dual-canvas system;
- draft token palette with contrast test requirements;
- font/license checklist;
- file naming/media pipeline;
- proposed files only;
- no code before Danila chooses.
```
