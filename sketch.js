
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, wall_1, wall_2;
var diagonal;

function preload(){
	
}

function setup() {
	createCanvas(700,400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(350,350,700,20);

	wall_1 = new Wall_1(660,288,20,100);
  	wall_2 = new Wall_2(520,288,20,100);

	var ball_options = {
		isStatic: false,
		restitution: 0.65, 
		friction: 0,
		density: 1.2

	}

	//Create the Bodies Here.

	ball = Bodies.circle(100,100,20,ball_options);
	fill("white");
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {

  background(0);

  rectMode(CENTER);

  ground.show();
  wall_1.show();
  wall_2.show();
  Engine.update(engine);
  
  ellipse(ball.position.x, ball.position.y, 20);

  moveBall();
  drawSprites();
 
}

function moveBall(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(ball,{x:0,y:6},{x:6,y:0});
	}
}



