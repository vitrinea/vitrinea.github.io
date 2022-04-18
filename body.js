const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
const landmarkContainer = document.getElementsByClassName('landmark-grid-container')[0];
const grid = new LandmarkGrid(landmarkContainer);

//DATABASE-------------------------------------------------------------------------------------------------------------------------

//test 2
var buzo_1 = new Image();
buzo_1.src = "./assets/dominic/buzo_1.png";

let buzo1hObject = {
    name : buzo_1,
    offset_X: 720,
    offset_Y: 180,
    size : 1000
  }
//test 3
var Camisa_1 = new Image();
Camisa_1.src = "./assets/dominic/Camisa_1.png";

let camisa1Object = {
    name : Camisa_1,
    offset_X: 770,
    offset_Y: 166,
    size : 1000
  }

// SELECCIONADOR DE OBJETOS
const eleccionDeObjecto = {
    1: buzo1hObject,
    2: camisa1Object
}

let idCarlitos = "2";
let id = eleccionDeObjecto[idCarlitos]  || eleccionDeObjecto[1] 

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
        console.log(id)
      let idModel = firstElement.getAttribute("id")
      id = eleccionDeObjecto[idModel] || eleccionDeObjecto[1] 
      /* let helper;
      if (parseInt(idModel) > 5 && parseInt(idModel) < 9) {
        helper = false
      }else{
        helper = true
      }
      positionCarlitos = helper; */
    });
  }
}

//PARAMETROS URL-------------------------------------------------------------------------------------------------------------------------

let parameters, modelId, modelPath;
function getParameter( parameterName ){
parameters = new URLSearchParams( window.location.search );
return parameters.get( parameterName );
}

//http://127.0.0.1:5500/?idModel=1&img=assets/dominic/camisa.jpg
//http://127.0.0.1:5500/body.html?idModel=1,2&img=assets/dominic/Buzo_1.png,assets/dominic/Camisa_1.png

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
    constructor(img, ptsx, ptsy, offset_X, offset_Y, size){
      this._img = img;
      this._ptsx = ptsx;
      this._ptsy = ptsy;
      this._offset_X = offset_X;
      this._offset_Y = offset_Y;
      this._size = size;
    }
    generation(){
      const operacionX = (this._ptsx * 1080) - this._offset_X
      const operacionY = (this._ptsy * 1080) - this._offset_Y
      canvasCtx.drawImage(this._img, operacionX, operacionY, this._size, this._size);
    }
}

//AR-------------------------------------------------------------------------------------------------------------------------
function onResults(results) {
    
  if (!results.poseLandmarks) {
    grid.updateLandmarks([]);
    return;
  }

  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  /* canvasCtx.drawImage(results.segmentationMask, 0, 0,
                      canvasElement.width, canvasElement.height); */

  // Only overwrite existing pixels.
  canvasCtx.globalCompositeOperation = 'source-in';
  canvasCtx.fillStyle = '#00FF00';
  canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

  // Only overwrite missing pixels.
  canvasCtx.globalCompositeOperation = 'destination-atop';
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);

  canvasCtx.globalCompositeOperation = 'source-over';
  drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
                 {color: '#00FF00', lineWidth: 4});
  drawLandmarks(canvasCtx, results.poseLandmarks,
                {color: '#FF0000', lineWidth: 2});



    if (results.poseLandmarks != undefined) {

    const rsX = results.poseLandmarks[11].x
    const rsY = results.poseLandmarks[11].y
    dominicConstructor(rsX, rsY);

    //canvasCtx.drawImage(shirt_test, rsX, rsY, 200, 200);
    }
    canvasCtx.restore();

  grid.updateLandmarks(results.poseWorldLandmarks);
}


//constructor del objeto
function dominicConstructor(x, y){
    //console.log("x: " + x + " / y: " + y)
    let obj = new ObjectGenerator(id.name, x, y, id.offset_X, id.offset_Y, id.size);
    obj.generation();
  }


const pose = new Pose({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
}});
pose.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  enableSegmentation: true,
  smoothSegmentation: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
pose.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await pose.send({image: videoElement});
  },
  width: 1080,
  height: 1080
});
camera.start();