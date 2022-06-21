import * as echarts from 'echarts';

// 获取分析表
let statistics = document.querySelector(".statistics").querySelectorAll(".left");

// 饼状图
let round0 = echarts.init(statistics[0], null, {
    width: 222,
    height: 111
});
let round1 = echarts.init(statistics[1], null, {
    width: 222,
    height: 111
});
let round2 = echarts.init(statistics[2], null, {
    width: 222,
    height: 111
});
// 饼状图


round0.setOption(

    {
        legend: {
            orient: "vertical",
            left: "left",
        },
        tooltip: {
            trigger: 'item'
        },
        grid: {
            left: "50",
            bottom: "0"
        },
        series: [{
            name: '饼状图',
            type: 'pie',
            radius: '90%',
            data: [
                { value: 45, name: '学习' },
                { value: 15, name: '工作' },
                { value: 15, name: '娱乐' },
                { value: 5, name: '日常' },

            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            left: "25%",
            width: "88%",
            height: "88%",

        }]


    }

);

round1.setOption({
        grid: {
            left: '0%',
            right: '4%',
            bottom: '1%',
            top: "5%",
            containLabel: true
        },
        legend: {
            data: ['learn']
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },

        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 100, 115, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }]
    })
    // 折线图
round2.setOption({


    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['学习', '娱乐', '休息'],



    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '1%',
        top: "5%",
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '娱乐',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90]
        },
        {
            name: '学习',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '休息',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190]
        }

    ]

})


// 获取切换按钮
let kind_data = document.querySelector(".kind_data"),
    kind_data_list = kind_data.querySelectorAll('li')

kind_data.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        [...kind_data_list].forEach((item) => {
            item.className = "";
        });
        [...statistics].forEach((item) => {
            item.style.display = "none";
        })
        e.target.className = "bot_border"
        if (e.target.innerText == "饼状图") {
            statistics[0].style.display = "block";
        }
        if (e.target.innerText == "柱状图") {
            statistics[1].style.display = "block";
        }
        if (e.target.innerText == "折线图") {
            statistics[2].style.display = "block";
        }
    }
}, false)