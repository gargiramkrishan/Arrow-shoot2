class PlayerArcher 
{
  constructor(x,y,width,height,angle)
  {
     this.x = x 
     this.y= y;
     this.width = width;
     this.height = height;
     this.angle = angle;

     this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,this.angle);
     this.image = loadImage("assets/playerArcher.png");
  }
  show()
  {
    if(keyIsDown(RIGHT_ARROW) && this.angle < 457.4)
    { 
       this.angle += 0.4;
    }
    if(keyIsDown(LEFT_ARROW) && this.angle > 456.6)
    {
       this.angle -= 0.4;
    }
    console.log(this.angle)
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}