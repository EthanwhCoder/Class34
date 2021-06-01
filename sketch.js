const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;
ground = new Ground(800,600,800,20);
box1 = new Box(500,100,70,70);
box2 = new Box(580,100,70,70);
box3 = new Box(660,100,70,70);
box4 = new Box(740,100,70,70);
box5 = new Box(500,100,70,70);
box6 = new Box(580,100,70,70);
box7 = new Box(660,100,70,70);
box8 = new Box(740,100,70,70);
box9 = new Box(500,100,70,70);
box10 = new Box(580,100,70,70);
box11 = new Box(660,100,70,70);
box12 = new Box(740,100,70,70);
box13 = new Box(500,100,70,70);
box14 = new Box(580,100,70,70);
box15 = new Box(660,100,70,70);
box16 = new Box(740,100,70,70);
ball = new Ball(100,300,50);
rope = new Rope(ball.body,{x:100,y:400})
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ball.display();
  rope.display();
}
function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
      rope.attach(ball.body);
  }
}