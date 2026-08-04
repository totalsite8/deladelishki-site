# Prompt: единый компонент «Поделиться»

```text
Сначала read-only: прочитай @AGENTS.md, current Astro/Motion versions, article/course/prompt templates and analytics/privacy decisions. Не устанавливай social SDK/packages.

Спроектируй один lightweight share pattern для:
- article detail — after lead + after conclusion;
- course/learning detail — one block after summary;
- master prompt (`isMaster: true`) — рядом, но отдельно от «Копировать промпт»;
- every published case detail;
- every published app detail.

Actions:
1. Native Web Share when supported.
2. Copy canonical URL fallback.
3. Telegram.
4. VK.

Do not add WhatsApp/email in the first release unless Danila later changes the approved set.

Requirements:
- server-rendered semantic buttons/links;
- no external social SDK/counters;
- canonical clean URL/title/description;
- popup only on click, noopener/noreferrer;
- accessible names, visible focus, keyboard/touch 44px;
- `aria-live` copy status and Clipboard fallback;
- wrap on 320px with no page overflow;
- no personal/form data in URLs;
- analytics only after consent decision;
- works without Motion; microinteraction optional/reduced-safe;
- no React island if a tiny Astro script is sufficient;
- survive Astro client navigation only if ClientRouter actually exists.

First return API/props, markup behavior, URL encoding rules, browser fallback, test cases, exact files and bundle rationale. Stop for approval before code.
```
