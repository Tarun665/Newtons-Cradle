class Rope{
    constructor(bodyA,bodyB,PointB){
        this.pointB = PointB;
        // this.offy = offY;
        let options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:PointB,y:0},
            length: 325,
            stiffness:0.0
        }
        this.link = Matter.Constraint.create(options);
        this.pointB = PointB;
        World.add(world, this.link);
        this.pointB = PointB;
    }
    show(){
        strokeWeight(5);
        stroke("lightred");
        line(this.link.bodyA.position.x,this.link.bodyA.position.y,this.link.bodyB.position.x+this.pointB,this.link.bodyB.position.y);
    }
}