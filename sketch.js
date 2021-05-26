
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, grd, dustbinBottom, dustbinLeft, dustbinRight, dustbinImage, bin;

function preload()
{
	dustbinImage=loadImage("img/dustbin.png");
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;
	grd = new ground(800, 380, 1600, 40);
	ball = new paper(100, 150);
	
	dustbinBottom = new dustbin(1500, 350, 100, 20);
	dustbinLeft = new dustbin(1450, 300, 20, 100);
	dustbinRight = new dustbin(1550, 300, 20, 100);

	bin = createSprite(1500, 300, 50, 50);
	bin.scale=0.4;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  
  
  grd.display();
  dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();
  
  bin.addImage(dustbinImage);
  drawSprites();
   ball.display();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:175, y:-175});
	}
}

