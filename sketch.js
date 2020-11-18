const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const mousey = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
let Rigid;
let r2;
let balls=[];
let ball1;
let ball2;
let ball3;
let ball4;
let ball5;
let ball6;
let ball7;
let rope;
let rope2;
let rope3;
let rope4;
let rope5;
let rope6;
let rope7;
let moucec;

function preload()
{
	
}

function setup() {
	let canvas = createCanvas(1000, 600);
  

	engine = Engine.create();
	world = engine.world;
	let options = {
		restitution: 1.0,
		mass:1000,
		density:1000,

	}
	let option = {
		isStatic:true,
		mass:1000
	}
	Rigid = new Ground(width/2,height/5,500,25);
	r2 = new Ground(width/2,Rigid.body.position.y+450,width,20);
	ball1 = new Ball (440,445,30,options);
	ball2 = new Ball (560,445,30,options);
	ball3 = new Ball (500,445,30,options);
	ball4 = new Ball (620,445,30,options);
	ball5 = new Ball (380,445,30,options);
	ball6 = new Ball (680,445,30,options);
	ball7 = new Ball (320,445,30,options);
	rope  = new Rope(ball1.body,Rigid.body,-60);
	rope2 = new Rope(ball2.body,Rigid.body,60);
	rope3 = new Rope(ball3.body,Rigid.body,-0);
	rope4 = new Rope(ball4.body,Rigid.body,120);
	rope5 = new Rope(ball5.body,Rigid.body,-120);
	rope6 = new Rope(ball6.body,Rigid.body,180);
	rope7 = new Rope(ball7.body,Rigid.body,-180);
	var canvasM = Mouse.create(canvas.elt);
	canvasM.pixelRatio = pixelDensity();
	let options3 = {
		mouse: canvasM
	}
	mousec = mousey.create(engine, options3);
	World.add(world,mousec);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("DarkSeaGreen");
  Rigid.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  rope.show();
  rope2.show();
  rope3.show();
  rope4.show();
  rope5.show();
  rope6.show();
  rope7.show();
  ball7.fly();
  ball6.update();
//    if(mouseDown(LEFT)){
//   	for(let i = width/4; i < 300 ;i = i + 20){
// 		balls.push(new Ball(i,500,20));
	
//   	}
//   }
  	// for(let ball of balls){
		
	// }
  for(let ball of balls){
	ball.display();
  }
  r2.display();

  drawSprites();
//   console.log(mouseX);
  //console.log(mouseY,mouseX);

}
//function mouseOver(){
// 	function mouseDragged(){
// 		//ball5.mouseOver(mega);
// 		//if(mouseX < ball5.body.position.x-30||mouseX < ball5.body.position.x+30&&mouseY < ball5.body.position.y-30||mouseY < ball5.body.position.y+30){
// 			Matter.Body.setPosition(ball5.body,{x:mouseX,y:mouseY});
// 		//}
	
// 	}
// //}

