var followMouse = function(){


	var box = $(".patternUnit");


	$(document).mousemove(function(e){    
    
		box.each(function() {
		
 			var boxCenter=[$(this).offset().left+$(this).width()/2, $(this).offset().top+$(this).height()/2];
		
			var angle = Math.atan2(e.pageX- boxCenter[0],- (e.pageY- boxCenter[1]) )*(180/Math.PI);	 

			$(this).css({ 'transform': 'rotate(' + angle + 'deg)'});  

		})

   
	});

}


for (var i = 0; i < 351; i++) {
	
	$('#wrapper').append('<div class="patternUnit"></div>');

	if(i == 350){
	 followMouse();
	}
}

$('#wrapper').click(function(){
    $('.patternUnit').toggleClass('largerWidth');
});
/*

	var smoething = document.querySelectorAll(".patternUnit")

	for(){
		
		// boxcenter
		get its angle
		apply angle to something[i]

	}

*/

// $(document).ready(function () {

//     for (var i = 0; i < 100; i++) {
//         $('body').append('<div class="patternUnit"><');
//     }
// });



// wrapper.onmouseover = function(event) {
//   let target = event.target;
//   target.style.transform = 'rotate(180deg)';
 
// };



// 	var j = 0; 
// 	var myAppendingFunction = function(){


	
// 	var rotation = Math.round((j/10) * 100);
// 	document.getElementById("wrapper").insertAdjacentHTML("beforeend", ` 

// 			<div class="patternUnit">

// 				<div class="patternUnit" 
// 				style="transform: rotate(${rotation}deg);
// 				background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
// 				margin-bottom: -2vw;">
// 				</div>

// 			</div>`);


// 	if(j >= 200){ // defining the maximum amount of cycles
// 		console.log("we're done!");
// 		clearInterval(myAnimating);
// 	}

// 	j++;

// }


// var myAnimating = setInterval(myAppendingFunction, 20);




////////////////////////////////////////////////////////////////////



// 	// event listener: 
// window.addEventListener("mousemove", backgroundColorChange)


// (function ($) {
//     var timeout;
//     $(document).on('mousemove', function (event) {
//         if (timeout !== undefined) {
//             window.clearTimeout(timeout);
//         }
//         timeout = window.setTimeout(function () {
//             // trigger the new event on event.target, so that it can bubble appropriately
//             $(event.target).trigger('mousemoveend');
//         }, 100);
//     });
// }(jQuery));



// <g id="pupil" class="pupil-wrapper" style="transform: translateX(173.148px) translateY(-71.085px);">
   
//   </g>








