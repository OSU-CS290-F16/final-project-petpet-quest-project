

$("#createAccountButton").bind({click: function(){
	var user = $("#username").val();
	var pass = $("#password").val();
	if ( user === '' ||  pass === '') {
		alert('NOPE');
		return;
	}
	
	$.ajax({
	method: "POST",
	url: "/createAccount",
	data: { "user": user, "pass": pass }
	}).done(function() {
		alert( "success" );
		window.location = "/petPetQuest.html";
	}).fail(function() {
		alert( "error" );
	});
	
	
}});


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

// alert($);
// var create = document.querySelector(".create-button");
// create.addEventListener("click, function(event){
	// if(document.getElementById("username").value != "" && document.getElementById("password").value != "" && document.getElementById("email").value != ""){
		// alert("Values!")
	// else{
		// alert("Missing values")
	// }
// });
