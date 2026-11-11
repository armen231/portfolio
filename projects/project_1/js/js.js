let menu_e = document.querySelector('.btn_menu');
menu_e.onclick = nav_on_off_f;
function nav_on_off_f()
{
    let nav_e = document.querySelector('.nav');
    nav_e.classList.toggle('_active');

    let body_e = document.querySelector('body');
    body_e.classList.toggle('_active');
}


let footer_e = document.querySelector('.footer');
footer_e.addEventListener("click", footer_on_off);

function footer_on_off(e)
{
    if (e.target.closest('.fb'))
    {
        let content = e.target;
        content = content.parentElement.className + "_title_content";
        content = document.querySelector("." + content);
        if (content.className == "content_1_company_title_content" || 
        content.className == "content_1_company_title_content _active_company"){
            content.classList.toggle('_active_company'); 
        }
        else{
            content.classList.toggle('_active');
        }   
    }
}

