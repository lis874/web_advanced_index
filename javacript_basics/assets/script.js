var myArray = [2, 3, 4];


var myNumber= 2;

var modulus = 5 % 2;

console.log(modulus)

var iteration = 0;

iteration = iteration + 1;

iteration++;

console.log(iteration);

for (var i = 0; i < myArray.length; i++) {

	if(Array.isArray(myArray[i])){
		console.log("this is an array")

		for (var j = 0; j < myArray[i].length; j++) {
			console.log(myArray[i][j])
		}
	}else{
		console.log(myArray[i])
	}

}



var myWrapper = document.getElementById("wrapper");

console.log(myWrapper.innerHTML)

myWrapper.innerHTML += 'replacement text';

for (var i = 0; i < 100; i++){

	myWrapper.innerHTML += 'replacement text';

}












