document.querySelector("body .body2 .section2 .container .text2 .form .send").addEventListener("click", send_click);
function send_click(event){
    if (document.querySelector("body .body2 .section2 .container .text2 .form div .input_name").value != "" &&
    document.querySelector("body .body2 .section2 .container .text2 .form div .input_E_mail").value != "" &&
    document.querySelector("body .body2 .section2 .container .text2 .form div .input_phone").value != "" &&
    document.querySelector("body .body2 .section2 .container .text2 .form div .input_message").value != "")
    {
        document.querySelector("body .body2 .section2 .container .text2 .form .message_send").style.display = "block";
        setTimeout(() => {
            document.querySelector("body .body2 .section2 .container .text2 .form .message_send").classList.add("_active");
        },1000)
    }
    else {
        alert("Заполните всеы поля");
        document.querySelector("body .body2 .section2 .container .text2 .form .message_send").classList.remove("_active");
        setTimeout(() => {
            document.querySelector("body .body2 .section2 .container .text2 .form .message_send").style.display = "none";
        }, 1000)
    }
}