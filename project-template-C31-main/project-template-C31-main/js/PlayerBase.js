class PLAArcherBase 
{
  constructor(x,y,width,height)
  {
     this.x = x 
     this.y= y;
     this.width = width;
     this.height = height;


     this.image = loadImage("assets/base1.png");
  }
  show()
  {
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);

  }
}