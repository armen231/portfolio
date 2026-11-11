let select_offers__categoryes = "garage"; // выбор категории постройки
let count_offers__categoryes_slider = 0; // количество пройденных циклов в слайдаре
let count_offers__categoryes = 0; // количество пройденных циклов
let select_options__arrow = 1; // текущая страница в слайдаре
let count_options__number_page = 2; // количество страниц в слайдаре
let select_advantages = 1; // текущая страница в слайдаре
let count_advantages = 2; // количество страниц в слайдаре
let language_site = {
    d2: {
        name: [".construction .container .construction__list .construction__p1"],
        ru: "СТРОИТЕЛЬСТВО ДАЧНЫХ <br> И КОТТЕДЖЕЙ",
        en: "CONSTRUCTION OF COUNTRY HOUSES <br> AND COTTAGES",
    },
    d3: {
        name: [".construction .container .construction__list .construction__p2"],
        ru: "На участок поставляются готовые модули, <br>производится их монтаж в короткие сроки. <br> Мы гарантируем выполнение всех взятых на себя <br> обязательств и доступные цены.",
        en: "Ready-made modules are delivered to the site, <br>their installation is carried out in a short time. <br> We guarantee the fulfillment of all assumed <br> obligations and affordable prices.",
    },
    d4: {
        name: [".offers .container .offers__title"],
        ru: "ПРЕДЛОЖЕНИЯ ДЛЯ ВАС",
        en: "SUGGESTIONS FOR YOU",
    },
    d5: {
        name: [".offers .container .offers__categoryes .garage"],
        ru: "гараж",
        en: "garage",
    },
    d6: {
        name: [".offers .container .offers__categoryes .pavilion"],
        ru: "беседка",
        en: "pavilion",
    },
    d7: {
        name: [".offers .container .offers__categoryes .home"],
        ru: "дом",
        en: "home",
    },
    d8: {
        name: [".offers .container .offers__categoryes .bathhouse"],
        ru: "беседка",
        en: "bathhouse",
    },
    d9: {
        name: [".offers .container .offers__show-all-project"],
        ru: "СМОТРЕТЬ ВСЕ ПРОЕКТЫ",
        en: "VIEW ALL PROJECTS",
    },
    d10: {
        name: [".options__contant-left .options__contant .options__p"],
        ru: `Строим <span class="options__span">бани, беседки, бытовки и дома в кредит!</span>`,
        en: `We build <span class="options__span">baths, gazebos, cabins and houses on credit!</span>`,
    },
    d11: {
        name: [".options__contant-right .options__contant .options__p"],
        ru: `Мы работаем с <br> <span class="options__span">материнским капиталом!</span>`,
        en: `We work with <br> <span class="options__span">maternity capital!</span>`,
    },
    d12: {
        name: [".advantages__title"],
        ru: "НАШИ ПРЕИМУЩЕСТВА",
        en: "OUR ADVANTAGES",
    },
    d13: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(1) .advantages__p1"],
        ru: "Работаем строго по договору",
        en: "We work strictly according to the contract",
    },
    d14: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(1) .advantages__p2"],
        ru: "Стоимость строительсва фиксированная.И все наши обязательства прописаны в договоре.",
        en: "The cost of construction is fixed.And all our obligations are spelled out in the contract.",
    },
    d15: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(2) .advantages__p1"],
        ru: "Честная цена и понятные условия",
        en: "Fair price and clear conditions",
    },
    d16: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(2) .advantages__p2"],
        ru: "Поэтапная оплата. Нет скрытых платежей и мелких шрифтов.",
        en: "Step-by-step payment. There are no hidden fees and small fonts.",
    },
    d17: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(3) .advantages__p1"],
        ru: "Фотоотчет процесса строительства",
        en: "Photo report of the construction process",
    },
    d18: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(3) .advantages__p2"],
        ru: "Бесплатный фото или видео отчет (по договорённости)",
        en: "Free photo or video report (by agreement)",
    },
    d19: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(4) .advantages__p1"],
        ru: "Более 7 лет опыта",
        en: "More than 7 years of experience",
    },
    d20: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(4) .advantages__p2"],
        ru: "Современное и качественное строительство, опытными бригадами.",
        en: "Modern and high-quality construction, by experienced teams.",
    },
    d21: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(1) .advantages__p1"],
        ru: "Выставка и собственное производство",
        en: "Exhibition and own production",
    },
    d22: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(1) .advantages__p2"],
        ru: "Лучшее соотношение цены и качества. К нам возвращаются наши клиенты и рекомендуют своим знакомым.",
        en: "The best value for money. Our clients come back to us and recommend them to their friends.",
    },
    d23: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(2) .advantages__p1"],
        ru: "Экологически чистый материал",
        en: "Environmentally friendly material",
    },
    d24: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(2) .advantages__p2"],
        ru: "Сертифицированные, экологичные материалы от проверенных поставщиков.",
        en: "Certified, eco-friendly materials from trusted suppliers.",
    },
    d25: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(3) .advantages__p1"],
        ru: "Гарантийное обслуживание любой постройки",
        en: "Warranty service of any building",
    },
    d26: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(3) .advantages__p2"],
        ru: "Даем гарантию не на словах.",
        en: "We give a guarantee not in words.",
    },
    d27: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(4) .advantages__p1"],
        ru: "Индивидуальные проекты",
        en: "Individual projects",
    },
    d28: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(4) .advantages__p2"],
        ru: "Возможны изменения проектов из каталога и строительство по индивидуальным планам.",
        en: "It is possible to change projects from the catalog and construction according to individual plans.",
    },
    d29: {
        name: [".advantages .advantages__external .advantages__subscribe .advantages__inner .advantages__p1"],
        ru: `Хотите узнавать <span class="advantages__span">о строящихся объектах, акциях и спецпредложениях?</span>`,
        en: `Want to find out <span class="advantages__span">about objects under construction, promotions and special offers?</span>`,
    },
    d30: {
        name: [".advantages .advantages__external .advantages__subscribe .advantages__inner .advantages__p2"],
        ru: "Подпишитесь на нашу группу ВКонтакте и узнавайте свежие новости и полезную информацию раньше всех!",
        en: "Subscribe to our VKontakte group and find out the latest news and useful information before anyone else!",
    },
    d31: {
        name: [".advantages .advantages__external .advantages__subscribe .advantages__subscribe-p"],
        ru: "ПОДПИШИСЬ НА ГРУППУ ВКОНТАКТЕ",
        en: "SUBSCRIBE TO THE VKONTAKTE GROUP",
    },
    d32: {
        name: [".layout__inner .layout__p1, .body-dark .layout .container .layout__inner .layout__p1"],
        ru: `Планируете построить <span class="layout__span">индивидуальное строение? Свяжитесь с нами.</span>`,
        en: `Are you planning to build <span class="layout__span"> an individual structure? Contact us.</span>`,
    },
    d33: {
        name: [".layout__inner .layout__p1"],
        ru: "Хотите постройку в современном минималистичном стиле, но ни один из типовых проектов Вам не подходит? Выход есть!",
        en: "Do you want a building in a modern minimalist style, but none of the typical projects suits you? There is a way out!",
    },
    d34: {
        name: [".layout__inner .layout__p3"],
        ru: "Свяжитесь с нами и мы реализуем задуманное.",
        en: "Contact us and we will implement our plans.",
    },
    d35: {
        name: [".contacts__title"],
        ru: "КОНТАКТЫ",
        en: "CONTACTS",
    },
    d36: {
        name: [".contacts__address1"],
        ru: "Адрес:",
        en: "Address:",
    },
    d37: {
        name: [".contacts__address3"],
        ru: "Пн-Сб 9:00-18:00, Вс - выходной",
        en: "Mon-Sat 9:00-18:00, Sun - day off",
    },
    d38: {
        name: [".contacts__information > .contacts__contact > .contacts__contact1"],
        ru: "Контакты:",
        en: "Contacts:",
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


    for (let i1 of Object.keys(shaed_file.home_category)) {
        count_offers__categoryes++;
        if (count_offers__categoryes == 1) {
            document.querySelector(".body .offers .container  .offers__categoryes").insertAdjacentHTML("beforeend", `<p class="offers__p active ` + shaed_file.home_category[i1].en + ` ">` + shaed_file.home_category[i1][shaed_file.language] + `</p>`);
        } else {
            document.querySelector(".body .offers .container  .offers__categoryes").insertAdjacentHTML("beforeend", `<p class="offers__p ` + shaed_file.home_category[i1].en + ` ">` + shaed_file.home_category[i1][shaed_file.language] + `</p>`);
        }
    }
    load_offers__list();


    //////////////////////////////////////////////////////



    if (shaed_file.isTouch == 1) {
        document.querySelector(".body .offers .container .offers__show-all-project").classList.add("offers__show-all-project--touch1");

    }
    else {
        document.querySelector(".body .offers .container .offers__show-all-project").classList.add("offers__show-all-project--touch0");
    }


    //////////////////////////////////////////////////////

    load_language();
}
load();


