


// $.ajax({
  // method: "POST",
  // url: "/createAccount",
  // data: { user: "John", pass: "Boston" }
  // .done(function() {
    // alert( "success" );
  // })
  // .fail(function() {
    // alert( "error" );
  // })
// })

alert($);
var create = document.querySelector(".create-button");
create.addEventListener("click, function(event){
	if(document.getElementById("username").value != "" && document.getElementById("password").value != "" && document.getElementById("email").value != ""){
		alert("Values!")
	else{
		alert("Missing values")
	}
});
