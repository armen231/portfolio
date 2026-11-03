// ₽
let load_state = 1;
let category = "";
let select_category = "category_all"; // выбранный элемент в категориях товара
let count_all_product = 0; // количество всех товаров у выбранного товара
let count_view_product = 0; // количество выведенных товаров

let count_nav_button_max = 5; // количество кнопак в навигации
let count_nav_button = 0; // количество кнопак в навигации
let select_nav_button = 1;
let count_page = 0;
let count_view_nav_button = 0; // количество выведенный кнопок в контенте кнопки

function load() {
    count_all_product = 0;
    for (el in data.coat) { count_all_product++; }
    for (el in data.sweatshirt) { count_all_product++; }
    for (el in data.t_shirts) { count_all_product++; }

    count_page = Math.ceil(count_all_product / 9);

    if (select_category != "") {
        document.
            querySelector(".body .body2 .section2 .container .product_category ." + select_category + " ")
            .classList.toggle('_active');
    }

    content_transition();
}
load();



document.querySelector(".body .body2 .section2 .container .product_category")
    .addEventListener("click", select_category_f);

function select_category_f(event) {
    category = event.srcElement.classList[0];

    select_nav_button = 1;
    count_all_product = 0;
    count_view_product = 0;
    if (category == "category_all") {
        for (el in data.coat) { count_all_product++; }
        for (el in data.sweatshirt) { count_all_product++; }
        for (el in data.t_shirts) { count_all_product++; }

        count_page = Math.ceil(count_all_product / 9);
    }
    else if (category == "category_coat") {
        for (el in data.coat) { count_all_product++; }

        count_page = Math.ceil(count_all_product / 9);
    }
    else if (category == "category_sweatshirt") {
        for (el in data.sweatshirt) { count_all_product++; }

        count_page = Math.ceil(count_all_product / 9);
    }
    else if (category == "category_t_shirts") {
        for (el in data.t_shirts) { count_all_product++; }

        count_page = Math.ceil(count_all_product / 9);
    }

    if (select_category != "") {
        document.
            querySelector(".body .body2 .section2 .container .product_category ." + select_category + " ")
            .classList.toggle('_active');
    }

    document.
        querySelector(".body .body2 .section2 .container .product_category ." + category + " ")
        .classList.toggle('_active');
    select_category = category;

    content_transition();
    new_nav_button();
}



