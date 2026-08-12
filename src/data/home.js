// Content model of the home page "OPERATOR'S UNIVERSE" (release 1.0).
// Single source for hero copy, audience lanes, gateways, core-scene nodes,
// lane sections, statuses, the portal log and approved public facts.
//
// Rules:
// - `href: null` means the route is not published yet. Components must render
//   such entries as non-link controls (buttons) and never invent URLs.
// - `accent` values map to design tokens (see tokens.css), not raw colors.
// - Copy is first-person, factual, no exclamation marks, no marketing triggers.
// - No invented metrics, clients, testimonials or case content here, ever.

export const STATUS = {
  published: { label: "Опубликовано", tone: "published" },
  progress: { label: "В разработке", tone: "progress" },
  soon: { label: "Скоро", tone: "soon" },
};

export const hero = {
  eyebrow: "Портал / Живая система",
  // Selected draft (swarm copy direction: first person, client result first).
  // Alternatives are listed in homeCopyAlternatives below.
  h1: "Собираю digital, бизнес и AI в управляемые системы",
  offer:
    "Меня зовут Данила Подшивалов. 18+ лет в digital: стратегия, сайты, реклама, CRM и автоматизация — как единая система, которая приносит результат, а не набор разрозненных задач.",
  ctas: {
    primary: { label: "Обсудить проект", href: "/#kontakty" },
    secondary: { label: "Познакомиться", href: "/#o-danile" },
    tertiary: { label: "Смотреть направления", href: "#dlya-biznesa" },
  },
  // Media slot for the future alpha-video entrance of the central figure.
  // Nulls mean "not produced yet" — the scene must look finished without it.
  // When produced: webm = WebM (VP9) alpha, hevc = HEVC-with-alpha .mov for
  // Safari, poster = fallback WebP/PNG still (also used for reduced motion).
  media: {
    webm: null,
    hevc: null,
    poster: null,
    alt: "Данила Подшивалов выходит в центр сцены и останавливается",
  },
};

// Copy alternatives kept for review; the active draft lives in hero.h1/offer.
export const heroCopyAlternatives = [
  {
    h1: "Собираю digital, бизнес и AI в управляемые системы",
    offer:
      "Меня зовут Данила Подшивалов. 18+ лет в digital: стратегия, сайты, реклама, CRM и автоматизация — как единая система, которая приносит результат, а не набор разрозненных задач.",
  },
  {
    h1: "Я собираю маркетинг, digital и AI в одну управляемую систему",
    offer:
      "Меня зовут Данила Подшивалов. 18+ лет в digital: стратегия, сайты, реклама, CRM и автоматизация — как единая система, которая приносит результат, а не набор разрозненных задач.",
  },
  {
    h1: "Данила Подшивалов. Проектирую системы на стыке digital, бизнеса и AI",
    offer:
      "Руководитель-практик: 18+ лет выстраиваю маркетинг, сайты и AI-инструменты так, чтобы они работали вместе и давали измеримый результат.",
  },
];

// Operator signature: small coordinate label in the depth of the scene —
// never the visual center; the selected lane becomes the center.
export const ddSignature = {
  monogram: "DD",
  name: "Данила Подшивалов",
  role: "Оператор системы",
};

export const gateways = [
  {
    id: "services",
    number: "01",
    title: "Услуги",
    summary:
      "Шесть направлений одной системы: от исследования рынка до заявки в CRM. Без «часов работы» — только результат.",
    status: "progress",
    accent: "business",
    href: "/uslugi/",
  },
  {
    id: "knowledge",
    number: "02",
    title: "Знания",
    summary:
      "Практика 18+ лет, разложенная по полкам: блог, курсы, промпты. Без воды и теории ради теории.",
    status: "soon",
    accent: "learning",
    href: "/kursy/",
  },
  {
    id: "tools",
    number: "03",
    title: "Инструменты",
    summary:
      "Скилы агентов и сервисы, которыми я пользуюсь сам каждый день. Не демки — рабочие инструменты.",
    status: "soon",
    accent: "ai",
    href: "/poleznye-servisy/",
  },
  {
    id: "products",
    number: "04",
    title: "Продукты",
    summary:
      "Собственные приложения портала. Первый релиз в работе — без анонсов ради анонсов.",
    status: "soon",
    accent: "ai",
    href: "/prilozheniya/",
  },
];

