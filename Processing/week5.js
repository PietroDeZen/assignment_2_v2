// must contain loop 
//must contains array
// must contain conditionals if

let textX= 20;
let textY= 120;
let textXTwo = 1200;
let secondPosition = 1400;



function setup() {
    createCanvas (windowWidth, windowHeight, ) 
    
}


let r= 200;
let tetha=0;
let TEXT=[];
let alpha = 0;

function draw() {
background (255)
fill(0);
rect (0,0, windowWidth, 80);
textSize(32);
textFont ('Public Sans');
text('ORBIT', textX, textY);
text('ORBIT', secondPosition, textY);
textY = textY + 120
if(textY >= windowHeight){
    textY= 120;
}


fill(255);
textSize(32);
textFont ('Public Sans');



for(i=-10; i<windowWidth; i+=120){
TEXT[i] = text('ORBIT', i, 55);
}





translate (windowWidth /2, windowHeight /2)
noFill();
stroke(0);
strokeWeight(2.5);
ellipse(0, 0, 150);
strokeWeight(1.7);
ellipse(0,0, 42, 150);
ellipse(0,0, 150, 42);
ellipse (0,0, 110, 150);
ellipse (0,0, 150, 110);


   
let x1= cos(alpha)*r
let y1= sin(alpha)*r
fill (0);
ellipse (x1, y1, 50,50);
alpha = alpha+ PI/200

 

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }



  // let alpha = 0;
// rotate (alpha)
// noFill();
// stroke(0);
// strokeWeight (2)
// ellipse (oV.x + cos(alpha)*r, oV.y +sin(alpha)*r, 30);
// alpha = alpha + PI/1000

// for (tetha= 0; tetha<=TWO_PI; tetha += TWO_PI / 18){
//     let x =  cos(tetha) * r;
//     let y =  sin(tetha) * r;
//     ellipse (x, y, 15);
//     }

