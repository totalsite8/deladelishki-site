# Prompt: навигация и mega-menu

```text
Прочитай @AGENTS.md, canonical navigation data и утверждённую IA. Ничего не меняй.

Спроектируй 2–3 концепции навигации для глубины 4+ уровней. Объясняй как ощущение и user journey.

Обязательное:
- desktop header остаётся понятным;
- main menu не показывает все десятки ссылок одновременно;
- Services mega-menu раскрывает categories/children;
- mobile — доступный drawer/accordion, не hover;
- keyboard, focus trap только для настоящего modal overlay, Escape, restore focus;
- 44px targets;
- active route и breadcrumbs;
- header CTA `Обсудить проект` → `/kontakty/?tema=proekt`;
- footer contact methods from canonical site data: email, phone, VK;
- no page horizontal overflow;
- navigation работает без Motion; animation усиливает state;
- `client:load` только для immediately usable menu;
- no background image download for every hover on mobile;
- Motion package/import по фактическому repository;
- no new dependency.

Для каждого варианта: impression, content model, desktop/mobile, animation, complexity/performance. Рекомендуй один и остановись до выбора.
```
