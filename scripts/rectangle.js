
//Heritage de Mobile
class Rectangle extends Mobile{
    constructor(color, size, position = {x: 0, y: 0}, rotation = 0, speed = {x: 0, y: 0}){

        super(color, size, position, rotation, speed);

        this.div.className = "rectangle";
    }



    isInHitbox(points){
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