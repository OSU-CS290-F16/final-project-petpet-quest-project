//javascript for interaction with the shop page

function sold(event){

		var value, pet, points;
		
		var tar = event.target;
		
		points = document.getElementById("PetPetsCounter");
		 
		if(tar.id == "pet1"){
			value = parseInt(points.innerHTML, 10); //get the points total
			if(value < 1000){
				alert("Not enough points");
				return 0;
			}
			value -= 1000; //minus 1000 for cost of dog
			points.innerHTML = value; //replace points total
			
			console.log("sold");
			pet = document.getElementById("sold1"); //access the sold banner
			pet.style.display = "block"; //display banner in upper lefthand corner
			pet.style.marginTop = "-331px";
			pet.style.marginLeft = "53px";
			price[0].removeEventListener("click", sold); //remove event listener on purchase button
			
		}
		
		else if(tar.id == "pet2"){
			
			value = parseInt(points.innerHTML, 10); //get the points total
			if(value < 1500){
				alert("Not enough points");
				return 0;
			}
			value -= 1500; //minus 1500 for cost of fish
			points.innerHTML = value; //replace points total
			
			
			console.log("sold");
			pet = document.getElementById("sold2");
			pet.style.display = "block";
			pet.style.marginTop = "-331px";
			pet.style.marginLeft = "53px";
			price[1].removeEventListener("click", sold);
			
		}
		
		else if(tar.id == "pet3"){
			value = parseInt(points.innerHTML, 10); //get the points total
			if(value < 2000){
				alert("Not enough points");
				return 0;
			}
			value -= 2000; //minus 2000 for cost of bird
			points.innerHTML = value; //replace points total
			
			
			console.log("sold");
			pet = document.getElementById("sold3");
			pet.style.display = "block";
			pet.style.marginTop = "-331px";
			pet.style.marginLeft = "53px";
			price[2].removeEventListener("click", sold);
			
		}
		
		else if(tar.id == "pet4"){
			value = parseInt(points.innerHTML, 10); //get the points total
			
			if(value < 2500){
				alert("Not enough points");
				return 0;
			}
			value -= 2500; //minus 2500 for cost of mouse
			points.innerHTML = value; //replace points total
			
			
			
			console.log("sold");
			pet = document.getElementById("sold4");
			pet.style.display = "block";
			pet.style.marginTop = "-331px";
			pet.style.marginLeft = "53px";
			price[3].removeEventListener("click", sold);
		
		}
		
		else if(tar.id == "pet5"){
			value = parseInt(points.innerHTML, 10); //get the points total
			if(value < 5000){
				alert("Not enough points");
				return 0;
			}
			value -= 5000; //minus 5000 to buy Hess
			points.innerHTML = value; //replace points total
			
			
			console.log("sold");
			pet = document.getElementById("sold5");
			pet.style.display = "block";
			pet.style.marginTop = "-331px";
			pet.style.marginLeft = "53px";
			price[4].removeEventListener("click", sold);
		
		}
		
		return false;
}

function pagePrev(){ //goes to the first page of the shop
	var next = document.getElementById("next"); //select the next button
	next.addEventListener("click", pageNext); //act on click
	prev.removeEventListener("click", pagePrev); //remove event listener on prev
	console.log("prev page");
	
	var pet, pagenumber;
		
	//hides page 2 and shows page 1
	
	pet = document.getElementById("pet1").parentNode;
	pet.style.display = "block";
	pet = document.getElementById("pet2").parentNode;
	pet.style.display = "block";
	pet = document.getElementById("pet3").parentNode;
	pet.style.display = "block";
	pet = document.getElementById("pet4").parentNode;
	pet.style.display = "block";
	pet = document.getElementById("pet5").parentNode;
	pet.style.display = "none";
	
	pagenumber = document.getElementsByClassName("page-number");
	pagenumber[0].innerHTML = "1/2";
	console.log(pagenumber);
}

function pageNext(){ //goes to the second page of the shop
	 var prev = document.getElementById("prev"); //select the prev button
	 prev.addEventListener("click", pagePrev); //act on click
	 next.removeEventListener("click", pageNext); //remove event listener on next
	 console.log("next page");
	 
	 var pet, pagenumber;
	 
	//hides the previous page and shows the 2nd page
	 
	pet = document.getElementById("pet1").parentNode;
	pet.style.display = "none";
	pet = document.getElementById("pet2").parentNode;
	pet.style.display = "none";
	pet = document.getElementById("pet3").parentNode;
	pet.style.display = "none";
	pet = document.getElementById("pet4").parentNode;
	pet.style.display = "none";
	pet = document.getElementById("pet5").parentNode;
	pet.style.display = "block";
	
	pagenumber = document.getElementsByClassName("page-number");
	pagenumber[0].innerHTML = "2/2";
	console.log(pagenumber);
	 
}

var price = document.getElementsByClassName("Price"); //select the price button class

for(var i = 0; i< price.length; i++){ 
	//if the price of a pet is clicked and there is enough money to buy
	//user will buy pet and the amount will be taken out of their points
	price[i].addEventListener("click", sold);
}

var next = document.getElementById("next"); //select the next button
next.addEventListener("click", pageNext); //act on click










