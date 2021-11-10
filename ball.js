class Ball{
    constructor(x , y){
        this.r = 25;
        this.position = createVector(x, y-this.r);
        this.velocity = createVector(0 , 0);
    }

    show(){
        fill(255);
        noStroke();
        ellipse(this.position.x , this.position.y , 2*this.r , 2*this.r);
        stroke(0);
        strokeWeight(2);
        point(this.position.x, this.position.y)
        strokeWeight(1);
        let mou = createVector(mouseX , mouseY);
        mou.sub(this.position);
        drawArrow(this.position , mou , 'red');
    }

    update(){
        this.position.add(this.velocity);
        this.position = createVector(constrain(this.position.x , -this.r , width+this.r) , constrain(this.position.y, -1000000, height-gx-this.r))
        if(this.position.y >= height-gx-this.r){
            this.velocity.setMag(0);
        }
    }

    containsmouse(){
        return(dist(this.position.x , this.position.y , mouseX , mouseY) < this.r)
        
    }
}