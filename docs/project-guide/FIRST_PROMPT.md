# Что запускать первым в Kimi Code — обновлено по реальному репозиторию

Репозиторий уже проверен по GitHub; повторный общий аудит и ZIP больше не нужны.

После установки/подключения Kimi Code в VS Code:

1. Откройте `deladelishki-site`.
2. Убедитесь, что терминал находится в корне репозитория.
3. Запустите Kimi в Plan/read-only mode.
4. Используйте:

```text
prompts/00-foundation/13-actual-repo-foundation-plan.md
```

Этот prompt знает фактический стек:

- Astro 7.0.7;
- Tailwind 4.3.2 via Vite;
- React 19.2.7;
- `framer-motion` 12.42.2;
- Node 24;
- current deploy.yml/Timeweb;
- RU + EN;
- `О нас`/team architecture;
- logo;
- PHP leads backend candidate.

Он ничего не меняет и сначала разделяет будущую работу на безопасные branches/commits.

После approved plan порядок:

1. Project instructions/docs branch.
2. Deploy hardening branch.
3. Astro/i18n/tokens foundation.
4. Header/footer/robots/404.
5. Logo/design-system concepts.
6. Page swarm briefs.
7. Home concepts.
8. Home implementation.
9. Confirmed service pages one at a time.
10. Cases after related service pages.
11. PHP leads backend/form pilot in a separate architecture/branch.

Не используйте старый prompt «сразу создай инновационную главную».
