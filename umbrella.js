class Umbrella { 
    constructor(){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         this.image = man_image;
         this.r = 50;
         this.body = Matter.Bodies.circle(83,330, this.r, options);
         World.add(world, this.body);

    }
    
}