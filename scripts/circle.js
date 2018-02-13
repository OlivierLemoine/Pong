
//Heritage de Mobile
class Circle extends Mobile{
    constructor(color, radius, position = {x: 0, y: 0}, rotation = 0, speed = {x: 0, y: 0}){

        super(color, {x: radius, y: radius}, position, rotation, speed);

        this.div.className = "circle";

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