//////////////////////////////////////////////////////
// обработка нажатий по слайдеру 

document.querySelector(".body .offers .container .offers__categoryes").addEventListener("click", click_offers__categoryes);
function click_offers__categoryes(event) {
    if (event.srcElement.classList[0] == "offers__p") {
        if (select_offers__categoryes != "") { document.querySelector(".body .offers .container .offers__categoryes ." + select_offers__categoryes).classList.remove("active"); }
        document.querySelector(".body .offers .container .offers__categoryes ." + event.srcElement.classList[1] + "").classList.add("active");
        select_offers__categoryes = event.srcElement.classList[1];
        document.querySelector(".body .offers .container .offers__list").remove();
        document.querySelector(".body .offers .container .offers__categoryes").insertAdjacentHTML("afterend", "<div class=" + "offers__list" + "></div>");

        load_offers__list();
    }
}


function load_offers__list() {  
    for (let i1 in shaed_file.home) {
        if (shaed_file.home[i1].type.en == select_offers__categoryes) {
            count_offers__categoryes_slider++;
            document.querySelector(".body .offers .container .offers__list").insertAdjacentHTML("beforeend",
                "<div class='offers__card'> " +
                "<img class='offers__img' src =" + shaed_file.home[i1].img[0] + ">" +
                "<div class='offers__description'>" +
                "<p class='description__title'>" + shaed_file.home[i1].type[shaed_file.language] + "</p>" +
                "<div class='description__size'><p class='size1'>" + shaed_file.home_word.structure[shaed_file.language] + ": </p><p class='size2'>" + shaed_file.home[i1].structure[shaed_file.language] + "</p></div>" +
                "<div class='description__square'><p class='square'>" + shaed_file.home_word.square[shaed_file.language] + ": </p><p class='square2'>" + shaed_file.home[i1].square[shaed_file.language] + "</p></div>" +
                "<div class='description__floors'><p class='floors1'>" + shaed_file.home_word.floor[shaed_file.language] + ": </p><p class='floors2'>" + shaed_file.home[i1].floor + "</p></div>" +
                "<p class='description__price'>" + shaed_file.home[i1].price[shaed_file.language] + "</p>" +
                "</div>" +
                "</div>");
        }
    }
}


