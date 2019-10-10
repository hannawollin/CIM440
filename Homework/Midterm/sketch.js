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
  stroke(255);
  fill(255);
  text("Tic-Tac-Toe", 120,30);
  //console.log(currentPlayer);
  //console.log("ttt"+ttt);
  stroke(255);
  line(50,150,350,150);
  line(50,250,350,250);
  line(150,50,150,350);
  line(250,50,250,350);
  textSize(100);
  text(ttt[0],65,135);
  text(ttt[1],65,135+100);
  text(ttt[2],65,135+200);
  text(ttt[3],65+100,135);
  text(ttt[6],65+200,135);
  text(ttt[4],65+100,135+100);
  text(ttt[5],65+100,135+200);
  text(ttt[7],65+200,135+100);
  text(ttt[8],65+200,135+200);

  textSize(30);
  stroke('yellow');
  fill('yellow');
if (ttt[0]==ttt[1] && ttt[1]==ttt[2]){
  text ("THE WINNER IS PLAYER " + ttt[0] +"!", 5,220);
}//col 1
if (ttt[3]==ttt[4] && ttt[4]==ttt[5]){
  if (ttt[3]==X || ttt[3]==O){
 text ("THE WINNER IS PLAYER " + ttt[3] +"!", 5,220);}
}//col 2
if (ttt[6]==ttt[7] && ttt[7]==ttt[8]){
  if (ttt[6]==X || ttt[6]==O){
  text ("THE WINNER IS PLAYER " + ttt[6] +"!", 5,220);}
}//col 3
if (ttt[0]==ttt[3] && ttt[3]==ttt[6]){
  if (ttt[0]==X || ttt[0]==O){
  text ("THE WINNER IS PLAYER " + ttt[0] +"!", 5,220);}
}//row 1
if (ttt[1]==ttt[4] && ttt[4]==ttt[7]){
  if (ttt[1]==X || ttt[1]==O){
  text ("THE WINNER IS PLAYER " + ttt[1] +"!", 5,220);}
}//row 2
if (ttt[2]==ttt[5] && ttt[5]==ttt[8]){
  if (ttt[2]==X || ttt[2]==O){
 text ("THE WINNER IS PLAYER " + ttt[2] +"!", 5,220);}
}//row 3
if (ttt[0]==ttt[4] && ttt[4]==ttt[8]){
  if (ttt[0]==X || ttt[0]==O){
 text ("THE WINNER IS PLAYER " + ttt[0] +"!", 5,220);}
}//diagoal 1
if (ttt[2]==ttt[4] && ttt[4]==ttt[6]){
  if (ttt[2]==X || ttt[2]==O){
 text ("THE WINNER IS PLAYER " + ttt[2] +"!", 5,220);}
}//diagonal 2
} //end draw


function mousePressed() {
  if(mouseX>hitx[0]&&mouseX<hitx[0]+hitsize&& mouseY>hity[0]&&mouseY<hity[0]+hitsize){
    //console.log('zone 0');
    if(ttt[0] !=X && ttt[0] != O){
    ttt[0]=currentPlayer; }}
  if(mouseX>hitx[0]&&mouseX<hitx[0]+hitsize&& mouseY>hity[1]&&mouseY<hity[1]+hitsize){
    //console.log('zone 1');
    if(ttt[1] !=X && ttt[1] != O){
    ttt[1]=currentPlayer; }}
  if(mouseX>hitx[0]&&mouseX<hitx[0]+hitsize&& mouseY>hity[2]&&mouseY<hity[2]+hitsize){
    //console.log('zone 3');
    if(ttt[2] !=X && ttt[2] != O){
    ttt[2]=currentPlayer; }}
  if(mouseX>hitx[1]&&mouseX<hitx[1]+hitsize&& mouseY>hity[0]&&mouseY<hity[0]+hitsize){
    //console.log('zone 4');
    if(ttt[3] !=X && ttt[3] != O){
    ttt[3]=currentPlayer; }}
  if(mouseX>hitx[2]&&mouseX<hitx[2]+hitsize&& mouseY>hity[0]&&mouseY<hity[0]+hitsize){
    //console.log('zone 6');
    if(ttt[6] !=X && ttt[6] != O){
    ttt[6]=currentPlayer; }}
  if(mouseX>hitx[1]&&mouseX<hitx[1]+hitsize&& mouseY>hity[1]&&mouseY<hity[1]+hitsize){
    //console.log('zone 4');
    if(ttt[4] !=X && ttt[4] != O){
    ttt[4]=currentPlayer; }}
  if(mouseX>hitx[1]&&mouseX<hitx[1]+hitsize&& mouseY>hity[2]&&mouseY<hity[2]+hitsize){
    //console.log('zone 5');
    if(ttt[5] !=X && ttt[5] != O){
    ttt[5]=currentPlayer; }}
  if(mouseX>hitx[2]&&mouseX<hitx[2]+hitsize&& mouseY>hity[1]&&mouseY<hity[1]+hitsize){
    //console.log('zone 7');
    if(ttt[7] !=X && ttt[7] != O){
    ttt[7]=currentPlayer; }}
  if(mouseX>hitx[2]&&mouseX<hitx[2]+hitsize&& mouseY>hity[2]&&mouseY<hity[2]+hitsize){
    //console.log('zone 8');
    if(ttt[8] !=X && ttt[8] != O){
    ttt[8]=currentPlayer; }}
}//end mousePressed loop
