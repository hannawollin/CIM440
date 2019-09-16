var pointX = 0;
var pointY = 0;
var point2; // variable undefined
var faceColor = "blue";

var colorButton;



function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;
  console.log("pointX " + pointX + " pointY " + pointY);
  console.log(point2);

colorButton=createButton('Click to turn purple'); //function that is part of the p5.dom library, it generates an html button
colorButton.position(20,20);
colorButton.mousePressed(function(){
faceColor='purple';
});

}


function draw() {
//var drawmes="loop"; //vars in functions only work in those functions
//console.log(drawmes);

  // put drawing code here

//use an if statement to change background color
if(mouseX < width/2){
  console.log('left hand side');
  background(255);
}
if(mouseX > width/2){
  console.log('right hand side');
  background('grey');
}



  //pointX = 100;
  //pointY = 100;
  pointX = mouseX;
  pointY = mouseY;
  fill(faceColor);
  rect(pointX -100 ,pointY -100,200,200);
  fill(255);
  ellipse(pointX, pointY, 10,10);
  ellipse(pointX + 20, pointY -20, 30,30);
  ellipse(pointX - 20, pointY -20, 30,30);

  // arc(x,y,width,height,start,end)
  arc(pointX,pointY + 10,50,50,0,PI);

  //ellipse(point2, point2, 10,10);

}//end of draw



function mousePressed(){
  //faceColor = "red";
}


function mouseReleased(){
  //faceColor = "blue";
}

function keyPressed(){
console.log("key "+key+' keyCode '+keyCode);
// conditional: if condition = true, do what id inside {}
//== means one side equals the other
if(key == 'w'){
//what you want to happen goes in here
  faceColor = "white";
}
if(key == 'r'){
  faceColor = "red";
}
//key code is numerical repesentation of key
if(key == 'r'){
  faceColor = "red";
}


}//end of keypressed
