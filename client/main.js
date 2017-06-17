console.log("Hello to whoever is trying to inspect this page right now! I hope you're having a great day :)!")



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawLineChart);

function drawPieChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Effort', 'Amount given'],
	  ['Housing',     50],
	  ['Eating Out',  20],
	  ['Drinks',     10],
	  ['Drinks',     30],

	]);

	var options = {
	  pieHole: 0.4,
	  pieSliceTextStyle: {
	  color: 'white',
	  fontName: 'Roboto',
	  fontSize: '13',
	  fontWeight: '800'
	  },
	  colors: ['#5E35B1', '#7e57c2', '#B39DDB', '#D0BFEF', '#E4DBF4'],
	  legend: 'none',
	  chartArea: {'width': '100%', 'height': '80%'}
	};

	var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
	chart.draw(data, options);
}

function drawLineChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Year', 'Income', 'Expenses'],
	  ['January',  1000,      400],
	  ['February',  1170,      460],
	  ['March',  660,       1120],
	  ['April',  1030,      540],
	  ['May',  1030,      540],
	  ['June',  1030,      540],
	  ['July',  1030,      540],
	  ['August',  1030,      540],
	  ['September',  1030,      540],
	  ['October',  1030,      540],
	  ['November',  1030,      540],
	  ['December',  1030,      540],
	]);

	var options = {
	  curveType: 'function',
	  pieSliceTextStyle: {
	  color: 'white',
	  fontName: 'Roboto',
	  fontSize: '13',
	  fontWeight: '800'
	  },

	  legend: { position: 'none' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
	chart.draw(data, options);
}







//(below) attempting to hardcode a charts.js graphic
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
//     datasets: [{
//       label: 'apples',
//       data: [12, 19, 3, 17, 6, 3, 7],
//       backgroundColor: "rgba(153,255,51,0.4)"
//     }, {
//       label: 'oranges',
//       data: [2, 29, 5, 5, 2, 3, 10],
//       backgroundColor: "rgba(255,153,0,0.4)"
//     }]
//   }
// });


// function getResponseFromAPI(){
//     console.log("inside API call")

//     $.ajax({url: "http://localhost:8000/users",
//         success: function(result){
//         console.log(result)
//         }
//     });

// }

// function postToAPI(){

//     $.ajax({
//         url : 'http://localhost:8000/users/',
//         type : 'POST',
//         data : JSON.stringify({
//             first_name: "Kyle",
//             last_name: "Ducahrme"
//         }),
//         success : function(data) {
//             console.log(data);
//         },
//         error : function(request,error)
//         {
//             console.log("didn't work, here's the error: ", error.responseText);
//         }
//     });

// }

// postToAPI()
