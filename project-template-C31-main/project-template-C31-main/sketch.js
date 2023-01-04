const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,arrow,archer,base2;
var compt,arrow2,base22;
var angle,angle2;

var arrows = []

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  player = new Player(200*2,400,200,340);
  angle = 457;
  angle2 = 900;
  arrow = new  PlayerArcher(500,360,200,300,angle)
  compt = new Comp(1300,400,200,340);
  arrow2 = new COMPArcher(1300 - 120,360,200,300,angle2)
  base22 = new COMPArcherBase(compt.x,compt.y + 430,500,600)
  base2 = new PLAArcherBase(400,850,500,600)


}

function draw() {
  background(180);

  for(var i = 0; i < arrows.length; i++)
  {
     arrowss(arrows[i],i)
  }



  player.show();
  arrow.show();
  compt.show();
  arrow2.show();
  base22.show()
  base2.show()

  Engine.update(engine);
}




function keyPressed()
{
  if(keyCode == '32')
  {
   archer = new Arrow(arrow.x + 77,arrow.y,100,100)
   arrows.push(archer)
  }
}

function keyReleased()
{
   if(keyCode == '32')
   {
      arrows[arrows.length - 1].shoot();

   }
}

function arrowss(balls,index)
{
  balls.display();
  if (balls.body.position.x >= width || balls.body.position.y >= height - 70) {
    Matter.World.remove(world, balls.body);
    arrows.splice(index, 3);
  }
}