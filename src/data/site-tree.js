// Canonical navigation/service tree — single runtime source of truth.
// Exact 1:1 migration of docs/planning/site-tree.json (76 nodes).
// "status" is the IA status from the approved registry (confirmed/recommended/planned/utility).
// "localeStatus" is the per-locale publication status (planned/draft/review/published);
// a locale path is exposed (sitemap, hreflang, navigation) only when published.
// English paths stay null/planned until a human-reviewed translation exists.

const siteTree = [
  {
    "number": "1",
    "id": "uslugi",
    "title": "Услуги",
    "route": "/uslugi/",
    "status": "confirmed",
    "order": 1,
    "paths": {
      "ru": "/uslugi/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    },
    "children": [
      {
        "number": "1.1",
        "id": "razrabotka",
        "title": "Разработка",
        "route": "/uslugi/razrabotka/",
        "status": "confirmed",
        "order": 1,
        "paths": {
          "ru": "/uslugi/razrabotka/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        },
        "children": [
          {
            "number": "1.1.1",
            "id": "landing-page",
            "title": "Landing Page",
            "route": "/uslugi/razrabotka/landing-page/",
            "status": "confirmed",
            "order": 1,
            "paths": {
              "ru": "/uslugi/razrabotka/landing-page/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.1.2",
            "id": "saity",
            "title": "Сайты",
            "route": "/uslugi/razrabotka/saity/",
            "status": "confirmed",
            "order": 2,
            "paths": {
              "ru": "/uslugi/razrabotka/saity/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.1.3",
            "id": "nastroika-crm",
            "title": "Настройка CRM",
            "route": "/uslugi/razrabotka/nastroika-crm/",
            "status": "confirmed",
            "order": 3,
            "paths": {
              "ru": "/uslugi/razrabotka/nastroika-crm/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.1.R1",
            "id": "audit-saita",
            "title": "Аудит сайта и план развития",
            "route": "/uslugi/razrabotka/audit-saita-i-plan-razvitiya/",
            "status": "recommended",
            "order": 4,
            "paths": {
              "ru": "/uslugi/razrabotka/audit-saita-i-plan-razvitiya/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.1.R2",
            "id": "integratsiya-saita-crm",
            "title": "Интеграция сайта и CRM",
            "route": "/uslugi/razrabotka/integratsiya-saita-i-crm/",
            "status": "recommended",
            "order": 5,
            "paths": {
              "ru": "/uslugi/razrabotka/integratsiya-saita-i-crm/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          }
        ]
      },
      {
        "number": "1.2",
        "id": "dizain",
        "title": "Дизайн",
        "route": "/uslugi/dizain/",
        "status": "confirmed",
        "order": 2,
        "paths": {
          "ru": "/uslugi/dizain/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        },
        "children": [
          {
            "number": "1.2.1",
            "id": "brend",
            "title": "Бренд",
            "route": "/uslugi/dizain/brend/",
            "status": "confirmed",
            "order": 1,
            "paths": {
              "ru": "/uslugi/dizain/brend/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.2.2",
            "id": "kommercheskii-dizain",
            "title": "Коммерческий дизайн",
            "route": "/uslugi/dizain/kommercheskii-dizain/",
            "status": "confirmed",
            "order": 2,
            "paths": {
              "ru": "/uslugi/dizain/kommercheskii-dizain/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.2.3",
            "id": "marketpleisy",
            "title": "Маркетплейсы",
            "route": "/uslugi/dizain/marketpleisy/",
            "status": "confirmed",
            "order": 3,
            "paths": {
              "ru": "/uslugi/dizain/marketpleisy/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.2.4",
            "id": "socialnye-seti",
            "title": "Социальные сети",
            "route": "/uslugi/dizain/socialnye-seti/",
            "status": "confirmed",
            "order": 4,
            "paths": {
              "ru": "/uslugi/dizain/socialnye-seti/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.2.5",
            "id": "veb-interfeisy",
            "title": "Веб-интерфейсы",
            "route": "/uslugi/dizain/veb-interfeisy/",
            "status": "confirmed",
            "order": 5,
            "paths": {
              "ru": "/uslugi/dizain/veb-interfeisy/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          }
        ]
      },
      {
        "number": "1.3",
        "id": "marketing",
        "title": "Маркетинг",
        "route": "/uslugi/marketing/",
        "status": "confirmed",
        "order": 3,
        "paths": {
          "ru": "/uslugi/marketing/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        },
        "children": [
          {
            "number": "1.3.1",
            "id": "strategiya-360",
            "title": "Стратегия 360",
            "route": "/uslugi/marketing/strategiya-360/",
            "status": "confirmed",
            "order": 1,
            "paths": {
              "ru": "/uslugi/marketing/strategiya-360/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            },
            "children": [
              {
                "number": "1.3.1.R1",
                "id": "audit-marketinga",
                "title": "Аудит маркетинга",
                "route": "/uslugi/marketing/strategiya-360/audit-marketinga/",
                "status": "recommended",
                "order": 1,
                "paths": {
                  "ru": "/uslugi/marketing/strategiya-360/audit-marketinga/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.1.R2",
                "id": "go-to-market",
                "title": "Go-to-market",
                "route": "/uslugi/marketing/strategiya-360/go-to-market/",
                "status": "recommended",
                "order": 2,
                "paths": {
                  "ru": "/uslugi/marketing/strategiya-360/go-to-market/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.1.R3",
                "id": "pozitsionirovanie-utp",
                "title": "Позиционирование и УТП",
                "route": "/uslugi/marketing/strategiya-360/pozitsionirovanie-i-utp/",
                "status": "recommended",
                "order": 3,
                "paths": {
                  "ru": "/uslugi/marketing/strategiya-360/pozitsionirovanie-i-utp/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.1.R4",
                "id": "b2b-marketing",
                "title": "B2B-маркетинг",
                "route": "/uslugi/marketing/strategiya-360/b2b-marketing/",
                "status": "recommended",
                "order": 4,
                "paths": {
                  "ru": "/uslugi/marketing/strategiya-360/b2b-marketing/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.1.R5",
                "id": "b2c-marketing",
                "title": "B2C-маркетинг",
                "route": "/uslugi/marketing/strategiya-360/b2c-marketing/",
                "status": "recommended",
                "order": 5,
                "paths": {
                  "ru": "/uslugi/marketing/strategiya-360/b2c-marketing/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              }
            ]
          },
          {
            "number": "1.3.2",
            "id": "analitika",
            "title": "Аналитика",
            "route": "/uslugi/marketing/analitika/",
            "status": "confirmed",
            "order": 2,
            "paths": {
              "ru": "/uslugi/marketing/analitika/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            },
            "children": [
              {
                "number": "1.3.2.1",
                "id": "email-treking",
                "title": "Email-трекинг",
                "route": "/uslugi/marketing/analitika/email-treking/",
                "status": "confirmed",
                "order": 1,
                "paths": {
                  "ru": "/uslugi/marketing/analitika/email-treking/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.2.2",
                "id": "analiz-rynka",
                "title": "Анализ рынка",
                "route": "/uslugi/marketing/analitika/analiz-rynka/",
                "status": "confirmed",
                "order": 2,
                "paths": {
                  "ru": "/uslugi/marketing/analitika/analiz-rynka/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.2.3",
                "id": "analiz-konkurentov",
                "title": "Анализ конкурентов",
                "route": "/uslugi/marketing/analitika/analiz-konkurentov/",
                "status": "confirmed",
                "order": 3,
                "paths": {
                  "ru": "/uslugi/marketing/analitika/analiz-konkurentov/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.2.4",
                "id": "analiz-sprosa",
                "title": "Анализ спроса",
                "route": "/uslugi/marketing/analitika/analiz-sprosa/",
                "status": "confirmed",
                "order": 4,
                "paths": {
                  "ru": "/uslugi/marketing/analitika/analiz-sprosa/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.2.5",
                "id": "nastroika-schetchikov",
                "title": "Настройка счётчиков",
                "route": "/uslugi/marketing/analitika/nastroika-schetchikov/",
                "status": "confirmed",
                "order": 5,
                "paths": {
                  "ru": "/uslugi/marketing/analitika/nastroika-schetchikov/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.2.6",
                "id": "poisk-tochek-rosta",
                "title": "Поиск точек роста",
                "route": "/uslugi/marketing/analitika/poisk-tochek-rosta/",
                "status": "confirmed",
                "order": 6,
                "paths": {
                  "ru": "/uslugi/marketing/analitika/poisk-tochek-rosta/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.2.7",
                "id": "skvoznaya-analitika",
                "title": "Сквозная аналитика",
                "route": "/uslugi/marketing/analitika/skvoznaya-analitika/",
                "status": "confirmed",
                "order": 7,
                "paths": {
                  "ru": "/uslugi/marketing/analitika/skvoznaya-analitika/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              }
            ]
          },
          {
            "number": "1.3.3",
            "id": "prezentatsii",
            "title": "Презентации",
            "route": "/uslugi/marketing/prezentatsii/",
            "status": "confirmed",
            "order": 3,
            "paths": {
              "ru": "/uslugi/marketing/prezentatsii/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            },
            "children": [
              {
                "number": "1.3.3.R1",
                "id": "kommercheskie-predlozheniya",
                "title": "Коммерческие предложения",
                "route": "/uslugi/marketing/prezentatsii/kommercheskie-predlozheniya/",
                "status": "recommended",
                "order": 1,
                "paths": {
                  "ru": "/uslugi/marketing/prezentatsii/kommercheskie-predlozheniya/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.3.R2",
                "id": "obuchayushchie-materialy",
                "title": "Обучающие материалы и книга продаж",
                "route": "/uslugi/marketing/prezentatsii/obuchayushchie-materialy/",
                "status": "recommended",
                "order": 2,
                "paths": {
                  "ru": "/uslugi/marketing/prezentatsii/obuchayushchie-materialy/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              }
            ]
          },
          {
            "number": "1.3.4",
            "id": "vnutrennyaya-optimizatsiya",
            "title": "Внутренняя оптимизация",
            "route": "/uslugi/marketing/vnutrennyaya-optimizatsiya/",
            "status": "confirmed",
            "order": 4,
            "paths": {
              "ru": "/uslugi/marketing/vnutrennyaya-optimizatsiya/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.3.5",
            "id": "vneshnee-prodvizhenie",
            "title": "Внешнее продвижение",
            "route": "/uslugi/marketing/vneshnee-prodvizhenie/",
            "status": "confirmed",
            "order": 5,
            "paths": {
              "ru": "/uslugi/marketing/vneshnee-prodvizhenie/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            },
            "children": [
              {
                "number": "1.3.5.R1",
                "id": "reputatsiya-serm",
                "title": "Репутация и SERM",
                "route": "/uslugi/marketing/vneshnee-prodvizhenie/reputatsiya-serm/",
                "status": "recommended",
                "order": 1,
                "paths": {
                  "ru": "/uslugi/marketing/vneshnee-prodvizhenie/reputatsiya-serm/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.5.R2",
                "id": "vystavki-event",
                "title": "Выставки и event-маркетинг",
                "route": "/uslugi/marketing/vneshnee-prodvizhenie/vystavki-event-marketing/",
                "status": "recommended",
                "order": 2,
                "paths": {
                  "ru": "/uslugi/marketing/vneshnee-prodvizhenie/vystavki-event-marketing/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              }
            ]
          },
          {
            "number": "1.3.6",
            "id": "reklama",
            "title": "Реклама",
            "route": "/uslugi/marketing/reklama/",
            "status": "confirmed",
            "order": 6,
            "paths": {
              "ru": "/uslugi/marketing/reklama/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.3.7",
            "id": "pod-klyuch",
            "title": "Под ключ",
            "route": "/uslugi/marketing/pod-klyuch/",
            "status": "confirmed",
            "order": 7,
            "paths": {
              "ru": "/uslugi/marketing/pod-klyuch/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            },
            "children": [
              {
                "number": "1.3.7.R1",
                "id": "postroenie-otdela",
                "title": "Построение отдела маркетинга с нуля",
                "route": "/uslugi/marketing/pod-klyuch/postroenie-otdela-marketinga/",
                "status": "recommended",
                "order": 1,
                "paths": {
                  "ru": "/uslugi/marketing/pod-klyuch/postroenie-otdela-marketinga/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.7.R2",
                "id": "rukovoditel-na-proekt",
                "title": "Руководитель маркетинга на проект",
                "route": "/uslugi/marketing/pod-klyuch/rukovoditel-marketinga-na-proekt/",
                "status": "recommended",
                "order": 2,
                "paths": {
                  "ru": "/uslugi/marketing/pod-klyuch/rukovoditel-marketinga-na-proekt/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.7.R3",
                "id": "upravlenie-komandoi",
                "title": "Управление командой и подрядчиками",
                "route": "/uslugi/marketing/pod-klyuch/upravlenie-komandoi-i-podryadchikami/",
                "status": "recommended",
                "order": 3,
                "paths": {
                  "ru": "/uslugi/marketing/pod-klyuch/upravlenie-komandoi-i-podryadchikami/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.7.R4",
                "id": "zapusk-brenda",
                "title": "Запуск бренда или направления",
                "route": "/uslugi/marketing/pod-klyuch/zapusk-brenda-ili-napravleniya/",
                "status": "recommended",
                "order": 4,
                "paths": {
                  "ru": "/uslugi/marketing/pod-klyuch/zapusk-brenda-ili-napravleniya/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.7.R5",
                "id": "marketing-prodazhi",
                "title": "Связка маркетинга и отдела продаж",
                "route": "/uslugi/marketing/pod-klyuch/svyazka-marketinga-i-prodazh/",
                "status": "recommended",
                "order": 5,
                "paths": {
                  "ru": "/uslugi/marketing/pod-klyuch/svyazka-marketinga-i-prodazh/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              },
              {
                "number": "1.3.7.R6",
                "id": "kpi-otchetnost",
                "title": "KPI и система отчётности",
                "route": "/uslugi/marketing/pod-klyuch/kpi-i-otchetnost/",
                "status": "recommended",
                "order": 6,
                "paths": {
                  "ru": "/uslugi/marketing/pod-klyuch/kpi-i-otchetnost/",
                  "en": null
                },
                "localeStatus": {
                  "ru": "planned",
                  "en": "planned"
                }
              }
            ]
          }
        ]
      },
      {
        "number": "1.4",
        "id": "ai",
        "title": "AI",
        "route": "/uslugi/ai/",
        "status": "confirmed",
        "order": 4,
        "paths": {
          "ru": "/uslugi/ai/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        },
        "children": [
          {
            "number": "1.4.1",
            "id": "avtomatizatsiya",
            "title": "Автоматизация",
            "route": "/uslugi/ai/avtomatizatsiya/",
            "status": "confirmed",
            "order": 1,
            "paths": {
              "ru": "/uslugi/ai/avtomatizatsiya/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.4.2",
            "id": "nastroika-agenta",
            "title": "Настройка агента",
            "route": "/uslugi/ai/nastroika-agenta/",
            "status": "confirmed",
            "order": 2,
            "paths": {
              "ru": "/uslugi/ai/nastroika-agenta/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.4.3",
            "id": "podbor-steka",
            "title": "Подбор стека",
            "route": "/uslugi/ai/podbor-steka/",
            "status": "confirmed",
            "order": 3,
            "paths": {
              "ru": "/uslugi/ai/podbor-steka/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.4.4",
            "id": "ai-sekretar",
            "title": "Мультифункциональный секретарь",
            "route": "/uslugi/ai/multifunktsionalnyi-sekretar/",
            "status": "confirmed",
            "order": 4,
            "paths": {
              "ru": "/uslugi/ai/multifunktsionalnyi-sekretar/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.4.R1",
            "id": "audit-avtomatizatsii",
            "title": "Аудит процессов для автоматизации",
            "route": "/uslugi/ai/audit-protsessov-dlya-avtomatizatsii/",
            "status": "recommended",
            "order": 5,
            "paths": {
              "ru": "/uslugi/ai/audit-protsessov-dlya-avtomatizatsii/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          }
        ]
      },
      {
        "number": "1.5",
        "id": "fotosyomka",
        "title": "Фотосъёмка",
        "route": "/uslugi/fotosyomka/",
        "status": "confirmed",
        "order": 5,
        "paths": {
          "ru": "/uslugi/fotosyomka/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        },
        "children": [
          {
            "number": "1.5.1",
            "id": "food-styling",
            "title": "Food styling",
            "route": "/uslugi/fotosyomka/food-styling/",
            "status": "confirmed",
            "order": 1,
            "paths": {
              "ru": "/uslugi/fotosyomka/food-styling/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.5.2",
            "id": "predmetnaya-syomka",
            "title": "Предметная съёмка",
            "route": "/uslugi/fotosyomka/predmetnaya-syomka/",
            "status": "confirmed",
            "order": 2,
            "paths": {
              "ru": "/uslugi/fotosyomka/predmetnaya-syomka/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          }
        ]
      },
      {
        "number": "1.6",
        "id": "obuchenie",
        "title": "Обучение",
        "route": "/uslugi/obuchenie/",
        "status": "confirmed",
        "order": 6,
        "paths": {
          "ru": "/uslugi/obuchenie/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        },
        "children": [
          {
            "number": "1.6.R1",
            "id": "obuchenie-prodazh",
            "title": "Обучение отдела продаж",
            "route": "/uslugi/obuchenie/obuchenie-otdela-prodazh/",
            "status": "recommended",
            "order": 1,
            "paths": {
              "ru": "/uslugi/obuchenie/obuchenie-otdela-prodazh/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          },
          {
            "number": "1.6.R2",
            "id": "obuchenie-marketinga",
            "title": "Обучение маркетинговой команды",
            "route": "/uslugi/obuchenie/obuchenie-marketingovoi-komandy/",
            "status": "recommended",
            "order": 2,
            "paths": {
              "ru": "/uslugi/obuchenie/obuchenie-marketingovoi-komandy/",
              "en": null
            },
            "localeStatus": {
              "ru": "planned",
              "en": "planned"
            }
          }
        ]
      }
    ]
  },
  {
    "number": "2",
    "id": "poleznye-servisy",
    "title": "Полезные сервисы",
    "route": "/poleznye-servisy/",
    "status": "confirmed",
    "order": 2,
    "paths": {
      "ru": "/poleznye-servisy/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "3",
    "id": "blog",
    "title": "Блог",
    "route": "/blog/",
    "status": "confirmed",
    "order": 3,
    "paths": {
      "ru": "/blog/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    },
    "children": [
      {
        "number": "3.1",
        "id": "stati",
        "title": "Статьи",
        "route": "/blog/stati/",
        "status": "confirmed",
        "order": 1,
        "paths": {
          "ru": "/blog/stati/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        }
      },
      {
        "number": "3.2",
        "id": "novosti",
        "title": "Новости",
        "route": "/blog/novosti/",
        "status": "confirmed",
        "order": 2,
        "paths": {
          "ru": "/blog/novosti/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        }
      },
      {
        "number": "3.3",
        "id": "obzory",
        "title": "Обзоры",
        "route": "/blog/obzory/",
        "status": "confirmed",
        "order": 3,
        "paths": {
          "ru": "/blog/obzory/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        }
      }
    ]
  },
  {
    "number": "4",
    "id": "baza-promptov",
    "title": "База промптов",
    "route": "/baza-promptov/",
    "status": "confirmed",
    "order": 4,
    "paths": {
      "ru": "/baza-promptov/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "5",
    "id": "kursy",
    "title": "Курсы и самостоятельное обучение",
    "route": "/kursy/",
    "status": "confirmed",
    "order": 5,
    "paths": {
      "ru": "/kursy/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "6",
    "id": "navyki-agentov",
    "title": "Скилы и навыки для агентов",
    "route": "/navyki-agentov/",
    "status": "confirmed",
    "order": 6,
    "paths": {
      "ru": "/navyki-agentov/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "7",
    "id": "prilozheniya",
    "title": "Приложения Android/iOS",
    "route": "/prilozheniya/",
    "status": "planned",
    "order": 7,
    "paths": {
      "ru": "/prilozheniya/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "8",
    "id": "keisy",
    "title": "Кейсы",
    "route": "/keisy/",
    "status": "confirmed",
    "order": 8,
    "paths": {
      "ru": "/keisy/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "9",
    "id": "o-nas",
    "title": "О нас",
    "route": "/o-nas/",
    "status": "confirmed",
    "order": 9,
    "paths": {
      "ru": "/o-nas/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    },
    "children": [
      {
        "number": "9.1",
        "id": "danila-podshivalov",
        "title": "Данила Подшивалов",
        "route": "/o-nas/danila-podshivalov/",
        "status": "confirmed",
        "order": 1,
        "paths": {
          "ru": "/o-nas/danila-podshivalov/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        }
      },
      {
        "number": "9.T",
        "id": "team-member-template",
        "title": "Участник команды — шаблон",
        "route": "/o-nas/[slug]/",
        "status": "planned",
        "order": 2,
        "paths": {
          "ru": "/o-nas/[slug]/",
          "en": null
        },
        "localeStatus": {
          "ru": "planned",
          "en": "planned"
        }
      }
    ]
  },
  {
    "number": "10",
    "id": "kontakty",
    "title": "Контакты",
    "route": "/kontakty/",
    "status": "confirmed",
    "order": 10,
    "paths": {
      "ru": "/kontakty/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "U1",
    "id": "poisk",
    "title": "Поиск",
    "route": "/poisk/",
    "status": "utility",
    "order": 11,
    "paths": {
      "ru": "/poisk/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "U2",
    "id": "privacy",
    "title": "Политика конфиденциальности",
    "route": "/politika-konfidencialnosti/",
    "status": "utility",
    "order": 12,
    "paths": {
      "ru": "/politika-konfidencialnosti/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "U3",
    "id": "terms",
    "title": "Пользовательское соглашение",
    "route": "/polzovatelskoe-soglashenie/",
    "status": "utility",
    "order": 13,
    "paths": {
      "ru": "/polzovatelskoe-soglashenie/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "U4",
    "id": "payment-refund",
    "title": "Условия оплаты и возврата",
    "route": "/usloviya-oplaty-i-vozvrata/",
    "status": "utility",
    "order": 14,
    "paths": {
      "ru": "/usloviya-oplaty-i-vozvrata/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "U5",
    "id": "affiliate-disclosure",
    "title": "Раскрытие партнёрских ссылок",
    "route": "/raskrytie-partnerskih-ssylok/",
    "status": "utility",
    "order": 15,
    "paths": {
      "ru": "/raskrytie-partnerskih-ssylok/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "U6",
    "id": "thanks",
    "title": "Спасибо",
    "route": "/spasibo/",
    "status": "utility",
    "order": 16,
    "paths": {
      "ru": "/spasibo/",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  },
  {
    "number": "U7",
    "id": "not-found",
    "title": "404",
    "route": "/404.html",
    "status": "utility",
    "order": 17,
    "paths": {
      "ru": "/404.html",
      "en": null
    },
    "localeStatus": {
      "ru": "planned",
      "en": "planned"
    }
  }
];

// The home page is not part of the registry tree; it is declared here once so
// SEO helpers can resolve it by the same stable route-ID mechanism.
export const homeRoute = {
  number: "0",
  id: "home",
  title: "Главная",
  route: "/",
  status: "confirmed",
  order: 0,
  paths: {
    ru: "/",
    en: null,
  },
  localeStatus: {
    ru: "published",
    en: "planned",
  },
  children: [],
};

export function flattenTree(nodes = siteTree) {
  const flat = [];
  const walk = (list) => {
    for (const node of list) {
      flat.push(node);
      if (node.children) walk(node.children);
    }
  };
  walk(nodes);
  return flat;
}

export function findNodeById(id) {
  if (id === homeRoute.id) return homeRoute;
  return flattenTree().find((node) => node.id === id) ?? null;
}

// Finds a node by its canonical route or by any non-empty localized path.
// Returns null when no node matches.
export function findNodeByRoute(route) {
  if (
    route === homeRoute.route ||
    Object.values(homeRoute.paths ?? {}).includes(route)
  ) {
    return homeRoute;
  }
  return (
    flattenTree().find(
      (node) =>
        node.route === route ||
        Object.values(node.paths ?? {}).some((path) => path && path === route),
    ) ?? null
  );
}

export default siteTree;
