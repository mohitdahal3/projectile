

function abc(a = "jag"){
    console.log(`Hello ${a}!`);
}

var gx = 100


var ball;
var particles;
var gravity;

function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }

function setup(){
    createCanvas(1300, 600);
    particles = new Particles();
    gravity = createVector(0, 0.2);
    ball = new Ball(width/2 , 0);
}

function draw(){
    background(51);
    fill(0);
    stroke(0);
    strokeWeight(1);
    rect(0,height-gx , width , gx);

    ball.show();
    pulldown(ball)
    ball.update();

    particles.show();
    particles.addParticle(ball.position.x , ball.position.y);
}

function mousePressed(){
    // if(ball.containsmouse()){
    //     ball.velocity = createVector(ball.velocity.x , -10);
    // }
    particles.clearParticles();
    if(ball.position.y == height-gx-ball.r){
    let m = createVector(mouseX , mouseY);
    m.sub(ball.position);
    // m.normalize();
    m.mult(0.1);
    ball.velocity = m;
    }
}

function pulldown(obj){
    obj.velocity.add(gravity);
}
