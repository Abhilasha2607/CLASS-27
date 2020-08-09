class Chain {
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length: 10,
            stiffness: 0.05
        }
    this.chain = Constraint.create(options)    
    
    World.add(world,this.chain); 
    console.log(this.chain);
    }
    display(){
       var posA = this.chain.bodyA.position;
       var posB = this.chain.bodyB.position;
       line (posA.x,posA.y,posB.x,posB.y);
    }
}