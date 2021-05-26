class paper{
    constructor(x, y){
        var opt = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.rectangle(x, y, 45, 45, opt);
        this.h = 50;
        this.w = 50
        this.image=loadImage("img/paper.png");
    
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push()
        rotate(angle);
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill("pink");
        stroke("red"); 
        image(this.image, 0,0, this.w, this.h);
        pop();
      }
};