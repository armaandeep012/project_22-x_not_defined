class Ball {
    constructor(x,y,r){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(x,y,r);
        pop();
    }
}