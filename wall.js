class divide{
    constructor(x,y,width,height){
        var Binod ={
            isStatic:true,
            restitution:0.4,
            friction:0.4
        }
        this.block =Bodies.rectangle(x,y,width,height,Binod);
        this.w = width;
        this.y = height;

        World.add(world,this.block);
    }
    show(){
        var pos = this.block.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.w,this.y);
        pop();
        
    }
}