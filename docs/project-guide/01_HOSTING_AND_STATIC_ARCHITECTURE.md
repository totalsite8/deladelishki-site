# Timeweb, Ubuntu 18.04 и статический Astro: что делать

Дата проверки: 14 июля 2026 г.

## Короткий ответ

**Сейчас переносить аккаунт, устанавливать Node.js на Timeweb или менять Ubuntu не требуется.** Astro remains static. A future small PHP/MySQL leads API/read-only admin is now an approved candidate because Timeweb supports PHP; it is designed separately and does not require Node/VDS.

Ваш production-процесс устроен правильно для Astro static:

```text
Windows 11 / GitHub
        ↓ push/merge в main
GitHub Actions на Node.js 24
        ↓ npm ci → npm run build
готовая папка dist/
        ↓ SSH/rsync
Timeweb shared hosting
        ↓
Nginx/Apache только отдают HTML/CSS/JS/изображения
```

Node.js используется **при сборке**, а не при открытии сайта посетителем. Сайт на Timeweb получает уже готовые файлы, поэтому версия системной Ubuntu и локальный Node на хостинге не участвуют в выполнении Astro/React/Motion.

Ubuntu 18.04 — старая системная база, но на shared hosting её патчи, Nginx/Apache и ограничения обслуживает Timeweb, а не владелец сайта. У вас нет задачи администрировать ОС. Можно написать поддержке и узнать условия бесплатного переноса на 22.04 как долгосрочное улучшение, но не делать перенос перед началом разработки без причины: могут измениться IP/SSH host fingerprint/технический сервер, после чего потребуется перепроверить DNS, GitHub Secrets/known-host handling и deploy path. Для статической скорости сам по себе переход 18.04 → 22.04 почти ничего не изменит.

## Почему установка Node 24 на Ubuntu 18.04 не нужна

Официальная документация Timeweb говорит следующее:

- Node.js на виртуальном хостинге можно использовать как консольную утилиту;
- запустить Node как системную службу или веб-сервер на shared hosting нельзя;
- для Ubuntu 18.04 Timeweb рекомендует Node 16;
- для более новых Node нужно переносить аккаунт на сервер с Ubuntu 22.04;
- Node-служба требует VDS.

