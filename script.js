let sceneEl = document.querySelector('a-scene');




let parameters, glassesParameter, hatsParameter, necklacesParameter, earringsParameter;

function getParameter( parameterName ){
parameters = new URLSearchParams( window.location.search );
return parameters.get( parameterName );
}

glassesParameter = getParameter("gls");
console.log(glassesParameter)
hatsParameter = getParameter("hat");
console.log(hatsParameter)
necklacesParameter = getParameter("nec");
console.log(necklacesParameter)
earringsParameter = getParameter("ear");
console.log(earringsParameter)

let optionsPanel = document.getElementById("firstInsert");
let asset = document.getElementById("secondtInsert");
//let entity = document.getElementById("thirdInsert");


document.body.onload = gafasGod();
document.body.onload = earringsGod();
//document.body.onload = 

function gafasGod () {

    switch (parseInt(glassesParameter)) {
        case 1:
          let firstElement = document.createElement("img");
          firstElement.setAttribute("id", "sunGlassesBtn");
          firstElement.setAttribute("src", "images/sun.png");
          optionsPanel.appendChild(firstElement);
      
          let secondElement = document.createElement("a-asset-item");
          secondElement.setAttribute("id", "sunGlassesModel");
          secondElement.setAttribute("src", "./sunGlasses/scene.gltf");
          asset.appendChild(secondElement);
  
          
          let sunGlassesObject = sceneEl.querySelector('#sunGlasses');
          let sunGlassesButton = document.getElementById("sunGlassesBtn");
          sunGlassesButton.addEventListener("click", function(){  
              interactGlasses(sunGlassesObject, sunGlassesButton)
              console.log("entre")
          });
              break;

        case 2:
        let firstElement2 = document.createElement("img");
        firstElement2.setAttribute("id", "woodGlassesBtn");
        firstElement2.setAttribute("src", "./images/wood.png");
        optionsPanel.appendChild(firstElement2);
    
        let secondElement2 = document.createElement("a-asset-item");
        secondElement2.setAttribute("id", "woodGlassesModel");
        secondElement2.setAttribute("src", "./woodGlasses/scene.gltf");
        asset.appendChild(secondElement2);

        
        let woodGlassesObject = sceneEl.querySelector('#woodGlasses');
        let woodGlassesButton = document.getElementById("woodGlassesBtn");
        woodGlassesButton.addEventListener("click", function(){   
            interactGlasses(woodGlassesObject, woodGlassesButton)
        });
            break;

        case 3:
            let firstElement3 = document.createElement("img");
            firstElement3.setAttribute("id", "normalGlassesBtn");
            firstElement3.setAttribute("src", "./images/normal.png");
            optionsPanel.appendChild(firstElement3);
        
            let secondElement3 = document.createElement("a-asset-item");
            secondElement3.setAttribute("id", "normalGlassesModel");
            secondElement3.setAttribute("src", "./normalGlasses/scene.gltf");
            asset.appendChild(secondElement3);
    
            let normalGlassesObject = sceneEl.querySelector('#normalGlasses');
            let normalGlassesButton = document.getElementById("normalGlassesBtn");
            normalGlassesButton.addEventListener("click", function(){ 
                interactGlasses(normalGlassesObject, normalGlassesButton)
            });
                break;
  
        default:
            break;
    }      
  }
function earringsGod () {

    switch (parseInt(earringsParameter)) {
        case 1:
        let firstElement = document.createElement("img");
        firstElement.setAttribute("id", "bimboEarringBtn");
        firstElement.setAttribute("src", "./images/bimbo.png");
        optionsPanel.appendChild(firstElement);
    
        let secondElement = document.createElement("a-asset-item");
        secondElement.setAttribute("id", "bimboEarringModel");
        secondElement.setAttribute("src", "./bimbo/sceneEdited.glb");
        asset.appendChild(secondElement);

        let bimboEarringObject = sceneEl.querySelector('#bimboEarring');
        let bimboEarringButton = document.getElementById("bimboEarringBtn");
        bimboEarringButton.addEventListener("click", function(){
            interactEarrings(bimboEarringObject, bimboEarringButton)
        });
            break;

        case 2:
        let firstElement2 = document.createElement("img");
        firstElement2.setAttribute("id", "lvEarringBtn");
        firstElement2.setAttribute("src", "./images/LV.png");
        optionsPanel.appendChild(firstElement2);
    
        let secondElement2 = document.createElement("a-asset-item");
        secondElement2.setAttribute("id", "lvEarringModel");
        secondElement2.setAttribute("src", "./LV/sceneEdited.glb");
        asset.appendChild(secondElement2);

        let lvEarringObject = sceneEl.querySelector('#lvEarring');
        let lvEarringButton = document.getElementById("lvEarringBtn");
        lvEarringButton.addEventListener("click", function(){
            interactEarrings(lvEarringObject, lvEarringButton)
        });
            break;

        case 3:
        let firstElement3 = document.createElement("img");
        firstElement3.setAttribute("id", "topitoEarringBtn");
        firstElement3.setAttribute("src", "./images/topito.png");
        optionsPanel.appendChild(firstElement3);
    
        let secondElement3 = document.createElement("a-asset-item");
        secondElement3.setAttribute("id", "topitoEarringModel");
        secondElement3.setAttribute("src", "./topito/sceneEdited2.glb");
        asset.appendChild(secondElement3);

        let topitoEarringObject = sceneEl.querySelector('#topitoEarring');
        let topitoEarringButton = document.getElementById("topitoEarringBtn");
        topitoEarringButton.addEventListener("click", function(){
            interactEarrings(topitoEarringObject, topitoEarringButton)
        });
            break;
  
        default:
            break;
    }      
  }







/* let cancelBtnButton = document.getElementById("cancelBtn");
cancelBtnButton.addEventListener("click", function(){  
    interactNone();
}); */

