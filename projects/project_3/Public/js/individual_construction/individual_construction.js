let language_site = {
    d1: {
        name: [".container .individual-construction__part1 .individual-construction__p1"],
        ru: `Главная > Заказчику > Индивидуальное строительство`,
        en: `Main > Customer > Individual construction`,
    },
    d2: {
        name: [".body .individual-construction .container .individual-construction__part1 .individual-construction__p2 "],
        ru: `Индивидуальное строительство`,
        en: `Individual construction`,
    },
    d3: {
        name: [".individual-construction__part1 .individual-construction__p3"],
        ru: `Мы ценим каждого клиента и сделаем всю работу сами. Воплощаем в жизнь проекты, создавая дома для комфортной жизни.`,
        en: `We value every customer and will do all the work ourselves. We implement projects, creating homes for a comfortable life.`,
    },
    d4: {
        name: [".application__title-p1"],
        ru: `Как подать заявку<span class="application__title-span1"> на индивидуальное строительство ?</span>`,
        en: `How to apply<span class="application__title-span 1"> for an individual ?</span>`,
    },
    d5: {
        name: [".application__title-p2"],
        ru: `Хотите расчитать стоимость строительных работ, заполните форму для расчета. Вы вводите необходимые данные, отправляете их нашим специалистам. Они определяют стоимость строительства, присылают вам результат расчетов.`,
        en: `If you want to calculate the cost of construction work, fill out the calculation form. You enter the necessary data, send they are given to our specialists. They determine the cost of construction, send you the result of calculations.`,
    },
    d6: {
        name: [".application__condition .application__text1"],
        ru: `Что нужно указать для расчета стоимости?`,
        en: `What do I need to specify to calculate the cost?`,
    },
    d7: {
        name: [".application__condition .application__text2"],
        ru: `Для расчета цены строительных работ понадобится указать:`,
        en: `To calculate the price of construction work, you will need to specify:`,
    },
    d8: {
        name: [".application__condition .application__text3"],
        ru: `- Тип сооружаемого объекта (Каркасный дом/ баня /беседка из мини-бруса/ бытовка). <br>- Площадь сооружаемого объекта.<br>- Тип фундаментной основы (блочный/ свайно-винтовой, не нужен). <br>- Толщину стеновых поверхностей (от пятидесяти до двухсот миллиметров).<br>- Количество этажей (один, полтора, два, с мансардным этажом).<br>- Адрес места строительства (для расчета киллометража)<br>- Имя заказчика.<br>- Телефонный номер заказчика. <br>- Адрес электронной почты заказчика.`,
        en: `- Type of object being constructed (Frame house/ bathhouse /gazebo made of mini-beams / cabins). <br> - The area of the object under construction.<br>- Type of foundation (block/ pile-screw, not needed). <br>- The thickness of the wall surfaces (from fifty to two hundred millimeters).<br>- Number of floors (one, one and a half, two, with an attic floor).<br>- Address of the construction site (for calculating mileage)<br>- Name  the customer.<br> - The customer's phone number. <br> - The customer's email address.`,
    },
    d9 : {
        name: [".application__condition .application__text4"],
        ru: `Есть возможность прикрепления файла.Также заказчик может в произвольной форме написать собственные пожелания к проведению строительных работ. После ввода всех необходимы данных требуется нажать на кнопку «Отправить». Ответ поступит на телефонный номер либо же электронную почту заказчика.`,
        en: `It is possible to attach a file.Also, the customer can in any form write your own wishes for the construction work. After entering all the necessary data you need to click on the "Send" button. The answer will be sent to the customer's phone number or e-mail.`,
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
