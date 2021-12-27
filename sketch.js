
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var floor;
var binLeft;
var binRight;
var rightEdge;
var leftEdge;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    floor = new Shapes(400, 650, 800, 10)
	World.add(world, floor)

	binRight = new Shapes(700, 550, 10, 300)
	World.add(world, binRight)

	binLeft = new Shapes(600, 550, 10, 100)
	World.add(world, binLeft)

	rightEdge = new Shapes(790, 450, 10, 700)
	World.add(world, rightEdge)

	leftEdge = new Shapes(10, 450, 10, 700)
	World.add(world, leftEdge)

    var ball_options = 
{
  restitution: 0.95
}





  ball = Bodies.circle(200, 150, 10, ball_options)
  World.add(world, ball)



	
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);
  floor.display()

  binRight.display()
  binLeft.display()

  rightEdge.display()
  leftEdge.display()
  
  ellipse(ball.position.x, ball.position.y, 10)


  if(keyIsDown(LEFT_ARROW))
  {
	  ulForce()
  }

  if(keyIsDown(RIGHT_ARROW))
  {
	  urForce()
  }

}

function ulForce()
{
	Matter.Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:2, y:2})
}

function urForce()
{
	Matter.Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:2, y:2})
}


*/
function draw() {
  background(200);

  // Create a variable, proportional to the mouseX,
  // varying from 0-360, to represent an angle in degrees.
  let myDegrees = map(mouseX, 0, width, 0, 360);

  // Display that variable in an onscreen text.
  // (Note the nfc() function to truncate additional decimal places,
  // and the "\xB0" character for the degree symbol.)
  let readout = 'angle = ' + nfc(myDegrees, 1) + '\xB0';
  noStroke();
  fill(0);
  text(readout, 5, 15);

  // Create a p5.Vector using the fromAngle function,
  // and extract its x and y components.
  let v = p5.Vector.fromAngle(radians(myDegrees), 30);
  let vx = v.x;
  let vy = v.y;

  push();
  translate(width / 2, height / 2);
  noFill();
  stroke(150);
  line(0, 0, 30, 0);
  stroke(0);
  line(0, 0, vx, vy);
  pop();
}