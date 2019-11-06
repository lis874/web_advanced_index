
fetch('https://api.kanye.rest')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)

    var quote = jsonResults.quote;




//////////////////////////////////////////////////////////////////////////////


var loadFonts = function(){

}


 opentype.load('assets/labmono-regular-web.ttf', function(err, font) {
        if (err) {
            alert('Font could not be loaded: ' + err);
        } else {
            var textToRender  = quote;
            var fontSize = 20;
            
            console.log(font.glyphs);



            var quotewords = quote.split(' '); 
            console.log(quotewords);

            var quotelines = [];
            var templine = '';
            
            for (var i = 0; i < quotewords.length; i++) {
                if(templine.length + quotewords[i].length < 25){ 
                    templine += quotewords[i] + ' ';
                }else{ 
                    quotelines.push(templine); 
                    templine = quotewords[i] + ' '; 
                }

                if(i === quotewords.length - 1 ){ 
                    quotelines.push(templine);
                }
            }

             console.log(quotelines);



            window.addEventListener('mousemove', function(e){

            snapDistance = e.clientY ;
            // snapStrength = e.clientY;

            var options = {
                kerning: true,
                hinting: false,
                features: {
                liga: true,
                rlig: true
                }
            }

            var snapCtx = document.getElementById('canvas').getContext('2d');
            snapCtx.clearRect(0, 0, 2000, 2000);
            // snapPath = font.getPath(quote, 0, 200, 40);
            // doSnap(snapPath);
            // snapPath.draw(snapCtx);


                for (var i = 0; i < quotelines.length; i++) {
                    snapPath = font.getPath(quotelines[i], 0, (100 + (100*i)), 60);
                    doSnap(snapPath);
                    snapPath.draw(snapCtx);
                }
            
            })

        }




loadFontsFunction('assets/labmono-regular-web.ttf');

var fonts = [
            'assets/EBGaramond-Regular.ttf',
            'assets/labmono-regular-web.ttf',
            'assets/NotoSerif-Black.ttf'

            ];

var counter = 0;
setInterval(function(){

    loadFontsFunction(fonts[counter]);

    counter++;
    if(counter <= fonts.length){
        counter = 0;
    }

}, 3000)






    var snapX = 0;
    var snapY = 0;
    var snapDistance = 50;
    var snapStrength = 50;


    function snap(v, distance, strength) {
        return (v * (1.0 - strength)) + (strength * Math.round(v / distance) * distance);
    }

    function doSnap(path) {
        
        var i;
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



   
    });






})
.catch(function(error){
	console.log("error message:", error)
})


////////////////////////////////////////////////////////////////////////////////////
















