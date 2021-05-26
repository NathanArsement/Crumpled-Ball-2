class dustbinImg{
    constructor(x, y, w, h) {
        var options = {
            isStatic:true,
            density:0
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.image=loadImage("img/dustbin.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push()
        rotate(angle);
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill(255);
        image(this.image, 0,0, this.width, this.height);
        pop();
      }
};