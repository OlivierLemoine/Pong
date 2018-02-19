
//Heritage de Shape
class Wall extends Shape{
    constructor(color, size, position, rotation = 0){
        
        super(color, size, position, rotation);

        this.hitbox = this.updateHitbox();
    }

    updateHitbox(){
        let pos = this.getPosition();
        let size = this.getSize();
        let rot = this.getRotation();
        let origin = this.getOrigin();

        rot = rot * 2 * Math.PI / 360;

        let points = [
            {x: - size.x / 2, y: - size.y / 2},
            {x: - size.x / 2, y: + size.y / 2},
            {x: + size.x / 2, y: + size.y / 2},
            {x: + size.x / 2, y: - size.y / 2},
        ];

        for (let i = 0; i < points.length; i++) {
            let tmp = cartesianToCircular(points[i]);
            tmp.t += rot;
            points[i] = circularToCartesian(tmp);
            points[i].x += origin.x;
            points[i].y += origin.y;
        }

        return points;
    }
}