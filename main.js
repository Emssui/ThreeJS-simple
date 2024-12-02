import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF00FF } );
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material );

const controls = new OrbitControls(camera, renderer.domElement);

cube.position.x = -2
cube2.position.x = 2;

scene.add( cube );
scene.add( cube2 );

camera.position.z = 5;

controls.update();

controls.keys = {
	LEFT: 'ArrowLeft', //left arrow
	UP: 'ArrowUp', // up arrow
	RIGHT: 'ArrowRight', // right arrow
	BOTTOM: 'ArrowDown' // down arrow
}

controls.enableDamping = true;

controls.dampingFactor = 0.01;

function animate() {
	cube.rotation.x += 0.06;
    cube2.rotation.y += 0.06;
    controls.update();

	renderer.render( scene, camera );
}
