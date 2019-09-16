var eyeW=50;
var eyeH=60;
var noseW=60;
var noseH=40;
var earsize=170;
var tongue='#F1B3BE';
var bowlFill='#b22222';
var foodButton;
var tailx= 450;
var taily= 200;
var sky='#82CAFA';
var grass='green';


function setup() {
  // put setup code here
  createCanvas(500,500);
  foodButton=createButton('Food');
  foodButton.position(420,450);
  foodButton.mousePressed(function(){
  bowlFill='#483C32';
});
}

function draw() {
  // put drawing code here
background(sky);
  fill(grass);
  stroke(grass)
  rect(0,400,500,100);
  strokeWeight(2.5);
  stroke('black');
//ears
  fill('#6F4E37');
  arc(180,160,earsize,earsize,PI,0-HALF_PI);
  line(180-(earsize/2),160,180,160);
  line(180,160-(earsize/2),180,160);
  arc(320,160,earsize,earsize,HALF_PI+PI,0);
  line(320+(earsize/2),160,320,160);
  line(320,160-(earsize/2),320,160);

//tail
triangle(400,300,392,250,tailx,taily);

  fill ('white');
//body
ellipse(250,300,300,300);
//head
ellipse(250,220,230,230);
//feet
arc(180,450,90,90,PI,0);
arc(320,450,90,90,PI,0);
line(135,450,225,450);
line(320-45,450,320+45,450);
line(200,450,200,435);
line(180,450,180,435);
line(160,450,160,435);
line(320,450,320,435);
line(300,450,300,435);
line(340,450,340,435);

//eyes
fill('white');
ellipse(200,200,eyeW,eyeH);
ellipse(300,200,eyeW,eyeH);
fill('black')
ellipse(200,215,eyeW/2,eyeH/2);
ellipse(300,215,eyeW/2,eyeH/2);
//bone
fill('white');
stroke('white');
rect(30,450,70,20);
circle(30,450,30);
circle(30,470,30);
circle(110,450,30);
circle(110,470,30);
stroke('black')
//tongue
fill(tongue);
arc(250,285,30,65,0,PI);
stroke('#d598a3');
line(250,290,250,310);
//mouth
stroke('black')
fill('white');
arc(250-25,260+(noseH/2),50,50,0,PI-QUARTER_PI);
arc(250+25,260+(noseH/2),50,50,0+QUARTER_PI,PI+QUARTER_PI);
//nose
fill('#483C32')
ellipse(250,260,noseW,noseH);
//bowl
strokeWeight(0);
fill('red');
ellipse(450,468,170,50);
quad(450-85,465,450+85,465,491,420,390,420);
fill(bowlFill);
ellipse(440,420,100,30);


if (mouseX >= 400 && mouseX<=470){
tailx=mouseX;
}
if (mouseY >= 200 && mouseY<=250){
taily=mouseY;
}
}//end of draw

function keyPressed(){
if (key == 'd'){
  console.log('Day');
  sky='#82CAFA';
  grass= 'green';
}
if (key == 'n'){
  console.log('Night')
  sky='#191970';
  grass='#195905'
}

}
