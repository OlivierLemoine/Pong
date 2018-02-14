
//Heritage de Mobile
class Rectangle extends Mobile{
    constructor(color, radius, position = {x: 0, y: 0}, rotation = 0, speed = {x: 0, y: 0}){

        super(color, {x: radius, y: radius}, position, rotation, speed);

        this.div.className = "rectangle";

        this.hitbox = [
            {x:position.x ,y :position.y},
            {x:position.x ,y :position.y},
            {x:position.x ,y :position.y},
            {x:position.x ,y :position.y},
        ];

    }
}