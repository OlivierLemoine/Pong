
//Heritage de Mobile
class Rectangle extends Mobile{
    constructor(color, size, position = {x: 0, y: 0}, rotation = 0, speed = {x: 0, y: 0}){

        super(color, size, position, rotation, speed);

        this.div.className = "rectangle";
    }

    getHitbox(){
        let pos = this.getPosition();
        let size = this.getSize();
        let rot = this.getRotation();
        let origin = this.getOrigin();

        rot = rot * 2 * Math.PI / 360;

        let points =  [
            {x: origin.x - size.x / 2, y: origin.y - size.y / 2},
            {x: origin.x - size.x / 2, y: origin.y + size.y / 2},
            {x: origin.x + size.x / 2, y: origin.y + size.y / 2},
            {x: origin.x + size.x / 2, y: origin.y - size.y / 2},
        ];

        for (let i = 0; i < points.length; i++) {
            let tmp = cartesianToCircular(point);
            tmp.t += rot;
            point = circularToCartesian(tmp);
            point.x += origin.x;
            point.y += origin.y;
        }

        return points;
    }
}