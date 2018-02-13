
//Heritage de Mobile
class Circle extends Mobile{
    constructor(color, radius, position = {x: 0, y: 0}, rotation = 0, speed = {x: 0, y: 0}){

        super(color, {x: radius, y: radius}, position, rotation, speed);

        this.div.className = "circle";

    }

    move(){

        this.div.style.left = parseInt(this.div.style.left) + this.speed.x + "px";
        this.div.style.top = parseInt(this.div.style.top) + this.speed.y + "px";

        return this;
    }
}