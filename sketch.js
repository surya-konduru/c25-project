
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, bin, ground;

function preload() {

}

function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400, 650, 800, 100);
  bin = new Bin(600, 580, 80, 80);
  paper = new Ball(150, 600, 20);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("white");

  ground.display();
  bin.display();
  paper.display();

  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    paper.jump();
  }
}
