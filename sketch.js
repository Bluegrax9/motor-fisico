
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ball_option={
    restitution:2,
    frictionAir:0.01
  }
  var ground_option={
    isStatic:true
  }
  var rock_option={
    restitution:0.20,
  }
  ball = Bodies.circle(100,10,20,ball_option);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_option);
  World.add(world,ground);

  rock = Bodies.circle(300,20,10,rock_option);
  World.add(world,rock);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,10);
}

