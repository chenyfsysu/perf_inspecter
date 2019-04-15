const Highcharts = require("highcharts")
var chart_util = require("./core/chart_util")


document.getElementById("query_result").addEventListener("click", function(event) {
	var title = "气温"
	var series = [{
		name: '东京',
		data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	}]
	var yaxis = "气温"
	var xasix = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

	chart_util.create_line('container', title, xasix, yaxis, series)
})
