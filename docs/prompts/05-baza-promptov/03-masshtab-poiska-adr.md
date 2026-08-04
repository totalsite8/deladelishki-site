# Feature prompt: масштаб поиска базы промптов

```text
Read-only ADR. Прочитай @AGENTS.md, planned prompt schema/filter prompt, Astro static boundary and expected content volume. Do not install search libraries.

Compare staged architectures:
1. small corpus: build-time JSON + client filter;
2. static full-text index (for example Pagefind only after version/package research);
3. hosted search;
4. self-hosted index/vector backend on separate infrastructure.

For each evaluate:
- approximate content-size threshold;
- initial JS/download cost;
- indexing at GitHub build;
- Russian morphology/transliteration;
- filter URL state;
- semantic search need vs hype;
- privacy/query logging;
- offline/runtime vendor dependency;
- accessibility;
- cost and maintenance;
- Timeweb compatibility.

Recommend MVP based on actual expected number/size of prompts. Define migration triggers and measurements. No code/dependencies until user approves.
```
