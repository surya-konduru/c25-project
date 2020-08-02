
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bin, ground;

function preload() {

}

function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  paper = new Ball(100, 600, 20);
  bin = new Bin(600, 600, 100, 50);
  ground = new Ground(400, 650, 800, 100);
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  bin.display();

  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    paper.jump();
  }
}
