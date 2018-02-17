
//Heritage de Shape
class Wall extends Shape{
    constructor(color, size, position, rotation){
        
        super(color, size, position, rotation);
    }

    collideWith(points){
        var pos = this.getPosition();
        var size = this.getSize();

        points.forEach(point => {
            if(pos.x <= point.x
            && pos.x + size.x >= point.x
            && pos.y <= point.y
            && pos.y + size.y >= point.y){
                return true;
            }
        });

        return false;
    }

    getHitbox(){
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