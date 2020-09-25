class Bin {
  constructor(x,y)
  {
  this.x=x;
  this.y=y;
  this.dustbinWidth=200;
  this.dustbinHeight=213;
  this.wallThickness=20;
  
  this.image=loadImage("bin.png")
  this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
  
  }

  display() {

    var pos = this.bottomBody.position;
    var angle = this.bottomBody.angle;

    push();

    translate(pos.x, pos.y);
    //rotate(angle);
    rectMode(CENTER)
    //strokeWeight(4);
    angleMode(RADIANS)
    fill(255)

    imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)

    pop();
  }

}