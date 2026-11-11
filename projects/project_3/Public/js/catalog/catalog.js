let language_site = {
    d1: {
        name: [".title .container .title__p1"],
        ru: "Главная > Каталог",
        en: "Main > Catalog",
    },
    d2: {
        name: [".catalog__title"],
        ru: "Каталог построек",
        en: "Catalog of buildings",
    },
    d3: {
        name: [".catalog__project-inner .catalog__project:nth-child(1) .catalog__project-p"],
        ru: "Дома",
        en: "At home",
    },
    d4: {
        name: [".catalog__project-inner .catalog__project:nth-child(2) .catalog__project-p"],
        ru: "Бани",
        en: "Baths",
    },
    d5: {
        name: [".catalog__project-inner .catalog__project:nth-child(3) .catalog__project-p"],
        ru: "Беседки",
        en: "Gazebos",
    },
    d6: {
        name: [".catalog__project-inner .catalog__project:nth-child(4) .catalog__project-p"],
        ru: "Гаражи",
        en: "Garages",
    },
    d7: {
        name: [".advantages__external .advantages__subscribe .advantages__inner .advantages__p1"],
        ru: `Хотите рассчитать <span class="advantages__span">стоимость проекта? Это просто!</span>`,
        en: `Want to calculate <span class="advantages__span">project cost? It's easy!</span>`,
    },
    d8: {
        name: [".advantages__external .advantages__subscribe .advantages__inner .advantages__p2"],
        ru: "Оставьте заявку и наши консультанты рассчитают стоимость Вашего проекта бесплатно и быстро!",
        en: "Leave a request and our consultants will calculate the cost of your project for free and quickly!",
    },
} // слова для смены языка на главной странице
import * as shaed_file from "../shared_file/shaed_file.js";

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
    }
    else {
    }


    //////////////////////////////////////////////////////
    

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
    }
}


//////////////////////////////////////////////////////


document.querySelector(".catalog__project-inner").addEventListener("click", click_catalog__project_inner);
function click_catalog__project_inner(event) {
    if (event.srcElement.offsetParent.className.indexOf("catalog__project") != 1)
    {
        sessionStorage.setItem("select_project", event.srcElement.offsetParent.classList[1]);
        window.location.href = "https://armen231.github.io/portfolio/projects/project_3/Public/subdirectory.html";
    }
}