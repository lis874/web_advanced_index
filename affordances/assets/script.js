
var tagAmount = 0;

if(localStorage.getItem("tagAmount")){
	tagAmount = parseInt(localStorage.getItem("tagAmount")) + 1;
	console.log("test tagAMount",  tagAmount)
}

var tags = {};
var styles = "style_" + Math.ceil(Math.random()*3);


if(localStorage.getItem("tags")){
	tags = JSON.parse(localStorage.getItem("tags"));
		console.log("test tags",  tags)

	// add previous tags back to screen:

	for (var i = 0; i < tagAmount; i++) {
			
		if(tags["tag-" + i] !== undefined && tags["tag-" + i] !== null) {
			var newTag = `<div class="tag ${tags["tag-" + i].style}" id="tag-${i}" style="background-color:${tags["tag-" + i].color}; left:${tags["tag-" + i].position[0]}px; top:${tags["tag-" + i].position[1]}px;">
				<span > ${tags["tag-" + i].item} </span>
				<span > $${tags["tag-" + i].price}</span>
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



	var red = Math.round(Math.random()*300);
	var green = Math.round(Math.random()*300);
	var blue = Math.round(Math.random()*300);
	var newColor = `rgb(${red}, ${green}, ${blue})`;
	var styles = "style_" + Math.ceil(Math.random()*3);


    var newTag = `<div class="tag ${styles}" id="tag-${tagAmount}" style="background-color:${newColor}">
			<span > ${document.getElementById("user_input1").value} </span>
			<span > $${document.getElementById("user_input2").value}</span>
		</div>`;


		document.querySelector("body").insertAdjacentHTML('beforeend', newTag);

	

		var savedTag = {
			id: "tag-" + tagAmount,
			class: styles ,
			item: document.getElementById("user_input1").value,
			price: document.getElementById("user_input2").value,
			position: [0,0],
			color: newColor, 
		}

		tags["tag-" + tagAmount] = savedTag;

		console.log(tags);
		localStorage.setItem("tags", JSON.stringify(tags));

		tagAmount = tagAmount + 1;

		localStorage.setItem("tagAmount", tagAmount);

		

		localStorage.clear();





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


$(".tag").dblclick(function() {
  		var tags = localStorage.getItem('tags');
  		tags = JSON.parse(tags);

  		var tagId = $(this).attr("id");
  		delete tags[tagId];

  		// localStorage.removeItem(tags[tagId]);

  		localStorage.setItem('tags', JSON.stringify(tags));
	});

		
		
};






saveUserInfo();    









// function myFunction() {
//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "text");
//   x.setAttribute("value", "Hello World!");
//   document.body.appendChild(x);

// }
