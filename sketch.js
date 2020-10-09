var frect, mrect,o1,o2;
var o5;
function setup() {
  createCanvas(1200,800);
  frect= createSprite(400, 200, 80, 50);
  frect.shapeColor="green";               
  mrect= createSprite(600,200,50,80);
  mrect.shapeColor="green";
  o1= createSprite(80, 200, 80, 50);
  o1.shapeColor="green";
  o2= createSprite(800,200,50,80);
  o2.velocityY = 2;
  o2.shapeColor="green";
  o5 = createSprite(800,600,50,80);
  o5.velocityY = -2;
  o5.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  //moving the mrect
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

if(isTouching(mrect,o2)){
o2.shapeColor="blue";
mrect.shapeColor="blue";
}
 bounceOff(o2,o5) 
  drawSprites();
}