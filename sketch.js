
var monkey , monkey_running,ground,invisibleground
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0,SurvivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,300);
  
  ground = createSprite(400,230,1000,20);
  ground.velocityX=-4
   ground.x=ground.width/2;
  
  invisibleground = createSprite(400,230,1000,20);
  
  monkey = createSprite(80,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  monkey.setCollider("circle")
  monkey.debug=true
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
 
  
}


function draw() {
  background('teal');
  
  stroke("blue");
  fill("blue")
  textSize(20)
  text("Score:"+score,100,270)
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+SurvivalTime,400,270);
  
  
  
  if(ground.x<0){
   ground.x=ground.width/2; 
  }
  monkey.collide(ground)
  
  if(keyDown("space")&&monkey.y>=180){
    monkey.velocityY=-15
  }
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+1
  }
  
  
  
  monkey.velocityY=monkey.velocityY+0.8
  
  food();
  obstacles();
  
  drawSprites();
  
}

function food(){
  if(World.frameCount%80===0){
  banana = createSprite(700,Math.round(random(10,200)),10,10);
  banana.addImage(bananaImage);
  banana.velocityX=-3
  banana.lifetime=300;
  banana.scale=0.1
  bananaGroup.add(banana)
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(600,205,10,40);
    obstacle.velocityX=-4
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
  }
}


