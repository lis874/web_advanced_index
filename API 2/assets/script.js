
fetch('https://api.kanye.rest')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)

    var quote = jsonResults.quote;


// fetch('https://api.adviceslip.com/advice')
// .then(function(results){
//     return results.json()
// })
// .then(function(jsonResults){

//     console.log("results: ", jsonResults)

//     var quote = jsonResults.slip.advice;




//////////////////////////////////////////////////////////////////////////////




 opentype.load('assets/labmono-regular-web.ttf', function(err, font) {
        if (err) {
            alert('Font could not be loaded: ' + err);
        } else {
            var textToRender  = quote;
            var fontSize = 20;
            
            console.log(font.glyphs);



            var quotewords = quote.split(' '); 
            console.log(quotewords);

            // add each line (probably by character count):
            var quotelines = [];
            var templine = '';
            
            for (var i = 0; i < quotewords.length; i++) {
                if(templine.length < 15){ // add to this line if total is less than 20 characters
                    templine += quotewords[i] + ' ';
                }else{ // if above 20 characters:
                    quotelines.push(templine); // push templine to array
                    templine = quotewords[i]; // reset templine with overflowed word
                }
                if(i === quotewords.length + 1 ){ //if last element, add to quote
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

             // now for each line, you want to run snapPath:
                for (var i = 0; i < quotelines.length; i++) {
                    snapPath = font.getPath(quotelines[i], 0, (100 + (100*i)), 60);
                    doSnap(snapPath);
                    snapPath.draw(snapCtx);
                }
            
            })

        }



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

// function wrapText(context, text, x, y, maxWidth, lineHeight) {
//         var words = text.split(' ');
//         var line = '';

//         for(var n = 0; n < words.length; n++) {
//           var testLine = line + words[n] + ' ';
//           var metrics = context.measureText(testLine);
//           var testWidth = metrics.width;
//           if (testWidth > maxWidth && n > 0) {
//             context.fillText(line, x, y);
//             line = words[n] + ' ';
//             y += lineHeight;
//           }
//           else {
//             line = testLine;
//           }
//         }
//         context.fillText(line, x, y);
//       }
      
//       var canvas = document.getElementById('canvas1');
//       var context = canvas.getContext('2d');
//       var maxWidth = 500;
//       var lineHeight = 40;
//       var x = (canvas.width - maxWidth) / 2;
//       var y = 60;
//       var text = quote;

//       context.font = '36pt Calibri';
//       context.fillStyle = '#333';


// wrapText(context, quote, x, y, maxWidth, lineHeight);






})
.catch(function(error){
	console.log("error message:", error)
})


////////////////////////////////////////////////////////////////////////////////////
















