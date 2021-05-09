const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, dustbinObject, dustbinObject2, dustbinObject3, ground, paper, dustbinImage, binImage, perImage;

function preload()
{
	binImage = loadImage("dustbingreen.png");
	//perImage = loadImage("paper.png");
}

function setup() {
	createCanvas(1200, 700);

	dustbinImage = createSprite(1000, 600, 200, 25);
	dustbinImage.addImage(binImage);
	dustbinImage.scale = 0.45;

	//paper = createSprite(200, 350, 20, 20);
	//paper.addImage(perImage);

	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(200, 680, 50);
	dustbinObject = new Dustbin(1000, 665, 100, 15);
	dustbinObject2 = new Dustbin(1050, 600, 15, 150);
	dustbinObject3 = new Dustbin(950, 600, 15, 150)
	ground = new Ground(600, 690, 1200, 30);

	Engine.run(engine);
	keyPressed();
}


function draw() 
{
  Engine.update(engine);
  rectMode(CENTER);
  background("white");

  console.log(paperObject.body.position.y);

  paperObject.display();
  dustbinObject.display();
  dustbinObject2.display();
  dustbinObject3.display();
  ground.display();
  
  drawSprites();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x: 45, y: -45});
	}
}

