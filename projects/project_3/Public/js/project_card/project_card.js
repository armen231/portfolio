let select_project = ""; // выбор продукта
let language_site = {
    d1: {
        name: [".body .title .container .home"],
        ru: "Главная > Каталог > Дома",
        en: "Home > Catalog > Houses",
    },
    d2: {
        name: [".body .title .container .bathhouse"],
        ru: "Главная > Каталог > Бани",
        en: "Home > Catalog > Bathhouse",
    },
    d3: {
        name: [".body .title .container .pavilion"],
        ru: "Главная > Каталог > Беседки",
        en: "Home > Catalog > Pavilion",
    },
    d4: {
        name: [".body .title .container .garage"],
        ru: "Главная > Каталог > Гаражи",
        en: "Home > Catalog > Garage",
    },
    d5: {
        name: [".project_information__size .project_information__text .project_information__information1"],
        ru: "Размер",
        en: "Size",
    },
    d6: {
        name: [".project_information__square .project_information__text .project_information__information1"],
        ru: "Площадь застройки",
        en: "Building area",
    },
    d7: {
        name: [".payment__part1 .payment_title"],
        ru: "Способ оплаты",
        en: "Payment method",
    },
    d8: {
        name: [".title-secondary__part1 .payment__text"],
        ru: "Поэтапная оплата",
        en: "Step-by-step payment",
    },
    d9: {
        name: [".title-secondary__part2 .payment__text"],
        ru: "Только по договору",
        en: "Only by contract",
    },
    d10: {
        name: [".payment__methods-payment .methods:nth-child(1) .payment__methods-text"],
        ru: "Наличные",
        en: "Cash",
    },
    d11: {
        name: [".payment__methods-payment .methods:nth-child(2) .payment__methods-text"],
        ru: "На расчетный счет",
        en: "To the settlement account",
    },
    d12: {
        name: [".payment__methods-payment .methods:nth-child(3) .payment__methods-text"],
        ru: "Кредит",
        en: "Credit",
    },
    d13: {
        name: [".payment__methods-payment .methods:nth-child(4) .payment__methods-text"],
        ru: "Материнский капитал",
        en: "Maternity capital",
    },
    d14: {
        name: [".work .container .work__title"],
        ru: "Как мы работаем",
        en: "how we work",
    },
    d15: {
        name: [".work .container .work__list .work__body:nth-child(1) .work__text2"],
        ru: "Подробный расчет стоимости",
        en: "Detailed cost calculation",
    },
    d16: {
        name: [".work .container .work__list .work__body:nth-child(1) .work__text3"],
        ru: "Действителен в течение 7 дней",
        en: "Valid for 7 days",
    },
    d17: {
        name: [".work .container .work__list .work__body:nth-child(2) .work__text2"],
        ru: "Согласовываем проект",
        en: "We coordinate the project",
    },
    d18: {
        name: [".work .container .work__list .work__body:nth-child(2) .work__text3"],
        ru: "Помогаем с выбором проекта. <br>Согласовываем планировку и <br>комплектацию",
        en: "We help with the selection of the project. <br>We coordinate the layout and <br>configuration",
    },
    d19: {
        name: [".work .container .work__list .work__body:nth-child(3) .work__text2"],
        ru: "Заключаем договор",
        en: "We conclude a contract",
    },
    d20: {
        name: [".work .container .work__list .work__body:nth-child(3) .work__text3"],
        ru: "В офисе или дистанционно. <br>Авансовая оплата 30%",
        en: "In the office or remotely. <br>Advance payment 30%",
    },
    d21: {
        name: [".work .container .work__list .work__body:nth-child(4) .work__text2"],
        ru: "Доставляем материалы",
        en: "We deliver materials",
    },
    d22: {
        name: [".work .container .work__list .work__body:nth-child(4) .work__text3"],
        ru: "Вторая оплата до 60%",
        en: "Second payment up to 60%",
    },
    d23: {
        name: [".work .container .work__list .work__body:nth-child(5) .work__text2"],
        ru: "Возводим строение",
        en: "Erecting a structure",
    },
    d24: {
        name: [".work .container .work__list .work__body:nth-child(5) .work__text3"],
        ru: "Качественно и профессионально <br>возводим постройку",
        en: "Qualitatively and professionally <br>we build a building",
    },
    d25: {
        name: [".work .container .work__list .work__body:nth-child(6) .work__text2"],
        ru: "Вы принимаете готовую постройку",
        en: "You accept the finished building",
    },
    d26: {
        name: [".work .container .work__list .work__body:nth-child(6) .work__text3"],
        ru: "Подписание акта приема-передачи и <br>окончательная оплата",
        en: "Signing of the acceptance certificate and <br>final payment",
    },
    d27: {
        name: [".advantages__external .advantages__subscribe .advantages__inner .advantages__p1"],
        ru: `Хотите рассчитать <span class="advantages__span">стоимость проекта? Это просто!</span>`,
        en: `Want to calculate <span class="advantages__span">project cost? It's easy!</span>`,
    },
    d28: {
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


    select_project = sessionStorage.getItem("select_project");
    select_project = shaed_file.home[select_project].type.en[0];

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

        document.querySelector(".project_information__text .info-size").textContent = shaed_file.home[sessionStorage.getItem("select_project")].dimensions[shaed_file.language][0];
        document.querySelector(".project_information__text .info-square").textContent = shaed_file.home[sessionStorage.getItem("select_project")].square[shaed_file.language][0];
    }
}


//////////////////////////////////////////////////////
// генерация кода


function code_generation() {
    if (select_project == "home") {
        document.querySelector(".body .title .container .title__p1").textContent = "Главная > Каталог > Дома";
    }
    else if (select_project == "bathhouse") {
        document.querySelector(".body .title .container .title__p1").textContent = "Главная > Каталог > Бани";
    }
    else if (select_project == "pavilion") {
        document.querySelector(".body .title .container .title__p1").textContent = "Главная > Каталог > Беседки";
    }
    else if (select_project == "garage") {
        document.querySelector(".body .title .container .title__p1").textContent = "Главная > Каталог > Гаражи";
    }
    document.querySelector(".body .title .container .title__p1").classList.add(select_project);


    //////////////////////////////////////////////////////
    


    document.querySelector(".project_information__text .info-size").textContent = shaed_file.home[sessionStorage.getItem("select_project")].dimensions[shaed_file.language][0];
    document.querySelector(".project_information__text .info-square").textContent = shaed_file.home[sessionStorage.getItem("select_project")].square[shaed_file.language][0];
    document.querySelector(".project-information__image .project_information__main-image").src = shaed_file.home[sessionStorage.getItem("select_project")].img[0];


    //////////////////////////////////////////////////////


    for (let item in shaed_file.home[sessionStorage.getItem("select_project")].img) {
        document.querySelector(".body .project-information .container .project-information__image .project-information__nav .swiper .swiper-wrapper").insertAdjacentHTML("beforeend",
            `<img class="swiper-slide ${item}" src="${shaed_file.home[sessionStorage.getItem("select_project")].img[item]}" alt="">`);
    }
}


//////////////////////////////////////////////////////


document.querySelector(".body .project-information .container .project-information__image .project-information__nav .swiper .swiper-wrapper").addEventListener("click", swiper1_click);
function swiper1_click(event) {
    if (event.srcElement.classList[0] == "swiper-slide") {
        document.querySelector(".container .project-information__image .project_information__main-image").src = shaed_file.home[sessionStorage.getItem("select_project")].img[event.srcElement.classList[1]];
    }
}