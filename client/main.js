console.log("Hello to whoever is trying to inspect this page right now! I hope you're having a great day :)!")


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


function getResponseFromAPI(){
    console.log("inside API call")

    $.ajax({url: "http://localhost:8000/users",
        success: function(result){
        console.log(result)
        }
    });

}

function postToAPI(){

    $.ajax({
        url : 'http://localhost:8000/users/',
        type : 'POST',
        data : JSON.stringify({
            first_name: "Kyle",
            last_name: "Ducahrme"
        }),
        success : function(data) {
            console.log(data);
        },
        error : function(request,error)
        {
            console.log("didn't work, here's the error: ", error.responseText);
        }
    });

}

postToAPI()
