  class Paper  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,23,options);
    
       // this.image = loadImage('paper.png');
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            fill("red")
           // imageMode(CENTER);
           // image(this.image,0,0,70,70);
           rectMode(CENTRE);
           ellipse(0,0,70,70);

            pop();
        }

}
