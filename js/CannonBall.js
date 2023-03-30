class CannonBall {
    constructor(x, y) {

        //deixar o obj parado
        var options = {
            isStatic: true
        };

        this.r = 30;

        this.body = Bodies.circle(x, y, this.r, options);

        this.image = loadImage("./assets/cannonball.png");

        World.add(world, this.body);
    }

    //analisar método aluno
    /*shoot() {
        //para posisionar a bola direitinho para percorrer todo o espaço
        var newAngle = cannon.angle - 28;
        //converter de graus para radianos para criar o vetor 
        newAngle = newAngle * (3.14 / 180);
        //guardando o vetor criado na variável velocity
        var velocity = p5.Vector.fromAngle(newAngle);
        //aumentando a velocidade
        velocity.mult(0.5);
        //permitir que ela se mova
        Matter.Body.setStatic(this.body, false);
        //covertendo de novo para graus 
        Matter.Body.setVelocity(this.body, {
            x: velocity.x * (180 / 3.14), y: velocity.y * (180 / 3.14)
        });
    }*/

    //toda a configuração para exibir este objeto
    display() {
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }
} 