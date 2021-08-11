
var trex ,trex_running;
var ground , Ground_move;
var invisibleground
var cloud,cloudimage
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
Ground_move=loadImage("ground2.png")
cloudimage=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex= createSprite(50,100,50,50)
trex.addAnimation("running",trex_running)
trex.scale=0.5
ground= createSprite(100,180,700,30)
ground.addImage(Ground_move)
invisibleground= createSprite(100,195,600,20)
invisibleground.visible=false
 }

function draw(){
  background("white")
  if(keyDown("space")&&trex.y>100){
  trex.velocityY=-6
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(invisibleground)
  ground.velocityX=-9
  if(ground.x<0) {
    ground.x=ground.width/2
  }
  spawncloud()
  drawSprites() 

}
function spawncloud(){
if (frameCount%60===0){

cloud= createSprite(500,11,11,10)
cloud.velocityX=-4
cloud.addImage(cloudimage)
cloud.y=random(20,100)
}}
