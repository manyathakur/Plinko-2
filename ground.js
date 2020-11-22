class ground{
    constructor(){
        var GG ={
            isStatic:true,
            restitution:0.4,
            friction:0.4
        }
        this.byn =Bodies.rectangle(300,655,600,10,GG);
        World.add(world,this.byn);
    }
    display(){
        var pos = this.byn.position;

        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,600,10);
        pop();
        
    }
}