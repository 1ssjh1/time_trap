let fixed = document.querySelector(".footer");
let i_list = document.querySelector(".footer").querySelectorAll("i");
let title = document.querySelector('.top_sec').querySelector(".center");



fixed.addEventListener("click", (e) => {
    if (e.target.tagName == "I") {

        if (e.target.parentNode.children[1].innerText == "日志") {
            change_title("<  11  >")
            to_DIARY()
        }
        if (e.target.parentNode.children[1].innerText == "报告") {
            change_title("报告")
            to_analysis()
        }
        if (e.target.parentNode.children[1].innerText == "大学圈") {
            change_title("大学圈")
        }
        if (e.target.parentNode.children[1].innerText == "我的") {
            change_title("我的")
            to_my_user()
        }
        i_list.forEach((item) => {
            item.className = "iconfont";
        })
        e.target.className = "iconfont foot_color"
    }
});


function change_title(name) {
    title.children[1].innerText = name

}



// 获取 四个模块

let index_center = document.querySelector(".index_center"),
    add_list = document.querySelector(".add_list"),
    week_title = document.querySelector(".week_title"),
    analysis = document.querySelector(".analysis"),
    my_user = document.querySelector(".my_user")


// 跳转报告
function to_analysis() {
    index_center.style.display = "none";
    add_list.style.display = "none";
    my_user.style.display = "none";
    analysis.style.display = "block";
    week_title.style.opacity = 0;
}

// 跳转日志
function to_DIARY() {
    week_title.style.opacity = 1;
    index_center.style.display = "block";
    week_title.style.display = "block";
    add_list.style.display = "none";
    analysis.style.display = "none";
    my_user.style.display = "none";
}



// 跳转我的
function to_my_user() {
    index_center.style.display = "none";
    my_user.style.display = "block";
    week_title.style.opacity = 0;
    analysis.style.display = "none";
    add_list.style.display = "none";
}