let select_project = ""; // выбор продукта 
let cost_min_max = [0, 0]; // хранение минимального и максимального значение для слайдера стоимости в фильтре
let filter_data = {
    home: {
        cost_min: 3356616,
        cost_max: 9352698,
        floors: [1, 2],
        size: ["13 x 21", "13 x 14", "6 x 8", "7 x 10", "7 x 11", "8 x 10", "8 x 13", "9 x 13", "8 x 12", "15 x 15"],
    },
    bathhouse: {
        cost_min: 407760,
        cost_max: 5228928,
        floors: [1, 2],
        size: ["12 x 27", "5 x 5", "5 x 6", "3 x 5", "2 x 3", "7 x 7", "4 x 4"],
    },
    pavilion: {
        cost_min: 305760,
        cost_max: 830536,
        floors: [1],
        size: ["5 x 5"],
    },
    garage: {
        cost_min: 575400,
        cost_max: 5190000,
        floors: [1, 2],
        size: ["7 x 7", "7 x 9"],
    },
}
let select_cost = 0; // выбор стоимости
let select_floors = {}; // выбор этажей
let select_size = {}; // выбор размеров
let select_sort = 1; // выбор сортировки
let count_all_project = 0; // общее количество проектов в бд
let count_view_project = 0; // количество просмотренных проектов
let count_floors = 0; // количество сгенерированных тегов
let projects_index = []; // хранит в себе индексы домов при фильтрации
let sort_list_project_price = []; // отсортированный список цен 
let language_site = {
    d1: {
        name: [".body .title .container .home1"],
        ru: "Главная > Каталог > Дома",
        en: "Home > Catalog > Houses",
    },
    d2: {
        name: [".body .title .container .home2"],
        ru: "Дома",
        en: "Home",
    },
    d3: {
        name: [".body .title .container .bathhouse1"],
        ru: "Главная > Каталог > Бани",
        en: "Home > Catalog > Bathhouse",
    },
    d4: {
        name: [".body .title .container .bathhouse2"],
        ru: "Бани",
        en: "bathhouse",
    },
    d5: {
        name: [".body .title .container .pavilion1"],
        ru: "Главная > Каталог > Беседки",
        en: "Home > Catalog > Pavilion",
    },
    d6: {
        name: [".body .title .container .pavilion2"],
        ru: "Беседки",
        en: "Pavilion",
    },
    d7: {
        name: [".body .title .container .garage1"],
        ru: "Главная > Каталог > Гаражи",
        en: "Home > Catalog > Garage",
    },
    d8: {
        name: [".body .title .container .garage2"],
        ru: "Гаражи",
        en: "Garage",
    },
    d9: {
        name: [".filter .filter__title .filter__title1 .filter__p1"],
        ru: "Фильтр",
        en: "Filter",
    },
    d10: {
        name: [".filter .filter__cost .filter-cost__title .cost__p1"],
        ru: "Стоимость до",
        en: "Cost up to",
    },
    d11: {
        name: [".filter .filter__cost .cost__p2 .cost__span1 .cost__span2"],
        ru: "руб",
        en: "rub",
    },
    d12: {
        name: [".filter .filter__floors .filter-foors__title .floors__p1"],
        ru: "Этажность",
        en: "Number of floors",
    },
    d13: {
        name: [".filter-size__title .size__p1"],
        ru: "Размеры",
        en: "Sizes",
    },
    d14: {
        name: [".filter__input .show"],
        ru: "ПОКАЗАТЬ",
        en: "SHOW",
    },
    d15: {
        name: [".filter__input .reset"],
        ru: "СБРОСИТЬ",
        en: "RESET",
    },
    d16: {
        name: [".list-project .sort .sort__p1"],
        ru: "Сортировать:",
        en: "Sort:",
    },
    d17: {
        name: [".sort-list__list .d1"],
        ru: "Цена по возрастанию",
        en: "Price in ascending order",
    },
    d18: {
        name: [".sort-list__list .d2"],
        ru: "Цена по убыванию",
        en: "Price in descending order",
    },
    d19: {
        name: [".advantages__external .advantages__subscribe .advantages__inner .advantages__p1"],
        ru: `Хотите рассчитать <span class="advantages__span">стоимость проекта? Это просто!</span>`,
        en: `Want to calculate <span class="advantages__span">project cost? It's easy!</span>`,
    },
    d20: {
        name: [".advantages__external .advantages__subscribe .advantages__inner .advantages__p2"],
        ru: "Оставьте заявку и наши консультанты рассчитают стоимость Вашего проекта бесплатно и быстро!",
        en: "Leave a request and our consultants will calculate the cost of your project for free and quickly!",
    },
} // слова для смены языка на главной странице
import * as shaed_file from "../shared_file/shaed_file.js";
import * as plugin from "../../plagins/slider/nouislider.min.js";

