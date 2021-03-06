var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight,
									0.1, 1000);
var renderer = new THREE.WebGLRenderer();

//boje
var black = "rgb(0,0,0)";
var white = "rgb(255,255,255)";
var red = "rgb(255,0,0)";
var green= "rgb(10, 255, 10)";

//postavlja bolju scene
renderer.setClearColor(black);
renderer.setSize(window.innerWidth, window.innerHeight);

//prikazuje osi x,y,z
var axes = new THREE.AxesHelper(30);
scene.add(axes);

//stavljamo plane u scenu
var planeGeometry = new THREE.PlaneGeometry(70,30,1,1,);
var planeMaterial = new THREE.BasicMeshMaterial(green);
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);


//namjestamo kameru da se vidi x,y,z osi
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 50;
camera.lookAt(scene.position);

$("#prva_igra").append(renderer.domElement);
renderer.render(scene, camera);
