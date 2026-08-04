# Prompt: read-only аудит GitHub Actions → Timeweb

```text
Работай только в read-only режиме. Прочитай @AGENTS.md, @.github/workflows/deploy.yml, package.json, package-lock.json, astro.config.mjs и git status. Не меняй YAML, secrets, hosting paths и не запускай deploy.

Контекст: actual workflow uses checkout@v4, setup-node@v4 Node 24, `npm install`, build and burnett01 rsync `-avzr --delete` from `dist/`. It works. Node on Timeweb is not needed. Future PHP/MySQL leads API/admin may run on Timeweb, so `--delete` isolation is now a critical design constraint.

Проверь и подготовь minimal patch proposal:
- replace `npm install` with `npm ci` and explain lock reproducibility;
- add setup-node npm cache;
- permissions `contents: read`, timeout and concurrency;
- trigger и production branch;
- checkout/setup-node major versions;
- explicit Node 24;
- npm cache key/lockfile;
- npm ci;
- build failure stops deploy;
- content of dist vs nested dist directory;
- SSH secrets referenced without echo;
- host key handling и trade-offs;
- remote path risk;
- rsync flags, especially --delete;
- concurrency and timeout;
- permissions least privilege;
- artifact/rollback possibility;
- YAML UTF-8 no BOM;
- no hidden dependency on local rsync;
- sitemap/domain output.

Никогда не печатай secret values. Если чего-то нельзя проверить без GitHub UI, дай новичку точный пункт меню и что увидеть.

Вывод:
1. Verdict Ready / Needs fixes / Unsafe.
2. Evidence by line numbers.
3. P0/P1/P2 findings.
4. Minimal patch proposal as diff, но не применяй.
5. Manual Timeweb panel checklist.
6. Rollback plan.
7. Confirm whether Ubuntu migration is needed now and why.
```
