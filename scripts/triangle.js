
//Heritage de Mobile
class Triangle extends Mobile{
    constructor(color, size, position = {x: 0, y: 0}, rotation = 0, speed = {x: 0, y: 0}){

        super(color, {x: 0, y: 0}, position, rotation, speed);

        this.div.className = "triangle";

        this.div.style.transformOrigin = "0 0";
        this.div.style.transform += "scale(" + (size.x / 100) + ", " + (size.y / 100) + ")";
        this.div.style.transformOrigin = "center";
        
        this.div.style.borderBottomColor = color;
        this.div.style.backgroundColor = null;

    }

    getColor(){
        return this.div.style.borderBottomColor;
    }

    setColor(color){
        this.div.style.borderBottomColor = color;
    }

    getSize(){
        let tmp = this.div.style.transform;

        tmp = tmp.split("scale(");

        let size = {x: parseFloat(tmp[1])};
        size.y = parseFloat(tmp[1].split(size.x + ",")[1]);

        size.x *= 100;
        size.y *= 100;

        return size;
    }
    setSize(size){
        let tmp = this.div.style.transform;

        tmp = tmp.split("scale(");
        
        this.div.style.transformOrigin = "0 0";
        this.div.style.transform = tmp[0] + " scale(" + (size.x / 100) + ", " + (size.y / 100) + ")";
        this.div.style.transformOrigin = "center";
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
            {x: pos.x, y: pos.y + size.y},
            {x: pos.x + size.x, y: pos.y + size.y},
            {x: pos.x + (size.x / 2), y: pos.y},
        ]
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