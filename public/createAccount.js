var create = document.querySelector(".create-button");
create.addEventListener("click, function(event){
	if(document.getElementById("username").value != "" && document.getElementById("password").value != "" && document.getElementById("email").value != ""){
		alert("Values!")
	else{
		alert("Missing values")
	}
});