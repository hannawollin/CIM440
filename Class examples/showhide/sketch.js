
var puppyImage;
var show;
var hide;
var showAndHide=false;

function preload(){
//use to load media
  puppyImage=loadImage('puppy.jpg');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
show=createButton('show');
hide=createButton('hide');
show.mousePressed(function(){
  showAndHide=true;
});
hide.mousePressed(function(){
  showAndHide=false;
});
}

function draw() {
  // put drawing code here
  background(255);
if(showAndHide==true){
image(puppyImage,0,0,puppyImage.width/4,puppyImage.height/4);
}
text('Click show and hide to see a puppy',10,10);


}
