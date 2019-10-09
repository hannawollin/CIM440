var ttt=[""];
var X="X";
var O="O";
var currentPlayer='';
var x,o,reset;



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

  //text(ttt[])
} //end draw


//for(i=0:9){
//  if(hitzone=i){
//    ttt[i]=currentPlayer  }
