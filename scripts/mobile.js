
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

    move(){
        throw new Error("This method is abstarct");
    }
}