Источник: [документация Timeweb по Node.js и npm](https://timeweb.com/ru/docs/virtualnyj-hosting/prilozheniya-i-frejmvorki/ispolzovanie-node-js-i-npm/).

Это означает:

1. Собирать современный Astro на Timeweb Ubuntu 18.04 — плохая идея: Node 16 устарел для актуального Astro.
2. Но вы **не собираете сайт на Timeweb**: это делает GitHub Actions на Node 24.
3. Следовательно, несовпадение `Ubuntu 18.04 / Node 16` на Timeweb и `Node 24` в CI не является проблемой.
4. Установка `nvm`, Node и npm на хостинге добавит лишнюю точку отказа и не улучшит отдачу статических файлов.

## Когда всё-таки просить перенос на Ubuntu 22.04 или VDS

### Перенос shared-аккаунта на Ubuntu 22.04 имеет смысл, если

- вы сознательно хотите выполнять `npm run build` прямо по SSH на Timeweb;
- другой консольный инструмент требует Node 20/22;
- поддержка Timeweb рекомендует перенос по причинам безопасности или совместимости аккаунта.

Даже после переноса shared hosting не станет сервером для постоянного Node-приложения.

### VDS или отдельный backend потребуется, если вы захотите

- SSR/on-demand rendering;
- API на Node;
- webhooks оплаты;
- авторизацию и защищённые курсы;
- базу пользовательских данных;
- персональный кабинет;
- серверные AI-агенты;
- приватные секреты/API, вызываемые с сайта.

Для маркетингового портала переходить на VDS заранее не нужно. Часто лучше оставить `deladelishki.ru` статическим, а динамику разместить в managed-сервисе или на отдельном `app.deladelishki.ru`/API.

---

# Результат проверки действующего сайта

Я проверил публичные ответы `deladelishki.ru` 14 июля 2026 г.

## Уже работает хорошо

- `http://deladelishki.ru` перенаправляет на HTTPS кодом 301.
- `www.deladelishki.ru` перенаправляет на основной домен `deladelishki.ru`.
- HTTPS работает.
- Поддерживаются TLS 1.2 и 1.3; старые TLS 1.0/1.1 отклоняются.
- Сертификат Let's Encrypt действителен с 7 июня по 5 сентября 2026 г. В панели нужно убедиться, что включено автоматическое продление.
- Главная отдаётся по HTTP/2.
- Сгенерированный Astro CSS имеет хеш в имени, сжимается gzip и получает кэш на год:
  - `Cache-Control: max-age=31536000`;
  - `Content-Encoding: gzip`.
- `sitemap-index.xml` и `sitemap-0.xml` существуют.
- GitHub Actions уже успешно доставляет build: на сайте видна текущая минимальная Astro-страница.

## Что пока отсутствует или требует проверки

1. `robots.txt` возвращает 404.
2. Кастомный `404.html` отсутствует; показывается стандартная ошибка хостинга.
3. Главная сейчас фактически placeholder: один H1 и базовый CSS.
4. Не обнаружены HTTP security headers:
   - `Strict-Transport-Security`;
   - `Content-Security-Policy`;
   - `X-Content-Type-Options`;
   - `Referrer-Policy`;
   - `Permissions-Policy`.
5. Для HTML нет явного `Cache-Control`. Это не блокирующая проблема: HTML обычно должен обновляться чаще, чем хешированные assets.
6. Нужно проверить поведение неизвестных URL и trailing slash после появления реальных маршрутов.
7. Нужно проверить автоматическое продление SSL в панели Timeweb.

## Важное ограничение Timeweb по `.htaccess`

Timeweb использует Nginx для статических файлов и Apache для динамики. В официальной документации указано, что `.htaccess` не управляет статическими файлами вроде CSS, JS, изображений, шрифтов и видео, потому что их отдаёт Nginx.

Источник: [технические особенности платформы Timeweb](https://timeweb.com/ru/docs/virtualnyj-hosting/obshchaya-informaciya-o-hostinge/osobennosti-tekhnicheskogo-resheniya/).

Практические последствия:

- не полагаться на `.htaccess` для cache headers CSS/JS/изображений;
- не обещать, что `.htaccess` добавит security headers ко всем assets;
- хешировать build-assets — Astro уже делает это;
- versioned public media переименовывать при существенном обновлении;
- HTTPS/www redirects можно оставить на уровне Timeweb или существующей конфигурации, раз они уже работают;
- `ErrorDocument 404 /404.html` можно проверить после добавления страницы, но результат нужно подтвердить реальным запросом неизвестного URL.

Не стоит переходить на VDS только ради `immutable` или нескольких security headers. Сначала запросите поддержку Timeweb: можно ли настроить нужные заголовки на уровне Nginx для вашего домена. Альтернативный reverse proxy/CDN рассматривается позже и только после оценки доступности для аудитории.

---

# Что проверить в панели Timeweb сейчас

Ничего не меняйте вслепую. Пройдите пункты и запишите результат.

## 1. Домен и директория

- Основной домен: `deladelishki.ru`.
- `www` должен вести туда же и перенаправляться на вариант без `www`.
- Директория сайта должна совпадать с `REMOTE_PATH`/путём назначения в GitHub Actions.
- В корне после deploy должны появляться содержимое `dist/`, а не сама папка `dist` как вложенный уровень.

Правильно:

```text
public_html/index.html
public_html/_astro/...
public_html/sitemap-index.xml
```

Неправильно:

```text
public_html/dist/index.html
```

## 2. SSL

- Сертификат активен для `deladelishki.ru` и `www`.
- Автопродление Let's Encrypt включено.
- Принудительный HTTPS включён только в одном месте, без цепочки из нескольких редиректов.
- После каждого большого deploy проверять отсутствие mixed content в DevTools Console.

## 3. Node/PHP/базы

Для Astro frontend/build:

- Node/npm на Timeweb: не нужны;
- постоянный Node server: невозможен и не нужен;
- Astro output: static files.

Для будущей подсистемы заявок отдельно рассматриваются:

- PHP API;
- MySQL lead storage;
- authenticated read-only admin;
- email + Telegram notification;
- CRM later.

PHP не заменяет Astro и не собирает сайт. До реализации нужно проверить PHP version/extensions, MySQL, SMTP/mail, private config path, backup and rsync `--delete` isolation. Cron на Timeweb не нужен для first form backend; scheduled blog draft workflow лучше выполнять в GitHub Actions.

## 4. Логи

В панели Timeweb включите access/error logs для домена. Timeweb позволяет включить их в разделе «Логи» и получать архивы за прошлый период.

Источник: [получение логов Timeweb](https://timeweb.com/ru/docs/virtualnyj-hosting/logi-i-statistika/poluchenie-logov/).

Для статического сайта логи полезны для:

- реальных 404;
- битых URL после изменения структуры;
- подозрительных запросов;
- проверки обхода поисковыми роботами;
- диагностики deploy/path проблем.

Не публикуйте логи и не передавайте их AI целиком: там могут быть IP, query-параметры и служебные данные.

## 5. Резервные копии

GitHub хранит исходники, но не заменяет резервную копию production-конфигурации и пользовательских данных будущих внешних сервисов.

Проверьте:

- включены ли резервные копии Timeweb;
- можно ли восстановить `public_html`;
- сохранены ли отдельно названия GitHub Secrets и инструкция по их перевыпуску (без самих секретов в репозитории);
- есть ли возможность откатить production на предыдущий успешный commit/workflow.

---

# Что проверить в GitHub Actions

Не редактируйте workflow до аудита. Kimi должен проверить `.github/workflows/deploy.yml` и подтвердить:

1. `actions/checkout` используется в актуальной поддерживаемой major-версии.
2. `actions/setup-node` явно устанавливает Node 24.x.
3. Включён npm cache по `package-lock.json`, если это не ломает workflow.
4. Используется `npm ci`, а не случайное обновление зависимостей через `npm install`.
5. Выполняется `npm run build`.
6. Deploy получает **содержимое** `dist/`.
7. SSH host/user/path/key берутся из GitHub Secrets.
8. Секреты не печатаются в logs.
9. Deploy запускается только после успешного build.
10. `main` — единственная production-ветка.
11. Есть `concurrency`, чтобы старый deploy не перезаписал новый.
12. Timeout ограничивает зависший job.
13. `rsync --delete` используется осознанно: он полезен для удаления старых хешированных assets, но опасен при неправильном `REMOTE_PATH`.
14. До rsync можно сохранять build artifact или иметь простой rollback на предыдущий commit.
15. YAML сохранён UTF-8 без BOM.

## Готовый запрос в поддержку Timeweb

Не передавайте поддержку SSH private key или GitHub secrets. Можно отправить:

```text
Здравствуйте. Сейчас на виртуальном хостинге размещён статический Astro-сайт deladelishki.ru. В будущем рассматриваю небольшую PHP/MySQL-подсистему заявок.
Сборка Astro выполняется в GitHub Actions на Node.js 24, после чего содержимое dist/
загружается по SSH/rsync. Node.js как служба на хостинге не используется.

Подскажите, пожалуйста:
1. Включено ли автоматическое продление Let's Encrypt для deladelishki.ru и www?
2. Можно ли на моём тарифе настроить для домена на уровне Nginx заголовки HSTS,
   X-Content-Type-Options, Referrer-Policy, Permissions-Policy и при необходимости CSP?
3. Как правильно подключить пользовательский /404.html с реальным HTTP status 404
   для неизвестных URL статического сайта?
4. Какие PHP versions/extensions доступны (PDO MySQL, cURL, JSON, mbstring, OpenSSL/session),
   как рекомендуется хранить private config вне public_html и отправлять authenticated email?
5. Можно ли создать MySQL DB и отдельный path/subdomain для small lead API/read-only admin?
6. Если переносить аккаунт с Ubuntu 18.04 на 22.04, изменятся ли IP, SSH hostname/
   fingerprint, путь public_html или другие параметры, важные для GitHub Actions?
7. Есть ли практическая причина такого переноса для static Astro + small PHP lead subsystem?

Прошу не выполнять перенос и не менять настройки без моего отдельного подтверждения.
```

## Чего не делать

- не ставить Node 24 на Ubuntu 18.04 ради текущего deploy;
- не переносить сборку с GitHub Actions на Timeweb;
- не запускать `rsync` из Windows;
- не менять shared hosting на VDS до появления реальной server-side задачи;
- не хранить SSH private key в репозитории;
- не добавлять production deploy для feature branches;
- не использовать runtime CDN для критичных шрифтов/скриптов без необходимости.

---

# Решение

Статус инфраструктуры: **подходит для Astro static portal и потенциально для небольшой PHP/MySQL leads subsystem после отдельной проверки/ADR**.

Что сделать сейчас:

1. Оставить Ubuntu 18.04 как есть.
2. Не устанавливать Node/npm на Timeweb.
3. Проверить автопродление SSL.
4. Включить/проверить логи и backup.
5. Добавить в проект `robots.txt` и кастомную 404 на этапе фундамента.
6. Провести read-only аудит `deploy.yml`.
7. Спросить поддержку Timeweb о возможности security headers на Nginx — это улучшение, не блокер разработки.
8. Продолжать собирать на GitHub Actions с Node 24 и размещать только `dist/`.
