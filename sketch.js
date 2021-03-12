var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1Sprite, box2Sprite, box3Sprite
var box1Body, box2Body, box3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	box1Sprite=createSprite(290,610,20,100);
	box1Sprite.shapeColor=color("red");

	box2Sprite=createSprite(395,650,200,20);
	box2Sprite.shapeColor=color("red");

	box3Sprite=createSprite(500,610,20,100);
	box3Sprite.shapeColor=color("red");



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true, friction:0});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1Body = Bodies.rectangle(290,610,20,100 , {isStatic:true} );
 	World.add(world, box1Body);

	box2Body = Bodies.rectangle(395,650,200,20 , {isStatic:true} );
 	World.add(world, box2Body);

	box3Body = Bodies.rectangle(500,610,20,100 , {isStatic:true} );
 	World.add(world, box3Body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  box1Sprite.x= box1Body.position.x 
  box1Sprite.y= box1Body.position.y

  box2Sprite.x= box2Body.position.x 
  box2Sprite.y= box2Body.position.y

  box3Sprite.x= box3Body.position.x 
  box3Sprite.y= box3Body.position.y

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }
}
