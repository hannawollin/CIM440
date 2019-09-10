function setup() {
  // put setup code here
  // sets size of canvas
  createCanvas(500,500);
  // sets color of background
  background("pink");
  // grayscale 0-255
  background(0);
  // full red
  background(255,0,0);
  // full green
  background(0,255,0);
  // full blue
  background(0,0,255);
  // there are charts online for colors inbetween
  //hexidecimal notation
  background("#fffffff");
  background("#fae");
  // adjusts inner shape color
  fill('red');
  // adjusts outline colors
  stroke('violet');
  // ellipse(x, y, width, height)
  // (0,0) is upper lefthand corner
  ellipse(50,50,100,100);
  // have to reset colors for new shape or they will be the same
  fill('violet');
  stroke('red');
  ellipse(100,100,50,50);

}

function draw() {
  // put drawing code here
}
