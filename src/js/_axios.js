import axios from "axios";
import qs from "qs";


axios.defaults.baseURL = "https://ssjh.ltd/";
axios.defaults.timeout = 5000;

let axios_get = axios.create({

    method: "GET",
});

export function index_get(url, token) {
    // 主题页面拦截器
    // 有data 就返回data 无就返回 res
    axios_get.interceptors.response.use((res) => {
            return res.data || res
        },
        // 套路的  错误处理  识别错误代码 但是这个项目好像没有错误代码返回
        (err) => {
            let { response } = err;
            if (response) {
                switch (response.status) {
                    case 401:

                        console.log(response);
                        break;
                    case 403:
                        console.log("也许是token");
                        break;
                    case 404:
                        console.log("找不到页面");
                        // window.location.reload("www.baidu.com");
                        break;
                }

            } else {
                if (!window.navigator.onLine) {
                    console.log("网络有问题");
                    return;
                }
            }
            return Promise.reject(err)
        });
    // 拦截器必须返回 不然 下面拿不到 哦
    return axios_get({
        headers: { 'Authorization': token },
        url: url

    })
};


// 注册登录

let axios_login = axios.create({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: "POST",
});
export function login_post(url, data = {
    // 配置请求拦截
}) {
    axios_login.interceptors.response.use((res) => {
            return res.data || res
        },
        (err) => {
            let { response } = err;
            if (response) {
                switch (response.status) {
                    case 401:
                        console.log(response);
                        break;
                    case 403:
                        console.log("也许是token");
                        break;
                    case 404:
                        console.log("找不到页面");
                        // window.location.reload("www.baidu.com");
                        break;
                }
            } else {
                if (!window.navigator.onLine) {
                    console.log("网络有问题");
                    return;
                }
            }
            return Promise.reject(err)
        });
    return axios_login({
        url: url,
        data: qs.stringify(data)
    })
}