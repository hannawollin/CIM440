//add another question



var questions=["Is Iceland always covered in ice?","What ocean lies east of the US?",'What is the smallest state in the US?'];
var options=["1) true 2) false","1) pacific 2) eastern 3) indian 4) atlantic","1) Vermont 2) New Jersey 3) Rhode Island 4) Virginia"];
var answers=[1,3,2];

var buttons=[];

var currentOption=-1;

var currentQuestion=0;

var answerText="";

function setup() {
  // put setup code here
  createCanvas(400,400);
  buttons[0]=createButton('1');
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption=0;
  });//end of mousePressed
  buttons[1]=createButton('2');
  buttons[1].position(50,300);
  buttons[1].mousePressed(function(){
    currentOption=1;
  });
  buttons[2]=createButton('3');
  buttons[2].position(100,300);
  buttons[2].mousePressed(function(){
    currentOption=2;
  });
  buttons[3]=createButton('4');
  buttons[3].position(150,300);
  buttons[3].mousePressed(function(){
    currentOption=3;
  });
}//end of setup

function draw() {
  // put drawing code here
  background(255);
  text(questions[currentQuestion],20,100);
  text(options[currentQuestion],20,150);
  text(answerText, 20,200);
  if(currentOption!= -1){
    //not equal to
    console.log(currentOption);
    if (currentOption==answers[currentQuestion]) {
    console.log('Correct!');
    answerText="Correct!";
    currentQuestion=currentQuestion+1;
    //array.length counts how many items in array
    if(currentQuestion== questions.length){
      currentQuestion=0;
    }
    }else {
    console.log('incorrect');
    answerText="incorrect";
  }//end of checking if Correct
  //reset to inactive State
  currentOption=-1;
  }//end of current option != -1

}//end draw loop
