import "../css/user.css"
import "../css/normalize.css"

import { index_get, login_post } from "./_axios"

// 获取登录注册相互跳转 dom
let register = document.querySelector("#register"),
    login = document.querySelector("#login"),
    go_register = login.querySelector("p"),
    go_login = register.querySelector("p");



go_register.addEventListener("click", () => {
    register.style.display = "block";
    login.style.display = "none";
})


go_login.addEventListener("click", () => {
    go_to_login()
})

function go_to_login() {
    register.style.display = "none";
    login.style.display = "block";
}



// 获取注册按钮  获取
let register_btn = register.querySelector(".value");







register_btn.addEventListener("click", () => {
    // 获取 注册用户名 
    let register_name = register.querySelector(".name");
    // 获取 注册密码 
    let register_password = register.querySelector(".password");
    // 获取 注册昵称 
    let register_nickname = register.querySelector(".nickname");

    if (!register_name.value) {
        alert("哒美！用户名不能为空")
        return
    }
    if ((register_name.value + "").split("").length > 11) {
        alert("用户名太长了！")
        return
    }
    if (!register_password.value) {
        alert("(；′⌒`) 密码你得写一个")
        return
    }

    if (!register_nickname.value) {
        alert("你忘了写昵称了")
        return
    }
    if ((register_name.value + "").split("").length > 11) {
        alert("昵称太长了！")
        return
    }
    console.log(register_name.value, register_password.value, register_nickname.value);

    login_post(
        "register", {
            username: register_name.value,
            password: register_password.value,
            nickname: register_nickname.value
        }
    ).then((res) => {
        console.log(register_name.value, register_password.value, register_nickname.value);
        console.log(res);


        if (res.state == false) {
            alert(res.msg)

        }
        if (res.state == true) {
            alert("注册成功！确认后跳转");
            setTimeout(() => {
                go_to_login()
            }, 500);

        }

    })

    // sjh
    // 1111
})



// 获取登录按钮  获取
let login_btn = login.querySelector(".value");



login_btn.addEventListener("click", () => {
    // 获取 登录用户名 
    let login_name = login.querySelector(".name");
    // 获取 登录密码 
    let login_password = login.querySelector(".password");

    if (!login_name.value) {
        alert("哒美！用户名不能为空")
        return
    }

    if (!login_password.value) {
        alert("(；′⌒`) 密码你得写一个")
        return
    }

    console.log(login_name.value, login_password.value);
    login_post("login", {
            username: login_name.value,
            password: login_password.value
        }

    ).then((res) => {
        if (res.state) {
            alert("登陆成功，确认后跳转")
            document.location.href = 'index.html';
            localStorage.setItem('token', res.token)
        }
        if (!res.state) {
            alert(res.msg)

        }


    })
})