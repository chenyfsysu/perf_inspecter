const Highcharts = require("highcharts")
var chart_util = require('../../../core/chart_util')


document.getElementById("query_result").addEventListener("click", function(event) {
	var title = "市场份额"
	var data =  [{
		name: 'Chrome',
		y: 61.41,
		sliced: true,
		selected: true
	}, {
		name: 'Internet Explorer',
		y: 11.84
	}, {
		name: 'Firefox',
		y: 10.85
	}, {
		name: 'Edge',
		y: 4.67
	}, {
		name: 'Safari',
		y: 4.18
	}, {
		name: 'Sogou Explorer',
		y: 1.64
	}, {
		name: 'Opera',
		y: 1.6
	}, {
		name: 'QQ',
		y: 1.2
	}, {
		name: 'Other',
		y: 2.61
	}]

	chart_util.create_pie('container', title, data)
})
