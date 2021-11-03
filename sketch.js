
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var wall;
var brick;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	var ball_options ={
		restitution: 0.3,
		frictionAir:0,
		density:1.2
		
	}

	 var ground_options ={
		 isStatic: true
	 }

	 var wall_options ={
		 isStatic: true
	 }

	 var brick_options ={
		 isStatic: true
	 }

	ball = Bodies.circle(50,100,20,ball_options)
	World.add(world,ball) 

	ground = Bodies.rectangle(200,390,410,15,ground_options);
	World.add(world,ground);

	wall = Bodies.rectangle(350,338,10,90,wall_options);
	World.add(world,wall)

	brick = Bodies.rectangle(220,348,10,70,brick_options);
	World.add(world,brick)

	ellipseMode(RADIUS);
	rectMode(CENTER);



	//Create the Bodies Here.


	


  
}


function draw() {

  Engine.update(engine)
  background(0);
  

  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,410,15);
  rect(wall.position.x,wall.position.y,10,90)
  rect(brick.position.x,brick.position.y,10,70)




  
  drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.,y:0.-05});
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.9,y:0});
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.,y:0.-9});

	}
}





