
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
        let rot = this.getRotation() + 45;
        let origin = this.getOrigin();

        rot = rot * 2 * Math.PI / 360;

        let points =  [
            {x: origin.x - Math.cos(rot) * Math.SQRT2 * size.x / 2, y: origin.y - Math.sin(rot) * Math.SQRT2 * size.y / 2},
            {x: origin.x - Math.cos(rot) * Math.SQRT2 * size.x / 2, y: origin.y + Math.sin(rot) * Math.SQRT2 * size.y / 2},
            {x: origin.x + Math.cos(rot) * Math.SQRT2 * size.x / 2, y: origin.y + Math.sin(rot) * Math.SQRT2 * size.y / 2},
            {x: origin.x + Math.cos(rot) * Math.SQRT2 * size.x / 2, y: origin.y - Math.sin(rot) * Math.SQRT2 * size.y / 2},
        ];

        return points;
    }
}