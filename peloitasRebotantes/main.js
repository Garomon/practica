var canvas = document.querySelector("canvas")

var ctx = canvas.getContext('2d')


var width = canvas.width = 1920;
var height = canvas.height = 1080;

function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min ;
    return num
}


class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x; //posicion horizontal
        this.y = y; //posicion vertical
        this.velX = velX; //velocidad horizontal
        this.velY = velY; //velocidad vertical
        this.color = color; //color
        this.size = size //tamano
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        
    }
    
}


Ball.prototype.update = function() {
    if((this.x + this.size) >= width){
        this.velX = -(this.velX);
    }

    if((this.x - this.size) <= 0){
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height){
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY
}


var balls = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0,0,width,height);
    

    while (balls.length < 25){
        let size = random(10,20);
        let ball = new Ball(random(0 + size, width - size), random(0 + size, height - size), random(-7, 7), random(-7, 7), 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')', size);
        balls.push(ball);
    }

    for(let i = 0; i < balls.length; i++){
        balls[i].draw();
        balls[i].update();
    }

    requestAnimationFrame(loop);

}

loop();

