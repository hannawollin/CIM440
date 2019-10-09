var seasonsSelect;
var seasonType = "";


var sunX = 0;
var sunY = 0;

var snowX=[];
var snowY=[];

function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonsSelect = createSelect();
  seasonsSelect.position(10,10);
  seasonsSelect.option("");
  seasonsSelect.option("fall");
  seasonsSelect.option("winter");
  seasonsSelect.option("spring");
  seasonsSelect.option("summer");
  seasonsSelect.changed(function(){

    seasonType = seasonsSelect.value();

  });

  sunX = width/2;
  sunY = height * 2;

//i=0 start variable
//i<100 set limit
//i++ iterator(same as i=i+1)
for(var i=0; i<100; i++){
  snowX[i]=random(0,width); //choose a number from 0 to width-1, 399
  snowY[i]=random(0,-500);
}
console.log('snowX'+snowX);
console.log('snowY'+snowY);
}

function draw() {
  // put drawing code here
  background(255);

  if(seasonType == "fall"){
    console.log("fall");
  }else if(seasonType == "winter"){
    console.log("winter");
  }else if(seasonType == "spring"){
    console.log("spring");
  }else if(seasonType == "summer"){
      console.log("summer");
      fill("orange");
      stroke("red");
      ellipse(sunX, sunY, width, height);

      if(sunY > height){
          sunY = sunY -1;
      }
  }else{
    console.log("blank");
    text("Make a selection", 100,20);
  }







}//end of draw loop