function content_transition() {
    let count = document.querySelectorAll(".body .body2 .section2 .container .products .collection .collection__img");
    document.querySelector(".body .body2 .section2 .container .products .collection").classList.add('_transition');
    for (a1 = 0; a1 < count.length; a1++) {
        document.querySelector(".body .body2 .section2 .container .products .collection .collection__img").remove();
    }

    let type_product = "";
    for (a2 = 9; a2 < select_category.length; a2++) { type_product = type_product + select_category[a2]; }



    let count_content = 0;
    if (select_category == "category_all") { count_content = 3; count_view_product = (3 * select_nav_button) - 3; }
    else { count_content = 9; count_view_product = (9 * select_nav_button) - 9; }

    for (a3 = 0; a3 < count_content; a3++) {
        if (count_view_product < count_all_product) {
            count_view_product++;
            if (select_category == "category_all") {
                if (data.coat['d' + count_view_product] != undefined) {
                    document.querySelector(".body .body2 .section2 .container .products .collection")
                        .insertAdjacentHTML("beforeend", "<div class='collection__img coat" + count_view_product + "'><div class='div'><img class='fon' src='1-images/main/section2_image4.png' alt=''></div><img class='img' src=" + data.coat['d' + count_view_product].path_photo + " alt=''><p class='p1'> Пальто " + data.coat['d' + count_view_product].name + "</p><p class='p2'>" + data.coat['d' + count_view_product].cost + " ₽</p></div>");
                }
                if (data.sweatshirt['d' + count_view_product] != undefined) {
                    document.querySelector(".body .body2 .section2 .container .products .collection")
                        .insertAdjacentHTML("beforeend", "<div class='collection__img sweatshirt" + count_view_product + "'><div class='div'><img class='fon' src='1-images/main/section2_image4.png' alt=''></div><img class='img' src=" + data.sweatshirt['d' + count_view_product].path_photo + " alt=''><p class='p1'> Свитшот " + data.sweatshirt['d' + count_view_product].name + "</p><p class='p2'>" + data.sweatshirt['d' + count_view_product].cost + " ₽</p></div>");
                }
                if (data.t_shirts['d' + count_view_product] != undefined) {
                    document.querySelector(".body .body2 .section2 .container .products .collection")
                        .insertAdjacentHTML("beforeend", "<div class='collection__img t_shirts" + count_view_product + "'><div class='div'><img class='fon' src='1-images/main/section2_image4.png' alt=''></div><img class='img' src=" + data.t_shirts['d' + count_view_product].path_photo + " alt=''><p class='p1'> Футболка " + data.t_shirts['d' + count_view_product].name + "</p><p class='p2'>" + data.t_shirts['d' + count_view_product].cost + " ₽</p></div>");
                }
            }
            else {
                document.querySelector(".body .body2 .section2 .container .products .collection")
                    .insertAdjacentHTML("beforeend", "<div class='collection__img " + type_product + "" + count_view_product + "'><div class='div'><img class='fon' src='1-images/main/section2_image4.png' alt=''></div><img class='img' src=" + data[type_product]['d' + count_view_product].path_photo + " alt=''><p class='p1'> " + data[type_product]['d' + count_view_product].name + "</p><p class='p2'>" + data[type_product]['d' + count_view_product].cost + " ₽</p></div>");
            }
        }
    }

    if (select_category == "category_all") {
        document.querySelector(".body .body2 .section2 .container .products .text1").textContent = "Показано " + (count_view_product * 3) + " из " + count_all_product + " товаров";
        document.querySelector(".body .body2 .section2 .container .products .text2").textContent = "Показано " + (count_view_product * 3) + " из " + count_all_product + " товаров";
    }
    else {
        document.querySelector(".body .body2 .section2 .container .products .text1").textContent = "Показано " + count_view_product + " из " + count_all_product + " товаров";
        document.querySelector(".body .body2 .section2 .container .products .text2").textContent = "Показано " + count_view_product + " из " + count_all_product + " товаров";
    }


    setTimeout(() => { document.querySelector(".body .body2 .section2 .container .products .collection").classList.remove('_transition'); }, 500);

    if (load_state == 1) { nav_button(); load_state = 0; }
}


function new_nav_button() {

    select_nav_button = 1;

    for (a1 = 0; a1 < count_nav_button; a1++) {
        document.querySelector(".body .body2 .section2 .container .products .nav .products_button_" + (a1 + select_nav_button) + "").remove();
    }
    document.querySelector(".body .body2 .section2 .container .products .nav .products_button_left").remove();
    document.querySelector(".body .body2 .section2 .container .products .nav .products_button_right").remove();

    category = "";
    count_nav_button = 0;
    count_view_nav_button = 0;

    nav_button();
}


function nav_button() {

    document.querySelector(".body .body2 .section2 .container .products .nav")
        .insertAdjacentHTML("beforeend", "<div class='products_button_left '><img class='left' src='1-images/shop/arrow.svg' alt=''></div>");

    for (a1 = 1; a1 <= count_nav_button_max; a1++) {
        if (a1 <= count_page && a1 <= count_nav_button_max) {
            count_view_nav_button++;
            count_nav_button++;
            document.querySelector(".body .body2 .section2 .container .products .nav")
                .insertAdjacentHTML("beforeend", "<button class='products_button_" + count_view_nav_button + "'>" + count_view_nav_button + "</button>");
        }
    }

    document.querySelector(".body .body2 .section2 .container .products .nav .products_button_" + select_nav_button + "").classList.add("_active");

    document.querySelector(".body .body2 .section2 .container .products .nav")
        .insertAdjacentHTML("beforeend", "<div class='products_button_right'><img class='right' src='1-images/shop/arrow.svg' alt=''></div>");

    if (count_page != 1) { document.querySelector(".body .body2 .section2 .container .products .nav .products_button_right").classList.add("_active"); }
}



