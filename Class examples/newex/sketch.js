//create variable
var mouthX = 80;
var mouthY = 200;
var eyesize=20;



function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255,0,255);

}

function draw() {
  // put drawing code here
  strokeWeight(1);
  //left eye
  ellipse(100,100,eyesize,eyesize);
  //right eye
  ellipse(140,100,20,20);

  //mouth
  //rectangle (x,y) is upper lefthand corner, width, height
  rect(mouthX,mouthY,100,30);

  //changes thickness
  strokeWeight(5);
  //singular pixel
  point(30,27);
  strokeWeight(1);

  //line is two xy locations
  //mouth line
  line(80,215,180,215);

  //width/2 = center point of width, height/2 = center pt of height
  //console.log("width"+width);
  //console.log("height"+height);

  triangle(width/2,height/2,(width/2)-10,(height/2)+20,(width/2)+10,(height/2)+20);
  arc(50,50,50,50,0,PI);
  arc(300,300,50,50,PI+HALF_PI,0);
}
