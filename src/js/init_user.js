import { index_get } from "./_axios";


let my_user = document.querySelector(".my_user").querySelector(".head_sculpture").querySelector("p"),
    user = document.querySelector(".analysis").querySelector(".section_title")



index_get("user", localStorage.getItem("token")).then((res) => {
    console.log(my_user.parentNode.children[0]);
    my_user.innerHTML = res.nickname ? res.nickname : "默认名字";
    my_user.parentNode.children[0].style.background = ` url(${res.msg}) center center no-repeat`
    user.children[0].innerHTML = res.nickname ? "晚上好 , " + res.nickname + "!" : "默认名字";
    user.children[1].innerHTML = res.motto
});