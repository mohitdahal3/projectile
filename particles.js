class Particles{
    constructor(){
        this.particles = [];
    }

    show(){
        this.particles.forEach(particle => {
            stroke('rgba(63, 147, 242, 0.84)');
            strokeWeight(4);
            point(particle.x, particle.y)
        });
    }

    clearParticles(){
        this.particles = [];
    }

    addParticle(tx , ty){
        this.particles.push(createVector(tx , ty))
    }
}