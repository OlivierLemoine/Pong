// var canvas = document.getElementById("canv");
// var ctx = canvas.getContext("2d");
var gameDiv = document.getElementById("game");



class Shape{
    constructor(color, size, position, rotation){
        if (this.constructor === Shape) {
            throw new Error("This class is abstract");
        }
        this.color = color;
        this.position = {
            x: position.x,
            y: position.y
        };
        this.size = {
            x: size.x,
            y: size.y
        }
        this.rotation = rotation;

        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.updateCss();
        gameDiv.appendChild(this.div);
    }

    updateCss(){
        this.div.style.backgroundColor = this.color;
        this.div.style.width = this.size.x + "px";
        this.div.style.height = this.size.y + "px";
        this.div.style.left = this.position.x + "px";
        this.div.style.top = this.position.y + "px";
    }

    move(){
        throw new Error("This function is abstract");
    }
}

class Wall extends Shape{
    constructor(color, size, position, rotation){
        super(color, size, position, rotation);
        this.score = 0;
    }

    move(x,y){
        this.position.x += x;
        this.position.y += y;
        
        this.updateCss();
    }
}

class Ball extends Shape{
    constructor(color, radius, position, rotation, direction){
        super(color, {x: radius, y: radius}, position, rotation);
        this.speed = 0;
        this.div.style.borderRadius = radius + "px";
        this.direction = direction;
    }

    move(){
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;

        this.updateCss();
    }
}

class PongGame{
    constructor(walls, ball){
        this.keys = {
            p1u: 0, 
            p1d: 0,
            p2u: 0,
            p2d: 0
        }
        this.walls = {
            p1: walls.p1, 
            p2: walls.p2
        };
        this.ball = ball;
        this.game = null;
    }

    execute(){
        this.walls.p2.position.y = this.ball.position.y - this.ball.size.x;
        this.walls.p2.updateCss();
        this.ball.move();
        this.collisions();
        if(this.keys.p1u == 1)
            g.walls.p1.move(0, 2);
        if(this.keys.p1d == 1)
            g.walls.p1.move(0, -2);
        if(this.keys.p2u == 1)
            g.walls.p2.move(0, 2);
        if(this.keys.p2d == 1)
            g.walls.p2.move(0, -2);
    }

    collisions(){
        if(this.ball.position.y + this.ball.direction.y < 0)
            this.ball.direction.y *= -1;
        
        if(this.ball.position.y + this.ball.direction.y > 500 - this.ball.size.x)
            this.ball.direction.y *= -1;


        if(this.ball.position.x <= this.walls.p1.position.x){
            if(this.ball.position.y > this.walls.p1.position.y
            && this.ball.position.y < this.walls.p1.position.y + this.walls.p2.size.y){
                this.ball.direction.x *= -1;
                this.ball.direction.y = (Math.random() * 6) - 5;
            }
            else{
                g.stop();
                alert("P1 a perdu");
            }
        }

        if(this.ball.position.x + this.ball.size.x >= this.walls.p2.position.x){
            if(this.ball.position.y > this.walls.p2.position.y
            && this.ball.position.y < this.walls.p2.position.y + this.walls.p2.size.y){
                this.ball.direction.x *= -1;
                this.ball.direction.y = (Math.random() * 6) - 3;
            }
            else{
                g.stop();
                alert("P2 a perdu");
            }
        }
    }

    launch(){
        this.game = setInterval(() => {
            this.execute();
        }, 1);
    }
    stop(){
        clearInterval(this.game);
    }
}


let w1 = new Wall("black", {x: 10, y: 100}, {x: 10, y: 10}, 0);
let w2 = new Wall("black", {x: 10, y: 100}, {x: 980, y: 10}, 0);
let b = new Ball("red", 20, {x: 40, y: 50}, 0, {x: 1.5, y: -2});

var g = new PongGame({p1: w1, p2: w2}, b);
g.launch();

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 104) {
        g.keys.p2d = 1;
    }
    if(event.keyCode == 98) {
        g.keys.p2u = 1;
    }
    if(event.keyCode == 90) {
        g.keys.p1d = 1;
    }
    if(event.keyCode == 83) {
        g.keys.p1u = 1;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 104) {
        g.keys.p2d = 0;
    }
    if(event.keyCode == 98) {
        g.keys.p2u = 0;
    }
    if(event.keyCode == 90) {
        g.keys.p1d = 0;
    }
    if(event.keyCode == 83) {
        g.keys.p1u = 0;
    }
});