// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
//"09 TN State Fair #88: Racing Pigs" by SeeMidTN.com (aka Brent) is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/7d3c9c50-357f-4c4c-ab00-f791143c93cb
//"kitty" by devaburger is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/ab6ae633-3e62-493d-becc-c07300aacc1f
//"Rabbit bear" by VikingStrike! is licensed under CC BY-NC-ND 2.0 https://search.creativecommons.org/photos/6acf4686-e62d-4a8b-b419-ee63610a0fbb
//"Horse" by heyitsgarrett is licensed under CC BY-NC-SA 2.0  https://search.creativecommons.org/photos/44693ee2-33b2-4573-b313-f354a8637d5d

var currentImage=0;
var imageArray=[];
var hitx=[100,200];
var hity=[300,300];
var hitsize=50;

function preload(){
  //load media
  imageArray[0]=loadImage("images/puppy.jpg");
  imageArray[1]=loadImage("images/dinosaur.jpg");
  imageArray[2]=loadImage("images/sloth.jpg");
  imageArray[3]=loadImage("images/pig.jpg");
  imageArray[4]=loadImage('images/cat.jpg');
  imageArray[5]=loadImage('images/rabbit.jpg');
  imageArray[6]=loadImage('images/horse.jpg');
}

function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here
  background(255);
  console.log("Current Image "+currentImage);
image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);

rect(hitx[0],hity[0],hitsize,hitsize);
rect(hitx[1],hity[1],hitsize,hitsize);
}

function mousePressed() {
  if(mouseX>hitx[0]&&mouseX<hitx[0]+hitsize&& mouseY>hity[0]&&mouseY<hity[0]+hitsize){
    console.log('button 0');
    currentImage=currentImage-1;
    if(currentImage==-1){
      currentImage=6;
    }
  }
  if(mouseX>hitx[1]&&mouseX<hitx[1]+hitsize&& mouseY>hity[1]&&mouseY<hity[1]+hitsize){
    console.log('button 1');
    currentImage=currentImage+1;
    if(currentImage==7){
      currentImage=0;
    }
  }
}
