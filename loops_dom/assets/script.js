

var myVar = "string";

var newVar = myVar + 5 + 'another string';

console.log(newVar)

var myWrapper = document.getElementById("wrapper");

	myWrapper.innerHTML = newVar;

///////////////////////////////////////

	var changingColor = 10;

	for (var i = 0; i < 10; i++) {
	
		changingColor = changingColor + 20;

		var degrees;

		if(i % 2 === 0){
			//even
			degrees = (i/10) * 360;
		}else{
			//odd
			degrees = ((i-1)/10) * 360;
		}

	 	var myModule = `

	 	<div 
	 		class="module" 
	 		style="background-color:rgb(${changingColor},0,0);"> 

	 		<div 
	 			class="module_child" 
	 			style="transform; rotate(${degrees}deg); background-color: rgb(255,0,${changingColor});">${i}</div>

	 	</div>
	 	`;

	 	if(i % 2 === 0){
	 		myWrapper.insertAdjacentHTML('beforeend', myModule);

	 	}else{
	 		myWrapper.insertAdjacentHTML('afterbegin', myModule);
	 	}
	 

	 	// myWrapper.innerHTML = myModule;  //overrides, += adds at the endwithout overriding


	}
 	//beforeend (before the end of wrapper)
 	//afterbegin (after the start of our wrapper)
 	//beforebegin (before a specifgic element starts)
 	//afterend (after an element is completed)



/////////WHILE LOOP W/ TEMPLATE LITERAL //////////////////////////////


var i = 0;
var myString = "hello"
	
	console.log(myString.length)

while (i < 10 && myString === "hello") {
	console.log("The number is " + i, myString);

	if(i == 4){
		myString += "!";
	}

	i++;
}

///////////////////////////////////////


	var randomNumber = Math.random();

	console.log(randomNumber * 10)

// math.round 
// math.floor rounds down
// math.ceil rounds up


















