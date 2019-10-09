var ttt=[""];
var X="X";
var O="O";
var currentPlayer='';
var x,o,reset;
var hitx=[50,150,250];
var hity=[50,150,250];
var hitsize=100;

function setup() {
  // put setup code here
  createCanvas(400,400);
  x=createButton(X);
  x.mousePressed(function(){currentPlayer=X;})
  x.position(160,370);
  o=createButton(O);
  o.mousePressed(function(){currentPlayer=O;})
  o.position(210,370);
  reset=createButton('Reset');
  reset.mousePressed(function(){ttt=[''];})
  reset.position(350,375);

}//endsetup

function draw() {
  // put drawing code here
  background(67,191,199);
  textSize(30);
  text("Tic-Tac-Toe", 120,30);
  fill(255);
  console.log(currentPlayer);
  console.log("ttt"+ttt);
  stroke(255);
  line(50,150,350,150);
  line(50,250,350,250);
  line(150,50,150,350);
  line(250,50,250,350);
  textSize(100);
  text(ttt[0],65,135);


} //end draw


//for(i=0:9){
//  if(hitzone=i){
//    ttt[i]=currentPlayer  }



function mousePressed() {
  if(mouseX>hitx[0]&&mouseX<hitx[0]+hitsize&& mouseY>hity[0]&&mouseY<hity[0]+hitsize){
    console.log('zone 0');
    ttt[0]=currentPlayer;
  }








}