//GLASSES------------------------------------------------------







/* let glassesModels = [sunGlassesObject, normalGlassesObject, woodGlassesObject]; 
let glassesButtons = [sunGlassesButton, normalGlassesButton, woodGlassesButton]; */




//HATS------------------------------------------------------

/* let hipHopHatObject = sceneEl.querySelector('#hipHopHat');
let hipHopHatButton = document.getElementById("hipHopHatBtn");
hipHopHatButton.addEventListener("click", function(){
    interactHats(hipHopHatObject, hipHopHatButton)
});

let noelHatObject = sceneEl.querySelector('#noelHat');
let noelHatButton = document.getElementById("noelHatBtn");
noelHatButton.addEventListener("click", function(){
    interactHats(noelHatObject, noelHatButton)
});

let cowboyHatObject = sceneEl.querySelector('#cowboyHat');
let cowboyHatButton = document.getElementById("cowboyHatBtn");
cowboyHatButton.addEventListener("click", function(){
    interactHats(cowboyHatObject, cowboyHatButton)
});

let hatsModels = [hipHopHatObject, noelHatObject, cowboyHatObject]; 
let hatsButtons = [hipHopHatButton, noelHatButton, cowboyHatButton];  */


//NECKLACE------------------------------------------------------

/* let militaryNecklaceObject = sceneEl.querySelector('#militaryNecklace');
let militaryNecklaceButton = document.getElementById("militaryNecklaceBtn");
militaryNecklaceButton.addEventListener("click", function(){
    interactNecklace(militaryNecklaceObject, militaryNecklaceButton)
});

let goldNecklaceObject = sceneEl.querySelector('#goldNecklace');
let goldNecklaceButton = document.getElementById("goldNecklaceBtn");
goldNecklaceButton.addEventListener("click", function(){
    interactNecklace(goldNecklaceObject, goldNecklaceButton)
});

let inidiNecklaceObject = sceneEl.querySelector('#inidiNecklace');
let inidiNecklaceButton = document.getElementById("inidiNecklaceBtn");
inidiNecklaceButton.addEventListener("click", function(){
    interactNecklace(inidiNecklaceObject, inidiNecklaceButton)
});

let necklaceModels = [militaryNecklaceObject, goldNecklaceObject, inidiNecklaceObject]; 
let necklaceButtons = [militaryNecklaceButton, goldNecklaceButton, inidiNecklaceButton]; */

//EARRINGS------------------------------------------------------


/*
let earringsModels = [bimboEarringObject ,lvEarringObject , topitoEarringObject]; 
let earringsButtons = [bimboEarringButton ,lvEarringButton , topitoEarringButton]; */





//FUNCIONES------------------------------------------------------

function interactGlasses(model, btn) {
    if (model.getAttribute('visible')) { 
        /* glassesModels.forEach(element => {
            element.setAttribute('visible', false);
        });
        glassesButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton");
        });*/
        model.setAttribute('visible', false);
        btn.setAttribute("class", "unselectedButton");  
    }else{
        /* glassesModels.forEach(element => {
            element.setAttribute('visible', false);
        });
        glassesButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton");
        }); */
        model.setAttribute('visible', true);
        btn.setAttribute("class", "selectedButton"); 
    }
}

/* function interactHats(model, btn) {
    if (model.getAttribute('visible')) { 
        hatsModels.forEach(element => {
            element.setAttribute('visible', false);
        });  
        hatsButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton"); 
        });  
        model.setAttribute('visible', false);
        btn.setAttribute("class", "unselectedButton"); 
    }else{
        hatsModels.forEach(element => {
            element.setAttribute('visible', false);
        });  
        hatsButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton"); 
        });  
        model.setAttribute('visible', true);
        btn.setAttribute("class", "selectedButton"); 
    }
} */

/* function interactNecklace(model, btn) {
    if (model.getAttribute('visible')) { 
        necklaceModels.forEach(element => {
            element.setAttribute('visible', false);
        });  
        necklaceButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton"); 
        });  
        model.setAttribute('visible', false);
        btn.setAttribute("class", "unselectedButton"); 
    }else{
        necklaceModels.forEach(element => {
            element.setAttribute('visible', false);
        });  
        necklaceButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton"); 
        });  
        model.setAttribute('visible', true);
        btn.setAttribute("class", "selectedButton"); 
    }
}*/

function interactEarrings(model, btn) {
    if (model.getAttribute('visible')) { 
        /* earringsModels.forEach(element => {
            element.setAttribute('visible', false);
        });  
        earringsButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton"); 
        });   */
        model.setAttribute('visible', false);
        btn.setAttribute("class", "unselectedButton"); 
    }else{
        /* earringsModels.forEach(element => {
            element.setAttribute('visible', false);
        });  
        earringsButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton"); 
        });   */
        model.setAttribute('visible', true);
        btn.setAttribute("class", "selectedButton"); 
    }
} 

/* function interactNone(){
    earringsModels.forEach(element => {
        element.setAttribute('visible', false);
    });  
    earringsButtons.forEach(element => {
        element.setAttribute("class", "unselectedButton"); 
    }); 
    necklaceModels.forEach(element => {
        element.setAttribute('visible', false);
    });  
    necklaceButtons.forEach(element => {
        element.setAttribute("class", "unselectedButton"); 
    });  
    hatsModels.forEach(element => {
        element.setAttribute('visible', false);
    });  
    hatsButtons.forEach(element => {
        element.setAttribute("class", "unselectedButton"); 
    }); 
    glassesModels.forEach(element => {
        element.setAttribute('visible', false);
    });
    glassesButtons.forEach(element => {
        element.setAttribute("class", "unselectedButton");
    });
} */




