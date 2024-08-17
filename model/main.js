import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);

// Set camera position and lookAt
camera.position.set(0, 0, 30);
camera.lookAt(0, 0, 0);

/* ALR MAIN SETUP DONE */

// Use GLTFLoader to load the glb file
const loader = new GLTFLoader();
let cape;

loader.load("scf.glb", (gltf) => {
  cape = gltf.scene;

  // Adjust the scale of your object to increase its size
  cape.scale.set(1, 1, 1); // You can adjust the values according to your preference

  // Adjust the position and rotation of your object
  cape.position.set(0, 0, 0);
  cape.rotation.set(0, 0, 0); // Adjust the initial rotation here
  scene.add(cape);
});

// Add ambient light for better visibility
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

/* loop */
function animate() {
  requestAnimationFrame(animate);

  // Rotate the object from left to right during the animation loop
  if (cape) {
    cape.rotation.y += 0.02;
  }

  // Adjust the clear color for the background
  renderer.setClearColor(0x1a1a1a); // Set the desired background color (dark gray in this case)

  renderer.render(scene, camera);
}

animate();