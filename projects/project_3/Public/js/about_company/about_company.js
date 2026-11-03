let select_options__arrow = 1; // текущая страница в слайдаре
let count_options__number_page = 2; // количество страниц в слайдаре
let select_advantages = 1; // текущая страница в слайдаре
let count_advantages = 2; // количество страниц в слайдаре
let language_site = {
    d1: {
        name: [".about-company__part1 .about-company__p1"],
        ru: "Главная > О нас",
        en: "Home > About Us",
    },
    d2: {
        name: [".about-company__part1 .about-company__p2"],
        ru: "О компании",
        en: "About the company",
    },
    d3: {
        name: [".about-company__part1 .about-company__p3"],
        ru: "Если вы дорожите своими финансами, временем и душевным равновесием, если вам нужна качественная, красивая постройка из экологически чистых материалов, то вам к нам!",
        en: "If you value your finances, time and peace of mind, if you need a high-quality, beautiful building made of environmentally friendly materials, then you are welcome to us!",
    },
    d4: {
        name: [".about-company__part1 .about-company__view-company .about-company__view"],
        ru: "СМОТРЕТЬ ПРОЕКТЫ",
        en: "VIEW PROJECTS",
    },
    d5: {
        name: [".about-company .container .about-company__part2 .about-company__work-office"],
        ru: "Работаем в сфере строительства более 10 лет!",
        en: "We have been working in the construction industry for more than 10 years!",
    },
    d6: {
        name: [".about-company__part2 .about-company__list-text li:nth-child(1)"],
        ru: "Современные дачные КАРКАСНЫЕ ДОМА",
        en: "Modern country FRAME HOUSES",
    },
    d7: {
        name: [".about-company__part2 .about-company__list-text li:nth-child(2)"],
        ru: "ОТКРЫТЫЕ и ОСТЕКЛЁННЫЕ БЕСЕДКИ из мини-бруса 45мм",
        en: "OPEN and GLAZED GAZEBOS made of 45mm mini-timber",
    },
    d8: {
        name: [".about-company__part2 .about-company__list-text li:nth-child(3)"],
        ru: "Индивидуальные БАНИ под ключ",
        en: "Individual turnkey baths",
    },
    d9: {
        name: [".about-company__part2 .about-company__list-text li:nth-child(4)"],
        ru: "БЫТОВКИ и хозяйственные постройки",
        en: "CABINS and outbuildings",
    },
    d10: {
        name: [".production-manufacturing__p1"],
        ru: "ПРОИЗВОДСТВЕННОЕ ИЗГОТОВЛЕНИЕ",
        en: "PRODUCTION MANUFACTURING",
    },
    d11: {
        name: [".production-manufacturing__p2"],
        ru: "Производственное изготовление позволяет значительно повысить качество и снизить стоимость итогового продукта. Самостоятельно закупаем материалы у наших поставщиков и строим на собственном производстве, не перекупая готовые изделия.",
        en: "Manufacturing allows you to significantly improve the quality and reduce the cost of the final product. We independently purchase materials from our suppliers and build on our own production, without buying finished products.",
    },
    d12: {
        name: [".production-manufacturing__quality-material .production-manufacturing__part1"],
        ru: "ТОЛЬКО КАЧЕСТВЕННЫЕ МАТЕРИАЛЫ",
        en: "ONLY HIGH-QUALITY MATERIALS",
    },
    d13: {
        name: [".production-manufacturing__quality-material .production-manufacturing__part3 li:nth-child(1)"],
        ru: "Фундамент",
        en: "Foundation",
    },
    d14: {
        name: [".production-manufacturing__quality-material .production-manufacturing__part3 li:nth-child(2)"],
        ru: "Усиленный каркас",
        en: "Reinforced frame",
    },
    d15: {
        name: [".production-manufacturing__quality-material .production-manufacturing__part3 li:nth-child(3)"],
        ru: "Наружная и внутренняя отделка",
        en: "Exterior and interior decoration",
    },
    d16: {
        name: [".production-manufacturing__quality-material .production-manufacturing__part3 li:nth-child(4)"],
        ru: "Двойной пол",
        en: "Double floor",
    },
    d17: {
        name: [".production-manufacturing__quality-material .production-manufacturing__part3 li:nth-child(5)"],
        ru: "Долговечная кровля",
        en: "Durable roof",
    },
    d18: {
        name: [".production-manufacturing__quality-material .production-manufacturing__part3 li:nth-child(6)"],
        ru: "Окна и двери не нужно докупатьотдельно",
        en: "Durable roof",
    },
    d19: {
        name: [".options__contant-left .options__contant .options__p"],
        ru: `Строим <span class="options__span">бани, беседки, бытовки и дома в кредит!</span>`,
        en: `We build <span class="options__span">baths, gazebos, cabins and houses on credit!</span>`,
    },
    d20: {
        name: [".options__contant-right .options__contant .options__p"],
        ru: `Мы работаем с <br> <span class="options__span">материнским капиталом!</span>`,
        en: `We work with <br> <span class="options__span">maternity capital!</span>`,
    },
    d21: {
        name: [".main-work__p1"],
        ru: "Главное для нас, работать так, чтобы наши заказчики обращались к нам еще и рекомендовали своим знакомым. На все наши строения распространяется гарантия.",
        en: "The main thing for us is to work so that our customers also contact us and recommend them to their friends. All our buildings are covered by the warranty.",
    },
    d22: {
        name: [".main-work__options .main-work__part2 div:nth-child(1) .main-work__p1"],
        ru: "ВЫСТАВОЧНЫЕ ОБРАЗЦЫ",
        en: "EXHIBITION SAMPLES",
    },
    d23: {
        name: [".main-work__options .main-work__part2 div:nth-child(1) .main-work__p2"],
        ru: "Увидеть, ощутить себя внутри и обсудить необходимые размеры с нашими специалистами возможно по адресу: Московская область г.Ступино ул.Промышленная",
        en: "It is possible to see, feel yourself inside and discuss the necessary dimensions with our specialists at the address: Moscow region, Stupino str.Industrial",
    },
    d24: {
        name: [".main-work__options .main-work__part2 div:nth-child(2) .main-work__p1"],
        ru: "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ",
        en: "FREE CONSULTATION",
    },
    d25: {
        name: [".main-work__options .main-work__part2 div:nth-child(2) .main-work__p2"],
        ru: "подробный расчёт стоимости «без сюрпризов». при необходимости выезжаем на участок.",
        en: "detailed cost calculation <without surprises>. if necessary, we go to the site.",
    },
    d26: {
        name: [".main-work__options .main-work__part2 div:nth-child(3) .main-work__p1"],
        ru: "СОСТАВЛЕНИЕ ПЛАНА ГОТОВОГО ИНТЕРЬЕРА",
        en: "DRAWING UP A PLAN OF THE FINISHED INTERIOR",
    },
    d27: {
        name: [".main-work__options .main-work__part2 div:nth-child(3) .main-work__p2"],
        ru: "Наши специалисты ответят на все Ваши вопросы, подскажут по сезону, размеру, с удовольствием подберут всё необходимое для Вашего удобства, комфорта и индивидуальности!!!",
        en: "Our specialists will answer all your questions, tell you about the season, size, and will be happy to pick up everything you need for your convenience, comfort and individuality!!!",
    },
    d28: {
        name: [".advantages__title"],
        ru: "НАШИ ПРЕИМУЩЕСТВА",
        en: "OUR ADVANTAGES",
    },
    d29: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(1) .advantages__p1"],
        ru: "Работаем строго по договору",
        en: "We work strictly according to the contract",
    },
    d30: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(1) .advantages__p2"],
        ru: "Стоимость строительсва фиксированная.И все наши обязательства прописаны в договоре.",
        en: "The cost of construction is fixed.And all our obligations are spelled out in the contract.",
    },
    d31: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(2) .advantages__p1"],
        ru: "Честная цена и понятные условия",
        en: "Fair price and clear conditions",
    },
    d32: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(2) .advantages__p2"],
        ru: "Поэтапная оплата. Нет скрытых платежей и мелких шрифтов.",
        en: "Step-by-step payment. There are no hidden fees and small fonts.",
    },
    d33: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(3) .advantages__p1"],
        ru: "Фотоотчет процесса строительства",
        en: "Photo report of the construction process",
    },
    d34: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(3) .advantages__p2"],
        ru: "Бесплатный фото или видео отчет (по договорённости)",
        en: "Free photo or video report (by agreement)",
    },
    d35: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(4) .advantages__p1"],
        ru: "Более 7 лет опыта",
        en: "More than 7 years of experience",
    },
    d36: {
        name: [".advantages__advantage-category .advantages__category-list1 .advantages__category:nth-child(4) .advantages__p2"],
        ru: "Современное и качественное строительство, опытными бригадами.",
        en: "Modern and high-quality construction, by experienced teams.",
    },
    d37: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(1) .advantages__p1"],
        ru: "Выставка и собственное производство",
        en: "Exhibition and own production",
    },
    d38: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(1) .advantages__p2"],
        ru: "Лучшее соотношение цены и качества. К нам возвращаются наши клиенты и рекомендуют своим знакомым.",
        en: "The best value for money. Our clients come back to us and recommend them to their friends.",
    },
    d39: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(2) .advantages__p1"],
        ru: "Экологически чистый материал",
        en: "Environmentally friendly material",
    },
    d40: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(2) .advantages__p2"],
        ru: "Сертифицированные, экологичные материалы от проверенных поставщиков.",
        en: "Certified, eco-friendly materials from trusted suppliers.",
    },
    d41: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(3) .advantages__p1"],
        ru: "Гарантийное обслуживание любой постройки",
        en: "Warranty service of any building",
    },
    d42: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(3) .advantages__p2"],
        ru: "Даем гарантию не на словах.",
        en: "We give a guarantee not in words.",
    },
    d43: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(4) .advantages__p1"],
        ru: "Индивидуальные проекты",
        en: "Individual projects",
    },
    d44: {
        name: [".advantages__advantage-category .advantages__category-list2 .advantages__category:nth-child(4) .advantages__p2"],
        ru: "Возможны изменения проектов из каталога и строительство по индивидуальным планам.",
        en: "It is possible to change projects from the catalog and construction according to individual plans.",
    },
    d45: {
        name: [".advantages .advantages__external .advantages__subscribe .advantages__inner .advantages__p1"],
        ru: `Хотите узнавать <span class="advantages__span">о строящихся объектах, акциях и спецпредложениях?</span>`,
        en: `Want to find out <span class="advantages__span">about objects under construction, promotions and special offers?</span>`,
    },
    d46: {
        name: [".advantages .advantages__external .advantages__subscribe .advantages__inner .advantages__p2"],
        ru: "Подпишитесь на нашу группу ВКонтакте и узнавайте свежие новости и полезную информацию раньше всех!",
        en: "Subscribe to our VKontakte group and find out the latest news and useful information before anyone else!",
    },
    d47: {
        name: [".advantages .advantages__external .advantages__subscribe .advantages__subscribe-p"],
        ru: "ПОДПИШИСЬ НА ГРУППУ ВКОНТАКТЕ",
        en: "SUBSCRIBE TO THE VKONTAKTE GROUP",
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