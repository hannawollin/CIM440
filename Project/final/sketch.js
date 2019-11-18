// read me, title, basic instruction, slides (part of read me)

var page=0;  //page 0=home, page 1=tictactoe
var tictactoe="Tic-Tac-Toe";
var hometext='Kitty Korner Games';
var tictactoebutton, homebutton, yarnbutton;
var Oreo, Mika, Stormy,pic,Mikaface,Oreoface,Stormyface, Oreowalk, Stormywalk, Mikawalk, Yarn;

//from tic-tac-toe midterm
var ttt=[""];
var X="1";
var O="2";
var currentPlayer=O;
var x,o,reset, radioX, radioO;
var hitx=[50+200,150+200,250+200];
var hity=[50+70,150+70,250+70];
var hitsize=100

function preload(){
  Stormy=loadImage('stormysit.png');
  Mika=loadImage('mikasit.png');
  Oreo=loadImage('oreosit.png');
  Mikaface=loadImage('mikaface.png');
  Stormyface=loadImage('stormyface.png');
  Oreoface=loadImage('oreoface.png');
  Mikawalk=loadImage('mikawalk.png');
  Stormywalk=loadImage('stormywalk.png');
  Oreowalk=loadImage('oreowalk.png');
  Yarn=loadImage('yarn.png');

}
function setup() {
  // put setup code here
  createCanvas(800,500);
  homebutton=createButton('Home');
  homebutton.mousePressed(function(){page=0;})
  homebutton.position(50,100);
  homebutton.size(80,80);
  homebutton.style("font-family","Comic Sans MS");
  homebutton.style("background-color","#00f");
  homebutton.style("color","#fff");
  tictactoebutton=createButton(tictactoe);
  tictactoebutton.mousePressed(function(){page=1;})
  tictactoebutton.position(50,200);
  tictactoebutton.size(80,80);
  tictactoebutton.style("font-family","Comic Sans MS");
  tictactoebutton.style("background-color","#32CD32");
  tictactoebutton.style("color","#fff");
  yarnbutton=createButton('Yarn Game');
  yarnbutton.mousePressed(function(){page=2;})
  yarnbutton.position(50,300);
  yarnbutton.size(80,80);
  yarnbutton.style("font-family","Comic Sans MS");
  yarnbutton.style("background-color","red");
  yarnbutton.style("color","#fff");

  //tic-tac-toe midtermsetup
  reset=createButton('Reset');
  reset.mousePressed(function(){ttt=['']; currentPlayer=O})
  reset.position(685,420);
  reset.size(70,50);
  reset.style("font-family","Comic Sans MS");
  reset.style("background-color","#32CD32");
  reset.style("color","#fff");
  radioX = createRadio();
  radioX.option('  Oreo', 1);
  radioX.option('  Mika', 2);
  radioX.option('Stormy', 3);
  radioX.style('width', '75px');
  radioX.position(670,150)
  radioX.style("font-family","Comic Sans MS");
  radioO = createRadio();
  radioO.option('  Oreo', 1);
  radioO.option('  Mika', 2);
  radioO.option('Stormy', 3);
  radioO.style('width', '75px');
  radioO.position(670,300);
  radioO.style("font-family","Comic Sans MS");

}

function draw() {
  // put drawing code here
  textFont('Comic Sans MS');
  reset.hide();
  radioX.hide();
  radioO.hide();
  console.log(page);
if (page==0){ //home
  Home();
}else if (page==1) {//tictactoe page
  Tictactoe();
}else if (page==2){//yarngame page
  Yarngame();
}
}//end draw



function Home(){
  background('#75DAFF');
  strokeWeight(0);
  textSize(50);
  fill('black');
  text(hometext,200,80);
  textSize(25);
  fill('blue');
  image(Oreo, 0,80,Mika.width/2, Mika.height/2 );
  text("Oreo",240,420);
  image(Mika, 210,140,Mika.width/2, Mika.height/2);
  fill('#e75480');
  text("Mika",460,480);
  image(Stormy, 390,60,Mika.width/2, Mika.height/2);
  text("Stormy",625,400);

}//end home page



