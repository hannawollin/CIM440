// read me, title, basic instruction, slides (part of read me)

var page=0;  //page 0=home, page 1=tictactoe
var tictactoe="Tic-Tac-Toe";
var hometext='Kitty Korner Games';
var tictactoebutton, homebutton, yarnbutton;
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var x=700;
var y=80;
var yarnreset, MikaS, OreoS,StormyS,Oreo, Mika, Stormy,pic,Mikaface,Oreoface,Stormyface, Oreowalk, Stormywalk, Mikawalk, Yarn1, Yarn2, Yarn3, Yarn4, Yarn5, Yarn6,Yarn7, Yarn8, box;

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
  Mikawalk=loadAnimation('mikaw1.png', 'mikaw2.png');
  Oreowalk=loadAnimation('oreow1.png', 'oreow2.png');
  Stormywalk=loadAnimation('stormyw1.png', 'stormyw2.png');

}//end preload
function setup() {
  // put setup code here
  createCanvas(800,500);
  homebutton=createButton('Home');
  homebutton.mousePressed(function(){page=0;})
  homebutton.position(50,50);
  homebutton.size(80,80);
  homebutton.style("font-family","Comic Sans MS");
  homebutton.style("background-color","#00f");
  homebutton.style("color","#fff");
  tictactoebutton=createButton(tictactoe);
  tictactoebutton.mousePressed(function(){page=1;})
  tictactoebutton.position(50,150);
  tictactoebutton.size(80,80);
  tictactoebutton.style("font-family","Comic Sans MS");
  tictactoebutton.style("background-color","#32CD32");
  tictactoebutton.style("color","#fff");
  yarnbutton=createButton('Yarn Game');
  yarnbutton.mousePressed(function(){page=2;})
  yarnbutton.position(50,250);
  yarnbutton.size(80,80);
  yarnbutton.style("font-family","Comic Sans MS");
  yarnbutton.style("background-color","red");
  yarnbutton.style("color","#fff");
  Mikawalk.frameDelay = 20;
  Stormywalk.frameDelay = 20;
  Oreowalk.frameDelay = 20;
  MikaS = createSprite(470, 110);
  MikaS.addAnimation('normal', Mikawalk);
  OreoS = createSprite(700, 120);
  OreoS.addAnimation('normal', Oreowalk);
  StormyS = createSprite(250, 110);
  StormyS.addAnimation('normal', Stormywalk);
  Yarn1=createSprite(400,250);
  Yarn1.addAnimation('n', 'yarn1.png');
  Yarn2=createSprite(700,270);
  Yarn2.addAnimation('n', 'Yarn2.png');
  Yarn3=createSprite(600,200);
  Yarn3.addAnimation('n', 'Yarn3.png');
  Yarn4=createSprite(420,400);
  Yarn4.addAnimation('n', 'Yarn4.png');
  Yarn5=createSprite(250,420);
  Yarn5.addAnimation('n', 'Yarn5.png');
  Yarn6=createSprite(200,350);
  Yarn6.addAnimation('n', 'Yarn6.png');
  Yarn7=createSprite(550,300);
  Yarn7.addAnimation('n', 'Yarn7.png');
  Yarn8=createSprite(270,240);
  Yarn8.addAnimation('n', 'Yarn8.png');
  radioY = createRadio();
  radioY.option('Oreo', 3);
  radioY.option('Mika', 2);
  radioY.option('Stormy', 1);
  radioY.style('width', '750px');
  radioY.position(600,15);
  radioY.style("font-family","Comic Sans MS");
  box=createSprite(700,420);
  box.addAnimation('n','box.png');
  yarnreset=createButton('Reset');
  yarnreset.mousePressed(yarnReset);
  yarnreset.position(150,430);
  yarnreset.size(70,50);
  yarnreset.style("font-family","Comic Sans MS");
  yarnreset.style("background-color","#8b0000");
  yarnreset.style("color","#fff");
  mazebutton=createButton('Maze');
  mazebutton.mousePressed(function(){page=3;})
  mazebutton.position(50,350);
  mazebutton.size(80,80);
  mazebutton.style("font-family","Comic Sans MS");
  mazebutton.style("background-color","orange");
  mazebutton.style("color","#fff");
  fish = createSprite(195, 450);
  fish.addAnimation('normal', 'fish.png');
  up = createSprite(750, 310);
  up.addAnimation('normal', 'long.png');
  up1 = createSprite(150, 320);
  up1.addAnimation('normal', 'long.png');
  up2 = createSprite(150, 220);
  up2.addAnimation('normal', 'long.png');

  side = createSprite(622, 450);
  side.addAnimation('normal', 'long copy.png');
  side1 = createSprite(372, 450);
  side1.addAnimation('normal', 'long copy.png');
  side2 = createSprite(278, 85);
  side2.addAnimation('normal', 'long copy.png');
  side3 = createSprite(508, 85);
  side3.addAnimation('normal', 'long copy.png');








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
  radioY.hide();
  yarnreset.hide();
  console.log(page);
if (page==0){ //home
  Home();
}else if (page==1) {//tictactoe page
  Tictactoe();
}else if (page==2){//yarngame page
  Yarngame();
}else if (page==3){
  Maze();
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
  fill('gold');
  text("Stormy",625,400);
}//end home page
function Tictactoe(){
background('lightseagreen');
strokeWeight(0);
textSize(70);
fill('#CD5C5C');
text(tictactoe,220,80);
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
//console.log('currentPlayer'+currentPlayer);
let valX = radioX.value();
let valO = radioO.value();
//console.log("valx" + valX);
//console.log("valo" +valO);
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
    image(Stormyface,165,95,Mikaface.width/3.8,Mikaface.height/3.8);}}
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
    image(Stormyface,165,195,Mikaface.width/3.8,Mikaface.height/3.8);}}
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
    image(Stormyface,165,295,Mikaface.width/3.8,Mikaface.height/3.8);}}
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
    image(Stormyface,270,95,Mikaface.width/3.8,Mikaface.height/3.8);}}
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
    image(Stormyface,270,195,Mikaface.width/3.8,Mikaface.height/3.8);}}
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
    image(Stormyface,270,295,Mikaface.width/3.8,Mikaface.height/3.8);}}
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
    image(Stormyface,375,95,Mikaface.width/3.8,Mikaface.height/3.8);}}
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
    image(Stormyface,375,195,Mikaface.width/3.8,Mikaface.height/3.8);}}
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
    image(Stormyface,375,295,Mikaface.width/3.8,Mikaface.height/3.8);}}

    textSize(45);
    strokeWeight(4);
    stroke('blue');
    fill('blue');
    if (ttt[0]==ttt[1] && ttt[1]==ttt[2]){
    text ("THE WINNER IS PLAYER " + ttt[0] +"!", 155,265);
    }//col 1
    if (ttt[3]==ttt[4] && ttt[4]==ttt[5]){
    if (ttt[3]==X || ttt[3]==O){
    text ("THE WINNER IS PLAYER " + ttt[3] +"!", 155,265);}
    }//col 2
    if (ttt[6]==ttt[7] && ttt[7]==ttt[8]){
    if (ttt[6]==X || ttt[6]==O){
    text ("THE WINNER IS PLAYER " + ttt[6] +"!", 155,265);}
    }//col 3
    if (ttt[0]==ttt[3] && ttt[3]==ttt[6]){
    if (ttt[0]==X || ttt[0]==O){
    text ("THE WINNER IS PLAYER " + ttt[0] +"!", 155,265);}
    }//row 1
    if (ttt[1]==ttt[4] && ttt[4]==ttt[7]){
    if (ttt[1]==X || ttt[1]==O){
    text ("THE WINNER IS PLAYER " + ttt[1] +"!", 155,265);}
    }//row 2
    if (ttt[2]==ttt[5] && ttt[5]==ttt[8]){
    if (ttt[2]==X || ttt[2]==O){
    text ("THE WINNER IS PLAYER " + ttt[2] +"!", 155,265);}
    }//row 3
    if (ttt[0]==ttt[4] && ttt[4]==ttt[8]){
    if (ttt[0]==X || ttt[0]==O){
    text ("THE WINNER IS PLAYER " + ttt[0] +"!", 155,265);}
    }//diagoal 1
    if (ttt[2]==ttt[4] && ttt[4]==ttt[6]){
    if (ttt[2]==X || ttt[2]==O){
    text ("THE WINNER IS PLAYER " + ttt[2] +"!", 155,265);}
    }//diagonal 2

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
fill('brown');
rect(0,90,900,500);
fill('white');
textSize(20);
text('CHOOSE A CAT & PUSH THE YARN INTO THE BOX', 80,35);
text("SCORE", 280,480);
yarnreset.show();
radioY.show();
MikaS.scale=0.5;
OreoS.scale=0.5;
StormyS.scale=0.5;
Yarn1.scale=0.2;
Yarn2.scale=0.2;
Yarn3.scale=0.2;
Yarn4.scale=0.2;
Yarn5.scale=0.2;
Yarn6.scale=0.2;
Yarn7.scale=0.2;
Yarn8.scale=0.2;
box.scale=0.4;
MikaS.displace(Yarn1);
MikaS.displace(Yarn2);
MikaS.displace(Yarn3);
MikaS.displace(Yarn4);
MikaS.displace(Yarn5);
MikaS.displace(Yarn6);
MikaS.displace(Yarn7);
MikaS.displace(Yarn8);
OreoS.displace(Yarn1);
OreoS.displace(Yarn2);
OreoS.displace(Yarn3);
OreoS.displace(Yarn4);
OreoS.displace(Yarn5);
OreoS.displace(Yarn6);
OreoS.displace(Yarn7);
OreoS.displace(Yarn8);
StormyS.displace(Yarn1);
StormyS.displace(Yarn2);
StormyS.displace(Yarn3);
StormyS.displace(Yarn4);
StormyS.displace(Yarn5);
StormyS.displace(Yarn6);
StormyS.displace(Yarn7);
StormyS.displace(Yarn8);

