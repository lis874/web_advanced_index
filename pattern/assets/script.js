var myWrapper = document.getElementById("wrapper"); 

for (var i = 0; i < 800; i++) {
		// within our string, we are using the variable "i" to generate numbers that output inline css values
	myWrapper.innerHTML += '<div class="patternUnit" style="background-color: rgb('+ (255 - (i*10)) +',' + (i*10) + ',0); transform: rotate('+ (20 + i) +'deg);"></div>';

}

