
	// afterbegin (after the start of our wrapper)
	// beforeend (before the end of wrapper)

	// beforebegin (before a specific element starts)
	// afterend (after an element is completed)

	var j = 0; 
	var myAppendingFunction = function(){


	
	var rotation = Math.round((j/10) * 100);
	document.getElementById("wrapper").insertAdjacentHTML("beforeend", ` 

			<div class="patternUnit">

				<div class="patternUnit" 
				style="transform: rotate(${rotation}deg);
				background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
				margin-bottom: 0vw;">
				</div>

			</div>`);


	if(j >= 550){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	j++;

}


var myAnimating = setInterval(myAppendingFunction, 20);




// background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,125,45,1) 100%)






