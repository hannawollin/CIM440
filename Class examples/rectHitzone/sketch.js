var hitX=200;
var hitY=200;
var hitW=100;
var hitH=50;


function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  if (mouseX>hitY && mouseX<hiyY+hiyH && mouseY>hitX && mouseY<hitX+hitW){
    console.log("yes");
  }
}
