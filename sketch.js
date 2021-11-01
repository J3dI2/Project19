var PLAY = 1
var END = 0
gameState = 1;


var asteroid,rocket

var space

var score

function preload(){
  spaceImg = loadImage("R.jpg")
  asteroidImg = loadImage("asteroid.png")
  rocketImg  = loadImage("rocket.png")
}

function setup(){
createCanvas(600,600); 

 space = createSprite(300,300) 
  space.addImage("space",spaceImg);
  space.velocityY = 2;
  
  asteroidGroup = new Group();
  
  rocket = createSprite(200,200)
  rocket.addImage("rocket",rocketImg)
  rocket.scale = 0.4
}

function draw(){
background(0) ;
  
  rocket.debug  = true;
  rocket.setCollider("rectangle",0,0,300,300);
  
  if(gameState === PLAY){   
    spawnAsteroids()
    score = Math.ceil(frameCount/frameRate());
  
if(space.y > 400){
  space.y = 300
}  
  

  if(keyDown("space")){
  rocket.velocityY = -4
  
}
  
  rocket.velocityY = rocket.velocityY + 0.8 
  
  if(keyDown("left_arrow")){
    rocket.x = rocket.x - 5 
  }
  
   
  if(keyDown("right_arrow")){
    rocket.x = rocket.x + 5
     
  }
  
  
  
  
  if(asteroidGroup.isTouching(rocket)||rocket.y > 600){
    
  rocket.destroy();
   
  gameState = END;
      
    
  }
  
  
drawSprites()  
    
  
}

  if(gameState === END){
    textSize(30);
    stroke("red");
    fill("red");
    text("GAME OVER",200,300)
    

  
}
  
function spawnAsteroids(){
  
 if(frameCount%200 === 0){
   
   asteroid = createSprite(200,-100)
   asteroid.addImage("obstacle", asteroidImg);
   
   
   asteroid.x = Math.round(random(120,400));
   asteroid.velocityY = 2;
   asteroid.lifetime = 600;
   asteroid.scale = 0.3
   
   asteroidGroup.add(asteroid);
   
 } 

   
 
  
  
  
  
}



}
  
  
  
  




