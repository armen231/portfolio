let select_options__arrow = 1; // текущая страница в слайдаре
let count_options__number_page = 2; // количество страниц в слайдаре
let language_site = {
    d1: {
        name: [".customer__part1 .title__p1"],
        ru: `Главная > Заказчику`,
        en: `Main > Customer`,
    },
    d2: {
        name: [".customer__part1 .customer__title-p1"],
        ru: `Заказчику`,
        en: `Customer`,
    },
    d3: {
        name: [".customer__part1 .customer__title-p2"],
        ru: `Мы ценим каждого клиента и сделаем всю работу сами.<br>Воплощаем в жизнь проекты,создавая дома для<br>комфортной жизни.`,
        en: `We value every customer and will do all the work ourselves.<br>We implement projects,creating homes for<br>a comfortable life.`,
    },
    d4: {
        name: [".customer__part1 .customer__learn-more .customer__p1"],
        ru: `Узнать больше<br>об индивидуальном строительстве`,
        en: `Learn more<br>about individual construction`,
    },
    d5: {
        name: [".work__title .work__title-p1"],
        ru: `Порядок оформления договора`,
        en: `The order of execution of the contract`,
    },
    d6: {
        name: [".work__title .work__title-p2 .work__text"],
        ru: `При оформлении договора цена зафиксирована`,
        en: `When making a contract, the price is fixed`,
    },

    d8: {
        name: [".work .container .work__list .work__body:nth-child(1) .work__text2"],
        ru: `Подробный расчет стоимости`,
        en: `Detailed cost calculation`,
    },
    d9: {
        name: [".work .container .work__list .work__body:nth-child(1) .work__text3"],
        ru: `Действителен в течение 7 дней`,
        en: `Valid for 7 days`,
    },
    d10: {
        name: [".work .container .work__list .work__body:nth-child(2) .work__text2"],
        ru: `Согласовываем проект`,
        en: `We coordinate the project`,
    },
    d11: {
        name: [".work .container .work__list .work__body:nth-child(2) .work__text3"],
        ru: `Помогаем с выбором проекта. <br>Согласовываем планировку и <br>комплектацию`,
        en: `We help with the selection of the project. <br>We coordinate the layout and <br>configuration`,
    },
    d12: {
        name: [".work .container .work__list .work__body:nth-child(3) .work__text2"],
        ru: `Заключаем договор`,
        en: `We conclude a contract`,
    },
    d13: {
        name: [".work .container .work__list .work__body:nth-child(3) .work__text3"],
        ru: `В офисе или дистанционно. <br>Авансовая оплата 30%`,
        en: `In the office or remotely. <br>Advance payment 30%`,
    },
    d14: {
        name: [".work .container .work__list .work__body:nth-child(4) .work__text2"],
        ru: `Доставляем материалы`,
        en: `We deliver materials`,
    },
    d15: {
        name: [".work .container .work__list .work__body:nth-child(4) .work__text3"],
        ru: `Вторая оплата до 60%`,
        en: `Second payment up to 60%`,
    },
    d16: {
        name: [".work .container .work__list .work__body:nth-child(5) .work__text2"],
        ru: `Возводим строение`,
        en: `Erecting a structure`,
    },
    d17: {
        name: [".work .container .work__list .work__body:nth-child(5) .work__text3"],
        ru: `Качественно и профессионально <br>возводим постройку`,
        en: `Qualitatively and professionally <br>we build a building`,
    },
    d18: {
        name: [".work .container .work__list .work__body:nth-child(6) .work__text2"],
        ru: `Вы принимаете готовую постройку`,
        en: `You accept the finished building`,
    },
    d19: {
        name: [".work .container .work__list .work__body:nth-child(6) .work__text3"],
        ru: `Подписание акта приема-передачи и <br>окончательная оплата`,
        en: `Signing of the acceptance certificate and <br>final payment`,
    },
    d20: {
        name: [".document-registration__p1"],
        ru: `Дистанционное оформление договора`,
        en: `Remote execution of the contract`,
    },
    d21: {
        name: [".document-registration__p2"],
        ru: `Мы рады предложить своим клиентам услугу по дистанционному оформлению договоров на строительство домов и бань, для покупателей у которых нет возможности приехать к нам в офис.`,
        en: `We are pleased to offer our customers the service of remote execution of contracts for the construction of houses and baths, for customers who do not have the opportunity to come to our office.`,
    },
    d22: {
        name: [".document-registration__conditions-documents-list .document-registration__conditions:nth-child(1) .document-registration__text2 .document-registration__text21"],
        ru: `Обсуждение строения и стоимость строительства`,
        en: `Discussion of the structure and the cost of construction`,
    },
    d23: {
        name: [".document-registration__conditions-documents-list .document-registration__conditions:nth-child(1) .document-registration__text2 .document-registration__text22"],
        ru: `- Позвоните или оставьте заявку на нашем сайте с параметрами интересующего строения.<br> - После согласования планировки и комплектации, мы подготовим расчет стоимости и отправим на электронную почту.`,
        en: `- Call or leave a request on our website with parameters of the structure of interest.<br> - After approval of the layout and we will prepare the cost calculation and send it to your email.`,
    },
    d24: {
        name: [".document-registration__conditions-documents-list .document-registration__conditions:nth-child(2) .document-registration__text2 .document-registration__text21"],
        ru: `Заключение договора на строительство объекта`,
        en: `Conclusion of a contract for the construction of an object`,
    },
    d25: {
        name: [".document-registration__conditions-documents-list .document-registration__conditions:nth-child(2) .document-registration__text2 .document-registration__text22"],
        ru: `- После согласования стоимости и условий, подготавливается договор(с печатью и подписью) и отправляется на электронную почту<br>- Вам необходимо подписать договор и отправить нам по электронной почте, а затем внести необходимую оплату, указанную в договоре.`,
        en: `- After agreeing on the cost and conditions, a contract is prepared(with a seal and signature) and sent to the electronic email<br>- You need to sign the contract and send it to us by email, and then make the necessary payment, specified in the contract.`,
    },
    d26: {
        name: [".document-registration__conditions-documents-list .document-registration__conditions:nth-child(3) .document-registration__text2 .document-registration__text21"],
        ru: `Строительство обьекта и сдача по завершению работ`,
        en: `Construction of the facility and delivery upon completion of work`,
    },
    d27: {
        name: [".document-registration__conditions-documents-list .document-registration__conditions:nth-child(3) .document-registration__text2 .document-registration__text22"],
        ru: `- В назначенную дату, завозится строй.материалы на объект- начинается строительство.Дата окончания работ прописана в договоре.<br> - После завершения строительства подписывается Акт приемки- передачи и Вы становитесь полноправным собственником построенного объекта.`,
        en: `- - On the appointed date, building materials are delivered to the facility - construction begins.The completion date is spelled out in the contract.<br> - After the construction is completed, the Acceptance and Transfer Certificate is signed and you become the rightful owner of the constructed object.`,
    },
    d28: {
        name: [".options__contant-left .options__contant .options__p"],
        ru: `Строим <span class="options__span">бани, беседки, бытовки и дома в кредит!</span>`,
        en: `We build <span class="options__span">baths, gazebos, cabins and houses on credit!</span>`,
    },
    d29: {
        name: [".options__contant-right .options__contant .options__p"],
        ru: `Мы работаем с <br> <span class="options__span">материнским капиталом!</span>`,
        en: `We work with <br> <span class="options__span">maternity capital!</span>`,
    },
    d30: {
        name: [".payment-procedure__p1"],
        ru: `Порядок оплаты`,
        en: `Payment procedure`,
    },
    d31: {
        name: [".payment-procedure__p2"],
        ru: `Мы рады предложить своим клиентам услугу по дистанционному оформлению оплаты на строительство домов и бань, для покупателей у которых нет возможности приехать к нам в офис.`,
        en: `We are pleased to offer our customers the service of remote registration of payment for the construction of houses and baths, for customers who do not have the opportunity to come to our office.`,
    },
    d32: {
        name: [".payment-procedure__conditions-documents-list .payment-procedure__conditions:nth-child(1) .payment-procedure__text2 .payment-procedure__text21"],
        ru: `Заключаем договор`,
        en: `We conclude a contract`,
    },
    d33: {
        name: [".payment-procedure__conditions-documents-list .payment-procedure__conditions:nth-child(1) .payment-procedure__text2 .payment-procedure__text22"],
        ru: `В офисе или дистанционно. Авансовая оплата 30%`,
        en: `In the office or remotely. Advance payment 30%`,
    },
    d34: {
        name: [".payment-procedure__conditions-documents-list .payment-procedure__conditions:nth-child(2) .payment-procedure__text2 .payment-procedure__text21"],
        ru: `Доставляем материалы`,
        en: `We deliver materials`,
    },
    d35: {
        name: [".payment-procedure__conditions-documents-list .payment-procedure__conditions:nth-child(2) .payment-procedure__text2 .payment-procedure__text22"],
        ru: `Вторая оплата до 60%`,
        en: `Second payment up to 60%`,
    },
    d36: {
        name: [".payment-procedure__conditions-documents-list .payment-procedure__conditions:nth-child(3) .payment-procedure__text2 .payment-procedure__text21"],
        ru: `Возводим строение`,
        en: `Erecting a structure`,
    },
    d37: {
        name: [".payment-procedure__conditions-documents-list .payment-procedure__conditions:nth-child(3) .payment-procedure__text2 .payment-procedure__text22"],
        ru: `Качественно и профессионально возводим постройку`,
        en: `We build the building efficiently and professionally`,
    },
    d38: {
        name: [".payment-procedure__conditions-documents-list .payment-procedure__conditions:nth-child(4) .payment-procedure__text2 .payment-procedure__text21"],
        ru: `Вы принимаете готовую постройку`,
        en: `You accept the finished building`,
    },
    d39: {
        name: [".payment-procedure__conditions-documents-list .payment-procedure__conditions:nth-child(4) .payment-procedure__text2 .payment-procedure__text22"],
        ru: `Подписание акта приема-передачи и окончательная оплата`,
        en: `Signing of the acceptance certificate and final payment`,
    },
    d40: {
        name: [".advantages__external .advantages__subscribe .advantages__inner .advantages__p1"],
        ru: `Хотите рассчитать <span class="advantages__span">стоимость проекта? Это просто!</span>`,
        en: `Want to calculate <span class="advantages__span">project cost? It's easy!</span>`,
    },
    d41: {
        name: [".advantages__external .advantages__subscribe .advantages__inner .advantages__p2"],
        ru: `Оставьте заявку и наши консультанты рассчитают стоимость Вашего проекта бесплатно и быстро!`,
        en: `Leave a request and our consultants will calculate the cost of your project for free and quickly!`,
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
// обработчик перехода на страницу индивидуальное строительство


document.querySelector(".customer__part1 .customer__learn-more .customer__arrow1").addEventListener("click", click_customer_lern_more);
document.querySelector(".container .customer__learn-more .customer__arrow2").addEventListener("click", click_customer_lern_more);
function click_customer_lern_more () {
    window.location.href = "https://armen231.github.io/portfolio/projects/project_3/Public/individual_construction.html";
}