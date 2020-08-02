class Ball {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      frictionAir: 0.1,
      density: 1.2
    };

    this.radius = radius;
    this.body = Bodies.circle(x, y, radius, options);
    this.image = loadImage("assets/ball.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius*2, this.radius*2);
    pop();
  }


  jump() {
    console.log("jumping");
    Body.applyForce(this.body, this.body.position, { x: 260, y: 200 });
  }
}
