var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc == 'images/orangechicken.jpeg'){
		myImage.setAttribute('src', 'images/honeywalnutshrimp.jpg');
	}
	else {
		myImage.setAttribute('src', 'images/orangechicken.jpeg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt ('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'How are you, '+myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "How are you again, " + storedName;
}

myButton.onclick = function (){
	setUserName();
}
