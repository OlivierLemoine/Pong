
//Heritage de Shape
class Mobile extends Shape{
    constructor(color, size, position, rotation, speed){
        
        super(color, size, position, rotation);
        
        //Cette condition serre à faire de Mobile une classe abstraite en envoyant une erreur si on essaye d'instancier un object
        if (this.constructor === Mobile) {
            throw new Error("This class is abstract");
        }

        if (   typeof(speed.x) != "number"
            || typeof(speed.y) != "number"
           ){
            throw new Error("Wrong input arguments");
        }

        this.speed = speed;

    }

    move(mvt){
        let pos = this.getPosition();
        
        if(mvt === undefined){
            pos.x += this.speed.x;
            pos.y += this.speed.y;
        }
        else{
            pos.x += mvt.x;
            pos.y += mvt.y;
        }

        this.setPosition(pos);

        return this;
    }

    addForce(f){
        this.speed.x += f.x;
        this.speed.y += f.y;
    }
}