// Six service directions. Children mirror the confirmed site-tree hierarchy;
// their routes are planned, so nothing here carries an href.
export const serviceDirections = [
  {
    id: "razrabotka",
    title: "Разработка",
    summary:
      "Сайт, который не висит мёртвым грузом, а приносит заявки: лендинги, сайты и CRM, связанные с продажами.",
    domain: "development",
    status: "progress",
    href: "/uslugi/razrabotka/",
    children: [
      { label: "Landing Page", href: "/uslugi/razrabotka/landing-page/", summary: "Один экран — одна задача: заявка. Структура, тексты и форма, заточенные под конкретное предложение." },
      { label: "Сайты", href: "/uslugi/razrabotka/saity/", summary: "Сайт, который не стыдно показать клиенту и не больно развивать: быстрый, понятный, связанный с продажами." },
      { label: "Настройка CRM", href: "/uslugi/razrabotka/nastroika-crm/", summary: "Конец потерянным заявкам: каждое обращение фиксируется и видно, где проседает воронка." },
      { label: "Аудит сайта и план развития", href: "/uslugi/razrabotka/audit-saita-i-plan-razvitiya/", summary: "Честный разбор, почему сайт не продаёт, и план: что чинить сначала, что не трогать вовсе." },
      { label: "Интеграция сайта и CRM", href: "/uslugi/razrabotka/integratsiya-saita-i-crm/", summary: "Формы, звонки и письма сами попадают в CRM — менеджеры работают в одном окне, а не в пяти чатах." },
    ],
  },
  {
    id: "dizain",
    title: "Дизайн",
    summary:
      "Клиент судит по обложке за три секунды. Дизайн, который продаёт до первого прочитанного слова.",
    domain: "design",
    status: "progress",
    href: "/uslugi/dizain/",
    children: [
      { label: "Бренд", href: "/uslugi/dizain/brend/", summary: "Клиенты выбирают глазами: система образа, которая делает продукт узнаваемым до первого прочитанного слова." },
      { label: "Коммерческий дизайн", href: "/uslugi/dizain/kommercheskii-dizain/", summary: "КП и презентации, которые дочитывают: структура смыслов и подача, а не стоковые иконки." },
      { label: "Маркетплейсы", href: "/uslugi/dizain/marketpleisy/", summary: "Карточка, выигрывающая клик в выдаче: инфографика и смыслы, отвечающие на сомнения покупателя." },
      { label: "Социальные сети", href: "/uslugi/dizain/socialnye-seti/", summary: "Лента, узнаваемая без логотипа: визуальная система, с которой контент перестаёт быть случайным." },
      { label: "Веб-интерфейсы", href: "/uslugi/dizain/veb-interfeisy/", summary: "Интерфейс, по которому не нужна инструкция: клиент доходит до целевого действия без лишних шагов." },
    ],
  },
  {
    id: "marketing",
    title: "Маркетинг",
    summary:
      "Реклама без системы — сжигание бюджета. Стратегия, аналитика и кампании с контролем каждого рубля.",
    domain: "marketing",
    status: "progress",
    href: "/uslugi/marketing/",
    children: [
      { label: "Стратегия 360", href: "/uslugi/marketing/strategiya-360/", summary: "Карта рынка и вашей роли на нём: куда идти, от чего отказаться и чем измерять путь." },
      { label: "Аналитика", href: "/uslugi/marketing/analitika/", summary: "Конец решениям на ощущениях: видно, какой канал приносит деньги, а какой съедает бюджет." },
      { label: "Презентации", href: "/uslugi/marketing/prezentatsii/", summary: "Материалы, которые дожимают сделку: от структуры аргументов до слайдов." },
      { label: "Внутренняя оптимизация", href: "/uslugi/marketing/vnutrennyaya-optimizatsiya/", summary: "Точки, где сайт теряет заявки прямо сейчас, и их починка — рост без увеличения бюджета." },
      { label: "Внешнее продвижение", href: "/uslugi/marketing/vneshnee-prodvizhenie/", summary: "Репутация и присутствие там, где клиент ищет подтверждения перед покупкой." },
      { label: "Реклама", href: "/uslugi/marketing/reklama/", summary: "Кампании с контролем экономики: каждый рубль виден в связке клик → заявка → продажа." },
      { label: "Под ключ", href: "/uslugi/marketing/pod-klyuch/", summary: "Маркетинг-функция целиком: стратегия, команда, подрядчики и ответственность за результат в одних руках." },
    ],
  },
  {
    id: "ai",
    title: "AI",
    summary:
      "Рутина съедает часы вашей команды каждый день. Автоматизация и агенты, которые возвращают это время.",
    domain: "ai",
    status: "progress",
    href: "/uslugi/ai/",
    children: [
      { label: "Автоматизация", href: "/uslugi/ai/avtomatizatsiya/", summary: "Рутина уходит в скрипты: данные сами переезжают между системами, люди занимаются смыслом." },
      { label: "Настройка агента", href: "/uslugi/ai/nastroika-agenta/", summary: "AI-агент под вашу операционку: готовит материалы, следит за процессами, не устаёт и не забывает." },
      { label: "Подбор стека", href: "/uslugi/ai/podbor-steka/", summary: "Рабочий набор AI-инструментов под ваш бюджет и данные — без переплаты за громкие названия." },
      { label: "Мультифункциональный секретарь", href: "/uslugi/ai/multifunktsionalnyi-sekretar/", summary: "Письма, протоколы, напоминания и подготовка документов — фоном, пока вы занимаетесь делом." },
      { label: "Аудит процессов для автоматизации", href: "/uslugi/ai/audit-protsessov-dlya-avtomatizatsii/", summary: "Считаем, какая рутина стоит дороже всего, и автоматизируем сначала её." },
    ],
  },
  {
    id: "fotosyomka",
    title: "Фотосъёмка",
    summary:
      "Продукт проигрывает фото конкурента — клиент уходит. Съёмка, после которой продукт хочется купить.",
    domain: "photo",
    status: "progress",
    href: "/uslugi/fotosyomka/",
    children: [
      { label: "Food styling", href: "/uslugi/fotosyomka/food-styling/", summary: "Блюдо, которое хочется попробовать с экрана: свет, фактура и подача, работающие на аппетит." },
      { label: "Предметная съёмка", href: "/uslugi/fotosyomka/predmetnaya-syomka/", summary: "Продукт выглядит на фото так же хорошо, как в руках: чистые снимки для каталога и рекламы." },
    ],
  },
  {
    id: "obuchenie",
    title: "Обучение",
    summary:
      "Команда работает кто как умеет — результат плавает. Обучение, после которого отдел продаёт по системе.",
    domain: "education",
    status: "soon",
    href: "/uslugi/obuchenie/",
    children: [
      { label: "Обучение отдела продаж", href: "/uslugi/obuchenie/obuchenie-otdela-prodazh/", summary: "Отдел, который продаёт по системе, а не по настроению: скрипты, этапы, дисциплина в CRM." },
      { label: "Обучение маркетинговой команды", href: "/uslugi/obuchenie/obuchenie-marketingovoi-komandy/", summary: "Команда, говорящая на языке цифр: от стратегии до экономики каналов, на ваших реальных задачах." },
    ],
  },
];

