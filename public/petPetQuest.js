

var petPetsCount = 0;
var petPetPointsCount = 0
var petPetPointsMultiplier = 1;

var hitboxColor = 0;
var hitboxNumber = 2;
var hitboxVis = 0;

var verticalHitboxes = 2;
var horizontalHitboxes = 1;

var hitboxHeight = 150;
var hitboxWidth = 300;
var hitboxHeightString = "150px";
var hitboxWidthString = "300px";



var currentPet = {
	petName:"Grumpy Cat",
	petImage: "photos/pet_grumpyCat.png",
	petDescription:"A grumpy cat.",
	petsReceived: 0,
	petPetAction: function() { console.log('Grumpy Cat Pet!'); }
};

var dog = {
	petName:"Dog",
	petImage: "photos/pet_dog.png",
	petDescription:"A dog.",
	petsReceived: 0,
	petPetAction: function() { console.log('Dog Pet!'); }
};

var fish = {
	petName:"Fish",
	petImage: "photos/pet_fish.png",
	petDescription: "A fish.",
	petsReceived: 0,
	petPetAction: function() { console.log('Fish Pet!'); }
};

var bird = {
	petName:"Bird",
	petImage: "photos/pet_bird.png",
	petDescription:"A bird.",
	petsReceived: 0,
	petPetAction: function() { console.log('Bird Pet!'); }
};

var grumpyCat = {
	petName:"Grumpy Cat",
	petImage: "photos/pet_grumpyCat.png",
	petDescription:"A grumpy cat.",
	petsReceived: 0,
	petPetAction: function() { console.log('Grumpy Cat Pet!'); }
};




document.getElementById("PetPetsCounter").innerHTML = petPetsCount;
document.getElementById("PetPetPointsCounter").innerHTML = petPetPointsCount;
document.getElementById("PetPetPointsMultiplierCounter").innerHTML = petPetPointsMultiplier;

document.getElementById("currentPetDisplay").innerHTML = currentPet.petName;
document.getElementById("currentPetPetsCounter").innerHTML = currentPet.petsReceived;

document.getElementById("petImage").src = petImage.src = 'photos/pet_grumpyCat.png';

document.getElementById("petNameDisplay").innerHTML = currentPet.petName;
document.getElementById("petDescription").innerHTML = currentPet.petDescription;

function c(thisShit) {
	console.log(thisShit);
}



function changeClassByClassGeneral(classSearched, currentClass, newClass) {

	var elements = document.getElementsByClassName(classSearched);
	
	c('Length ' + elements.length);
	
	
	
	for (var i = 0; i < elements.length; i = i + 1) {
		elements[i].classList.add(newClass);
		c('ADD ' + i);
	}
	
	for (var i = 0; i < elements.length; i =  i + 1) {
		elements[i].classList.remove(currentClass);
		c('REMOVE ' + i);
	}	
	
	
}

function toggleDisplayByClass(theseElements) {

	var elements = document.querySelectorAll(theseElements);

	if ( elements[0].style.display != 'none' ) {
		
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.display = 'none';
		}

	}

	else {
		
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.display = '';
		}

	}

}

function toggleDisplayByID(thisElement) {

	var element = document.getElementById(thisElement);

	if ( element.style.display != 'none' ) {

		element.style.display = 'none';

	}

	else {

		element.style.display = '';

	}

}



addEventListener('mouseover', handlePetPet);

function handlePetPet(event) {
	
	if (event.target.classList.contains('hitbox')) {
		console.log('PET!!');
		petPetsCount = petPetsCount + 1;
		petPetPointsCount = petPetPointsCount + petPetPointsMultiplier;
		document.getElementById("PetPetsCounter").innerHTML = petPetsCount;
		document.getElementById("PetPetPointsCounter").innerHTML = petPetPointsCount;
		currentPet.petsReceived = currentPet.petsReceived + 1;
		currentPet.petPetAction();
		document.getElementById("currentPetPetsCounter").innerHTML = currentPet.petsReceived;
	}
	
}



addEventListener('click', UpgradeHitboxVertical);

function UpgradeHitboxVertical(event) {
	
	if (event.target.classList.contains('addHitboxButtonVertical')) {
		console.log('Vertical Hitbox Added!');
		
		for (var i = 0; i < horizontalHitboxes; i++) {
			var newHitbox = document.createElement("div");
			newHitbox.classList.add('hitbox');
			if (hitboxVis === 0) {
			newHitbox.classList.add('hitboxInvis');
			}	
			else {
			newHitbox.classList.add('hitboxVis');			
			}
			document.getElementById('hitboxContainer').appendChild(newHitbox);
		}
		
		verticalHitboxes = verticalHitboxes + 1;
		
		hitboxHeight = 302/verticalHitboxes;
		
		hitboxHeightString = hitboxHeight.toString() + 'px';
		
		console.log(hitboxHeightString);
		
		console.log('Vertical Hitboxes: ' + verticalHitboxes);
		
		var hitboxes = document.querySelectorAll('.hitbox');
		
		for (var i = 0; i < hitboxes.length; i++) {
			hitboxes[i].style.height = hitboxHeightString;
			hitboxes[i].style.width = hitboxWidthString;
		}
		
		
	}
	
}

addEventListener('click', UpgradeHitboxHorizontal);

