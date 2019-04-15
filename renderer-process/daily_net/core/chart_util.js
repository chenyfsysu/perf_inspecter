const Highcharts = require('highcharts')

// 饼状图
function create_pie(node_, title_, data_) {
    Highcharts.chart(node_, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: title_
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: data_
        }]
    })
}


// 线状图
function create_line(node_, title_, xasix_, yasix_, series_) {
    var chart = Highcharts.chart(node_, {
        chart: {
            type: 'line'
        },
        title: {
            text: title_
        },
        xAxis: {
            categories: xasix_
        },
        yAxis: {
            title: {
                text: yasix_
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    // 开启数据标签
                    enabled: true          
                },
                // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                enableMouseTracking: false
            }
        },
        series: series_
    });

    return chart
}

module.exports = {
    create_pie: create_pie,
    create_line: create_line
}
