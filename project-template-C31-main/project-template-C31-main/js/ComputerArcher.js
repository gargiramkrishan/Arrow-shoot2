class COMPArcher 
{
  constructor(x,y,width,height,angle)
  {
     this.x = x 
     this.y= y;
     this.width = width;
     this.height = height;
     this.angle = angle;

     this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,this.angle);
     this.image = loadImage("assets/computerArcher.png");
  }
  show()
  {
    console.log(this.angle)
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}