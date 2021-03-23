
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,tree,stone,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var boy1,tree1,sling;
var Constraint,create,options;


function preload()
{
	boy = loadImage('boy.png');
	tree = loadImage('tree.png');
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	boy1 = createSprite(200,600,100,200);
	boy1.scale = 0.1;
	
	tree1 = createSprite(800,500,100,200);
	//tree1.scale = 0.10;
	

	mango1 = new Mango(700,500,50,50);
	mango2 = new Mango(900,500,50,50);
	mango3 = new Mango(700,400,50,50);
	mango4 = new Mango(600,300,50,50);
	mango5 = new Mango(1000,500,50,50);
	mango6 = new Mango(800,100,50,50);
	mango7 = new Mango(700,200,50,50);
	mango8 = new Mango(700,500,50,50);
	mango9 = new Mango(400,500,50,50);
	
	boy1.addImage(boy);
	tree1.addImage(tree);

	sling = new Slingshot(boy1.body,{x:200,y:100});

	stone = new Stone(200,400,20,20);

	

	//image(boy, 200, 600);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);

 stone.display();
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 mango8.display()
 mango9.display()
 sling.display();


  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    }
    function mouseReleased(){
    slingShot.fly();
}
function keyPresed(){
	if(keyCode===32){
		matter.body.setPosition(stone.body,{x:235,y:420});
		launcherObject.attach(stone.body);
	}

}