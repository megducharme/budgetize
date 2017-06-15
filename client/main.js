console.log("Hello to whoever is trying to inspect this page right now! I hope you're having a great day :)!")

let submitExpense = document.getElementById("submitExpense")
submitExpense.addEventListener("click", getResponseFromAPI)


getResponseFromAPI()


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
