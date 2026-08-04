# Feature prompt: безопасный автодеплой блога

```text
Read-only architecture task. Прочитай @AGENTS.md, current GitHub Actions, planned Astro content collections и blog prompts. Не меняй файлы, workflow и не подключай внешние источники.

Спроектируй второй GitHub workflow `scheduled research → AI draft → branch/PR`, совместимый с существующим production workflow `merge/push main → build → rsync Timeweb`. Draft workflow никогда не пушит generated content прямо в main:
- source allowlist and provenance;
- collection/summarisation как draft, а не auto-publish;
- primary-source links;
- factual/date/citation checks;
- duplicate/plagiarism/copyright review;
- AI disclosure/editing policy;
- per-locale status draft/review/published/correction/expired;
- Russian draft first; English localization as a separate human-reviewed stage;
- PR-based approval;
- GitHub Actions build only after merge;
- rollback/correction;
- RSS/sitemap/update dates;
- rate limits/failure/secret handling;
- no runtime dependency on a foreign CDN;
- where scheduled collection can run, because Timeweb static cannot run a Node service.

Compare 3 architectures:
A. manual curated sources + AI-assisted local draft;
B. GitHub scheduled Action opens draft PR;
C. external automation service creates draft PR.

For each: cost, complexity, VPN/service dependency, security, copyright/editorial risk, maintenance. Recommend an MVP. Do not create a scraper or autopublisher. End with decisions/credentials/services that require user approval.
```
