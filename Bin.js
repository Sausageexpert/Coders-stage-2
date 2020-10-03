class Bin {
  constructor(x,y)
  {
  this.x=x;
  this.y=y;
  this.dustbinWidth=200;
  this.dustbinHeight=213;
  this.wallThickness=20;

  this.body = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight, {isStatic: true});
  

  this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
  
  }

  display() {

    var pos = this.bottomBody.position;
    var bottomImage = loadImage("bin.png");
     image(this.x, this.y, bottomImage);

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    rect(0, 0, this.dustbinWidth, this.dustbinHeight);

    pop();
  }

}