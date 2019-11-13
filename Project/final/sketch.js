var page=0;  //page 0=home, page 1=tictactoe
var tictactoe="Tic-Tac-Toe";
var hometext='Kitty Korner Games';
var tictactoebutton, homebutton;


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
  tictactoebutton.style("background-color","#00f");
  tictactoebutton.style("color","#fff");
}

function draw() {
  // put drawing code here
  textFont('Comic Sans MS');

  if (page==0){
  background('#75DAFF');
  textSize(50);
  text(hometext,150,80);
}

if (page==1){
  background(255);
  textSize(50);
  text(tictactoe,200,80);
}

}
