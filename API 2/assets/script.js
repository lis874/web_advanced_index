

fetch('https://api.kanye.rest')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)

	document.querySelector(".quoteBox").insertAdjacentHTML('afterbegin', `
		${jsonResults.quote} 
	`)

    var quote = jsonResults.quote;


//////////////////////////////////////////////////////////////////////////////


var resizeFunction = function(canvas){
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    if (width != canvas.width || height != canvas.height){
        canvas.width = width;
        canvas.height = height;
    }
}

var yourCanvas = document.querySelector("#canvas");

resizeFunction(yourCanvas);

window.addEventListener("resize", function(){
    resizeFunction(yourCanvas);
})

 


opentype.load('assets/labmono-regular-web.ttf', function(err, font) {
    
    var amount, glyph, ctx, x, y, fontSize;

    if (err) {
        alert('Font could not be loaded: ' + err);
    } else {

        var canvas = document.getElementById('canvas');

        ctx = canvas.getContext('2d');


        var path = font.getPath( quote , 50, 100, 100);
        var points = font.drawPoints(ctx, quote, 50, 100, 100);
        
        console.log(font.glyphs);
        var G = font.glyphs.get(42);

        console.log(G.getPath())

        // G.getPath().commands[0].x = 500;
        // G.getPath().commands[0].y = 500;

        // ctx.clearRect(0, 0, 940, 300); // used to clear the canvas before redrawing


        G.draw(ctx, 100, 300, 200);
        G.drawPoints(ctx, 100, 300, 200);
        path.draw(ctx);

        // we want to get the specific font getPath

        // then use the path (doSnap)

        // doSnap cycles through each letter, and updates each command (x and y coordinates)
        
        function snapDistanceChanged(e) {
            snapDistance = e.value;
            document.getElementById('snapDistance').innerHTML = '' + snapDistance;
            renderText();
        }

        function snap(v, distance, strength) {
            return (v * (1.0 - strength)) + (strength * Math.round(v / distance) * distance);
        }

        
        function doSnap(path) {
            var i;
            var snapStrength = 80
            var strength = snapStrength / 100.0;
            for (i = 0; i < path.commands.length; i++) {
                var cmd = path.commands[i];
            if (cmd.type !== 'Z') {
                cmd.x = snap(cmd.x + snapX, snapDistance, strength) - snapX;
                cmd.y = snap(cmd.y + snapY, snapDistance, strength) - snapY;
            }   
            if (cmd.type === 'Q' || cmd.type === 'C') {
                cmd.x1 = snap(cmd.x1 + snapX, snapDistance, strength) - snapX;
                cmd.y1 = snap(cmd.y1 + snapY, snapDistance, strength) - snapY;
            }
            if (cmd.type === 'C') {
                cmd.x2 = snap(cmd.x2 + snapX, snapDistance, strength) - snapX;
                cmd.y2 = snap(cmd.y2 + snapY, snapDistance, strength) - snapY;
            }
        }
    }




        window.addEventListener('mousemove', function(){

            // update the snap (probably with Math.random())

            // redraw
            // ctx.clearRect(0, 0, 940, 300);
            // path.draw(ctx)

            function renderText() {
               
                if (drawPoints) {
                    font.drawPoints(ctx, quote, 50, 50, 50);
                }
                if (drawMetrics) {
                    font.drawMetrics(ctx, quote, 50, 50, 50);
                }

                snapPath = font.getPath(quote, 0, 200, 30);
                doSnap(snapPath);
                var snapCtx = document.getElementById('canvas').getContext('2d');
                snapCtx.clearRect(0, 0, 940, 300);
                snapPath.draw(snapCtx);
            }

        })

    }
});





})
.catch(function(error){
	console.log("error message:", error)
})


////////////////////////////////////////////////////////////////////////////////////


















