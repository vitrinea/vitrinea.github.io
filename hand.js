const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

//DATABASE-------------------------------------------------------------------------------------------------------------------------

//test
var hand_test = new Image();
hand_test.src = "./assets/hand.png";

//watches
var apple_watch = new Image();
apple_watch.src = "./assets/watches/apple_watch.png";
var rolex_watch = new Image();
rolex_watch.src = "./assets/watches/rolex.png";
var silver_watch = new Image();
silver_watch.src = "./assets/watches/silver.png";

//bracelets
var single_bracelet = new Image();
single_bracelet.src = "./assets/bracelets/single.png";
var multiple_bracelet = new Image();
multiple_bracelet.src = "./assets/bracelets/multiple.png";

//rings
var diamond_ring = new Image();
diamond_ring.src = "./assets/rings/diamond.png";
var diamond1_ring = new Image();
diamond1_ring.src = "./assets/rings/diamond1.png";
var oval_ring = new Image();
oval_ring.src = "./assets/rings/oval.png";

let appleWatchObject = {
  name : apple_watch,
  offset: 150,
  size : 320
}
let rolexWatchObject = {
  name : rolex_watch,
  offset: 95,
  size : 200
}
let silverWatchObject = {
  name : silver_watch,
  offset: 135,
  size : 260
}
let singleBraceletObject = {
  name : single_bracelet,
  offset: 120,
  size : 240
}
let multipleBraceletObject = {
  name : multiple_bracelet,
  offset: 125,
  size : 260
}
let diamondRingObject = {
  name : diamond_ring,
  offset: 50,
  size : 100
}
let diamond1RingObject = {
  name : diamond1_ring,
  offset: 50,
  size : 90
}
let ovalRingObject = {
  name : oval_ring,
  offset: 50,
  size : 95
}

const eleccionDeObjecto = {
  1: appleWatchObject,
  2: rolexWatchObject,
  3: silverWatchObject,
  4: singleBraceletObject,
  5: multipleBraceletObject,
  6: diamondRingObject,
  7: diamond1RingObject,
  8: ovalRingObject
}

let idCarlitos = "7";
let id = eleccionDeObjecto[idCarlitos]  || eleccionDeObjecto[2] 
let positionCarlitos;

//ICONO-------------------------------------------------------------------------------------------------------------------------

let optionsPanel = document.getElementById("firstInsert");

class IconsGenerator{
  constructor(idModel, srcBtn){
    this._srcBtn = srcBtn;
    this._idModel = idModel;
  }
  
  vitrinea(){
    console.log(this._idModel)
    let firstElement = document.createElement("img");
    firstElement.setAttribute("id", this._idModel);
    firstElement.setAttribute("src", this._srcBtn);
    optionsPanel.appendChild(firstElement);

    let Button = document.getElementById(this._idModel);
    Button.addEventListener("click", function(){  
      let idModel = firstElement.getAttribute("id")
      id = eleccionDeObjecto[idModel] || eleccionDeObjecto[2] 
      let helper;
      if (parseInt(idModel) > 5 && parseInt(idModel) < 9) {
        helper = false
      }else{
        helper = true
      }
      positionCarlitos = helper;
    });
  }
}

//PARAMETROS URL-------------------------------------------------------------------------------------------------------------------------

let parameters, modelId, modelPath;
function getParameter( parameterName ){
parameters = new URLSearchParams( window.location.search );
return parameters.get( parameterName );
}

//http://127.0.0.1:5500/?idModel=1&img=assets/watches/apple_watch.png
//http://127.0.0.1:5500/?&idModel=1,2,3,4,5,6,7,8&img=assets\watches\apple_watch.png,assets\watches\rolex.png,assets\watches\silver.png,assets\bracelets\single.png,assets\bracelets\multiple.png,assets\rings\diamond.png,assets\rings\diamond1.png,assets\rings\oval.png

modelId = getParameter("idModel");
modelPath = getParameter("img");

let arrayModelId, arrayModelPath;

