# Feature prompt: партнёрские ссылки и аналитика

```text
Read-only ADR. Прочитай @AGENTS.md, /poleznye-servisy page prompt, analytics/privacy plans и static hosting boundary. Ничего не меняй.

Спроектируй прозрачную affiliate architecture:
- canonical useful-service data fields;
- affiliate vs non-affiliate status;
- visible disclosure near link;
- rel="sponsored nofollow";
- external-link safety/accessibility;
- destination visible, no cloaking;
- date/price/terms checked;
- outbound click event with privacy/consent constraints;
- no secret partner tokens in browser if they are sensitive;
- UTM/subid strategy without personal data;
- broken/expired link review;
- editorial independence and alternatives;
- legal page relationship.

Compare: direct partner URLs in content data vs approved redirect service/backend. Remember Timeweb static has no secure redirect API. Recommend the simplest transparent MVP. Code not change.
```
