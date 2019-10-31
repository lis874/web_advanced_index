
// fetch('https://api.openweathermap.org/data/2.5/weather?zip=10011&units=imperial&APPID=304f0ab7f8f51d03ea3494dcc3847c71')
// .then(function(results){
// 	return results.json()
// })
// .then(function(jsonResults){

// 	console.log("results: ", jsonResults)

// 	var weathertext = jsonResults.weather[0].main;
//     var weatherdescription = jsonResults.weather[0].description;
//     var windspeed = jsonResults.wind.speed;
//     var winddeg = jsonResults.wind.deg;
//     var tempmin = jsonResults.main.temp_min;
//     var tempmax = jsonResults.main.temp_max;
//     var temp = jsonResults.main.temp;
//     var pressure = jsonResults.main.pressure;
//     var humidity = jsonResults.main.humidity;
//     var cloudiness = jsonResults.clouds.all;


// 	document.querySelector(".weathertxt").insertAdjacentHTML('afterbegin', humidity)

// })
// .catch(function(error){
// 	console.log("error message:", error)
// })



/////////////////////////////////////////////////////////////////////




	var scene = new THREE.Scene();
	
    var camera = new THREE.PerspectiveCamera( 80, window.innerWidth/window.innerHeight, 0.1, 800 );

	var renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setClearColor("#3b3b3b");
		renderer.setSize( window.innerWidth, window.innerHeight );
			
	document.body.appendChild( renderer.domElement );

	window.addEventListener('resize', ()=> {
		renderer.setSize( window.innerWidth, window.innerHeight );
		camera.aspect = window.innerWidth / window.innerHeight;
			
	})



	var material = new THREE.MeshBasicMaterial( { 
		color: 0xffffff,
		// tranparent: true,
		wireframe:true,
		wireframeLinewidth: 5,
	} );


	var cube = new THREE.Mesh( new THREE.BoxBufferGeometry( 20, 20, 20 ), material );
		scene.add( cube );
		cube.position.set(-50, 30, 0) 
		camera.position.z = 100;

    var cube1 = new THREE.Mesh( new THREE.BoxBufferGeometry( 20, 20, 20 ), material );    
        scene.add( cube1 );
        cube1.position.set(20, -30,0) 
        camera.position.z = 100;
    
    var cube2 = new THREE.Mesh( new THREE.BoxBufferGeometry( 20, 20, 20 ), material );    
        scene.add( cube2 );
        cube2.position.set(50, 10,0) 
        camera.position.z = 100;

   


    var material1 = new THREE.MeshBasicMaterial( {
        color: 0xffffff,
        // tranparent: true,
        wireframe:true,
        wireframeLinewidth: 5,
        wireframeLinejoin: 'round',
        wireframeLinecap: 'round'
    } );

    var material1b = new THREE.MeshBasicMaterial( {
        color: 0x000000,
        // tranparent: true,
        wireframe:true,
        wireframeLinewidth: 5,
        wireframeLinejoin: 'round',
        wireframeLinecap: 'round'
    } );

    var sphere = new THREE.Mesh( new THREE.SphereGeometry( 3, 20, 10 ), material1 );
        scene.add( sphere );
        sphere.position.set(-50, 30, 0); 

    var sphere1 = new THREE.Mesh( new THREE.SphereGeometry( 3, 20, 10 ), material1 );
        scene.add( sphere1 );
        sphere1.position.set(20, -30, 0) 

    var sphere2 = new THREE.Mesh( new THREE.SphereGeometry( 3, 20, 10 ), material1 );
        scene.add( sphere2 );
        sphere2.position.set(50, 10, 0) 

    var sphere3 = new THREE.Mesh( new THREE.SphereGeometry( 3, 20, 10 ), material1b );
        scene.add( sphere3 );
        sphere3.position.set(50, 15, 0) 

    var sphere4 = new THREE.Mesh( new THREE.SphereGeometry( 3, 20, 50 ), material1 );
        scene.add( sphere4 );
        sphere4.position.set(30, -60, 0) 

    var sphere5 = new THREE.Mesh( new THREE.SphereGeometry( 3, 20, 10 ), material1b );
        scene.add( sphere5 );
        sphere5.position.set(30, 60, 0)

	var controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.minDistance = 1
		controls.maxDistance = 1000




	var animate = function () {
		requestAnimationFrame( animate );

        var time = Date.now();

        
     
        sphere.position.x = Math.cos( time * .001 ) * 20;
        sphere.position.y = Math.sin( time * .001 ) * 20;
        sphere.position.z = Math.sin( time * .001 ) * 20;

        sphere4.position.x = Math.cos( time * .001 ) * 60;
        sphere5.position.x = Math.cos( time * .0003 ) * 60;

        // sphere1.position.x = 1 * Math.cos( time * .001 + 10 ) * 30;
        // sphere1.position.y = 1 * Math.sin( time * .001 + 10) * 30;
        // sphere1.position.z = 1 * Math.sin( time * .001 + 10) * 30;

		// cube.rotation.x += 0.005;
		// cube.rotation.y += 0.005;
                
		sphere.rotation.x += 0.025;
		sphere.rotation.y += 0.025;

		controls.update()
		renderer.render( scene, camera );
	};

	animate();





/////////////////////////////////////////////////////////////////////




// // GLOBALS - ALLOCATE THESE OUTSIDE OF THE RENDER LOOP - CHANGED
// var cubes = [], marker, spline;
// var matrix = new THREE.Matrix4();
// var up = new THREE.Vector3( 0, 1, 0 );
// var axis = new THREE.Vector3( );
// var pt, radians, axis, tangent, path;

