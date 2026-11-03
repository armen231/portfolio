function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

let select_count_product = 1; // количество выбранных товаров
let select_product = "";


if (getCookie("select_product") != undefined) {
    select_product = getCookie("select_product");
    sessionStorage.setItem('select_product', select_product);
} else {
    select_product = sessionStorage.getItem("select_product");
}

let notes = ""; // временное хранилище
let content_numder_content = ""; // номер контента из бд
let numder_content = ""; // номер контента из бд
let content_text = ""; // текст контента из бд
let select_list_button_size_new = "";
let select_list_button_size_old = "";
let select_list_button_size_index = "";

let select_list_button_color_new = "";
let select_list_button_color_old = "";
let select_list_button_color_index = "";



function load() {
    if (select_product.indexOf("coat") != -1) {

        for (a1 = 4; a1 < select_product.length; a1++) {
            numder_content += select_product[a1];
        }

        for (a1 = 0; a1 < 4; a1++) {
            content_numder_content += select_product[a1];
        }
        
    }
    if (select_product.indexOf("sweatshirt") != -1) {
        for (a1 = 10; a1 < select_product.length; a1++) {
            numder_content += select_product[a1];
        }

        for (a1 = 0; a1 < 10; a1++) {
            content_numder_content += select_product[a1];
        }
    }
    if (select_product.indexOf("t_shirts") != -1) {
        for (a1 = 8; a1 < select_product.length; a1++) {
            numder_content += select_product[a1];
        }

        for (a1 = 0; a1 < 8; a1++) {
            content_numder_content += select_product[a1];
        }
    }
    load2();
}
load();

function load2() {
    content_text = data[content_numder_content]["d" + numder_content].name;
    document.querySelector(".body .body2 .section1 .container .text1").textContent = content_text;


    ////////////////////////////////////////////

    if (data[content_numder_content]["d" + numder_content].structure[0] != 0 || data[content_numder_content]["d" + numder_content].structure[0] != undefined) {
        for (e in data[content_numder_content]["d" + numder_content].structure) {
            document.querySelector(".body .body2 .section2 .container .data div .list_text1_2")
                .insertAdjacentHTML("beforeend", "<p class='text1_2'>" + data[content_numder_content]["d" + numder_content].structure[Number.parseInt(e)] + "</p>");
        }
    } else {
        console.log(123);
        document.querySelector(".body .body2 .section2 .container .data div .text1_1").remove();
        document.querySelector(".body .body2 .section2 .container .data div .list_text1_2").remove();
    }



    if (content_numder_content == "coat") { notes = " Пальто "; }
    if (content_numder_content == "sweatshirt") { notes = " Свитшот "; }
    if (content_numder_content == "t_shirts") { notes = " Футболка "; }

    document.querySelector(".body .body2 .section1 .container .text2 .span1").textContent = notes;
    document.querySelector(".body .body2 .section1 .container .text2 .span2").textContent = content_text;
    document.querySelector(".body .body2 .section2 .container")
        .insertAdjacentHTML("afterbegin", "<img src='" + data[content_numder_content]["d" + numder_content].path_photo + "' alt=''>");
    document.querySelector(".body .body2 .section2 .container .data div .text1")
        .textContent = data[content_numder_content]["d" + numder_content].cost + " ₽";

    ////////////////////////////////////////////

    for (a2 = 1; a2 <= data[content_numder_content]["d" + numder_content].size.length; a2++) {
        document.querySelector(".body .body2 .section2 .container .data div .list_button_size")
            .insertAdjacentHTML("beforeend", "<button class=b" + a2 + ">" + a2 + "</button>");
    }
    document.querySelector(".body .body2 .section2 .container .data div .list_button_size button:nth-child(1)").classList.add("_active");
    select_list_button_size_old = "b1";
    select_list_button_size_index = 0;

    ////////////////////////////////////////////


    for (a2 = 0; a2 < data[content_numder_content]["d" + numder_content].color.length; a2++) {
        document.querySelector(".body .body2 .section2 .container .data div .list_button_color")
            .insertAdjacentHTML("beforeend", "<button class='b" + a2 + " " + a2 + "'>" + data[content_numder_content]["d" + numder_content].color[a2] + "</button>");
    }
    document.querySelector(".body .body2 .section2 .container .data div .list_button_color button:nth-child(1)").classList.add("_active");
    select_list_button_color_old = "b0";
    select_list_button_color_index = 0;

    ////////////////////////////////////////////

    let number = 0;
    let number2 = 0;
    let count_product = 0;
    for (e in data[content_numder_content]) { count_product++; }

    let while_f = true;

    while (while_f == true) {
        number = getRandomInt(1, count_product);
        if (number != numder_content) { while_f = false; }
    }
    number = getRandomInt(1, count_product);

    document.querySelector(".body .body2 .section3 .container .collection")
        .insertAdjacentHTML("beforeend", "<div class='collection__img " + content_numder_content + number + "'><div class='div'><img class='fon' src='1-images/main/section2_image4.png' alt=''></div><img class='img' src=" + data[content_numder_content]['d' + number].path_photo + " alt=''><p class='p1'>" + data[content_numder_content]['d' + number].name + "</p><p class='p2'>" + data[content_numder_content]['d' + number].cost + " ₽</p></div>");

    while_f = true;

    while (while_f == true) {
        number2 = getRandomInt(1, count_product);
        if (number != number2 && number != numder_content) { while_f = false; }
    }

    document.querySelector(".body .body2 .section3 .container .collection")
        .insertAdjacentHTML("beforeend", "<div class='collection__img " + content_numder_content + number2 + "'><div class='div'><img class='fon' src='1-images/main/section2_image4.png' alt=''></div><img class='img' src=" + data[content_numder_content]['d' + number2].path_photo + " alt=''><p class='p1'>" + data[content_numder_content]['d' + number2].name + "</p><p class='p2'>" + data[content_numder_content]['d' + number2].cost + " ₽</p></div>");

}


