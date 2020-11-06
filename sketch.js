
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, dustbin1, dustbin2, paper;
var dustbinBody, dustbinBody1, dustbinBody2, paperBody;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = createSprite(400, 600, 150, 10);
	dustbin.rotation = 70;
	dustbin.shapeColor = "blue";
	dustbinBody = Bodies.circle(550 , 600 , 25, {restitution: 0.5, isStatic:true})
	World.add(world, dustbinBody);

	dustbin1 = createSprite(400, 600, 150, 10);
	dustbin1.rotation = -70;
	dustbin1.shapeColor = "blue";
	dustbinBody1 = Bodies.circle(700 , 600 , 25, {restitution: 0.5, isStatic:true})
	World.add(world, dustbinBody1);

	dustbin2 = createSprite(400, 600, 110, 10);
	dustbin2.shapeColor = "green";
	dustbinBody2 = Bodies.circle(625 , 670 , 25, {restitution: 0.5, isStatic:true})
	World.add(world, dustbinBody2);

	paper = createSprite(400, 600, 20, 20);
	paper.shapeColor = "white";
	paperBody = Bodies.circle(150 , 600 , 10, {restitution: 0.5, isStatic:false})
	World.add(world, paperBody);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.x= dustbinBody.position.x
  dustbin.y= dustbinBody.position.y

  dustbin1.x= dustbinBody1.position.x
  dustbin1.y= dustbinBody1.position.y

  dustbin2.x= dustbinBody2.position.x
  dustbin2.y= dustbinBody2.position.y

  paper.x= paperBody.position.x
  paper.y= paperBody.position.y

  drawSprites(); 
}