class Ball{
    constructor(x,y,r,options){

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r = r+r;
        // this.image = loadImage("paper.png");
        
    }
    fly(){
        if(keyWentDown(LEFT_ARROW)){
            Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},{x:-60,y:0});
        }
    }
    update(){
        if(keyWentDown(RIGHT_ARROW)){
            Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},{x:60,y:0});
        }
    }
    

    display()
    {
        
        let pos  =this.body.position;
        let angle = this.body.angle;
        push();

            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(CENTER);
            fill("lightseagreen");
            strokeWeight(5);
            stroke("ghostWhite");
            ellipse(0,0,this.r);
            //scale(10);
        pop();
    }
}