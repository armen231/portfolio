let language_site = {
    d1: {
        name: [".devilery .container .devilery__part1 .devilery__p1"],
        ru: "Главная > Доставка и сборка",
        en: "Home > Delivery and Assembly",
    },
    d2: {
        name: [".devilery .container .devilery__part1 .devilery__p2"],
        ru: "Доставка и сборка",
        en: "Delivery and Assembly",
    },
    d3: {
        name: [".devilery .container .devilery__part1 .devilery__p3"],
        ru: "Доставка осуществляется только при наличии удовлетворительных, для грузового автомобиля г/ п 7т, подъездных путей к месту разгрузки.",
        en: "Delivery is carried out only if there are satisfactory access roads to the place of unloading for a truck g/p 7t.",
    },
    d4: {
        name: [".devilery .container .devilery__part1 .delivery__consultation .delivery__p1"],
        ru: `Бесплатная консультация<br>у нашего менеджера`,
        en: `Free consultation<br>with our manager`,
    },
    d5: {
        name: [".cost-devilery .container .cost-devilery__p1"],
        ru: "Стоимость доставки рассчитывается от расстояния от производства",
        en: "The shipping cost is calculated from the distance from the production",
    },
    d6: {
        name: [".cost-devilery .container .cost-devilery__p2"],
        ru: "РАСЧЕТ ДОСТАВКИ ЗА 1 МОДУЛЬ:",
        en: "CALCULATION OF DELIVERY FOR 1 MODULE:",
    },
    d7: {
        name: [".cost-devilery .container .cost-devilery__list-text .cost-devilery__part:nth-child(1) .cost-devilery__text"],
        ru: "До 50 км от производства 120 руб/км",
        en: "Up to 50 km from production 120 rubles/km",
    },
    d8: {
        name: [".cost-devilery .container .cost-devilery__list-text .cost-devilery__part:nth-child(2) .cost-devilery__text"],
        ru: "До 100 км от производства 100 ₽/км",
        en: "Up to 100 km from production 100 ₽/km",
    },
    d9: {
        name: [".cost-devilery .container .cost-devilery__list-text .cost-devilery__part:nth-child(3) .cost-devilery__text"],
        ru: "От 100 км от производства 90 ₽/км",
        en: "From 100 km from production 90 ₽/km",
    },
    d10: {
        name: [".cost-devilery .container .cost-devilery__list-text .cost-devilery__part:nth-child(4) .cost-devilery__text"],
        ru: "Погрузка-выгрузка 2000 ₽ (вездеход +1500 ₽)",
        en: "Loading and unloading 2000 ₽ (all-terrain vehicle +1500))",
    },
    d11: {
        name: [".cost-devilery .container .cost-devilery__list-text .cost-devilery__part:nth-child(5) .cost-devilery__text"],
        ru: "Доставка вездеходом возможна при длинне не превышающей 6м",
        en: "Delivery by all-terrain vehicle is possible with a length not exceeding 6m",
    },
    d12: {
        name: [".cost-devilery .container .cost-devilery__p3"],
        ru: "ПРИМЕР: 70 км от производства = 70 км х 110₽ + 2000₽ = 9 700₽",
        en: "EXAMPLE: 70 km from production = 70 km x 110₽ + 2000₽ = 9 700₽",
    },
    d13: {
        name: [".cost-devilery .container .cost-devilery__choice .cost-devilery__part1 .cost-devilery__p1"],
        ru: "ОБЫЧНЫЙ МАНИПУЛЯТОР",
        en: "THE USUAL MANIPULATOR",
    },
    d14: {
        name: [".cost-devilery .container .cost-devilery__choice .cost-devilery__part1 .cost-devilery__p2"],
        ru: "асфальт | плиты | щебеночное покрытие",
        en: "asphalt | slabs | crushed stone pavement",
    },
    d15: {
        name: [".cost-devilery .container .cost-devilery__choice .cost-devilery__part3 .cost-devilery__p1"],
        ru: "МАНИПУЛЯТОР-ВЕЗДЕХОД",
        en: "ALL-TERRAIN VEHICLE MANIPULATOR",
    },
    d16: {
        name: [".cost-devilery .container .cost-devilery__choice .cost-devilery__part3 .cost-devilery__p2"],
        ru: "бездорожье | грязь | снег",
        en: "off-road | mud | snow",
    },
    d17: {
        name: [".assembling-devilery .container .assembling-devilery__p1"],
        ru: `Необходима сборка на участке?<span class="assembling-devilery__span1"> Свяжитесь с нашим менеджером.</span>`,
        en: `Do you need an assembly on the site?<span class="assembling-delivery__span1"> Contact our manager.</span>`,
    },
    d18: {
        name: [".assembling-devilery .container .assembling-devilery__p2"],
        ru: "Оставьте заявку и наши менеджеры оперативно с Вами свяжутся и ответят на все интересующие Вас вопросы!",
        en: "Leave a request and our managers will contact you promptly and answer all your questions!",
    },
    d19: {
        name: [".assembling-devilery .container .assembling-devilery__send"],
        ru: "Отправить",
        en: "Send",
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
        document.querySelector(".assembling-devilery .container .assembling-devilery__send").classList.add("assembling-devilery__send--touch1");
    }
    else {
        document.querySelector(".assembling-devilery .container .assembling-devilery__send").classList.add("assembling-devilery__send--touch0");
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

        if (shaed_file.language != "ru") {
            document.querySelector(".assembling-devilery .container .assembling-devilery__input .assembling-devilery__input-name").placeholder = "Your name*";
            document.querySelector(".assembling-devilery .container .assembling-devilery__input .assembling-devilery__input-tel").placeholder = "Your phone*";
            document.querySelector(".assembling-devilery .container .assembling-devilery__input .assembling-devilery__input-email").placeholder = "Your email";
        }
        if (shaed_file.language == "ru") {
            document.querySelector(".assembling-devilery .container .assembling-devilery__input .assembling-devilery__input-name").placeholder = "Ваше имя*";
            document.querySelector(".assembling-devilery .container .assembling-devilery__input .assembling-devilery__input-tel").placeholder = "Ваш телефон*";
            document.querySelector(".assembling-devilery .container .assembling-devilery__input .assembling-devilery__input-email").placeholder = "Ваш email";
        }

    }
}