export const casesStatus = {
  eyebrow: "Кейсы",
  title: "Кейсы готовятся к публикации",
  text: "Четыре проекта находятся на этапе проверки: сначала подтверждение цифр, периодов и разрешений — только потом публикация. До этого здесь не будет ни метрик, ни логотипов.",
  status: "progress",
};

export const learningItems = [
  {
    id: "kursy",
    type: "Курсы",
    title: "Курсы и самостоятельное обучение",
    summary:
      "Практические программы по маркетингу и digital — без воды, с разбором реальных процессов.",
    status: "soon",
    href: "/kursy/",
  },
  {
    id: "blog",
    type: "Блог",
    title: "Блог",
    summary:
      "Статьи, новости и обзоры: как маркетинг, сайты и автоматизация работают на практике.",
    status: "soon",
    href: "/blog/",
  },
  {
    id: "baza-promptov",
    type: "База",
    title: "База промптов",
    summary:
      "Проверенные промпты для рабочих задач — структурированные, с пояснениями и примерами.",
    status: "soon",
    href: "/baza-promptov/",
  },
];

export const aiItems = [
  {
    id: "navyki-agentov",
    type: "Скил",
    title: "Скилы и навыки для агентов",
    summary:
      "Готовые навыки для AI-агентов: проверяемые инструкции, которые можно забрать в свой стек.",
    status: "soon",
    href: "/navyki-agentov/",
  },
  {
    id: "poleznye-servisy",
    type: "Инструмент",
    title: "Полезные сервисы",
    summary:
      "Подборка рабочих сервисов, которыми пользуюсь сам. Партнёрские ссылки — всегда с пометкой.",
    status: "soon",
    href: "/poleznye-servisy/",
  },
  {
    id: "prilozheniya",
    type: "Приложение",
    title: "Приложения",
    summary:
      "Собственные приложения для Android и iOS. Раздел появится вместе с первым релизом продукта.",
    status: "soon",
    href: "/prilozheniya/",
  },
];

