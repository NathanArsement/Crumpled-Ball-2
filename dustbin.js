class dustbin{
    constructor(x, y, w, h) {
        var options = {
            restitution:1,
            density:50,
            friction:1.0,
            isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
       
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push()
        rotate(angle);
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255);
        rect(0,0, this.width, this.height);
        pop();
      }
};