// // the getPoint starting variable - !important - You get me ;)
// var t = 0;

// //This function generates the cube and chooses a random color for it 
// //on initial load.

// function getCube(){
// // cube mats and cube
//     var mats = [];
//     for (var i = 0; i < 6; i ++) {
//         mats.push(new THREE.MeshBasicMaterial({color: 0x00ffff,
//              // tranparent: true,
//          wireframe:true,
//          wireframeLinewidth: 5,}));
//     }

//     var cube = new THREE.Mesh(
//         new THREE.CubeGeometry(10, 10, 10),
//         new THREE.MeshFaceMaterial( mats )
//     );

// return cube
// }


// var geometry1 = new THREE.SphereGeometry( 5, 10, 10 );
// var material = new THREE.MeshBasicMaterial( {
//              color: 0xffff00,
//              // tranparent: true,
//              wireframe:true,
//              wireframeLinewidth: 5,
//              wireframeLinejoin: 'round',
//              wireframeLinecap: 'round'
//          } );
// var sphere = new THREE.Mesh( geometry1, material );







// // Ellipse class, which extends the virtual base class Curve
// function Ellipse( xRadius, yRadius ) {

//     THREE.Curve.call( this );

//     // add radius as a property
//     this.xRadius = xRadius;
//     this.yRadius = yRadius;

//  }

//  Ellipse.prototype = Object.create( THREE.Curve.prototype );
//  Ellipse.prototype.constructor = Ellipse;

//  // define the getPoint function for the subClass
//  Ellipse.prototype.getPoint = function ( t ) {

//  var radians = 2 * Math.PI * t;

//  return new THREE.Vector3( this.xRadius * Math.cos( radians ),
//                           this.yRadius * Math.sin( radians ),
//                           0 );

// };

// //

// var mesh, renderer, scene, camera, controls;


// function init() {

// // renderer
// renderer = new THREE.WebGLRenderer();
// renderer.setClearColor("#3b3b3b");
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// // scene
// scene = new THREE.Scene();

// // camera
// camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
// camera.position.set( 20, 20, 20 );

// // controls
// controls = new THREE.OrbitControls( camera, renderer.domElement );
// controls.addEventListener( 'change', render ); // use if there is no animation loop
// controls.minDistance = 10;
// controls.maxDistance = 75;

// // light
// // var light = new THREE.PointLight( 0xffffff, 0.7 );
// // camera.add( light );
// // scene.add( camera ); // add to scene only because the camera  has a child

// // axes
// scene.add( new THREE.AxesHelper( 20 ) );
         
//     scene.add( sphere );
//     sphere.position.set(20,20,0) 

// ////////////////////////////////////////
// //      Create the cube               //
// ////////////////////////////////////////

// marker = getCube();
// marker.position.set(0,0,0);
// scene.add(marker);


// ////////////////////////////////////////
// //      Create an Extruded shape      //
// ////////////////////////////////////////

// // path
// path = new Ellipse( 30, 20 );

// // params
// var pathSegments = 70;
// var tubeRadius = 0.1;
// var radiusSegments = 16;
// var closed = true;

// var geometry = new THREE.TubeBufferGeometry( path, pathSegments, tubeRadius, radiusSegments, closed, );

// // material
// var material = new THREE.MeshPhongMaterial( {
//     color: 0x0080ff, 
// } );

// // mesh
// mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );

// //////////////////////////////////////////////////////////////////////////
// //       Create the path which is based on our shape above              //
// //////////////////////////////////////////////////////////////////////////

// //Please note that this red ellipse was only created has a guide so that I could  be certain that the square is true to the tangent and positioning.

// // Ellipse class, which extends the virtual base class Curve
//     var curve = new THREE.EllipseCurve(
//         0,  0,            // ax, aY
//         6, 11,           // xRadius, yRadius
//         0,  2 * Math.PI,  // aStartAngle, aEndAngle
//         false,            // aClockwise
//         0                 // aRotation
//     );

//     //defines the amount of points the path will have
//     var path2 = new THREE.Path( curve.getPoints( 100 ) );
//      geometrycirc = path2.createPointsGeometry( 100 );
//     var materialcirc = new THREE.LineBasicMaterial( {
//         color : 0xff0000,

//     } );

//     // Create the final object to add to the scene
//     var ellipse = new THREE.Line( geometrycirc, materialcirc );
//     ellipse.position.set(0,0,0);
//     scene.add( ellipse );

//     }

// function animate() {
// requestAnimationFrame(animate);

// render();
// }


// function render() {

//     var time = Date.now();
               
//         sphere.position.x = Math.cos( time * 0.001 ) * 30;
//         sphere.position.y = Math.sin( time * 0.001 ) * 30;
//         sphere.position.z = Math.sin( time * 0.001 ) * 30;

               

//     // set the marker position
//     pt = path.getPoint( t );

//     // set the marker position
//     marker.position.set( pt.x, pt.y, pt.z );

//     // get the tangent to the curve
//     tangent = path.getTangent( t ).normalize();

//     // calculate the axis to rotate around
//     axis.crossVectors( up, tangent ).normalize();

//     // calcluate the angle between the up vector and the tangent
//     radians = Math.acos( up.dot( tangent ) );

//     // set the quaternion
//     marker.quaternion.setFromAxisAngle( axis, radians );

//     t = (t >= 1) ? 0 : t += 0.002;

//     renderer.render( scene, camera );

// }

// init();
// animate();
















