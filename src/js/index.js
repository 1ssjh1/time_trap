import "../css/index.css"
import "../css/css.css"
import "../css/normalize.css"
import "../font/iconfont.ttf"
import "../font/iconfont.woff"
import "../font/iconfont.woff2"
import "./diary"
import "./fixed.js"
import "./analysis.js"
import "./render_list"
import "./init_user.js"

document.body.addEventListener("touchstart", function() {});
let index_center = document.querySelector(".index_center"),
    footer = document.querySelector(".footer"),
    week_title = document.querySelector(".week_title")

week_title.style.marginTop = document.documentElement.clientHeight / 10 + "px";


index_center.style.height = document.documentElement.clientHeight * 6 / 5 + "px";
index_center.style.marginBottom = document.documentElement.clientHeight / 10 + "px";
footer.style.bottom = 0
document.querySelector(".add_list").style.height = document.documentElement.clientHeight * 3 / 4 + 10 + "px";
document.querySelector(".analysis").style.height = document.documentElement.clientHeight * 3 / 4 + 10 + "px";
document.querySelector(".my_user").style.height = document.documentElement.clientHeight * 3 / 4 + 10 + "px";