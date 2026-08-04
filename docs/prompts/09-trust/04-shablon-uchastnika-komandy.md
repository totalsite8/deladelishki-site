# Prompt-шаблон: страница участника команды

**Маршрут:** `/o-nas/[slug]/`  
**Статус:** template; не создавать страницу без реального участника и approved content.

```text
Создай brief/concepts только для реального участника команды. Сначала запроси и зафиксируй:
- public name;
- role;
- relationship/employment wording;
- professional summary;
- 3–7 real skills;
- project/case contribution;
- photo permission/alt;
- contacts, если их нужно публиковать;
- RU and English reviewed copy;
- non-professional items, если участник согласен.

EXACT BLOCK ORDER
1. Breadcrumb: О нас → Имя.
2. Hero: name, role, one-line value, approved portrait optional.
3. What this person is responsible for.
4. Core skills with real examples.
5. How they work within project/team.
6. Related verified projects/cases.
7. Optional principles/interests — only approved facts.
8. Contact through Dela Delishki, not personal data by default.
9. Related team/services.

SEO
- Title: `[Имя] — [роль] | Dela Delishki`.
- Description only from approved summary.
- Canonical localized route.
- Schema: `ProfilePage` + `Person` only for a real person.
- No fake employer, award, rating or social link.

VISUAL
Shared team-profile grammar but individual accent/interaction. Accessibility and static profile first. Do not force semi-3D hobby carousel on every member.

PROCESS
Run page-swarm, offer 2–3 concepts, wait for selection, then plan. No empty placeholder profiles and no indexation before both language versions/content status are decided.
```