function UpgradeHitboxHorizontal(event) {
	
	if (event.target.classList.contains('addHitboxButtonHorizontal')) {
		console.log('Horizontal Hitbox Added!');
		
		for (var i = 0; i < verticalHitboxes; i++) {
			var newHitbox = document.createElement("div");
			newHitbox.classList.add('hitbox');
			if (hitboxVis === 0) {
			newHitbox.classList.add('hitboxInvis');
			}	
			else {
			newHitbox.classList.add('hitboxVis');			
			}
			document.getElementById('hitboxContainer').appendChild(newHitbox);
		}
		
		horizontalHitboxes = horizontalHitboxes + 1;
		
		hitboxWidth = 300/horizontalHitboxes;
		
		hitboxWidthString = hitboxWidth.toString() + 'px';
		
		console.log(hitboxWidthString);
		
		console.log('Horizontal Hitboxes: ' + horizontalHitboxes);
		
		
		var hitboxes = document.querySelectorAll('.hitbox');
		
		for (var i = 0; i < hitboxes.length; i++) {
			hitboxes[i].style.height = hitboxHeightString;
			hitboxes[i].style.width = hitboxWidthString;
		}
		
		
	}
	
}


function toggleHitboxDisplayFunction(classSearched, currentClass, newClass) {

	var elements = document.getElementsByClassName(classSearched);
	
	c('Length ' + elements.length);
	
	
	
	for (var i = 0; i < elements.length; i = i + 1) {
		
		if (elements[i].classList.contains(currentClass)) {
			elements[i].classList.add(newClass);
			c('ADD ' + i);
		}
	}
	
	for (var i = 0; i < elements.length; i =  i + 1) {
		
		if (elements[i].classList.contains(currentClass)) {
			elements[i].classList.remove(currentClass);
			c('REMOVE ' + i);
		}
	}	
	
	
}

addEventListener('click', toggleHitboxDisplay);

function toggleHitboxDisplay(event) {
	
	if (event.target.classList.contains('toggleHitboxDisplay')) {
		
		console.log('Hitbox Display Toggled!');
	
		if (hitboxVis === 0) {
			
			c('life');
			
			toggleHitboxDisplayFunction('hitbox', 'hitboxInvis', 'hitboxVis');
			hitboxVis = 1;
			
		}
		else {
			
			c('death');
			
			toggleHitboxDisplayFunction('hitbox', 'hitboxVis', 'hitboxInvis');
			hitboxVis = 0;
			
		}
		
	
	}

}

addEventListener('click', upgradePetPetMultiplier);

function upgradePetPetMultiplier(event) {
	
	if (event.target.classList.contains('increasePetPetPointsMultiplier')) {
		petPetPointsMultiplier = petPetPointsMultiplier + 1;
		document.getElementById("PetPetPointsMultiplierCounter").innerHTML = petPetPointsMultiplier;
	}

}	




function petChange(PCpetName, PCpetImage, PCpetDescription, PCpetsReceived,
	PCpetPetAction) {
		
	currentPet.petName = PCpetName;
	currentPet.petImage = PCpetImage;
	currentPet.petDescription = PCpetDescription;
	currentPet.petsReceived = PCpetsReceived;
	currentPet.petPetAction = PCpetPetAction;
	
	c("Current Pet's pets: " + currentPet.petsReceived);
	
	document.getElementById("currentPetDisplay").innerHTML = currentPet.petName;
	document.getElementById("currentPetPetsCounter").innerHTML = currentPet.petsReceived;
	document.getElementById("petDescription").innerHTML = currentPet.petDescription;
	
	document.getElementById("petImage").src = petImage.src = PCpetImage;
	
}

function petChangeS(PCSpet) {
	
	if(currentPet.petName === 'Grumpy Cat') {
		c('Pets to Grumpy Cat');
		grumpyCat.petsReceived = currentPet.petsReceived;
	}
		
	if(currentPet.petName === 'Dog') {
		c('Pets to Dog');
		dog.petsReceived = currentPet.petsReceived;
	}
	
	if(currentPet.petName === 'Fish') {
		c('Pets to Fish');
		fish.petsReceived = currentPet.petsReceived;
	}
	
	if(currentPet.petName === 'Bird') {
		c('Pets to Bird');
		bird.petsReceived = currentPet.petsReceived;
	}
	
	currentPet.petsReceived = 
	
	currentPet.petName = PCSpet.petName;
	currentPet.petImage = PCSpet.petImage;
	currentPet.petDescription = PCSpet.petDescription;
	currentPet.petsReceived = PCSpet.petsReceived;
	currentPet.petPetAction = PCSpet.petPetAction;
	
	c("Current Pet's pets: " + currentPet.petsReceived);
	
	document.getElementById("currentPetDisplay").innerHTML = currentPet.petName;
	document.getElementById("currentPetPetsCounter").innerHTML = currentPet.petsReceived;
	document.getElementById("petNameDisplay").innerHTML = currentPet.petName;
	document.getElementById("petImage").src = petImage.src = PCSpet.petImage;
	document.getElementById("petDescription").innerHTML = currentPet.petDescription;
	
}

addEventListener('click', changePet);

function changePet(event) {
	
	if (event.target.classList.contains('grumpyCatButton')) {
		
		c('Switch to Grumpy Cat!');
		
		petChangeS(grumpyCat);
		
	}
	
	if (event.target.classList.contains('dogButton')) {
		
		c('Switch to Dog');
		
		petChangeS(dog);
		
	}
	
	if (event.target.classList.contains('fishButton')) {
		
		c('Switch to Fish');
		
		petChangeS(fish);
		
	}
	
	if (event.target.classList.contains('birdButton')) {
		
		c('Switch to Bird');
		
		petChangeS(bird);
		
	}

}




















