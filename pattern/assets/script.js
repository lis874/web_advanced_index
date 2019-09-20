// var myWrapper = document.getElementById("wrapper"); 

// for (var i = 0; i < 800; i++) {
// 		// within our string, we are using the variable "i" to generate numbers that output inline css values
// 	myWrapper.innerHTML += '<div class="patternUnit" style=" transform: rotate('+ (20 + i) +'deg);"></div>';

// }




var myWrapper = document.getElementById("wrapper");



	for (var i = 0; i < 800; i++) {


		var degrees;

		if(i % 2 === 0){
			degrees = (i/100) * 360;
			console.log("i: " + i, degrees)
		}else{
			degrees = (i/160) * 360;
			console.log("i: " + i, degrees)
		}

		var myModule = `

		<div 
			class="patternUnit" 
			style="transform: rotate(${secRotate}deg);"
			>
			<div 
				class="patternUnit" 
				style="transform: rotate(${degrees}deg);
					background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,125,45,1) 100%);"
			></div>
		</div>
		`;


		var secRotate = ((i/40) * 100);


		var mySecondModule = `
			<div class="patternUnit">

				<div class="patternUnit" 
				style="transform: rotate(${secRotate}deg);
				background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,125,45,1) 100%);
				margin-bottom: 2vw;">
				</div>

			</div>
		`;

		myWrapper.insertAdjacentHTML('afterend' , mySecondModule);

		if(i % 2 === 0){
			myWrapper.insertAdjacentHTML('beforeend' , myModule);
		}else{
			myWrapper.insertAdjacentHTML('afterbegin' , myModule);
		}

		
		//myWrapper.innerHTML = myModule; // overrides the innerHTML content
	}



	// afterbegin (after the start of our wrapper)
	// beforeend (before the end of wrapper)

	// beforebegin (before a specific element starts)
	// afterend (after an element is completed)











