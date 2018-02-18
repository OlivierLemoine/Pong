
//Heritage de Mobile
class Circle extends Mobile{
    constructor(color, radius, position = {x: 0, y: 0}, rotation = 0, speed = {x: 0, y: 0}){

        super(color, {x: radius, y: radius}, position, rotation, speed);

        this.div.className = "circle";

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
        var center = this.getPosition();
        var radius = this.getSize().x/2;
        center = {x:(center.x+radius),y:(center.y+radius)};
        var hitBox = [];
        var p = 4;
        var ang = 2*Math.PI/p;
        while(p > 0)
        {
            hitBox.push({x: center.x+radius*Math.cos(p*ang), y: center.y+radius*Math.sin(p*ang)});
            p -= 1;
        }

        return hitBox
    }
}