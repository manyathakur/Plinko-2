class plink{
    constructor(x,y){
       var Liam = {
          isStatic:true,
          restitution:0.5
        }
        this.lol = Bodies.circle(x,y,10,Liam);
        
        World.add(world,this.lol);
    
    }
    sell(){
        var pos = this.lol.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,5,5);
    }
}