//////////////////////////////////////////////////////


function load() {
    if (localStorage.getItem("language") == null) {
        localStorage.setItem("language", shaed_file.language);
    } else {
        if (shaed_file.language != localStorage.getItem("language")) {
            shaed_file.click_language();
        }
    }


    //////////////////////////////////////////////////////


    if (shaed_file.isTouch == 1) {
        document.querySelector(".body .content-inner .container .filter .filter__input .filter__p:nth-child(1)").classList.add("filter__p--touch1");
        document.querySelector(".body .content-inner .container .filter .filter__input .filter__p:nth-child(2)").classList.add("filter__p--touch1");
        document.querySelector(".body .content-inner .container .list-project .show .show__button").classList.add("show__button--touch1");    }
    else {
        document.querySelector(".body .content-inner .container .filter .filter__input .filter__p:nth-child(1)").classList.add("filter__p--touch0");
        document.querySelector(".body .content-inner .container .filter .filter__input .filter__p:nth-child(2)").classList.add("filter__p--touch0");
        document.querySelector(".body .content-inner .container .list-project .show .show__button").classList.add("show__button--touch0");    }


    //////////////////////////////////////////////////////


    select_project = sessionStorage.getItem("select_project");

    for (let item2 in shaed_file.home) {
        if (shaed_file.home[item2].type.en[0] == select_project) {
            count_all_project++;
        }
    }


    //////////////////////////////////////////////////////


    code_generation();
    load_language();
}
load();


//////////////////////////////////////////////////////
// обработка языка


document.querySelector("body .header .container-top .header .nav .function_list .language").addEventListener("click", click_language);
function click_language() {
    shaed_file.click_language();
    load_language("click_language");
}

function load_language(item = "") {
    if (item == "click_language" || (item != "click_language" && shaed_file.language != "ru")) {
        for (let i1 in language_site) {
            for (let i2 in language_site[i1].name) {
                if (document.querySelector(language_site[i1].name[i2]) != null) {
                    document.querySelector(language_site[i1].name[i2]).innerHTML = language_site[i1][shaed_file.language];
                }
                else { console.log("error" + i1 + " " + i2); }
            }
        }


        document.querySelector(".filter .filter__floors .floors-input").remove();
        document.querySelector(".filter .filter__floors .filter-foors__title").insertAdjacentHTML("afterend", `<div class="floors-input"></div>`);
        code_generation_floors();


        document.querySelector(".sort__sort-list .sort-list__p1").textContent =
            document.querySelector(`.sort-list__list .d${select_sort}`).textContent;


        document.querySelector(".list-project .projects").remove();
        document.querySelector(".list-project .sort").insertAdjacentHTML("afterend", `<div class="projects"></div>`);
        let count = 0;
        let count2 = count_view_project;
        count_view_project = 0;
        for (let item in shaed_file.home) {
            if (shaed_file.home[item].type.en == select_project) {
                count++;
                if (count <= count2) { code_generation_projects(item); }
            }
        }
    }
}


//////////////////////////////////////////////////////
// генерация кода


