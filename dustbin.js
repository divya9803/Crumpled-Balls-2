class Dustbin
{
    constructor(x, y, width, height)
    {
        var options = {
                        isStatic: true,
                        'restitution': 0,
                        'friction': 1,
                        'density':0.1
                      }
        
                      this.x = x;
                      this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);

        World.add(world, this.body);
    }
    display()
    {
      rectMode(CENTER);
      fill(255);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
    }
}