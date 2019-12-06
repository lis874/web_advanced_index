



var tagAmount = 0;

if(localStorage.getItem("tagAmount")){
	tagAmount = parseInt(localStorage.getItem("tagAmount")) + 1;
	console.log("test tagAMount",  tagAmount)
}

var tags = {};

if(localStorage.getItem("tags")){
	tags = JSON.parse(localStorage.getItem("tags"));
		console.log("test tags",  tags)

	// add previous tags back to screen:

	for (var i = 0; i < tagAmount; i++) {
			
		if(tags["tag-" + i] !== undefined && tags["tag-" + i] !== null) {
			var newTag = `<div class="tag" id="tag-${i}" style="left:${tags["tag-" + i].position[0]}px; top:${tags["tag-" + i].position[1]}px;">
				<span class="item"> ${tags["tag-" + i].item} </span>
				<span class="price"> $${tags["tag-" + i].price}</span>
			</div>`;

			document.querySelector("body").insertAdjacentHTML('beforeend', newTag);

			var $draggable = $('.tag').draggabilly();

			$draggable.each(function(){
	 			$(this).on( 'dragMove', function() {
		    		var draggie = $(this).data('draggabilly');
		    		// console.log( 'dragMove', draggie.position.x, draggie.position.y );

		    		tags[$(this).attr('id')].position = [draggie.position.x, draggie.position.y];
		    		localStorage.setItem("tags", JSON.stringify(tags));

	  			})
 			})

		} 
	}

}


function showInput() {

	var red = Math.round(Math.random()*255);
	var green = Math.round(Math.random()*255);
	var blue = Math.round(Math.random()*255);
	var newColor = `rgb(${red}, ${green}, ${blue})`;

    var newTag = `<div class="tag" id="tag-${tagAmount}" style="background-color:${newColor}">
			<span class="item"> ${document.getElementById("user_input1").value} </span>
			<span class="price"> $${document.getElementById("user_input2").value}</span>
		</div>`;


		// console.log(newTag)

		document.querySelector("body").insertAdjacentHTML('beforeend', newTag);

		// save that item to localstorage

		var savedTag = {
			id: "tag-" + tagAmount,
			item: document.getElementById("user_input1").value,
			price: document.getElementById("user_input2").value,
			position: [0,0],
		}

		tags["tag-" + tagAmount] = savedTag;

		console.log(tags);
		localStorage.setItem("tags", JSON.stringify(tags));

		tagAmount = tagAmount + 1;

		localStorage.setItem("tagAmount", tagAmount);




	$(function() {
 		var $draggable = $('.tag').draggabilly();
 		
 		$draggable.each(function(){
 			$(this).on( 'dragMove', function() {
	    		var draggie = $(this).data('draggabilly');
	    		// console.log( 'dragMove', draggie.position.x, draggie.position.y );

	    		tags[$(this).attr('id')].position = [draggie.position.x, draggie.position.y];
	    		localStorage.setItem("tags", JSON.stringify(tags));

	  		})

 		})


	});

}



var saveUserInfo = function(){
	if (!storageAvailable('localStorage')){ return; }


$(this).dblclick(function() {
  localStorage.removeItem($(this));
});
		
		
};






saveUserInfo();    









// function myFunction() {
//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "text");
//   x.setAttribute("value", "Hello World!");
//   document.body.appendChild(x);

// }
