

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
var hitboxWidthString = "302px";

document.getElementById("PetPetsCounter").innerHTML = petPetsCount;
document.getElementById("PetPetPointsCounter").innerHTML = petPetPointsCount;
document.getElementById("PetPetPointsMultiplierCounter").innerHTML = petPetPointsMultiplier;

function callMF() {
	console.log('WHOA MUTHERFUCKER');
}

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





