function code_generation() {
    if (select_project == "home") {
        document.querySelector(".body .title .container .title__p1").textContent = "Главная > Каталог > Дома";
        document.querySelector(".body .title .container .title__p2").textContent = "Дома";
        cost_min_max = [filter_data.home.cost_min, filter_data.home.cost_max];
    }
    else if (select_project == "bathhouse") {
        document.querySelector(".body .title .container .title__p1").textContent = "Главная > Каталог > Бани";
        document.querySelector(".body .title .container .title__p2").textContent = "Бани";
        cost_min_max = [filter_data.bathhouse.cost_min, filter_data.bathhouse.cost_max];
    }
    else if (select_project == "pavilion") {
        document.querySelector(".body .title .container .title__p1").textContent = "Главная > Каталог > Беседки";
        document.querySelector(".body .title .container .title__p2").textContent = "Беседки";
        cost_min_max = [filter_data.pavilion.cost_min, filter_data.pavilion.cost_max];
    }
    else if (select_project == "garage") {
        document.querySelector(".body .title .container .title__p1").textContent = "Главная > Каталог > Гаражи";
        document.querySelector(".body .title .container .title__p2").textContent = "Гаражи";
        cost_min_max = [filter_data.garage.cost_min, filter_data.garage.cost_max];
    }
    select_cost = cost_min_max[0];

    document.querySelector(".body .title .container .title__p1").classList.add(select_project + "1");
    document.querySelector(".body .title .container .title__p2").classList.add(select_project + "2");

    code_generation_floors();

    let number = 0;
    for (let item of filter_data[select_project].size) {
        number++;
        document.querySelector(".size-input").insertAdjacentHTML("beforeend", `<p class="size-button b${number}">${item}</p>`);
    }

    let count = 0;
    for (let item in shaed_file.home) {
        if (shaed_file.home[item].type.en == select_project) {
            count++;
            if (count <= 9) { code_generation_projects(item); }
        }
    }

    if (count_all_project <= 9) {
        document.querySelector(".list-project .show .show__button").style.display = "none";
    }
    document.querySelector(".list-project .show .show__number .number__p1").textContent = count_view_project;
    document.querySelector(".list-project .show .show__number .number__p2").textContent = "/ " + count_all_project;
}

function code_generation_projects(item) {
    count_view_project++;
    document.querySelector(".projects").insertAdjacentHTML("beforeend", `<div class="projects__card .pc ${item}">
                        <img class="card__img .pc ${item}" src="${shaed_file.home[item].img[0]}" alt="">
                        <div class="card__content .pc ${item}">
                            <p class="content_title .pc ${item}">${shaed_file.home[item].type[shaed_file.language]}</p>
                            <div class="description__size .pc ${item}">
                                <p class="size1 .pc ${item}">${shaed_file.home_word.dimensions[shaed_file.language]}</p>
                                <p class="size2 .pc ${item}">${shaed_file.home[item].dimensions[shaed_file.language]}</p>
                            </div>
                            <div class="description__square .pc ${item}">
                                <p class="square1 .pc ${item}">${shaed_file.home_word.square[shaed_file.language]}</p>
                                <p class="square2 .pc ${item}">${shaed_file.home[item].square[shaed_file.language]}</p>
                            </div>
                            <div class="description__floor .pc ${item}">
                                <p class="floor1 .pc ${item}">${shaed_file.home_word.floor[shaed_file.language]}</p>
                                <p class="floor2 .pc ${item}">${shaed_file.home[item].floor}</p>
                            </div>
                            <p class="price .pc ${item}">${shaed_file.home[item].price[shaed_file.language]}</p>
                        </div>
                    </div>`);
}

function code_generation_floors() {
    count_floors = 0;

    for (let item of filter_data[select_project].floors) {
        let word = "";
        if (item == 1) { if (shaed_file.language == "ru") { word = "этаж"; } else { word = "floor"; } }
        else if (item > 1 && item < 5) { if (shaed_file.language == "ru") { word = "этаж"; } else { word = "floors"; } }
        else { if (shaed_file.language == "ru") { word = "этаж"; } else { word = "floors"; } };
        document.querySelector(".floors-input").insertAdjacentHTML("beforeend", `
        <div class="floors-input__arrow fa${item}">
        <div class="arrow__select-arrow as${item}">
        <div class="arrow_btn ad${item}"></div>
        </div>
        <p class="arrow__p1 ">${item} ${word}</p>
        </div>`);
        count_floors++;
    }
}


//////////////////////////////////////////////////////
// обработка события click в filter



