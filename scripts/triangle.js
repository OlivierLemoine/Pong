
//Heritage de Mobile
class Triangle extends Mobile{
    constructor(color, size, position = {x: 0, y: 0}, rotation = 0, speed = {x: 0, y: 0}){

        super(color, {x: 0, y: 0}, position, rotation, speed);

        this.div.className = "triangle";

        this.div.style.transformOrigin = "0 0";

        this.div.style.transform += "scale(" + (size.x / 100) + ", " + (size.y / 100) + ")";

        this.div.style.borderBottomColor = color;
        this.div.style.backgroundColor = null;

    }

    move(mvt){
        if (   typeof(mvt.x) != "number"
            || typeof(mvt.y) != "number"
           ){
            throw new Error("Wrong input arguments");
        }

        this.div.style.left = parseInt(this.div.style.left) + mvt.x + "px";
        this.div.style.top = parseInt(this.div.style.top) + mvt.y + "px";

        return this;
    }
}