var page=0;  //page 0=home, page 1=tictactoe
var tictactoe="Tic-Tac-Toe";
var hometext='Kitty Korner Games';
var tictactoebutton, homebutton;
var Oreo, Mika, Stormy;

function preload(){
  Stormy=loadImage('stormysit.png');
  Mika=loadImage('mikasit.png');
  Oreo=loadImage('oreosit.png');
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

}

function draw() {
  // put drawing code here
  textFont('Comic Sans MS');

  if (page==0){
  background('#75DAFF');
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
}

if (page==1){
  background(255);
  textSize(50);
  text(tictactoe,200,80);
}

}