// Portal log: only real stages, no invented calendar promises.
export const portalLog = [
  {
    date: "2026-07",
    text: "Спроектирована архитектура портала: 10 разделов, 6 направлений услуг, дерево из 76 узлов.",
  },
  {
    date: "2026-08",
    text: "Главная страница опубликована: релиз 1.0 «OPERATOR'S UNIVERSE» с нейросетевой сценой.",
  },
  {
    date: "Далее",
    text: "Разделы публикуются по мере готовности: услуги, кейсы после проверки фактов, блог и база промптов.",
  },
];

// Approved public facts only (docs/content-source/PROFILE_AND_CASES_DRAFT.md).
export const about = {
  title: "О Даниле",
  lead: "Я — руководитель маркетинга и digital-проектов, который умеет не только ставить задачи, но и понимает их исполнение на практике.",
  facts: [
    "18+ лет в digital: маркетинг, реклама, дизайн, сайты и автоматизация",
    "В профессии с 17 лет — начинал руками, а не с управления",
    "Руководил командой до 20 человек в прямом подчинении",
    "Практик-руководитель: стратегия, запуск и контроль результата — в одних руках",
  ],
  note: "Отдельная страница профиля появится вместе с разделом «О нас».",
  photo: {
    alt: "Данила Подшивалов за ноутбуком, вокруг — панели ключевых навыков",
    caption: "Навыки системы — раскройте состав каждой",
  },
};

export const contacts = {
  eyebrow: "07 / Контакты",
  title: "Обсудим ваш проект",
  text: "Расскажите о задаче в письме, по телефону или в VK — разберёмся, чем я могу быть полезен. Форма появится позже, когда будет готов надёжный backend.",
  vkLabel: "VK (откроется в новой вкладке)",
};

