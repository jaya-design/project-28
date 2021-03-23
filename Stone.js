class Stone{
    constructor(x,y,height,angle){
      var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
      }
        
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body, angle);
      }
  
};