document.querySelector(".body .body2 .section2 .container .data div .list_button_size").addEventListener("click", list_button_size_click);
function list_button_size_click(event) {
    if (event.target.className != "list_button_size") {
        select_list_button_size_new = event.target.classList[0];
        if (select_list_button_size_old != "") {
            document.querySelector(".body .body2 .section2 .container .data div .list_button_size ." + select_list_button_size_old + "").classList.remove("_active");
        }
        document.querySelector(".body .body2 .section2 .container .data div .list_button_size ." + select_list_button_size_new + "").classList.add("_active");
        select_list_button_size_old = select_list_button_size_new;
        select_list_button_size_index = document.querySelector(".body .body2 .section2 .container .data div .list_button_size ." + event.target.classList[0] + "").textContent - 1;
    }

}


document.querySelector(".body .body2 .section2 .container .data div .list_button_color").addEventListener("click", list_button_color_click);
function list_button_color_click(event) {
    if (event.target.className != "list_button_color") {
        select_list_button_color_new = event.target.classList[0];
        if (select_list_button_color_old != "") {
            document.querySelector(".body .body2 .section2 .container .data div .list_button_color ." + select_list_button_color_old + "").classList.remove("_active");
        }
        document.querySelector(".body .body2 .section2 .container .data div .list_button_color ." + select_list_button_color_new + "").classList.add("_active");
        select_list_button_color_old = select_list_button_color_new;
        select_list_button_color_index = event.target.classList[1];
    }

}


document.querySelector(".body .body2 .section2 .container .data div .basket .add_number").addEventListener("click", add_number_click);
function add_number_click() {
    const basket_c = JSON.parse(getCookie("basket"));

    if (document.querySelector(".body .body2 .section2 .container .data div .basket .add_number").textContent == "Добавить в корзину") {


        basket_c[content_numder_content][select_product] = {
            name: select_product,
            count_product: Number.parseInt(select_count_product),
            select_size: Number.parseInt(select_list_button_size_index),
            select_color: Number.parseInt(select_list_button_color_index),
        };
        console.log(basket_c[content_numder_content][select_product]);

        document.cookie = encodeURIComponent("basket") + "=" + JSON.stringify(basket_c) + "; path=/";

        document.querySelector(".body .body2 .section2 .container .data div .basket .add_number").textContent = "Удалить из корзины";
    }
    else {
        delete basket_c[content_numder_content][select_product];
        document.cookie = encodeURIComponent("basket") + "=" + JSON.stringify(basket_c) + "; path=/";

        document.querySelector(".body .body2 .section2 .container .data div .basket .add_number").textContent = "Добавить в корзину";
    }
    window.location.href = "https://armen231.github.io/portfolio/projects/project_2/Public/shop2.html";
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


document.querySelector(".body .body2 .section3 .container .collection").addEventListener("click", select_collection__img);
function select_collection__img(event) {
    if (event.target.parentNode.classList.length == 2 && event.target.parentNode.classList[0] == "collection__img") {
        document.cookie =
            encodeURIComponent("select_product") + "=" + encodeURIComponent(event.target.parentNode.classList[1]) + "; path=/; max-age=10";
        window.location.href = "https://armen231.github.io/portfolio/projects/project_2/Public/shop2.html";
    }
}


document.querySelector(".body .body2 .section2 .container .data div .basket .output_number .button_left").addEventListener("click", button_left);
function button_left() {
    if (select_count_product != 1) { select_count_product--; }
    document.querySelector(".body .body2 .section2 .container .data div .basket .output_number .number").textContent = select_count_product;
}

document.querySelector(".body .body2 .section2 .container .data div .basket .output_number .button_right").addEventListener("click", button_right);
function button_right() {
    if (select_count_product != 100) { select_count_product++; }
    document.querySelector(".body .body2 .section2 .container .data div .basket .output_number .number").textContent = select_count_product;
}



if (basket_check?.[content_numder_content]?.[select_product] == undefined )
{
    document.querySelector(".body .body2 .section2 .container .data div .basket .add_number").textContent = "Добавить в корзину";
}
else {
    document.querySelector(".body .body2 .section2 .container .data div .basket .add_number").textContent = "Удалить из корзины";
}