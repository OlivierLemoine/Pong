
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

        this.setPosition = (pos) => {
            let size = this.getSize();
    
            let position = {
                x: pos.x + (size.x - 100) / 2,
                y: pos.y + (size.y - 100) / 2,
            }
    
            this.div.style.left = position.x + "px";
            this.div.style.top = position.y + "px";
        }

    }

    getColor(){
        return this.div.style.borderBottomColor;
    }

    setColor(color){
        this.div.style.borderBottomColor = color;
    }

    getPosition(){

        let size = this.getSize();

        let pos = {
            x: parseInt(this.div.style.left) - (size.x - 100) / 2,
            y: parseInt(this.div.style.top) - (size.y - 100) / 2,
        };

        return pos;
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

    updateHitbox(){
        let pos = this.getPosition();
        let size = this.getSize();
        let rot = this.getRotation();

        rot = rot * 2 * Math.PI / 360;

        let points = [
            {x: 0, y: - size.y / 2},
            {x: - size.x / 2, y: + size.y / 2},
            {x: + size.x / 2, y: + size.y / 2},
        ];

        for (let i = 0; i < points.length; i++) {
            let tmp = cartesianToCircular(points[i]);
            tmp.t += rot;
            points[i] = circularToCartesian(tmp);
        }

        return points;
    }
}