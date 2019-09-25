// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
//"09 TN State Fair #88: Racing Pigs" by SeeMidTN.com (aka Brent) is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/7d3c9c50-357f-4c4c-ab00-f791143c93cb
//"kitty" by devaburger is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/ab6ae633-3e62-493d-becc-c07300aacc1f

var puppy, dinosaur, sloth, pig, cat;
var currentAnimal;
var currentImage=0;

function preload(){
  //load media
  puppy=loadImage("images/puppy.jpg");
  dinosaur=loadImage("images/dinosaur.jpg");
  sloth=loadImage("images/sloth.jpg");
  pig=loadImage("images/pig.jpg");
  cat=loadImage('images/cat.jpg');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  pButton=createButton("Puppy");
  pButton.mousePressed(function(){
    currentImage=0;
  });
  dButton=createButton("Dinosaur");
  dButton.mousePressed(function(){
    currentImage=1;
  });
  sButton=createButton("Sloth");
  sButton.mousePressed(function(){
    currentImage=2;
  });
  cButton=createButton("Pig");
  cButton.mousePressed(function(){
    currentImage=3;
  });
  piButton=createButton("Cat");
  piButton.mousePressed(function(){
    currentImage=4;
  });

  //in setup instead of initial var because puppy wasn't defined then
  currentAnimal=puppy;
}

function draw() {
  // put drawing code here
  background(255);
  console.log("Current Image "+currentImage);
image(currentAnimal,0,0,currentAnimal.width/4,currentAnimal.height/4);
  if (currentImage==0){
    currentAnimal=puppy;
  }else if(currentImage==1){
  currentAnimal=dinosaur;
  }else if(currentImage==2){
    currentAnimal=sloth;
  }else if(currentImage==3){
    currentAnimal=cat;
  }else if(currentImage==4){
    currentAnimal=pig;
  }

//image(currentAnimal,0,0,currentAnimal.width/4,currentAnimal.height/4);
}
