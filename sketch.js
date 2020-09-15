
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;


var dustbinObj, bobObj1,bobObj2,bobObj3,bobObj4,bobObj5,roofObject,rope1,rope2,rope3,rope4,rope5,bobDiameter	
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=50;
	
	bobObj1=new bob(200,300,50);
	bobObj2=new bob(250,300,50);
	bobObj3=new bob(300,300,50);
	bobObj4=new bob(350,300,50);
	bobObj5=new bob(400,300,50);
	roofObject=new roof(width/2,100,width,20);
	
	rope1=new rope(bobObj1.body,roofObject.body,-bobDiameter*2, -290);
	rope2=new rope(bobObj2.body,roofObject.body,-bobDiameter*1, -290);
	rope3=new rope(bobObj3.body,roofObject.body,0, -290);
	rope4=new rope(bobObj4.body,roofObject.body,bobDiameter*1, -290);
	rope5=new rope(bobObj5.body,roofObject.body,bobDiameter*2, -290);

	Engine.run(engine);
	

	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {		
    	Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-20,y:-20});

    
  	}
}





