//Les variables de position, taille, orientation et couleur ne sont pas gardés à l'interieur de Shape pour evité la redondance de code.
//En effet, nous utilisons les <div> qui sont des object HTML et qui contiennent deja toutes ces informations;
class Shape{
    constructor(color, size, position, rotation){
        //Cette condition serre à faire de Shape une classe abstraite en envoyant une erreur si on essaye d'instancier un object
        if (this.constructor === Shape) {
            throw new Error("This class is abstract");
        }

        if (   typeof(color) != "string"
            || typeof(size.x) != "number"
            || typeof(size.y) != "number"
            || typeof(position.x) != "number"
            || typeof(position.x) != "number"
            || typeof(rotation) != "number"
           ){
            throw new Error("Wrong input arguments");
        }

        //Creation de l'element HTML <div> qui affichera une forme
        this.div = document.createElement("div");

        //Changement de la couleur de la div
        this.setColor(color);
        
        //Positionnement de la <div>
        this.setPosition(position);
        
        //Taille de la <div>
        this.setSize(size);

        //Rotation de la <div>
        this.div.style.transform = "rotate(" + rotation + "deg)";

    }

    getSize(){
        return {x: parseInt(this.div.style.width) ,y: parseInt(this.div.style.height)}
    }

    setSize(size){
        this.div.style.width = size.x + "px";
        this.div.style.height = size.y + "px";
    }

    getPosition(){
        return {x: parseInt(this.div.style.left) ,y: parseInt(this.div.style.top)}
    }

    setPosition(position){
        this.div.style.left = position.x + "px";
        this.div.style.top = position.y + "px";
    }

    getColor(){
        return this.div.style.backgroundColor;
    }

    setColor(color){
        this.div.style.backgroundColor = color;
    }

    getRotation(){
        var tmp = this.div.style.transform.split("rotate(");
        return parseFloat(tmp[1]);
    }

    setRotation(rotation){
        var tmp = this.div.style.transform.split("rotate(" + this.getRotation());
        this.div.style.transform = "rotate(" + rotation + tmp[1];
    }

    getOrigin(){
        let pos = this.getPosition();
        let size = this.getSize();

        return {
            x: pos.x + size.x / 2,
            y: pos.y + size.y / 2,
        }
    }
    
    display(context){
        context.appendChild(this.div);
        return this;
    }
    
    getHitbox(){
        throw new Error("This Methode is abstract");
    }

    collideWith(shape){

        let selfPoints = this.getHitbox();
        let shapePoints = shape.getHitbox();
        selfPoints = selfPoints.concat(selfPoints[0]);


        for(let j = 0; j < shapePoints.length; j++){
            let isInside = true;
            for (let i = 0; i < selfPoints.length - 1; i++) {
                
                let d = {
                    x: selfPoints[i + 1].x - selfPoints[i].x,
                    y: selfPoints[i + 1].y - selfPoints[i].y
                };

                let t = {
                    x: shapePoints[j].x - selfPoints[i].x,
                    y: shapePoints[j].y - selfPoints[i].y
                };

                let side = d.y * t.x - d.x * t.y;
                
                if(side < 0){
                    isInside = false;
                    break;
                }
            }
            if(isInside)
                return true;
        };

        return false;
    }
}