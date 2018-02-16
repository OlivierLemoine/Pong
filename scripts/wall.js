
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
        var pos = this.getPosition();
        var size = this.getSize();

        return [
            {x: pos.x, y: pos.y},
            {x: pos.x + size.x, y: pos.y},
            {x: pos.x + size.x, y: pos.y + size.y},
            {x: pos.x, y: pos.y + size.y},
        ]
    }
}