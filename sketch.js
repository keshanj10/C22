const Engine = Matter.Engine;
 const World= Matter.World;
  const Bodies = Matter.Bodies;
var engine, world, ball, ground
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options =
  {
     isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20, ground_options);
   World.add(world,ground);
  var ball_options = 
  {
     restitution: 4.0 
  }
  ball = Bodies.circle(200,100,20, ball_options);
   World.add(world,ball);
  // console.log(ball)
   console.log(ball.position.x)
   console.log(ball.position.y)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  //rectMode(CENTER)
  //rect(400, 200, 100, 100);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}