document.querySelector(".body .content-inner .container .filter").addEventListener("click", click__filter);
function click__filter(event) {
    if (event.srcElement.classList.length > 1) {
        if (event.srcElement.classList[1].indexOf("filter__arrow") != -1) {
            let parent = document.querySelector("." + event.srcElement.parentElement.classList[0]).parentNode.classList[0];
            document.querySelector("." + event.srcElement.parentElement.classList[0] + " ." + event.srcElement.classList[1]).classList.toggle("active");
            document.querySelector("." + parent).classList.toggle("active");
        }
    }
    if (event.srcElement.classList.length > 0) {
        if (event.srcElement.classList[0].indexOf("filter__p") != -1) {
            if (event.srcElement.classList[1].indexOf("show") != -1) {

                count_all_project = 0;
                count_view_project = 0;
                projects_index = [];
                let count = 0;
                let count2 = 0;
                sort_list_project_price = [];
                for (let item1 in shaed_file.home) {
                    let is_project = [];
                    if (shaed_file.home[item1].type.en[0] == select_project) {


                        if (shaed_file.home[item1].price_i <= select_cost) { is_project[0] = 1; } else { is_project[0] = 0; }


                        if (is_project[0] == 1) {
                            for (let item2 in select_floors) {
                                count2++;
                                if (shaed_file.home[item1].floor == select_floors[item2].number) {
                                    count++;
                                }
                            }

                            if (count >= 1) { is_project[1] = 1; } else { is_project[1] = 0; }
                            if (count2 == 0) { is_project[1] = 1; }
                        } else { is_project[1] = 0; }
                        count = 0;
                        count2 = 0;


                        if (is_project[1] == 1) {
                            for (let item3 in select_size) {
                                count2++;
                                if (shaed_file.home[item1].dimensions.en[0] == select_size[item3].size) {
                                    count++;
                                }
                            }

                            if (count >= 1) { is_project[2] = 1; } else { is_project[2] = 0; }
                            if (count2 == 0) { is_project[2] = 1; }
                        } else { is_project[2] = 0; }
                        count = 0;
                        count2 = 0;


                        if (is_project[2] == 1) {
                            count_all_project++;
                            projects_index.push(item1);
                            sort_list_project_price.push(shaed_file.home[item1].price_i);
                        }
                    }
                }

                if (select_sort == 1) {
                    sort_list_project_price.sort((a, b) => a - b);
                } else {
                    sort_list_project_price.sort((a, b) => a - b);
                    sort_list_project_price.reverse();
                }

                document.querySelector(".list-project .projects").remove();
                document.querySelector(".list-project .sort").insertAdjacentHTML("afterend", `<div class="projects"></div>`);
                count = 0;
                count_view_project = 0;


                for (let i in sort_list_project_price) {
                    for (let i1 in projects_index) {
                        if (select_sort == 1 || select_sort == 2) {
                            if (shaed_file.home[projects_index[i1]].price_i == sort_list_project_price[i]) {
                                count++;
                                if (count <= 9) { code_generation_projects(projects_index[i1]); }
                            }
                        }
                    }
                }


                if (count_all_project <= 9) {
                    document.querySelector(".list-project .show .show__button").style.display = "none";
                } else { document.querySelector(".list-project .show .show__button").style.display = "block"; }
                document.querySelector(".list-project .show .show__number .number__p1").textContent = count_view_project;
                document.querySelector(".list-project .show .show__number .number__p2").textContent = "/ " + count_all_project;
            }
            else {
                rangSliderCost.noUiSlider.set(cost_min_max[0]);
                select_cost = cost_min_max[0];
                select_floors = {};
                select_size = {};

                for (let i1 = 1; i1 <= filter_data[select_project].floors.length; i1++) {
                    document.querySelector(`.fa${i1} .as${i1} .ad${i1}`).classList.remove("active");
                }

                for (let i2 = 1; i2 <= filter_data[select_project].size.length; i2++) {
                    document.querySelector(`.size-input .b${i2}`).classList.remove("active");
                }
            }
        }
        else if (event.srcElement.classList[0].indexOf("size-button") != -1) {
            document.querySelector("." + event.srcElement.parentElement.classList[0] + " ." + event.srcElement.classList[1]).classList.toggle("active");
            let item1 = event.srcElement.classList[1][1];
            if (select_size["d" + item1] == undefined) {
                select_size["d" + item1] = { size: document.querySelector("." + event.srcElement.parentElement.classList[0] + " ." + event.srcElement.classList[1]).textContent };
            } else {
                delete select_size["d" + item1];
            }
        }
        else if (event.srcElement.classList[0].indexOf("arrow__select-arrow") != -1 || event.srcElement.classList[0].indexOf("arrow_btn") != -1) {
            let for_true = true;
            while (for_true == true) {
                let parent1 = document.querySelector("." + event.srcElement.classList[1]).parentNode.classList[1];
                if (parent1.indexOf("fa") != -1) {
                    document.querySelector("." + parent1 + " ." + event.srcElement.classList[1] + " ." + event.srcElement.children[0].classList[1]).classList.toggle("active");
                    for_true = false;
                }
                else {
                    parent1 = document.querySelector("." + parent1).parentNode.classList[1];
                    document.querySelector("." + parent1 + " ." + event.srcElement.parentElement.classList[1] + " ." + event.srcElement.classList[1]).classList.toggle("active");
                    for_true = false;
                }

                if (for_true == false) {
                    let item1 = "";
                    for (let i1 = 2; i1 < parent1.length; i1++) {
                        item1 += parent1[i1];
                    }

                    if (select_floors["d" + item1] == undefined) {
                        select_floors["d" + item1] = { number: item1, };
                    }
                    else {
                        delete select_floors["d" + item1];
                    }
                }
            }
        }
    }
}


