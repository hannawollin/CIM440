var hitzone3=false;

function setup() {
  // put setup code here
  createCanvas(400,400);
  hello();
  goodbye("zeven");
  goodbye("rubi");
  goodbye("mike");
}

function draw() {
  // put drawing code here
  background(255);
  //frameRate(1); //slows down interactions, use millis instead
if(circleHitzone(100,100)==true){
  //order corresponds to parameter order
  circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));

  for(var i=0;i<500; i++){
  circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));
}//500 times a frame
}
fill('black');
ellipse(mouseX,mouseY,10,10);

console.log(circleHitzone(100,100));

if (circleHitzone(300,300)== true){
  rect(100,100,100,100);
}
circleHitzone(200,200);

if(hitzone3==true){
  ellipse(30,30,30,30);
}
}

function mousePressed(){
  if(circleHitzone(200,200)==true){
    console.log('mousePressed');
    hitzone3=true;
  }else{
    hitzone3=false;
  }
}

function hello(){
  console.log("hello");
}

function goodbye(message){
console.log("goodbye "+message);
}

function circleColor(xpos,ypos,r,g,b,cSize){
fill(r,g,b);
stroke(0);
ellipse(xpos,ypos,cSize,cSize);
}

function circleHitzone(distX,distY){
  var curDist=dist(mouseX,mouseY,distX,distY);
//  console.log("curDist "+curDist);
  fill(127);
  stroke(255);
  ellipse(distX,distY,10,10);
if(curDist<10){
  return true;
  strokeWeight(5);
}else{
  return false;
  strokeWeight(1);
}
  //return curDist;

}