if(radioY.value()==2){
MikaS.position.x=mouseX;
MikaS.position.y=mouseY;
}
if(radioY.value()==3){
OreoS.position.x=mouseX;
OreoS.position.y=mouseY;
}
if(radioY.value()==1){
StormyS.position.x=mouseX;
StormyS.position.y=mouseY;
}
if(Yarn1.overlap(box)){
    Yarn1.visible=false;
  //removeSprite(Yarn1);
  a=1;}
if(Yarn2.overlap(box)){
    Yarn2.visible=false;
  //removeSprite(Yarn2);
  b=1;}
if(Yarn3.overlap(box)){
    Yarn3.visible=false;
  c=1;}
if(Yarn4.overlap(box)){
    Yarn4.visible=false;
  d=1;}
if(Yarn5.overlap(box)){
    Yarn5.visible=false;
  e=1;}
if(Yarn6.overlap(box)){
    Yarn6.visible=false;
  f=1;}
if(Yarn7.overlap(box)){
    Yarn7.visible=false;
  g=1;}
if(Yarn8.overlap(box)){
    Yarn8.visible=false;
  h=1;}
drawSprites();
textSize(50);
text(a+b+c+d+e+f+g+h, 300,440);
if (a+b+c+d+e+f+g+h==8){
  textSize(80);
  fill('gold');
  text('WINNER!', 220,300);}
}
function yarnReset(){
Yarn1.visible=true;
Yarn1.position.x=random(200,600);
Yarn1.position.y=random(200,400);
Yarn2.visible=true;
Yarn2.position.x=random(200,600);
Yarn2.position.y=random(200,400);
Yarn3.visible=true;
Yarn3.position.x=random(200,600);
Yarn3.position.y=random(200,400);
Yarn4.visible=true;
Yarn4.position.x=random(200,600);
Yarn4.position.y=random(200,400);
Yarn5.visible=true;
Yarn5.position.x=random(200,600);
Yarn5.position.y=random(200,400);
Yarn6.visible=true;
Yarn6.position.x=random(200,600);
Yarn6.position.y=random(200,400);
Yarn7.visible=true;
Yarn7.position.x=random(200,600);
Yarn7.position.y=random(200,400);
Yarn8.visible=true;
Yarn8.position.x=random(200,600);
Yarn8.position.y=random(200,400);
StormyS.position.x=250
StormyS.position.y=110;
MikaS.position.x=470;
MikaS.position.y=110;
OreoS.position.x=700;
OreoS.position.y=120;
a=0;
b=0;
c=0;
d=0;
e=0;
f=0;
g=0;
h=0;
}

function Maze(){
background('green');
fill('black');
textSize(20);
text('CHOOSE A CAT:', 430,35);
radioY.show();
drawSprites()
up.scale=0.3;
side.scale=0.3;
side1.scale=0.3;
up1.scale=0.3;
fish.scale=0.2;
up2.scale=0.3;
side2.scale=0.3;
side3.scale=0.3;


OreoS.visible=false;
MikaS.visible=false;
Yarn1.visible=false;
Yarn2.visible=false;
Yarn3.visible=false;
Yarn4.visible=false;
Yarn5.visible=false;
Yarn6.visible=false;
Yarn7.visible=false;
Yarn8.visible=false;
StormyS.visible=false;
box.visible=false;


if(radioY.value()==2){
MikaS.visible=true;
MikaS.scale=0.2;
MikaS.position.x=x;
MikaS.position.y=y;
}
if(radioY.value()==3){
OreoS.visible=true;
OreoS.scale=0.2;
OreoS.position.x=x;
OreoS.position.y=y;
}
if(radioY.value()==1){
StormyS.visible=true;
StormyS.scale=0.2;
StormyS.position.x=x;
StormyS.position.y=y;
}


}