//////////////////////////////////////////////////////
// обработка слайдера в filter


const rangSliderCost = document.getElementById('cost-input');

noUiSlider.create(rangSliderCost, {
    start: 0,
    connect: [true, false],
    step: 1,
    range: {
        'min': [cost_min_max[0]],
        'max': [cost_min_max[1]]
    }
});

rangSliderCost.noUiSlider.on("update", function (values) {
    document.querySelector(".filter .filter__cost .cost__p2").innerHTML
        = `<span class="cost__span1">${Number(values) + ` <span class="cost__span2"> ` + shaed_file.home_word.price_rub[shaed_file.language][0]} </span></span > `;
    select_cost = Number(values);
});


//////////////////////////////////////////////////////
// обработка выподающего списка
// обработка нажатия по кнопке "Показать больше"


document.querySelector(".list-project").addEventListener("click", click_list_project);
function click_list_project(event) {
    if (event.srcElement.classList[0].indexOf("sort__sort-list") != -1 || event.srcElement.parentElement.classList[0].indexOf("sort__sort-list") != -1) {
        document.querySelector(".sort__arrow").classList.toggle("active");
        document.querySelector(".sort-list__list").classList.toggle("active");
    }
    if (event.srcElement.classList[0] == "list" && event.srcElement.parentElement.classList[0].indexOf("sort-list__list") != -1) {
        if (event.srcElement.classList.length >= 2) {
            let item1 = "";
            for (let i1 = 1; i1 < 2; i1++) { item1 += event.srcElement.classList[1][i1]; }
            if (event.srcElement.classList[2] == "active") {
                document.querySelector(`.sort-list__list .${event.srcElement.classList[1]}`).classList.remove("active");
                document.querySelector(`.sort-list__list .d1`).classList.add("active");
                select_sort = 1;
            } else {
                document.querySelector(`.sort-list__list .${event.srcElement.classList[1]}`).classList.add("active");
                document.querySelector(`.sort-list__list .d${select_sort}`).classList.remove("active");
                select_sort = item1;
            }

            if (select_sort == 1) {
                document.querySelector(".sort__sort-list .sort-list__p1").textContent = "Цена по возрастанию";
            } else {
                document.querySelector(".sort__sort-list .sort-list__p1").textContent =
                    document.querySelector(`.sort-list__list .${event.srcElement.classList[1]}`).textContent;
            }
        }
    }
    if (event.srcElement.classList[0] == "show__button" && event.srcElement.parentElement.classList[0] == "show") {
        let count = 0;
        let count2 = 0;
        if (projects_index.length != 0) {
            for (let i in sort_list_project_price) {
                for (let i1 in projects_index) {
                    if (select_sort == 1 || select_sort == 2) {
                        if (shaed_file.home[projects_index[i1]].price_i == sort_list_project_price[i]) {
                            count++;
                            if (count > count_view_project) { if (count2 <= 9) { count2++; code_generation_projects(projects_index[i1]); } }
                        }
                    }
                }
            }
        }
        else {
            if (count_all_project != count_view_project) {
                for (let item in shaed_file.home) {
                    if (shaed_file.home[item].type.en == select_project) {
                        count++;
                        if (count > count_view_project) { if (count2 <= 9) { count2++; code_generation_projects(item); } }
                    }
                }
            }
        }

        if (count_all_project == count_view_project) { document.querySelector(".list-project .show .show__button").style.display = "none"; }
        document.querySelector(".list-project .show .show__number .number__p1").textContent = count_view_project;
        document.querySelector(".list-project .show .show__number .number__p2").textContent = "/ " + count_all_project;
    }
    else {
        if (event.srcElement.classList.length >= 2) {
            if (event.srcElement.classList[1] == ".pc") {
                sessionStorage.setItem("select_project", event.srcElement.classList[2]);
                window.location.href = "https://armen231.github.io/portfolio/projects/project_3/Public/project_card.html";
            }
        }
    }
}