
var puppyImage;

function preload(){
//use to load media
  puppyImage=loadImage('puppy.jpg');
}

function setup() {
  // put setup code here

}

function draw() {
  // put drawing code here
  // image var, x pos, y pos
image(puppyImage,0,0);
}
