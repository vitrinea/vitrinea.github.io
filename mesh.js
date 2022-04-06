const THREE = window.MINDAR.FACE.THREE;
const mindarThree = new window.MINDAR.FACE.MindARThree({
container: document.querySelector(".container"),
});
const {renderer, scene, camera} = mindarThree;
const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
scene.add(light);



const faceMesh = mindarThree.addFaceMesh();
//const texture = new THREE.TextureLoader().load('./assets/canonical_face_model_uv_visualization.png');
//const texture = new THREE.TextureLoader().load('../../../assets/mesh_map_lipstick.jpg');

let colorTexture = new THREE.TextureLoader().load("./lipstick/caraTest.png");


let cancelBtnButton = document.getElementById("cancelBtn");
cancelBtnButton.addEventListener("click", function(){  
    colorTexture = new THREE.TextureLoader().load("./lipstick/empty.png");
    makeUpButtons.forEach(element => {
        element.setAttribute("class", "unselectedButton");
    });
    const aoTexture = new THREE.TextureLoader().load("./lipstick/ao.jpg");
    //const alphaTexture = new THREE.TextureLoader().load("./lipstick/texture.png");

    faceMesh.material.aoMap = aoTexture;  
    //faceMesh.material.alphaMap = alphaTexture; 

    faceMesh.material.map = colorTexture; 
    faceMesh.material.transparent = true;
    faceMesh.material.needsUpdate = true;

    scene.add(faceMesh);
});

let makeUp1Button = document.getElementById("makeUp1Btn");
makeUp1Button.addEventListener("click", function(){  
    let makeUp1 = new THREE.TextureLoader().load("./lipstick/mariaDesign4.png");
    putMakeUp(makeUp1, makeUp1Button)
});

let makeUp2Button = document.getElementById("makeUp2Btn");
makeUp2Button.addEventListener("click", function(){  
    let makeUp2 = new THREE.TextureLoader().load("./lipstick/mariaDesign.png");
    putMakeUp(makeUp2, makeUp2Button)
});

let makeUp3Button = document.getElementById("makeUp3Btn");
makeUp3Button.addEventListener("click", function(){  
    let makeUp3 = new THREE.TextureLoader().load("./lipstick/labiosTest2.png");
    putMakeUp(makeUp3, makeUp3Button)
});

let makeUpButtons = [cancelBtnButton, makeUp1Button ,makeUp2Button , makeUp3Button]; 


function putMakeUp(makeUp, btn){
    //colorTexture = new THREE.TextureLoader().load("./lipstick/empty.png");
    colorTexture = makeUp

    makeUpButtons.forEach(element => {
        element.setAttribute("class", "unselectedButton");
    });
    btn.setAttribute("class", "selectedButton");
    
    colorTexture = makeUp;
    const aoTexture = new THREE.TextureLoader().load("./lipstick/ao.jpg");
    //const alphaTexture = new THREE.TextureLoader().load("./lipstick/texture.png");

    faceMesh.material.aoMap = aoTexture;  
    //faceMesh.material.alphaMap = alphaTexture; 

    faceMesh.material.map = colorTexture; 
    faceMesh.material.transparent = true;
    faceMesh.material.needsUpdate = true;

    scene.add(faceMesh);
}

const start = async() => {
await mindarThree.start();
renderer.setAnimationLoop(() => {
renderer.render(scene, camera);
});
}
start();