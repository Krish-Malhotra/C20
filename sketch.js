var fixedRect , movingRect
var gameObject1

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
//  gameObject1 = createSprite(100,100,50,50);
//gameObject1.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);
  //movingRect.x = World.mouseX
  //movingRect.y = World.mouseY

 // if(isTouching(movingRect,gameObject1)){
// movingRect.shapeColor = "orange"
// gameObject1.shapeColor = "orange"
//  }
  //else {
 // movingRect.shapeColor = "green";
//  gameObject1.shapeColor = "green";
//  }

  bounceOff(movingRect , fixedRect);

   drawSprites();
}


