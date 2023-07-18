var standingImage, runningAnimation
var background,obstacle1, obstacle2,obstacle3
var obstacle,runner


function preload() {

  runningAnimation = loadAnimation("running1.png", "running2.png","running3.png", "running4.png")
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
 backgroundImg = loadImage("background.png")
  standingImage = loadImage("standingImage.png")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
