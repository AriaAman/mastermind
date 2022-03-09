console.info('Hello World !');

let compteur = 0;
let largeur  = window.innerWidth;
let longueur = window.innerHeight;
let firstclick = true;
let play = true;
let chronos = 14;

console.log(largeur,longueur);
let box2 = document.querySelector(".box2");
//box2.style.background = "red";


let boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.style.color = "white";
})

box2.addEventListener('click', (event)=>{
    compteur += 1;
    console.log('nombre de click: ', compteur);

    let x = Math.floor(Math.random()*(600));
    let y = Math.floor(Math.random()*(1300));
    console.log(x,y)

    event.target.style.top = x + "px";
    event.target.style.left = y + "px";
})



