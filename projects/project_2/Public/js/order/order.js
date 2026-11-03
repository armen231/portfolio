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
    while (count != a2) {
        a1++;
        if (basket_c[name_product][name_product + a1] != undefined) {
            a2++;
            count_all_cost += (Number.parseFloat((data[name_product]["d" + a1].cost).replace(/ /g, '')) * Number.parseFloat(basket_c[name_product][name_product + a1].count_product));
            document.querySelector(".body .body2 .section2 .container .content2 .content2__conten1 div").insertAdjacentHTML("beforeend",
                "<div>" +
                "<p>"+ data[name_product]["d"+a1].name +"</p>" +
                "<p>" + (Number.parseFloat((data[name_product]["d" + a1].cost).replace(/ /g, '')) * Number.parseFloat(basket_c[name_product][name_product + a1].count_product)) +" ₽</p>" +
                "</div>");

            document.querySelector(".body .body2 .section2 .container .content2 .content2__conten1 .result .result__text2").textContent = count_all_cost + " ₽" ;
        }
    }
}



document.querySelector(".body .body2 .section2 .container .content2 .content2__content2 .post_order").addEventListener("click", post_order_click);
function post_order_click(){
    window.location.href = "https://armen231.github.io/portfolio/projects/project_2/Public/order2.html";
}

document.querySelector(".body .body2 .section2 .container .content2 .content2__content2 div .button").addEventListener("click", button_click);
function button_click() {
    document.querySelector(".body .body2 .section2 .container .content2 .content2__content2 div .button div").classList.toggle("_active");
}