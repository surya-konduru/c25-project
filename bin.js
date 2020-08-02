class Bin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    var bottom = createSprite(x, y, width, height);
    // var left = createSprite(x - (width / 2), y - (height / 2), 10, height);
    // var right = createSprite(x + (width / 2), y - (height / 2), 10, height);

    this.bin = Bodies.rectangle(x, y, width, height, options);
    // this.left = Body.create().render.sprite = left;
    // this.right = Body.create().render.sprite = right;
    this.width = width;
    this.height = height;
    this.image = loadImage("assets/bin.png");

    World.add(world, this.bin);
  }


  display() {
    var pos = this.bin.position;
    
    push();
    translate(pos.x, pos.y);

    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();     
  }
}