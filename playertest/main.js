import * as BABYLON from "babylonjs";

// Importer la bibliothèque Babylon.js

// Créer la scène
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

// Créer une caméra orthographique
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene
);
camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;

// Définir les dimensions de la caméra orthographique
const width = 10; // Largeur de la vue
const height = 10; // Hauteur de la vue
const aspectRatio = engine.getAspectRatio(camera);
camera.orthoTop = height / 2;
camera.orthoBottom = -height / 2;
camera.orthoLeft = (-width / 2) * aspectRatio;
camera.orthoRight = (width / 2) * aspectRatio;

// Créer les murs
const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
const wallWidth = 1;
const wallHeight = 5;

const leftWall = BABYLON.MeshBuilder.CreateBox(
  "leftWall",
  { width: wallWidth, height: wallHeight, depth: 0.1 },
  scene
);
leftWall.position.x = -width / 2;
leftWall.material = wallMaterial;

const rightWall = BABYLON.MeshBuilder.CreateBox(
  "rightWall",
  { width: wallWidth, height: wallHeight, depth: 0.1 },
  scene
);
rightWall.position.x = width / 2;
rightWall.material = wallMaterial;

const topWall = BABYLON.MeshBuilder.CreateBox(
  "topWall",
  { width: width, height: wallWidth, depth: 0.1 },
  scene
);
topWall.position.y = height / 2;
topWall.material = wallMaterial;

const bottomWall = BABYLON.MeshBuilder.CreateBox(
  "bottomWall",
  { width: width, height: wallWidth, depth: 0.1 },
  scene
);
bottomWall.position.y = -height / 2;
bottomWall.material = wallMaterial;

// Lancer le rendu de la scène
engine.runRenderLoop(() => {
  scene.render();
});

// Redimensionner le canvas lorsque la fenêtre est redimensionnée
window.addEventListener("resize", () => {
  engine.resize();
});
