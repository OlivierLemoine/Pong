
//Heritage de Mobile
class Rectangle extends Mobile{
    constructor(color, size, position = {x: 0, y: 0}, rotation = 0, speed = {x: 0, y: 0}){

        super(color, size, position, rotation, speed);

        this.div.className = "rectangle";
    }

    getHitbox(){
        let pos = this.getPosition();
        let size = this.getSize();
        let rot = this.getRotation() + 45;
        rot = rot * 2 * Math.PI / 360;

        let origin = {x: pos.x + size.x / 2, y: pos.y + size.y / 2};

        let points =  [
            {x: origin.x - Math.cos(rot) * Math.SQRT2 * size.x / 2, y: origin.y - Math.sin(rot) * Math.SQRT2 * size.y / 2},
            {x: origin.x - Math.cos(rot) * Math.SQRT2 * size.x / 2, y: origin.y + Math.sin(rot) * Math.SQRT2 * size.y / 2},
            {x: origin.x + Math.cos(rot) * Math.SQRT2 * size.x / 2, y: origin.y + Math.sin(rot) * Math.SQRT2 * size.y / 2},
            {x: origin.x + Math.cos(rot) * Math.SQRT2 * size.x / 2, y: origin.y - Math.sin(rot) * Math.SQRT2 * size.y / 2},
        ];

        return points;
    }
}