
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {

	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	

	Engine.run(engine);
	
}


function draw() {

  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
  textSize(25);
	fill("blue");
	text("Press Up arrow to throw the paper ball into the waste paper basket, Always keep the surrounding clean",250,300);

  fill ("yellow");
  textSize(29);
	text ("Crumpled Balls - 1",1100,200);
  

 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	
  	}
}





