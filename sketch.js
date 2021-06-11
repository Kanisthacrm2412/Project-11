var runner, runnerAnimation;
var path, pathImage;
var invisible1,invisible2;
function preload(){
  //pre-load images
  runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,350,200,100);
  path.velocityY= 4;
  path.addImage(pathImage);
  path.scale=1.2;

  invisible1 = createSprite(0,200,10,400);
  invisible1.visible=false;
  invisible2 = createSprite(400,200,10,400);
  invisible2.visible=false ;

  runner= createSprite(200, 250 );
  runner.addAnimation("running", runnerAnimation);
  runner.scale=0.1;
  

}

function draw() {
  background(0);

  runner.x = World.mouseX;
  runner.collide(invisible1);
  runner.collide(invisible2);

  if(path.y>400){
    path.y= path.height/4;
  }
  drawSprites();
}
