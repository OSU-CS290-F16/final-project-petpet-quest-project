//javascript for interaction with the shop page

function sold(i){
		var value = 1000 + (i*500);
		
		var pet; 
		
		if(i == 0){
			pet = document.getElementById("pet1");
			pet.style.display = "block";
			pet.style.marginTop = "-331px";
			pet.style.marginLeft = "54px";
		}
}


var price = document.getElementsByClassName("Price"); //select the price button class

for(var i = 0; i< price.length; i++){
	//if the price of a pet is clicked and there is enough money to buy
	//user will buy pet and the amount will be taken out of their points
	
	price[i].addEventListener("click", sold(i));
}






