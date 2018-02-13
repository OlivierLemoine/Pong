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