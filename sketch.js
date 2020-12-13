var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
fixedRect = createSprite(400, 200, 50, 40);
movingRect = createSprite(40, 200, 20, 80);

fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue";
fixedRect.debug = true;
movingRect.debug = true;

}

function draw() {
  background("green");  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2  &&
    movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2  ){
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";   

  }
else{
  fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    }
  
  console.log(movingRect.y - fixedRect.y)

  drawSprites();

}