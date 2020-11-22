class fall{
    constructor(x,y){
       this.body = Bodies.circle(x,y,8,{restitution:0.6});
       
       World.add(world,this.body);
    }
    make(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill(rgb(random(0,255),random(0,255),random(0,255)));
        ellipse(0,0,10);
        pop();
    }
}