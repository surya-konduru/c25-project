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
    imageMode(CENTER);
    fill("deepPink");
    var pos = this.body.position;
    ellipse(pos.x, pos.y, this.radius, this.radius);
  }

  jump() {
    console.log("jumping");
    Body.applyForce(this.body, this.body.position, { x: 285, y: 210 });
  }
}
