//POO---------------------------------------------------------------------------------------------------------------------------------

let sceneEl = document.querySelector('a-scene');
let optionsPanel = document.getElementById("firstInsert");
let asset = document.getElementById("secondtInsert");

class Modelo{
    constructor(idBtn, srcBtn, idAsset, srcAsset, idModelAR){
        this._idBtn = idBtn;
        this._srcBtn = srcBtn;
        this._idAsset = idAsset;
        this._srcAsset = srcAsset;
        this._idModelAR = "#"+idModelAR;
    }

    vitrinea(){
        let firstElement = document.createElement("img");
        firstElement.setAttribute("id", this._idBtn);
        firstElement.setAttribute("src", this._srcBtn);
        optionsPanel.appendChild(firstElement);

        let secondElement = document.createElement("a-asset-item");
        secondElement.setAttribute("id", this._idAsset);
        secondElement.setAttribute("src", this._srcAsset);
        asset.appendChild(secondElement);

        let Object = sceneEl.querySelector(this._idModelAR);
        let Button = document.getElementById(this._idBtn);
        Button.addEventListener("click", function(){  
            if (Object.getAttribute('visible')) { 
                Object.setAttribute('visible', false);
                Button.setAttribute("class", "unselectedButton");  
            }else{
                Object.setAttribute('visible', true);
                Button.setAttribute("class", "selectedButton"); 
            }
        });
    }
}


//PARAMETROS URL-------------------------------------------------------------------------------------------------------------------------

let parameters, glassesParameter, hatsParameter, necklacesParameter, earringsParameter, img, model, idBtnURL, idModel, idAR;
function getParameter( parameterName ){
parameters = new URLSearchParams( window.location.search );
return parameters.get( parameterName );
}

glassesParameter = getParameter("gls");
hatsParameter = getParameter("hat");
necklacesParameter = getParameter("nec");
earringsParameter = getParameter("ear");

idBtnURL = getParameter("idBtn");
img = getParameter("img");
idModel = getParameter("idModel");
model = getParameter("model");
idAR = getParameter("idAR");

//OBJETOS-----------------------------------------------------------------------------------------------------------------------------
// una gafa
//http://127.0.0.1:5500/index.html?gls=1&img=https://raw.githubusercontent.com/vitrinea/vitrinea.github.io/main/images/sunGlasses.png&model=https://raw.githubusercontent.com/vitrinea/vitrinea.github.io/main/sunGlasses/scene.gltf&idBtn=sunGlassesBtn&idModel=sunGlassesModel&idAR=sunGlasses&trackingAR=%3Ca-gltf-model%20visible=%22false%22%20rotation=%220%200%200%22%20position=%220%200%20-0.45%22%20scale=%220.008%200.008%200.008%22%20src=%22#sunGlassesModel%22%20id=%22sunGlasses%22%3E%3C/a-gltf-model%3E

// dos gafas
//http://127.0.0.1:5500/index.html?img=https://raw.githubusercontent.com/vitrinea/vitrinea.github.io/main/images/woodGlasses.png,https://raw.githubusercontent.com/vitrinea/vitrinea.github.io/main/images/sunGlasses.png&model=https://raw.githubusercontent.com/vitrinea/vitrinea.github.io/main/woodGlasses/scene.gltf,https://raw.githubusercontent.com/vitrinea/vitrinea.github.io/main/sunGlasses/scene.gltf&idBtn=woodGlassesBtn,sunGlassesBtn&idModel=woodGlassesModel,sunGlassesModel&idAR=woodGlasses,sunGlasses


//Split-----------------------------------------------------------------------------------------------------------------------------

// let arrayidBtnURL = idBtnURL.split(",");
let arrayimg = img.split(",");
let arrayidModelURL = idModel.split(",");
let arraymodel = model.split(",");
let arrayidAR = idAR.split(",");
//document.getElementById('thirdInsert').innerHTML= '<a-gltf-model visible="false" rotation="0 0 0" position="0 0 -0.45" scale="0.008 0.008 0.008" src="#sunGlassesModel" id="sunGlasses"></a-gltf-model>          <a-gltf-model visible="false" rotation="0 0 0" position="0 0 -0.46" scale="0.53 0.53 0.53" src="#normalGlassesModel" id="normalGlasses"></a-gltf-model>                      <a-gltf-model visible="false" rotation="0 0 0" position="0 0 -0.1" scale="0.52 0.52 0.52" src="#woodGlassesModel" id="woodGlasses"></a-gltf-model>';


let arrayItems = [];


for (let i = 0; i < arrayidAR.length; i++) {
    let objeto = new Modelo(i, arrayimg[i],  arrayidModelURL[i], arraymodel[i], arrayidAR[i]);
    arrayItems.push(arrayidAR[i]);
    objeto.vitrinea();
}

console.log(arrayItems);