// Topology of the neural field hero scene: 3 lanes -> 4 gateways -> child
// stack. Built from the same content the sections below use, so the scene
// and the page never disagree. `href: null` = planned route, no link ever.
// Coordinates live in the scene component (presentation), content lives here.
export const neuralLanes = [
  {
    id: "business",
    index: "01",
    label: "Для бизнеса",
    summary:
      "Заявки теряются, бюджет уходит непонятно куда, подрядчики отвечают за процесс. Я собираю маркетинг, сайт и CRM в одну систему — и отвечаю за результат.",
    accent: "business",
    status: "progress",
    href: "/uslugi/",
    gateways: [
      {
        id: "uslugi",
        label: "Услуги",
        summary: "Шесть направлений услуг для бизнеса и команд.",
        status: "progress",
        href: null,
        children: serviceDirections.map((direction) => ({
          id: direction.id,
          label: direction.title,
          summary: direction.summary,
          status: direction.status,
          href: direction.href,
          // Third level of the neural frame: the direction's own services.
          children: direction.children.map((child, index) => ({
            id: `${direction.id}-${index + 1}`,
            label: child.label,
            summary: child.summary,
            status: "soon",
            href: child.href ?? null,
          })),
        })),
      },
    ],
  },
  {
    id: "learning",
    index: "02",
    label: "Для обучения",
    summary:
      "Учиться по устаревшим курсам — дорого. Здесь только работающая практика: разборы, промпты и системы, которые я использую сам.",
    accent: "learning",
    status: "soon",
    href: "/kursy/",
    gateways: [
      {
        id: "znaniya",
        label: "Знания",
        summary: "Блог, курсы и промпты.",
        status: "soon",
        href: null,
        children: learningItems.map((item) => ({
          id: item.id,
          label: item.title,
          summary: item.summary,
          status: item.status,
          href: item.href,
        })),
      },
    ],
  },
  {
    id: "ai",
    index: "03",
    label: "Для AI-практиков",
    summary:
      "Нейросети у всех на слуху, а пользы ноль. Здесь — проверенные скилы, агенты и сервисы, которые экономят часы каждую неделю.",
    accent: "ai",
    status: "soon",
    href: "/navyki-agentov/",
    gateways: [
      {
        id: "instrumenty",
        label: "Инструменты",
        summary: "Скилы агентов и полезные сервисы.",
        status: "soon",
        href: null,
        children: aiItems
          .filter((item) => item.id !== "prilozheniya")
          .map((item) => ({
            id: item.id,
            label: item.title,
            summary: item.summary,
            status: item.status,
            href: item.href,
          })),
      },
      {
        id: "produkty",
        label: "Продукты",
        summary: "Собственные приложения портала.",
        status: "soon",
        href: null,
        children: aiItems
          .filter((item) => item.id === "prilozheniya")
          .map((item) => ({
            id: item.id,
            label: item.title,
            summary: item.summary,
            status: item.status,
            href: item.href,
          })),
      },
    ],
  },
];

// Skill system for the about block (af-style panels): approved competencies
// only (docs/content-source/PROFILE_AND_CASES_DRAFT.md, §2). No metrics.
export const skills = [
  {
    id: "strategy",
    label: "Стратегия и аналитика",
    items: [
      "Исследования рынка и конкурентов",
      "Маркетинговая стратегия",
      "Сквозная аналитика",
      "Поиск точек роста",
    ],
  },
  {
    id: "marketing",
    label: "Маркетинг под ключ",
    items: [
      "Яндекс.Директ и рекламные кампании",
      "Связка маркетинга и продаж",
      "Email-трекинг",
      "KPI и отчётность",
    ],
  },
  {
    id: "web",
    label: "Сайты и CRM",
    items: [
      "Лендинги и сайты",
      "Настройка Bitrix24",
      "Интеграции и скрипты",
      "Аудит и план развития",
    ],
  },
  {
    id: "design",
    label: "Дизайн и бренд",
    items: [
      "Брендинг и нейминг",
      "Упаковка и POS-материалы",
      "Коммерческий дизайн",
      "Презентации и КП",
    ],
  },
  {
    id: "ai",
    label: "AI и автоматизация",
    items: [
      "Нейросети и prompt work",
      "Автоматизация процессов",
      "Настройка AI-агентов",
      "Подбор AI-стека",
    ],
  },
  {
    id: "team",
    label: "Команда и обучение",
    items: [
      "Команда до 20 человек",
      "Обучение отделов продаж",
      "Обучение маркетинговых команд",
      "Постановка процессов",
    ],
  },
];

export const home = {
  hero,
  heroCopyAlternatives,
  ddSignature,
  neuralLanes,
  gateways,
  serviceDirections,
  casesStatus,
  learningItems,
  aiItems,
  portalLog,
  about,
  skills,
  contacts,
};

export default home;