//////////////////////////////////////////////////////
// обработка нажатий по слайдеру опций

document.querySelector(".body .options .container").addEventListener("click", click_options__numbers_page);
function click_options__numbers_page(event) {
    if (event.srcElement.classList.length >= 2 && event.srcElement.classList[1].indexOf("options__arrow") != -1) {
        if (event.srcElement.classList[1].indexOf("options__arrow1") != -1) {
            if (select_options__arrow != 1) {
                select_options__arrow = 1;
                document.querySelector(".body .options .container .options__contant-left .options__contant .options__nav .options__arrow1").classList.remove("active");
                document.querySelector(".body .options .container .options__contant-left .options__contant .options__nav .options__arrow2").classList.add("active");
                document.querySelector(".body .options .container").style.left = "0%";
            }
        } else {
            if (select_options__arrow != count_options__number_page) {
                select_options__arrow = 2;
                document.querySelector(".body .options .container .options__contant-right .options__contant .options__nav .options__arrow1").classList.add("active");
                document.querySelector(".body .options .container .options__contant-right .options__contant .options__nav .options__arrow2").classList.remove("active");
                document.querySelector(".body .options .container").style.left = "-100%";
            }
        }
    }
}


//////////////////////////////////////////////////////
// обработка нажатий по категориям для слайдера

document.querySelector(".body .advantages .container .advantages__nav").addEventListener("click", click_advantages__nav);
function click_advantages__nav(event) {
    if (event.srcElement.classList.length == 2) {
        if (event.srcElement.classList[1].indexOf("advantages__arrow1") != -1 && select_advantages != 1) {
            select_advantages--;
            document.querySelector(".body .advantages .container .advantages__advantage-category").style.left = "0%";
        }
        if (event.srcElement.classList[1].indexOf("advantages__arrow2") != -1 && select_advantages != count_advantages) {
            select_advantages++;
            document.querySelector(".body .advantages .container .advantages__advantage-category").style.left = "-104%";
        }
    }
}


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

        document.querySelector(".body .offers .container .offers__list").remove();
        document.querySelector(".body .offers .container .offers__categoryes").insertAdjacentHTML("afterend", "<div class=" + "offers__list" + "></div>");
        load_offers__list();
    }
}