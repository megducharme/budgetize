console.log("Hello to whoever is trying to inspect this page right now! I hope you're having a great day :)!")



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawLineChart);

function drawPieChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Effort', 'Amount given'],
	  ['Housing',     40],
	  ['Groceries',  15],
	  ['Eating Out',     15],
	  ['Drinks',     10],
	  ['Clothing',     20],

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
	  chartArea: {'width': '100%','height': '90%'}
	};

	var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
	chart.draw(data, options);


}

function drawLineChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Year', 'Income', 'Expenses'],
	  ['Jan',  10000,      3500],
	  ['Feb',  10000,      2700],
	  ['Mar',  10000,       4200],
	  ['Apr',  12000,      3100],
	  ['May',  10000,      2200],
	  ['Jun',  10000,      2900],
	  ['Jul',  13000,      5400],
	  ['Aug',  10000,      4600],
	  ['Sep',  15000,      4200],
	  ['Oct',  10000,      4000],
	  ['Nov',  10000,      3500],
	  ['Dec',  10000,      4800],
	]);

	var options = {
	  curveType: 'function',
	  pieSliceTextStyle: {
	  color: 'white',
	  fontName: 'Roboto',
	  fontSize: '8',
	  fontWeight: '800'
	  },

	  hAxis: {
		textStyle:{
            fontSize: '12',
            fontName: 'Roboto',
            color: '#263238'            
		}
        },

        vAxis: {
		textStyle:{
            fontSize: '12',
            fontName: 'Roboto',
            color: '#263238',
            fontWeight: '600',
		}
        },
	  lineWidth: 3,
	  colors: ['#31B87A', '#f44336'],
	  chartArea: {'right':'40','width': '85%', 'height': 'auto'},
	  pointSize: 0,
	  legend: {position: 'none',
	}
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
