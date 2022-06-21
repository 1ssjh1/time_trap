let arr = require("./mock")






let dirty = document.querySelectorAll(".dirty");

let color_arr = [
    "245, 232, 228",
    "176, 238, 255",
    "125, 191, 232",
    "176, 255, 226",
    "249, 250, 222",
    "173, 233, 250"
]

export function render_color() {


    let key = 0;
    [...dirty].forEach((item) => {
        [...item.children].forEach((ele) => {
            ele.style.backgroundColor = `rgba(${color_arr[key++%6]})`
        })
    })
}



export function delete_list() {
    [...dirty].forEach((item) => {
        item.innerHTML = ""
    })

}

// 绑定双击删除

let top_sec = document.querySelector(".top_sec")

function handle() {
    console.log("双击了");
}
// 创建计时器
let count = 0;

function doubleClick(handle, wait = 500, n = 2) {

    let timer = null;
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                count = 0;
                timer = null;
            }, wait);
        }
        count++;
        if (count === n) {

            handle(arguments);
            count = 0;
            clearTimeout(timer);
            timer = null;
            return true
        }
    };
}

// 绑定双击删除


export function render_list(data) {
    arr[data].forEach((item, item_index) => {
        item.forEach((ele, ele_index) => {
            let li = document.createElement("li")
            li.innerHTML = arr[data][item_index][ele_index]
            li.addEventListener("click", function() {
                if (doubleClick(handle)()) {
                    this.remove()
                }
            })
            dirty[item_index].appendChild(li)
        })

    })
    render_color()
}
render_list("Mon")







// 切换课表
let title = document.querySelector('.week_title'),
    title_list = title.querySelectorAll('li')

title.addEventListener("click", (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName == "LI") {
        [...title_list].forEach((item) => {
            item.className = "";
        })
        e.target.className = "title_color"
        delete_list();
        render_list(e.target.innerHTML)
    }
}, false)