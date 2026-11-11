load_main();
function load_main() {
    if (sessionStorage.getItem("url") != null) {
        if (sessionStorage.getItem("url") != window.location.href){
            sessionStorage.setItem("scroll", 0);
            document.querySelector(".body").scrollTop = 0;
        } else { document.querySelector(".body").scrollTop = sessionStorage.getItem("scroll"); }
    }
    sessionStorage.setItem("url", window.location.href);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const data = {
    coat: {
        d1: {
            name: "Crystal Wear",
            path_photo: "1-images/shared_files/coat/1.jpg",
            cost: "6 200",
            color: ["черный"],
            structure: ["шерсть", "вискоза"],
            size: [42, 44, 46, 48, 50, 52],
        },
        d2: {
            name: "Meltem",
            path_photo: "1-images/shared_files/coat/2.jpg",
            cost: "6 608",
            color: ["черный"],
            structure: ["эластан", "шерсть", "вискоза"],
            size: [40, 42, 44, , 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66],
        },
        d3: {
            name: "Миля",
            path_photo: "1-images/shared_files/coat/3.jpg",
            cost: "5 339",
            color: ["черный"],
            structure: ["шерсть 30%", "вискоза 35%", "полиэстер 35%"],
            size: [42, 44, 46, 48, 50],
        },
        d4: {
            name: "Sadomos",
            path_photo: "1-images/shared_files/coat/4.jpg",
            cost: "3 375",
            color: ["черный"],
            structure: ["синтепон"],
            size: [42, 44, 46, 48, 50],
        },
        d5: {
            name: "4AIR",
            path_photo: "1-images/shared_files/coat/5.jpg",
            cost: "6 599",
            color: ["черный"],
            structure: ["шерсть 20%", "вискоза 50%", "полиэстер 30%"],
            size: [42, 44, 46, 48, 50, 52, 54, 56],
        },
        d6: {
            name: "Come on, baby",
            path_photo: "1-images/shared_files/coat/6.jpg",
            cost: "6 175",
            color: ["серый"],
            structure: ["шерсть 50%", "вискоза 20%", "полиэстер 30%"],
            size: [42, 44, 46, 48],
        },
        d7: {
            name: "RAVETTI",
            path_photo: "1-images/shared_files/coat/7.jpg",
            cost: "8 927",
            color: ["светло-бежевый"],
            structure: ["шерсть 60%", "вискоза 20%", "полиэстер 30%"],
            size: [40, 42, 44, 46, 48, 50],
        },
        d8: {
            name: "E.Y. Store",
            path_photo: "1-images/shared_files/coat/8.jpg",
            cost: "7 564",
            color: ["черный"],
            structure: ["овечья шерсть 40%", "полиэстер 60%"],
            size: [40, 42, 44, 46, 48, 50],
        },
        d9: {
            name: "RIMSS",
            path_photo: "1-images/shared_files/coat/9.jpg",
            cost: "5 574",
            color: ["черный", "глубокий черный", "черный матовый", "черный графит"],
            structure: ["полиэстер"],
            size: [42, 44, 46, 48, 50],
        },
        d10: {
            name: "RAVETTI",
            path_photo: "1-images/shared_files/coat/10.jpg",
            cost: "8 927",
            color: ["темно-синий"],
            structure: ["шерсть 60%", "вискоза 10%", "полиэстер 30%"],
            size: [40, 42, 44, 46, 48, 50, 52],
        },
        d11: {
            name: "KK Storee",
            path_photo: "1-images/shared_files/coat/11.jpg",
            cost: "2 977",
            color: ["светло-бежеый"],
            structure: ["полиэстер 100%"],
            size: [42, 44, 46, 48],
        },
        d12: {
            name: "Tazetta",
            path_photo: "1-images/shared_files/coat/12.jpg",
            cost: "32 100",
            color: ["серый"],
            structure: ["шерсть", "шелк альпака"],
            size: [44, 46, 48, 50],
        },
    },
    sweatshirt: {
        d1: {
            name: "BITISWAY",
            path_photo: "1-images/shared_files/sweatshirt/1.jpg",
            cost: "1 782",
            color: ["белый", "зеленовато-бежевый"],
            structure: ["хлопок", "эластан", "полиэстер"],
            size: [44, 46, 48, 50, 52, 54, 56],
        },
        d2: {
            name: "Zaytseva Ekaterina",
            path_photo: "1-images/shared_files/sweatshirt/2.jpg",
            cost: "1 947",
            color: ["сливовый", "фуксия"],
            structure: ["хлопок 92%", "эластан 8%"],
            size: [42, 44, 46, 48, 50, 52, 54, 56],
        },
        d3: {
            name: "Ticle",
            path_photo: "1-images/shared_files/sweatshirt/3.jpg",
            cost: "2  304",
            color: ["кофейный"],
            structure: ["хлопок 80%", "полиэстерол 20%"],
            size: [38, 40, 42, 44, 46, 48, 50, 52, 54],
        },
        d4: {
            name: "PEOPLE IN BALANCE",
            path_photo: "1-images/shared_files/sweatshirt/4.jpg",
            cost: "2 796",
            color: ["черный", "глубокий черный"],
            structure: ["хлопок 80%", "полиэстер 20%"],
            size: [40, 42, 44, 46, 48, 50, 52],
        },
        d5: {
            name: "Eberron",
            path_photo: "1-images/shared_files/sweatshirt/5.jpg",
            cost: "2 200",
            color: ["черный"],
            structure: ["хлопок 99%", "эластан 1%"],
            size: [42, 44, 46, 48, 50, 52],
        },
        d6: {
            name: "EAZYWAY",
            path_photo: "1-images/shared_files/sweatshirt/6.jpg",
            cost: "2 790",
            color: ["лазурно-серый", "серый", "синий петроль", "зеленый"],
            structure: ["хлопок 65%", "полиэстер 35%"],
            size: [40, 42, 44, 46, 48],
        },
        d7: {
            name: "Zaytseva Ekaterina",
            path_photo: "1-images/shared_files/sweatshirt/7.jpg",
            cost: "1 947",
            color: ["желтый"],
            structure: ["хлопок 92%", "эластан 8%"],
            size: [40, 42, 44, 46, 48, 50, 52, 54, 56],
        },
        d8: {
            name: "MONA.LU",
            path_photo: "1-images/shared_files/sweatshirt/8.jpg",
            cost: "1 813",
            color: ["голубой"],
            structure: ["хлопок 80%", "эластан 20%"],
            size: [42, 44, 46, 48, 50],
        },
        d9: {
            name: "Comodita",
            path_photo: "1-images/shared_files/sweatshirt/9.jpg",
            cost: "1 504",
            color: ["черный"],
            structure: ["хлопок 85%", "эластан 5%"],
            size: [42, 44, 46, 48, 50, 52],
        },
        d10: {
            name: "Eberron",
            path_photo: "1-images/shared_files/sweatshirt/10.jpg",
            cost: "2 200",
            color: ["белый"],
            structure: ["хлопок 99%", "эластан 1%"],
            size: [42, 44, 46, 48, 50, 52],
        },
        d11: {
            name: "Barmariska",
            path_photo: "1-images/shared_files/sweatshirt/11.jpg",
            cost: "3 099",
            color: ["синий"],
            structure: ["хлопок", "полиэстер"],
            size: [40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70],
        },
        d12: {
            name: "Zaytseva Ekaterina",
            path_photo: "1-images/shared_files/sweatshirt/12.jpg",
            cost: "1 947",
            color: ["оранжевый"],
            structure: ["хлопок 92%", "эластан 8%"],
            size: [40, 42, 44, 46, 48, 50, 52, 54],
        },
    },
    t_shirts: {
        d1: {
            name: "Ticle",
            path_photo: "1-images/shared_files/t_shirts/1.jpg",
            cost: "1 332",
            color: ["черный"],
            structure: ["хлопок 82%", "эластан 8%"],
            size: [38, 40, 42, 44, 46, 48, 50, 52, 54],
        },
        d2: {
            name: "Insolito",
            path_photo: "1-images/shared_files/t_shirts/2.jpg",
            cost: "840",
            color: [""],
            structure: ["хлопок", "кулирка"],
            size: [44, 46, 48, 50, 52, 54, 56, 58],
        },
        d3: {
            name: "ТИО",
            path_photo: "1-images/shared_files/t_shirts/3.jpg",
            cost: "470",
            color: ["белый"],
            structure: ["хлопок"],
            size: [32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
        },
        d4: {
            name: "WIKIM",
            path_photo: "1-images/shared_files/t_shirts/4.jpg",
            cost: "1 135",
            color: ["голубой"],
            structure: ["хлопок 82%", "эластан 8%"],
            size: [42, 44, 46, 48, 50, 52],
        },
        d5: {
            name: "Апрель",
            path_photo: "1-images/shared_files/t_shirts/5.jpg",
            cost: "636",
            color: ["черный", "белый иней"],
            structure: ["хлопок 100%"],
            size: [42, 44, 46, 48, 50],
        },
        d6: {
            name: "Annemore",
            path_photo: "1-images/shared_files/t_shirts/6.jpg",
            cost: "1 396",
            color: ["черный"],
            structure: ["хлопок 92%", "лайкра 8%"],
            size: [40, 42, 44, 46, 48, 50, 52],
        },
        d7: {
            name: "WAlllEE",
            path_photo: "1-images/shared_files/t_shirts/7.jpg",
            cost: "890",
            color: ["черный"],
            structure: ["хлопок"],
            size: [42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62],
        },
        d8: {
            name: "SigmaPrint",
            path_photo: "1-images/shared_files/t_shirts/8.jpg",
            cost: "768",
            color: ["белый"],
            structure: ["хлопок"],
            size: [44, 46, 48, 50, 52, 54, 56, 58, 60, 62],
        },
        d9: {
            name: "MoonTrees",
            path_photo: "1-images/shared_files/t_shirts/9.jpg",
            cost: "2 241",
            color: ["белый", "черный"],
            structure: ["хлопок 92%", "эластан 8%"],
            size: [40, 42, 44, 46, 48, 50],
        },
        d10: {
            name: "ТИО",
            path_photo: "1-images/shared_files/t_shirts/10.jpg",
            cost: "446",
            color: ["черный", "красный"],
            structure: ["хлопок"],
            size: [32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
        },
        d11: {
            name: "MoonTrees",
            path_photo: "1-images/shared_files/t_shirts/11.jpg",
            cost: "1 269",
            color: ["ярко-розовый", "фуксия"],
            structure: ["хлопок 92%", "эластан 8%"],
            size: [40, 42, 44, 46, 48, 50],
        },
        d12: {
            name: "italomania",
            path_photo: "1-images/shared_files/t_shirts/12.jpg",
            cost: "1 908",
            color: ["серый", "черный", "крысный", "желтый"],
            structure: ["хлопок"],
            size: [42, 44, 46, 48, 50],
        },
    },
};


const basket = {
    coat: {

    },
    sweatshirt: {

    },
    t_shirts: {

    }
};


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

if (getCookie("basket") == undefined) {
    const basket_cookie = JSON.stringify(basket);
    document.cookie =
        encodeURIComponent("basket") + "=" + basket_cookie + "; path=/";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("keydown", document_key);
function document_key(event) {
    let popup1 = document.querySelector("body .body2 .popup1").getAttribute('class').indexOf("_active");
    let popup2 = document.querySelector("body .body2 .popup2").getAttribute('class').indexOf("_active");
    if (event.code == "Escape") {
        if (popup1 != -1) { close_p1_click(); }
        if (popup2 != -1) { close_popup2_click(); }
    }
    if (event.code == "Enter") {
        if (popup1 != -1) { open_popup2_click(); }
        if (popup2 != -1) { close_popup2_click(); }
    }
}


document.querySelector(".body").addEventListener('scroll', function () {
    let scroll = document.querySelector(".body").scrollTop;
    sessionStorage.setItem("scroll", scroll);
    document.querySelector(".body").scrollTop = scroll;
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const basket_check = JSON.parse(getCookie("basket"));
let count_basket_check = 0;

for (e in basket_check.coat) { count_basket_check++; }
for (e in basket_check.sweatshirt) { count_basket_check++; }
for (e in basket_check.t_shirts) { count_basket_check++; }

if (count_basket_check != 0) {
    document.querySelector("body .body2 .header .phone-basket .basket__div .number").classList.add("_active");
    document.querySelector("body .body2 .header .phone-basket .basket__div .number .number-text").textContent = count_basket_check;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let phone = document.querySelector(".phone-img");

phone.addEventListener("mouseover", phone_mouseover);
phone.addEventListener("mouseout", phone_mouseout);
phone.addEventListener("click", phone_click);

function phone_mouseover(event) {
    phone.src = "1-images\\shared_files\\phone-active.png";
}
function phone_mouseout(event) {
    phone.src = "1-images\\shared_files\\phone-no-active.png";
}

function phone_click() {
    document.querySelector(".popup1").style.visibility = "visible";
    document.querySelector('.popup1').classList.toggle('_active');
    document.querySelector(".body").classList.add('_active2');
}

let close_p1 = document.querySelector(".close_p1");
close_p1.addEventListener("click", close_p1_click);

function close_p1_click() {
    document.querySelector("body").classList.toggle('_active2');
    document.querySelector('.popup1').classList.toggle('_active');
    setTimeout(() => { document.querySelector(".popup1").style.visibility = "hidden"; }
        , 500);
}

let open_popup2 = document.querySelector(".call");
open_popup2.addEventListener("click", open_popup2_click);

function open_popup2_click() {
    let input1 = document.querySelector(".name").value;
    let input2 = document.querySelector(".email").value;
    let input3 = document.querySelector(".phone").value;
    if ((input1 != "" && input1 != null) && (input2 != "" && input2 != null) && (input3 != "" && input3 != null)) {
        document.querySelector('.popup1').classList.toggle('_active');
        setTimeout(() => { document.querySelector(".popup1").style.visibility = "hidden"; }
            , 500);
        setTimeout(() => {
            document.querySelector(".popup2").style.visibility = "visible";
            document.querySelector('.popup2').classList.toggle('_active');
        }
            , 500);
    }
    else {
        alert("Заполните все поля");
    }

}

let close_popup2 = document.querySelector(".close");
close_popup2.addEventListener("click", close_popup2_click);

function close_popup2_click() {
    document.querySelector(".body").classList.remove('_active2');
    document.querySelector('.popup2').classList.toggle('_active');
    setTimeout(() => { document.querySelector(".popup2").style.visibility = "hidden"; }
        , 500);
}


document.querySelector(".btn_menu").addEventListener("click", btn_menu_click_active);

function btn_menu_click_active() {
    document.querySelector("body").classList.toggle('_active');
    document.querySelector(".menu").classList.toggle('_active');
}


document.querySelector(".menu__item > .callback").addEventListener("click", phone_click);



document.querySelector("body .body2 .header .phone-basket .basket__div").addEventListener("click", basket_click);
function basket_click() {
    window.location.href = "https://armen231.github.io/portfolio/projects/project_2/Public/basket.html";
}