if (modelId != null) {
  arrayModelId = modelId.split(",");
  arrayModelPath = modelPath.split(",");
}else{
  arrayModelId = 0
  arrayModelPath = 0
}

let arrayItems = [];

for (let i = 0; i < arrayModelId.length; i++) {
  let objeto = new IconsGenerator(arrayModelId[i], arrayModelPath[i])
  objeto.vitrinea();
  arrayItems.push([i]);
}

console.log(arrayItems);


//OBJETO-------------------------------------------------------------------------------------------------------------------------


class ObjectGenerator{
  constructor(img, ptsx, ptsy, offset, size){
    this._img = img;
    this._ptsx = ptsx;
    this._ptsy = ptsy;
    this._offset = offset;
    this._size = size;
  }
  generation(){
    const operacionX = (this._ptsx * 1080) - this._offset
    const operacionY = (this._ptsy * 1080) 
    canvasCtx.drawImage(this._img, operacionX, operacionY, this._size, this._size);
  }
}

function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

  if (results.multiHandLandmarks) {

    if (results.multiHandLandmarks[0] != undefined) {
      handInstruction(true)
      const pts = results.multiHandLandmarks[0];

      const ptsWristX = pts[0].x
      const ptsWristY = pts[0].y

      const ptsFingersX = pts[14].x
      const ptsFingersy = pts[14].y

      if (positionCarlitos) {
        wristConstructor(ptsWristX, ptsWristY);
      }else{
        fingerConstructor(ptsFingersX, ptsFingersy);
      }

      
      const ptsPalmX = pts[9].x
      const ptsPalmY = pts[9].y
      const ptsIndexX = pts[8].x
      const ptsIndexY = pts[8].y

      distance(ptsWristX, ptsWristY, ptsPalmX, ptsPalmY, ptsIndexX, ptsIndexY); //HAND GESTURES

        /* for (const landmarks of results.multiHandLandmarks) {
          drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
          {color: '#00FF00', lineWidth: 5});
          drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
          } */
    }else{
    handInstruction(false)
  }

  }
  canvasCtx.restore();
}

//HAND GESTURES
let indice = 1;
let condicional = true;
let helper;

function distance(WristX, WristY, PalmX, PalmY, IndexX, IndexY){

  //condicional = true;
  let distancePalm = Math.sqrt(Math.pow((PalmX - WristX), 2) + Math.pow((PalmY - WristY), 2))
  //console.log("palm " + distancePalm)
  let distanceIndex = Math.sqrt(Math.pow((IndexX - WristX), 2) + Math.pow((IndexY - WristY), 2))
  //console.log("finger " + distanceIndex)

  if (distancePalm > distanceIndex && condicional == true) { //mano abierta
    console.log("cerrada")
    cambiarObjeto();
  } else {                            //mano cerrada
    console.log("abierta")
    
  }
}

function cambiarObjeto(){
  condicional = false;
  id = eleccionDeObjecto[indice] || eleccionDeObjecto[1] 

  if (indice == 9) {
    indice = 1
  }

  if (indice> 5 && indice< 9) {
    helper = false
  }else{
    helper = true
  }
  positionCarlitos = helper;
  console.log(helper)

  console.log("indice es " + indice)
  indice = indice + 1;


  setTimeout(() => {  condicional = true; }, 2000);
  
}


function handInstruction(state){
  if (state) {
    canvasCtx.drawImage(hand_test, 50, 50, 0, 0);
  } else {
    canvasCtx.drawImage(hand_test, 40, 150,300, 400);
  }
}

function wristConstructor(x, y){
  console.log("x: " + x + " / y: " + y)
  let obj = new ObjectGenerator(id.name, x, y, id.offset, id.size);
  obj.generation();
}
function fingerConstructor(x, y){
  let obj = new ObjectGenerator(id.name, x, y, id.offset, id.size);
  obj.generation();
}


const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: videoElement});
  },
  width: 1080,
  height: 1080
});
camera.start();