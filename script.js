let sceneEl = document.querySelector('a-scene');

let cancelBtnButton = document.getElementById("cancelBtn");
cancelBtnButton.addEventListener("click", function(){  
    interactNone();
});

//GLASSES------------------------------------------------------

let sunGlassesObject = sceneEl.querySelector('#sunGlasses');
let sunGlassesButton = document.getElementById("sunGlassesBtn");
sunGlassesButton.addEventListener("click", function(){  
    interactGlasses(sunGlassesObject, sunGlassesButton)
});

let normalGlassesObject = sceneEl.querySelector('#normalGlasses');
let normalGlassesButton = document.getElementById("normalGlassesBtn");
normalGlassesButton.addEventListener("click", function(){ 
    interactGlasses(normalGlassesObject, normalGlassesButton)
});

let woodGlassesObject = sceneEl.querySelector('#woodGlasses');
let woodGlassesButton = document.getElementById("woodGlassesBtn");
woodGlassesButton.addEventListener("click", function(){   
    interactGlasses(woodGlassesObject, woodGlassesButton)
});

let glassesModels = [sunGlassesObject, normalGlassesObject, woodGlassesObject]; 
let glassesButtons = [sunGlassesButton, normalGlassesButton, woodGlassesButton]; 

//HATS------------------------------------------------------

let hipHopHatObject = sceneEl.querySelector('#hipHopHat');
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
let hatsButtons = [hipHopHatButton, noelHatButton, cowboyHatButton]; 

//NECKLACE------------------------------------------------------
/*
let militaryNecklaceObject = sceneEl.querySelector('#militaryNecklace');
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
let necklaceButtons = [militaryNecklaceButton, goldNecklaceButton, inidiNecklaceButton]; 

//EARRINGS------------------------------------------------------

let bimboEarringObject = sceneEl.querySelector('#bimboEarring');
let bimboEarringButton = document.getElementById("bimboEarringBtn");
bimboEarringButton.addEventListener("click", function(){
    interactEarrings(bimboEarringObject, bimboEarringButton)
});

let lvEarringObject = sceneEl.querySelector('#lvEarring');
let lvEarringButton = document.getElementById("lvEarringBtn");
lvEarringButton.addEventListener("click", function(){
    interactEarrings(lvEarringObject, lvEarringButton)
});

let topitoEarringObject = sceneEl.querySelector('#topitoEarring');
let topitoEarringButton = document.getElementById("topitoEarringBtn");
topitoEarringButton.addEventListener("click", function(){
    interactEarrings(topitoEarringObject, topitoEarringButton)
});

let earringsModels = [bimboEarringObject ,lvEarringObject , topitoEarringObject]; 
let earringsButtons = [bimboEarringButton ,lvEarringButton , topitoEarringButton]; 
*/
//FUNCIONES------------------------------------------------------

function interactGlasses(model, btn) {
    if (model.getAttribute('visible')) { 
        glassesModels.forEach(element => {
            element.setAttribute('visible', false);
        });
        glassesButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton");
        });
        model.setAttribute('visible', false);
        btn.setAttribute("class", "unselectedButton"); 
    }else{
        glassesModels.forEach(element => {
            element.setAttribute('visible', false);
        });
        glassesButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton");
        });
        model.setAttribute('visible', true);
        btn.setAttribute("class", "selectedButton"); 
    }
}

function interactHats(model, btn) {
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
}
/*
function interactNecklace(model, btn) {
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
}

function interactEarrings(model, btn) {
    if (model.getAttribute('visible')) { 
        earringsModels.forEach(element => {
            element.setAttribute('visible', false);
        });  
        earringsButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton"); 
        });  
        model.setAttribute('visible', false);
        btn.setAttribute("class", "unselectedButton"); 
    }else{
        earringsModels.forEach(element => {
            element.setAttribute('visible', false);
        });  
        earringsButtons.forEach(element => {
            element.setAttribute("class", "unselectedButton"); 
        });  
        model.setAttribute('visible', true);
        btn.setAttribute("class", "selectedButton"); 
    }
}
*/
function interactNone(){
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
}











