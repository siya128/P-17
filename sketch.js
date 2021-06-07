var Bground,backgroundImg
var bow,bowImg
var arrow,arrowImg
var balloon,Bred,Bblue,Bgreen,Bpink
var Score = 0
function preload(){
  backgroundImg = loadImage("background0.png")
  bowImg = loadImage("bow0.png")
  Bred = loadImage("red_balloon0.png")
  Bblue = loadImage("blue_balloon0.png")
  Bgreen = loadImage("green_balloon0.png")
  Bpink = loadImage("pink_balloon0.png")
  arrowImg = loadImage("arrow0.png")
}




function setup() {
  createCanvas(400, 400);
 Bground = createSprite(200,200,400,400)
  Bground.addImage(backgroundImg)
  bow = createSprite(375,200,40,65)
  bow.addImage(bowImg)
  arrow = createSprite(375,200,40,5)
  arrow.addImage(arrowImg)
  arrow.scale=0.2
  
  Bpink.scale = 0.
  
}

function draw() {
  drawSprites()
  arrow.y = World.mouseY
  text("Score "+Score,300,20)
  Score = Score+ Math.round(frameCount / 60)
  bow.y =World.mouseY
  //bow.collide(arrow)
  spawnBalloons()
  
  }
  
function spawnBalloons(){
  if(frameCount %100 == 0){
     balloon = createSprite(15,200,30,40)
    balloon.velocityX = 3
    var random1 = Math.round(random(1,6));
    switch(random1){
    case 1:balloon.addImage(Bred);
    break;
    case 2:balloon.addImage(Bblue);
    break;
    case 3:balloon.addImage(Bgreen);
    break;
    case 4:balloon.addImage(Bpink);
    break;
    default:break;
    }
    balloon.scale = 0.07
    balloon.lifetime = 110
    balloon.y = Math.round(random(1,400))
     }
}

