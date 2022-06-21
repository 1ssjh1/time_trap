import Sortable from "sortablejs"
import { render_color } from "./render_list"


// 获取添加课表和 原来课表dom
let add_list = document.querySelector(".add_list");
let index_center = document.querySelector('.index_center');
let run_left = document.querySelector(".run_left");

// 获取添加模块的 每个ul
let ul_list = document.querySelector(".course").querySelectorAll("ul");
// 获取输入框 
let bai = document.querySelector(".bai");







let time_table_list = document.querySelectorAll(".dirty");

[...time_table_list].forEach((item, index) => {
    new Sortable(item, {
        group: {
            name: 'shared',
        },
        animation: 200
    });

})






//  右边箭头切换;
let right_btn = document.querySelector(".jiantou");
// 获取加号 
let filtered = document.querySelectorAll(".filtered");


// [...filtered].forEach((item) => {
//     item.addEventListener("click", () => { right_go() })

// })

function right_go() {
    index_center.style.transition = "1s ease";
    index_center.style.display = "block";
    add_list.style.display = "none";
}




right_btn.addEventListener("click", () => {
    right_go()
})

run_left.addEventListener("click", () => {

    add_list.style.transition = "1s ease";
    index_center.style.display = "none";
    add_list.style.display = "block";
});



// add拖拽;





[...ul_list].forEach((item, ) => {
    new Sortable(item, {
        group: {
            name: 'shared',
            pull: 'clone',
            put: false // 不允许拖拽进这个列表
        },
        // filter: '.filtered',
        animation: 150,
        sort: false,
        onStart: function(evt) {

            if (evt.oldIndex == evt.target.children.length - 2) {
                return
            }

            right_go()
                // element index within parent
        }, // 设为false，禁止sort
        onRemove: () => {
            render_color()
        }
    });
});


// 添加课表函数
[...ul_list].forEach((item) => {


    item.addEventListener("click", (e) => {

        if (e.target.innerText == "+") {
            document.querySelector("body").setAttribute("key", e.target.parentNode.className);
            if (bai.children[0]) {

                return
            }

            bai.insertAdjacentHTML("afterbegin", `
            <div style=" 
             position: relative;
            display: inline-block;">
            <input type="text" style="
             outline: none;
            border: none;
            background: #fafafa;"/>
            <span style="position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            background-color: #262626;
            transform: scaleX(0);
            transform-origin: right center;
            transition: transform 0.3s ease-in-out> "</span>
          </div>
            
            `)

            let search_btn = bai.children[0]
            search_btn.addEventListener("keydown", debounce(500, out)())
        }

    })
})







function out(e) {
    let _this = this.querySelector("input")
    if (e.keyCode === 13 && _this.value) {
        let index = document.querySelector("body").getAttribute("key")

        document.querySelector(`.${index}`).insertAdjacentHTML("afterbegin", `
     
        <li>${_this.value}</li>
     
     `)
            // 请求数据 给 搜索

    }
}


//防抖函数
function debounce(time, fn) {
    let t = null
    return function() {
        let rest = [...arguments]
        return function(e) {
            if (t) {
                clearTimeout(t)
            }
            t = setTimeout(() => {
                //任务回调函数

                fn.call(this, e)
            }, time);
        }
    }
}

// 右上角加号


let bot_sec = document.querySelector(".bot_sec").querySelector(".right"),
    _add = bot_sec.querySelector("i"),
    add_crouse = bot_sec.querySelector(".add_course")

console.log(add_crouse);
_add.addEventListener("click", () => {

    console.log(1);
    console.log(add_crouse.style.display);

    add_crouse.style.display = add_crouse.style.display == "none" ? "block" : "none"


})