function Tictactoe(){
background('lightseagreen');
strokeWeight(0);
textSize(50);
fill('blue');
text(tictactoe,270,60);
radioX.show();
radioO.show();
reset.show();
fill(0);
textSize(18);
text('Player 1 pick a cat',630,140);
text('Player 2 pick a cat',630,290);
fill(255);
//console.log(currentPlayer);
//console.log("ttt"+ttt);
stroke(255);
strokeWeight(8);
line(50+200,150+70,350+200,150+70);
line(50+200,250+70,350+200,250+70);
line(150+200,50+70,150+200,350+70);
line(250+200,50+70,250+200,350+70);
console.log('currentPlayer'+currentPlayer);

let valX = radioX.value();
let valO = radioO.value();

console.log("valx" + valX);
console.log("valo" +valO);

if (ttt[0]==X){
    if (valX==1) {
      image(Oreoface,165,95,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==2){
      image(Mikaface,165,95,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==3){
      image(Stormyface,165,95,Mikaface.width/3.8,Mikaface.height/3.8);}}
if (ttt[0]==O){
  if (valO==1) {
    image(Oreoface,165,95,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==2){
    image(Mikaface,165,95,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==3){
    image(Stormyface,165,95,Mikaface.width/3.8,Mikaface.height/3.8);}
  }

if (ttt[1]==X){
    if (valX==1) {
      image(Oreoface,165,195,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==2){
      image(Mikaface,165,195,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==3){
      image(Stormyface,165,195,Mikaface.width/3.8,Mikaface.height/3.8);}}
if (ttt[1]==O){
  if (valO==1) {
    image(Oreoface,165,195,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==2){
    image(Mikaface,165,195,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==3){
    image(Stormyface,165,195,Mikaface.width/3.8,Mikaface.height/3.8);}
}

if (ttt[2]==X){
    if (valX==1) {
      image(Oreoface,165,295,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==2){
      image(Mikaface,165,295,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==3){
      image(Stormyface,165,295,Mikaface.width/3.8,Mikaface.height/3.8);}}
if (ttt[2]==O){
  if (valO==1) {
    image(Oreoface,165,295,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==2){
    image(Mikaface,165,295,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==3){
    image(Stormyface,165,295,Mikaface.width/3.8,Mikaface.height/3.8);}
}

if (ttt[3]==X){
    if (valX==1) {
      image(Oreoface,270,95,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==2){
      image(Mikaface,270,95,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==3){
      image(Stormyface,270,95,Mikaface.width/3.8,Mikaface.height/3.8);}}
if (ttt[3]==O){
  if (valO==1) {
    image(Oreoface,270,95,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==2){
    image(Mikaface,270,95,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==3){
    image(Stormyface,270,95,Mikaface.width/3.8,Mikaface.height/3.8);}
}

if (ttt[4]==X){
    if (valX==1) {
      image(Oreoface,270,195,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==2){
      image(Mikaface,270,195,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==3){
      image(Stormyface,270,195,Mikaface.width/3.8,Mikaface.height/3.8);}}
if (ttt[4]==O){
  if (valO==1) {
    image(Oreoface,270,195,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==2){
    image(Mikaface,270,195,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==3){
    image(Stormyface,270,195,Mikaface.width/3.8,Mikaface.height/3.8);}
}

if (ttt[5]==X){
    if (valX==1) {
      image(Oreoface,270,295,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==2){
      image(Mikaface,270,295,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==3){
      image(Stormyface,270,295,Mikaface.width/3.8,Mikaface.height/3.8);}}
if (ttt[5]==O){
  if (valO==1) {
    image(Oreoface,270,295,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==2){
    image(Mikaface,270,295,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==3){
    image(Stormyface,270,295,Mikaface.width/3.8,Mikaface.height/3.8);}
}

if (ttt[6]==X){
    if (valX==1) {
      image(Oreoface,375,95,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==2){
      image(Mikaface,375,95,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==3){
      image(Stormyface,375,95,Mikaface.width/3.8,Mikaface.height/3.8);}}
if (ttt[6]==O){
  if (valO==1) {
    image(Oreoface,375,95,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==2){
    image(Mikaface,375,95,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==3){
    image(Stormyface,375,95,Mikaface.width/3.8,Mikaface.height/3.8);}
}

if (ttt[7]==X){
    if (valX==1) {
      image(Oreoface,375,195,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==2){
      image(Mikaface,375,195,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==3){
      image(Stormyface,375,195,Mikaface.width/3.8,Mikaface.height/3.8);}}
if (ttt[7]==O){
  if (valO==1) {
    image(Oreoface,375,195,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==2){
    image(Mikaface,375,195,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==3){
    image(Stormyface,375,195,Mikaface.width/3.8,Mikaface.height/3.8);}
}

if (ttt[8]==X){
    if (valX==1) {
      image(Oreoface,375,295,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==2){
      image(Mikaface,375,295,Mikaface.width/3.8,Mikaface.height/3.8);}
    if (valX==3){
      image(Stormyface,375,295,Mikaface.width/3.8,Mikaface.height/3.8);}}
if (ttt[8]==O){
  if (valO==1) {
    image(Oreoface,375,295,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==2){
    image(Mikaface,375,295,Mikaface.width/3.8,Mikaface.height/3.8);}
  if (valO==3){
    image(Stormyface,375,295,Mikaface.width/3.8,Mikaface.height/3.8);}
}



}//end tictactoe page



function mousePressed() {
  if(mouseX>hitx[0]&&mouseX<hitx[0]+hitsize&& mouseY>hity[0]&&mouseY<hity[0]+hitsize){
    //console.log('zone 0');
    if(ttt[0] !=X && ttt[0] != O){
      if (currentPlayer == O){currentPlayer = X;}else{currentPlayer = O;}
      ttt[0]=currentPlayer; }}
  if(mouseX>hitx[0]&&mouseX<hitx[0]+hitsize&& mouseY>hity[1]&&mouseY<hity[1]+hitsize){
    //console.log('zone 1');
    if(ttt[1] !=X && ttt[1] != O){
     if (currentPlayer == O){currentPlayer = X;}else if (currentPlayer == X){currentPlayer = O;}
    ttt[1]=currentPlayer; }}
  if(mouseX>hitx[0]&&mouseX<hitx[0]+hitsize&& mouseY>hity[2]&&mouseY<hity[2]+hitsize){
    //console.log('zone 3');
    if(ttt[2] !=X && ttt[2] != O){
    if (currentPlayer == O){currentPlayer = X;}else if (currentPlayer == X){currentPlayer = O;}
    ttt[2]=currentPlayer; }}
  if(mouseX>hitx[1]&&mouseX<hitx[1]+hitsize&& mouseY>hity[0]&&mouseY<hity[0]+hitsize){
    //console.log('zone 4');
    if(ttt[3] !=X && ttt[3] != O){
    if (currentPlayer == O){currentPlayer = X;}else if (currentPlayer == X){currentPlayer = O;}
    ttt[3]=currentPlayer; }}
  if(mouseX>hitx[2]&&mouseX<hitx[2]+hitsize&& mouseY>hity[0]&&mouseY<hity[0]+hitsize){
    //console.log('zone 6');
    if(ttt[6] !=X && ttt[6] != O){
    if (currentPlayer == O){currentPlayer = X;}else if (currentPlayer == X){currentPlayer = O;}
    ttt[6]=currentPlayer; }}
  if(mouseX>hitx[1]&&mouseX<hitx[1]+hitsize&& mouseY>hity[1]&&mouseY<hity[1]+hitsize){
    //console.log('zone 4');
    if(ttt[4] !=X && ttt[4] != O){
    if (currentPlayer == O){currentPlayer = X;}else if (currentPlayer == X){currentPlayer = O;}
    ttt[4]=currentPlayer; }}
  if(mouseX>hitx[1]&&mouseX<hitx[1]+hitsize&& mouseY>hity[2]&&mouseY<hity[2]+hitsize){
    //console.log('zone 5');
    if(ttt[5] !=X && ttt[5] != O){
    if (currentPlayer == O){currentPlayer = X;}else if (currentPlayer == X){currentPlayer = O;}
    ttt[5]=currentPlayer; }}
  if(mouseX>hitx[2]&&mouseX<hitx[2]+hitsize&& mouseY>hity[1]&&mouseY<hity[1]+hitsize){
    //console.log('zone 7');
    if(ttt[7] !=X && ttt[7] != O){
    if (currentPlayer == O){currentPlayer = X;}else if (currentPlayer == X){currentPlayer = O;}
    ttt[7]=currentPlayer; }}
  if(mouseX>hitx[2]&&mouseX<hitx[2]+hitsize&& mouseY>hity[2]&&mouseY<hity[2]+hitsize){
    //console.log('zone 8');
    if(ttt[8] !=X && ttt[8] != O){
    if (currentPlayer == O){currentPlayer = X;}else if (currentPlayer == X){currentPlayer = O;}
    ttt[8]=currentPlayer; }}
}//end mousePressed















function Yarngame(){
background('pink');
//for(var i=0; i<1; i++){
randomSeed(45);
    image(Mikawalk,random(100,600),random(100,300), Mikawalk.width/5, Mikawalk.height/5);
    image(Oreowalk,random(100,600),random(100,300), Mikawalk.width/5, Mikawalk.height/5);
    image(Stormywalk,random(100,600),random(100,300), Mikawalk.width/5, Mikawalk.height/5);
    image(Yarn, random(100,600),random(100,300),Yarn.width/6, Yarn.height/6);
}
