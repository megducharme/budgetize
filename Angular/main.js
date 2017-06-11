console.log("Hello to whoever is trying to inspect this page right now! I hope you're having a great day :)!")


button = document.getElementById("creatNewBtn")
console.log(button)

button.addEventListener("click", function(){
	console.log("IS THIS WORKING")
	document.getElementById("demo").innerHTML = "Hello World";
});



