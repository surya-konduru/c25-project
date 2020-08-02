class Bin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.bin = Bodies.rectangle(x, y, width, 10, options);
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
    image(this.image, 0, 0 , this.width, this.height);    
    pop();     
  }
}