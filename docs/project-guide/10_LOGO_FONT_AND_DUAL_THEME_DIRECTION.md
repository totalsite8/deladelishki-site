# Logo, font and dual-theme direction

## Полученный логотип

Файл: `brand-source/logo_dd.png`.

```text
Размер: 1102 × 338 px
Формат: PNG RGBA
Прозрачность: есть
Рабочее соотношение сторон: примерно 3.26:1
```

Визуальный язык:

- italic uppercase;
- широкий динамичный wordmark;
- левая глубокая фиолетовая часть;
- правая фиолетово-малиновая gradient panel;
- белая часть `DELISHKI`;
- ощущение скорости, digital и энергии.

## Что логотип уже задаёт

- технологичный характер;
- контраст dark/light;
- purple/magenta accent;
- наклон/динамику;
- возможность использовать diagonal cuts и skewed frames как редкий брендовый мотив.

Не нужно превращать каждый контейнер в наклонную gradient-плашку. Геометрия логотипа используется как акцент, иначе бренд быстро станет визуально тяжёлым.

---

# Обязательные варианты логотипа

Перед production желательно подготовить:

1. Primary horizontal wordmark — текущая идея, лучше в SVG.
2. Dark-background version.
3. Light-background version.
4. Monochrome black.
5. Monochrome white.
6. Compact `DD` или другой знак для mobile header.
7. Favicon 16/32/48 и SVG.
8. App/social avatar 1:1.
9. Open Graph safe composition.
10. Minimum size и safe area.

Широкий PNG нельзя использовать как favicon и не следует уменьшать до нечитаемого mobile размера.

## Production format

- Master: SVG/vector, если исходник доступен.
- PNG: fallback/OG/export.
- В HTML логотип — image/link, не H1.
- Alt: `Dela Delishki` на значимом изображении; пустой alt, если рядом уже есть полное текстовое название и изображение декоративно.
- Width/height или aspect ratio обязательны, чтобы не было CLS.

---

# Черновая цветовая территория

Ниже не финальная palette, а направления, визуально считанные из PNG:

```text
Ink / deep violet:       ~ #300060
Core violet:             ~ #6000A0
Electric purple:         ~ #A000F0
Bright magenta-purple:   ~ #B000FF
Light text:              ~ #F5F5F7
Near-black canvas:       ~ #07070A
Light canvas:            ~ #F6F5F2
```

Точные значения нужно определить из vector/master source и проверить contrast. Gradient не используется для body text и focus indicators.

---

# Рекомендуемое направление: dual canvas

Пожелание: тёмный технологичный + светлый минимализм.

Рекомендация — не делать два несвязанных сайта и не добавлять theme toggle в первый день. Использовать одну token system с двумя page/section contexts:

## Dark / Portal context

Подходит:

- главная;
- услуги hub;
- AI;
- интерактивная аналитика;
- приложения;
- cinematic case hero.

Характер:

- near-black/deep-violet canvas;
- яркий purple accent;
- крупная белая типографика;
- gradient/soft glow ограниченно;
- визуальная глубина.

## Light / Editorial context

Подходит:

- блог и статьи;
- курсы;
- prompt reading/detail;
- legal;
- спокойные sections кейсов;
- формы.

Характер:

- тёплый почти белый canvas;
- ink text;
- purple как action/accent;
- больше воздуха;
- минимальное стекло/свечение;
- высокая читабельность.

## Shared tokens

```css
--font-display
--font-body
--font-mono
--color-canvas
--color-surface
--color-text
--color-muted
--color-border
--color-action
--color-focus
--brand-violet
--brand-purple
--brand-gradient
```

Page/section context меняет semantic tokens, а компоненты продолжают использовать `--color-*`. Это позволит менять palette без переписывания Tailwind classes по всему проекту.

---

# Halo Grotesk

Halo Grotesk рассматривается как display font, но перед подключением необходимо:

1. подтвердить точное название/версию foundry;
2. проверить webfont license;
3. получить WOFF2/variable files;
4. проверить кириллицу;
5. проверить italic/weights;
6. измерить размер;
7. проверить читаемость русских заголовков;
8. определить fallback.

## Архитектура лёгкой замены

Не писать название шрифта в десятках компонентов.

```css
:root {
  --font-display: "Halo Grotesk", "Arial Narrow", Arial, sans-serif;
  --font-body: system-ui, -apple-system, "Segoe UI", sans-serif;
}
```

Tailwind 4 должен ссылаться на variables/tokens. Тогда замена шрифта означает изменение одного font-face/token file.

Не загружать шрифт с внешнего CDN. Self-hosted WOFF2 после проверки лицензии.

## First-release fallback

Пока лицензия/файлы не подтверждены:

- использовать системный/approved local fallback;
- не подменять Halo случайным Google font;
- проектировать layout с учётом разной ширины glyphs;
- тестировать русские длинные слова на 320 px.

---

# Skill carousel на странице Данилы

Раздел не относится к основной профессиональной компетенции и размещается на персональной странице Данилы ближе к концу, после cases/leadership.

Рабочее название:

- `За пределами профессии`;
- `Навыки, которые сформировали подход`;
- `Другие грани`.

Первый подтверждённый объект:

```text
Ювелирное украшение
В восемь лет Данила учился ювелирному делу.
Связь с подходом: внимание к деталям, точность, терпение, требовательность к завершённости.
```

Остальные объекты нельзя придумывать — Данила должен предоставить список.

## Interaction

Предпочтительно CSS perspective + Framer Motion, не WebGL на первом этапе:

- полукруглая/орбитальная карусель;
- объект слегка поворачивается/приближается;
- hover/focus увеличивает;
- click/Enter раскрывает описание;
- кнопки Previous/Next;
- touch drag только дополнение;
- keyboard/tab доступность;
- reduced motion → обычная responsive grid;
- mobile → snap cards или grid без горизонтального page scroll;
- изображения lazy, кроме visible item.

Если после прототипа CSS/Motion не даёт нужной глубины, отдельно сравнить OGL/WebGL с bundle/performance impact.

---

# Hero media

Готового hero photo/video пока нет. Порядок:

1. Утвердить home concept.
2. Создать storyboard.
3. Сделать still poster как LCP.
4. Реализовать image scroll expansion.
5. Измерить.
6. Только затем добавить короткий video loop/3D как enhancement.

Логотип не должен быть единственным hero visual и не должен растягиваться как background без safe-area/contrast контроля.
