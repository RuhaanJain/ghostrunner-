var ghost,door,tower,climber;

var ghostImage,towerImage,climberImage,doorImage;

var invisibleLine;

var doorsGroup,climbersGroup,invisibleLineGroup;

var gameState="play";
function preload(){
  
  ghostImage=loadImage("ghost-standing.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  towerImage=loadImage("tower.png");
  
}

function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300,600,600);
  tower.addImage(towerImage);
 tower. velocityY=2;
  
  ghost=createSprite(300,200,50,20);
  ghost.addImage(ghostImage)
  ghost.scale=0.3;
  
  doorsGroup=createGroup();
   invisibleLinesGroup=createGroup();
   climbersGroup=createGroup();
  
  
}


function draw(){
 
  if(gameState=="play"){
    spawnDoors();
    
     if(tower.y>600){
    tower.y=300;
    
  }
     
  if(keyDown("space")&&ghost.y<550&&ghost.y>50){
    ghost.velocityY=-10;
    
    
  }
    
    ghost.velocityY=ghost.velocityY+0.5;
    
      ghost.velocityX=0;
  if(keyDown(LEFT_ARROW)){
    ghost.velocityX=-4;
    
    
  }
    
     if(keyDown(RIGHT_ARROW)){
    ghost.velocityX=4;
    
    
  }
    
   if(ghost.y>600||ghost.isTouching(invisibleLinesGroup)){
    
    
    
    gameState="end";
  }  
    
    if(ghost.isTouching(climbersGroup)){
      
      ghost.velocityY=0;
      
    }
    
  drawSprites();  
  }
  

  
  if(gameState=="end"){
    background("black");
    fill("yellow");
    textSize(30);
    stroke("yellow");
    text("Game Over",220,300);
    
  }
  
  
  
  
  
  
  
  
}

function spawnDoors(){
  
  
  
  if(frameCount%200==0){
    door=createSprite(200,50);
  door.addImage(doorImage);
  door.velocityY=2;
    door.x=Math.round(random(200,400));
    door.depth=ghost.depth-1;
    door.lifetime=300;
    doorsGroup.add(door);
       climber=createSprite(200,100);
  climber.addImage(climberImage);
  climber.velocityY=2;
    climber.x=door.x;
    climber.depth=ghost.depth-1;
    climber.lifetime=300;
    climbersGroup.add(climber);
      invisibleLine=createSprite(200,110);
    invisibleLine.width=climber.width;
    invisibleLine.height=10;
  invisibleLine.velocityY=2;
    invisibleLine.x=door.x;
    invisibleLine.depth=ghost.depth-1;
    invisibleLine.lifetime=300; 
    invisibleLine.visible=false;
    invisibleLinesGroup.add(invisibleLine);
    
    
  }
  
  
  
  
  
  
}











