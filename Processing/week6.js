/*
    Paste the code for your week 3 exercise below.
*/
//object

let la = 20;
let th = 255
let position= 20

let O ={
    x: la,
    y: th,
}

let R ={
    x: la +32,
    y: th
}

let B = {
    x: la +32*2,
    y: th
}

let I = {
    x: la +32*3,
    y: th
}

let T = {
    x: la+32*3.6,
    y: th
}

let cor=[O, R, B, I, T]
let words =["O", "R", "B", "I", "T"]
let i = 0
let j = 100

function setup() {
    createCanvas(500, 500);
}


function draw() {
    background (0);
    fill (255);

    textSize (18)
    textFont('Public Sans');
    text('Click on the black area', la, 470)
 
    textSize(32);
    text('O', O.x, O.y);
    text('R', R.x, R.y)
    text('B', B.x, B.y)
    text('I', I.x, I.y)
    text('T', T.x, T.y)
    text(words[i], position, 100)

}


function mousePressed(){
    
    i= i+1
    position = position + 32
    if((i>4) && position> 32*4)
{
    i=0
   position=20
}
}