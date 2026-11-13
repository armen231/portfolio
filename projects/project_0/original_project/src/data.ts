const dataRepository = {
    repositoryName: "portfolio",
    gitAccountName: "armen231",
}

export const dataProject = [
    {
        id: '0',
        name: `Project0`,
        img: '../../assets/img/project0/img1.png',
        url: `https://${dataRepository.gitAccountName}.github.io/${dataRepository.repositoryName}/projects/project_0/index.html`,
        urlToGit: `https://github.com/${dataRepository.gitAccountName}/${dataRepository.repositoryName}/tree/main1/projects/project_0`,
        description: [
            {
                title: 'Краткое описание',
                text: 'Одностраничное веб-приложение, использующееся как стартовая страница для просмотра подробностей и открытия проектов',
            },
            {
                title: 'Функционал проекта',
                text: ['Просмотр проектов'],
            },
            {
                title: 'Используемые технологии',
                text: ['VS Code.', 'html.', 'css (scss, @media запросы).', 'TypeScript.', 'js (addEventListener, localStorage).', 'React 19.'],
            },
            {
                title: 'Инструкция по установке и запуску',
                text: ['Скачать папку командой "git clone" projects / project0 / original_project.', 'Запустить редактор кода где в рабочей области будет папка original_project.', 'Запустить терминал -> команду "npm i".', 'Запустить проект "npm run start".'],
            }
        ]
    },
    {
        id: '1',
        name: `Project1`,
        img: '../../assets/img/project1/img1.png',
        url: `https://${dataRepository.gitAccountName}.github.io/${dataRepository.repositoryName}/projects/project_1/index.html`,
        urlToGit: `https://github.com/${dataRepository.gitAccountName}/${dataRepository.repositoryName}/tree/main1/projects/project_1`,
        description: [
            {
                title: 'Краткое описание',
                text: 'Сайт «California» — это шаблон интернет‑магазина на Webflow, ориентированный на продажу электроники и сопутствующих товаров.',
            },
            {
                title: 'Функционал проекта',
                text: ['Масштабирование сайта под все устройства.'],
            },
            {
                title: 'Используемые технологии',
                text: ['VS Code.','html.','css (scss, @media запросы).','js (document.querySelector, addEventListener).'],
            },
            {
                title: 'Инструкция по установке и запуску',
                text: ['Скачать соответствующую папку.','Запустить файл index.html в браузере.'],
            }
        ]
    },
    {
        id: '2',
        name: `Project2`,
        img: '../../assets/img/project2/img1.png',
        url: `https://${dataRepository.gitAccountName}.github.io/${dataRepository.repositoryName}/projects/project_2/Public/index.html`,
        urlToGit: `https://github.com/${dataRepository.gitAccountName}/${dataRepository.repositoryName}/tree/main1/projects/project_2/Public`,
        description: [
            {
                title: 'Краткое описание',
                text: 'Многостраничное веб-приложение магазина женской одежды.',
            },
            {
                title: 'Функционал проекта',
                text: ['Масштабирование сайта под все устройства.','Функционал добавления товара в корзину.','Взаимодействие с корзиной товаров.'],
            },
            {
                title: 'Используемые технологии',
                text: ['VS Code.', 'html.', 'css (scss, mixin, @media запросы).', 'js (document.querySelector, addEventListener, insertAdjacentHTML, sessionStorage, document.cookie, JSON-подобные объекты для хранения информации, setTimeout).'],
            },
            {
                title: 'Инструкция по установке и запуску',
                text: ['Скачать соответствующую папку.', 'Запустить файл index.html в браузере.'],
            }
        ]
    },
    {
        id: '3',
        name: `Project3`,
        img: '../../assets/img/project3/img1.png',
        url: `https://${dataRepository.gitAccountName}.github.io/${dataRepository.repositoryName}/projects/project_3/Public/index.html`,
        urlToGit: `https://github.com/${dataRepository.gitAccountName}/${dataRepository.repositoryName}/tree/main1/projects/project_3/Public`,
        description: [
            {
                title: 'Краткое описание',
                text: 'Многострочное веб-приложение строительной компании.',
            },
            {
                title: 'Функционал проекта',
                text: ['Масштабирование сайта под все устройства.', 'Смена темы сайта(дневная/ ночная)', 'Смена языка(русский, английский).', 'Взаимодействие с фильтрацией по параметрам.Например, перейдя по "Главная" -> "Каталог" -> "Дом/Бани/Беседки/Гаражи".','Взаимодействие с фильтрацией по параметрам.Например, перейдя по "Главная" -> "Каталог" -> "Дом/Бани/Беседки/Гаражи".','Использование слайдера.Например, перейдя по "Главная" -> "Каталог" -> "Дом/Бани/Беседки/Гаражи" -> выбрать услугу.'],
            },
            {
                title: 'Используемые технологии',
                text: ['VS Code.', 'html.', 'css (scss, mixin, @media запросы).', 'js (document.querySelector, addEventListener, insertAdjacentHTML, JSON-подобные объекты для хранения информации, localStorage, sessionStorage, Swiper(библиотека слайдеров)).'],
            },
            {
                title: 'Инструкция по установке и запуску',
                text: ['Скачать соответствующую папку.', 'Запустить файл index.html в браузере.'],
            }
        ]
    },
    {
        id: '4',
        name: `Project4`,
        img: '../../assets/img/project4/img1.png',
        url: `https://${dataRepository.gitAccountName}.github.io/${dataRepository.repositoryName}/projects/project_4/index.html`,
        urlToGit: `https://github.com/${dataRepository.gitAccountName}/${dataRepository.repositoryName}/tree/main1/projects/project_4`,
        description: [
            {
                title: 'Краткое описание',
                text: 'Одностраничное веб-приложение, использующееся как ИАС (информационно-аналитическая система) и ЭС (экспертная система), применяемая для создания базы знаний и осуществления поиска по базе знаний предложений стран для путешествия на основе предпочтений клиента.',
            },
            {
                title: 'Функционал проекта',
                text: ['Поиск информации по параметрам.', 'Вывод результата по поиску.', 'Добавление и удаление элементов(городов) / параметров(например, тип отдыха, бюджет поездки и т.д.) / фактов(название и описание параметра).','Просмотр вложенных в виде иерархического отображения сущностей(интерфейс поддерживает трёхуровневую вложенность: «Элемент»(страны) → «Параметр»(тип отдыха, бюджет и др.) → «Факт» (конкретные значения с описанием)).'],
            },
            {
                title: 'Используемые технологии',
                text: ['VS Code.', 'html.', 'css (scss, @media запросы).', 'TypeScript.', 'gulp.', 'React 19.', 'useState.', 'useReducer'],
            },
            {
                title: 'Инструкция по установке и запуску',
                text: ['Скачать папку командой "git clone" projects / project4 / original_project.', 'Запустить редактор кода где в рабочей области будет папка original_project.', 'Запустить терминал -> команду "npm i".','Запустить проект "npm run start".'],
            }
        ]
    },
];
