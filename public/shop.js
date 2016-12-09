//javascript for interaction with the shop page

function sold(){
		console.log("I am in sold");
		console.log("i = %d", i);
		
		var value = 1000 + (i*500);
		
		var pet; 
		
		i += 1;
		 
		if(price[0]){
			console.log("sold");
			pet = document.getElementById("pet1");
			pet.style.display = "block";
			pet.style.marginTop = "-331px";
			pet.style.marginLeft = "53px";
			price[0].removeEventListener("click", sold);
		}
		
		return false;
}


var price = document.getElementsByClassName("Price"); //select the price button class

for(var i = 0; i< price.length; i++){
	//if the price of a pet is clicked and there is enough money to buy
	//user will buy pet and the amount will be taken out of their points
	price[i].addEventListener("click", sold);
}






