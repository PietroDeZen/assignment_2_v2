/*
    Paste the code for your week 4 exercise below.
*/

// DRAWING A SIMPLE LOGO


// // Creating variables for the font. Chosen font: Public Sans




// Sizing the canvas to cover the screen
function setup() {                
  createCanvas(windowWidth, windowHeight); 
}

// Making the Canvas flexible by making it  resizing following the the window's size 
function windowResized() {
resizeCanvas (windowWidth, windowHeight);
}

// Variables for ellipses to create the logo
let a =18;
let b = 42; 

// Drawing the logo. I'm thinking of it as if it was for a website. Thus, I'm not following the example on the modules.

// Making a headbar
function draw() {                  
 background(255, 255, 255);
 strokeWeight (0); 
 fill(0);
 rect (0, 0, windowWidth, 100);

// Making the Logo  
 fill (0,0); 
 stroke(255, 255, 255); 
 strokeWeight (3);
 ellipse (50, 50, 60);
 strokeWeight (1.2);
 ellipse (50, 50, 60, a);
 ellipse (50, 50, 60, b);
 ellipse (50, 50, a, 60);
 ellipse (50, 50, b, 60); 
 textSize(32);
 noStroke();
 fill(255, 255, 255);
 textFont('Public Sans');
 text('ORBIT', 85, 80); 
}


 

 
