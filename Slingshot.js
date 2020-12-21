class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 20
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        fill("black");
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body) {
        this.sling.bodyA = body;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            fill("green");
            
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                fill("blue");
                line(pointA.x , pointA.y, pointB.x , pointB.y);
                
                
            }
            else{
                strokeWeight(6);
                fill("red");
                line(pointA.x + 30, pointA.y, pointB.x -10, pointB.y);
                
                
            }
           
            
            pop();
        }
    }
    
}