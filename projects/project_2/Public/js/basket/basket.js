function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
const basket_c = JSON.parse(getCookie("basket"));
let count_all_cost = 0;

function load() {
    let count_product = 0; // количество товаров по отдельности
    let content_product_text = ""; // название товара по отдельности
    for (e in basket_c.coat) { count_product++; }
    content_product_text = "coat";
    load_content(count_product, content_product_text);

    count_product = 0;
    for (e in basket_c.sweatshirt) { count_product++; }
    content_product_text = "sweatshirt";
    load_content(count_product, content_product_text);

    count_product = 0;
    for (e in basket_c.t_shirts) { count_product++; }
    content_product_text = "t_shirts";
    load_content(count_product, content_product_text);
}
load();

function load_content(count, name_product) {
    let a1 = 0;
    let a2 = 0;
    let cost = 0;
    while (count != a2) {
        a1++;
        if (basket_c[name_product][name_product + a1] != undefined) {
            a2++;
            count_all_cost += (Number.parseFloat((data[name_product]["d" + a1].cost).replace(/ /g, '')) * Number.parseFloat(basket_c[name_product][name_product + a1].count_product));
            document.querySelector("body .body2 .section2 .container .content2").insertAdjacentHTML("beforeend",
                "<div class='content'>" +
                "<div class='product'>" +
                "<img class= 'product__img1 " + name_product + " " + name_product + a1 + "' src='1-images/basket/section2_img1.svg' alt =''>" +
                "<img class='product__img2 " + name_product + "" + a1 + "' src='" + data[name_product]["d" + a1].path_photo + "' alt=''>" +
                "<p class='product__p1'><span class='span0'>Название </span>" + data[name_product]["d" + a1].name + "</p>" +
                "</div>" +
                "<p class='text0 coat1_t0'>Название " + data[name_product]["d" + a1].name + "</p>" +
                "<p class='text1 " + name_product + a1 + "_t1'><span class='span0'>Цена </span><span class='span1'>" + data[name_product]["d" + a1].cost + "</span><span> ₽</span></p>" +
                "<div class='output_number'>" +
                "<input class='button_left " + name_product + " " + a1 + "' type='button' value='-'>" +
                "<p class='number " + name_product + " " + name_product + a1 + "_n'>" + basket_c[name_product][name_product + a1].count_product + "</p>" +
                "<input class='button_right " + name_product + " " + a1 + "' type='button' value='+'>" +
                "</div>" +
                "<p class='text2 " + name_product + a1 + "_t2'><span class='span0'>Всего </span><span class='span1'>" + (Number.parseFloat((data[name_product]["d" + a1].cost).replace(/ /g, '')) * Number.parseFloat(basket_c[name_product][name_product + a1].count_product)) + "</span><span> ₽</span></p>" +
                "</div>");
        }
    }

    document.querySelector("body .body2 .section2 .container .order .text1").textContent = "Подитог: " + count_all_cost + " ₽";
    document.querySelector("body .body2 .section2 .container .order .div_button_order .total").textContent = "Итог: " + count_all_cost + " ₽";
}


document.querySelector("body .body2 .section2 .container .content2").addEventListener("click", delet_product);
function delet_product(event) {

    if (event.target.classList.length == 3 && event.target.classList[0] == "product__img1") {

        delete basket_c[event.target.classList[1]][event.target.classList[2]];
        document.cookie = encodeURIComponent("basket") + "=" + JSON.stringify(basket_c) + "; path=/";
        window.location.href = "https://armen231.github.io/portfolio/projects/project_2/Public/basket.html";
    }


    if (event.target.classList.length == 3 && (event.target.classList[0] == "button_left" || event.target.classList[0] == "button_right")) {
        let select_count_product_old = 0;
        let select_count_product_new = 0;

        select_count_product = Number(document.querySelector("body .body2 .section2 .container .content2 .content .output_number ." + event.target.classList[1] + event.target.classList[2] + "_n").textContent);
        select_count_product_old = select_count_product;

        if (event.target.classList.length == 3 && event.target.classList[0] == "button_left") {

            if (select_count_product != 1) {
                select_count_product--;
            }
        }
        if (event.target.classList.length == 3 && event.target.classList[0] == "button_right") {

            if (select_count_product != 100) {
                select_count_product++;
            }

        }
        select_count_product_new = select_count_product;

        document.querySelector("body .body2 .section2 .container .content2 .content .output_number ." + event.target.classList[1] + event.target.classList[2] + "_n").textContent = String(select_count_product);
        document.querySelector("body .body2 .section2 .container .content2 .content ." + event.target.classList[1] + event.target.classList[2] + "_t2 > .span1").textContent =
            (Number(document.querySelector("body .body2 .section2 .container .content2 .content ." + event.target.classList[1] + event.target.classList[2] + "_t1 > .span1").textContent.replace(/ /g, ''))) * select_count_product;

        if (event.target.classList.length == 3 && event.target.classList[0] == "button_left") {
            if (select_count_product_new != select_count_product_old) {
                count_all_cost -= Number(document.querySelector("body .body2 .section2 .container .content2 .content ." + event.target.classList[1] + event.target.classList[2] + "_t1 > .span1").textContent.replace(/ /g, ''));
            }
        }
        if (event.target.classList.length == 3 && event.target.classList[0] == "button_right") {
            if (select_count_product != 100) {
                count_all_cost += Number(document.querySelector("body .body2 .section2 .container .content2 .content ." + event.target.classList[1] + event.target.classList[2] + "_t1 > .span1").textContent.replace(/ /g, ''));
            }
        }
        document.querySelector("body .body2 .section2 .container .order .div_button_order .total").textContent = "Итог: " + count_all_cost + " ₽";

        document.querySelector("body .body2 .section2 .container .order .text1").textContent = "Подитог: " + String(count_all_cost) + " ₽";

        basket_c[event.target.classList[1]][event.target.classList[1] + event.target.classList[2]].count_product = select_count_product;
        document.cookie = encodeURIComponent("basket") + "=" + JSON.stringify(basket_c) + "; path=/";
    }

}


document.querySelector("body .body2 .section2 .container .update_basket").addEventListener("click", update_basket_click);
function update_basket_click() {
    window.location.href = "https://armen231.github.io/portfolio/projects/project_2/Public/basket.html";
}


document.querySelector("body .body2 .section2 .container .order .div_button_order .order").addEventListener("click", order_click);
function order_click() {
    if (count_all_cost != 0) { window.location.href = "https://armen231.github.io/portfolio/projects/project_2/Public/order.html"; }
    else { alert("Для оформления заказа необходимо добавить товар в корзину"); }
}