document.querySelector(".body .body2 .section2 .container .products .nav").addEventListener("click", select_nav_button_f);

function select_nav_button_f(event) {
    let nav = event.srcElement.classList[0];

    if (nav == "left") {
        if (count_view_nav_button - (count_nav_button - 1) != select_nav_button) {
            select_nav_button--;
            document.querySelector(".body .body2 .section2 .container .products .nav .products_button_" + (select_nav_button + 1) + "").classList.remove("_active");
        }
        else {
            let element = count_view_nav_button;
            for (a1 = 0; a1 < count_nav_button; a1++) {
                document.querySelector(".body .body2 .section2 .container .products .nav .products_button_" + (a1 + select_nav_button) + "").remove();
            }
            count_nav_button = 0;
            count_view_nav_button -= 6;
            select_nav_button -= 1;
            for (a1 = 0; a1 < 5; a1++) {
                count_view_nav_button++;
                count_nav_button++;

                document.querySelector(".body .body2 .section2 .container .products .nav .products_button_right")
                    .insertAdjacentHTML("beforebegin", "<button class='products_button_" + count_view_nav_button + "'>" + count_view_nav_button + "</button>");

            }

        }
    }
    else if (nav == "right") {
        if (select_nav_button != (count_all_product / 9)) {
            select_nav_button++;

            document.querySelector(".body .body2 .section2 .container .products .nav .products_button_" + (select_nav_button - 1) + "").classList.remove("_active");
        }
        if (select_nav_button > count_view_nav_button && count_page > count_view_nav_button) {
            let element = count_view_nav_button;
            count_nav_button = 0;

            for (a1 = 0; a1 < 5; a1++) {
                document.querySelector(".body .body2 .section2 .container .products .nav .products_button_" + (a1 + (element - 4)) + "").remove();
            }
            for (a1 = 0; a1 < 5; a1++) {
                if (count_view_nav_button <= count_page) {
                    count_view_nav_button++;
                    count_nav_button++;
                    document.querySelector(".body .body2 .section2 .container .products .nav .products_button_right")
                        .insertAdjacentHTML("beforebegin", "<button class='products_button_" + count_view_nav_button + "'>" + count_view_nav_button + "</button>");
                }
            }
        }

    }
    else if (nav != "nav") {
        document.querySelector(".body .body2 .section2 .container .products .nav .products_button_" + select_nav_button + "").classList.remove("_active");
        select_nav_button = Number(document.querySelector(".body .body2 .section2 .container .products .nav ." + nav + "").textContent);
    }



    if (select_nav_button != 1) {
        document.querySelector(".body .body2 .section2 .container .products .nav .products_button_left ").classList.add("_active");
    }
    else {
        document.querySelector(".body .body2 .section2 .container .products .nav .products_button_left ").classList.remove("_active");
    }

    if (select_nav_button != count_page) {
        document.querySelector(".body .body2 .section2 .container .products .nav .products_button_right ").classList.add("_active");
    }
    else {
        document.querySelector(".body .body2 .section2 .container .products .nav .products_button_right ").classList.remove("_active");
    }

    document.querySelector(".body .body2 .section2 .container .products .nav .products_button_" + select_nav_button + "").classList.add("_active");

    content_transition();
}




document.querySelector(".body .body2 .section2 .container .products .collection").addEventListener("click", select_collection__img);

function select_collection__img(event) {
    if (event.target.parentNode.classList.length == 2 && event.target.parentNode.classList[0] == "collection__img") {
        document.cookie =
            encodeURIComponent("select_product") + "=" + encodeURIComponent(event.target.parentNode.classList[1]) + "; path=/; max-age=10";
        window.location.href = "https://armen231.github.io/portfolio/projects/project_2/Public/shop2.html";
    }
}
