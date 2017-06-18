console.log("api js file is hooked up")

let transaction = {};

let transactionTypeSelect = document.getElementById("transactionTypeSelect")
    transactionTypeSelect.addEventListener("change", function(){
        transaction.transaction_type = transactionTypeSelect.value
        console.log("transactionType: ", transaction.transaction_type)
    });


let submitTransaction = document.getElementById("submitExpense")
submitTransaction.addEventListener("click", function(){
    buildTransaction()
    postTransaction(transaction);
})


function buildTransaction(){
    transaction.amount = document.getElementById("transactionAmount").value
    transaction.user = "1";
    transaction.is_recurring = document.getElementById("isRecurring").value

    console.log("transaction: ", transaction)
}


function postTransaction(transaction){

    $.ajax({
        url : 'http://localhost:8000/transactions/',
        type : 'POST',
        data : JSON.stringify(transaction),
        success : function(data) {
            console.log(data);
        },
        error : function(request,error)
        {
            console.log("error posting", error);
        }
    });
}
