let language_site = {
    d1: {
        name: [".contacts .container .contacts__part1 .contacts__p1"],
        ru: "Главная > Контакты",
        en: "Home > Contacts",
    },
    d2: {
        name: [".contacts .container .contacts__part1 .contacts__p2"],
        ru: "Контакты",
        en: "Contacts",
    },
    d3: {
        name: [".contacts .container .contacts__part1 .contacts__p3"],
        ru: "Свяжитесь с нами и мы ответим на все вопросы по строительству, а также будем рады видеть Вас в нашем офисе.",
        en: "Contact us and we will answer all questions about the construction, and we will also be glad to see you in our office.",
    },
    d4: {
        name: [".contacts .container .contacts__part1 .contacts__contact div .contacts__contact-p1"],
        ru: "Менеджер Елена",
        en: "Manager Elena",
    },
    d5: {
        name: [".contacts__part1 .contacts__contact .contacts__contact-part2 .contacts__contact-p1-1"],
        ru: "Менеджер Иван",
        en: "Manager Ivan",
    },
    d6: {
        name: [".contacts__part1 .contacts__contact .contacts__contact-part2 .contacts__contact-p1"],
        ru: `Начальник производства<br>Иван`,
        en: `Head of production<br>Ivan`,
    },
    d7: {
        name: [".contacts__part2 .contacts__address .contacts__p1"],
        ru: "Адрес:",
        en: "Address:",
    },
    d8: {
        name: [".contacts__part2 .contacts__address .contacts__p2"],
        ru: `г. Москва, 100 км МКАД, ТЦ “ТЦ”<br>Ежедневно с 10:00 до 19:00`,
        en: `Moscow, 100 km MKAD, shopping center “TC"<br>Daily from 10:00 to 19:00`,
    },
    d9: {
        name: [".contacts__part2 .contacts__email .contacts__p1"],
        ru: "Электронная почта:",
        en: "Email:",
    },
    d10: {
        name: [".contacts__part2 .contacts__social-network .contacts__order-bell"],
        ru: "МЫ В СОЦИАЛЬНЫХ СЕТЯХ:",
        en: "WE ARE IN SOCIAL NETWORKS:",
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