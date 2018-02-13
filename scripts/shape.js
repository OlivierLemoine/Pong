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
        this.div.style.backgroundColor = color;
        
        //Positionnement de la <div>
        this.div.style.left = position.x + "px";
        this.div.style.top = position.y + "px";
        
        //Taille de la <div>
        this.div.style.width = size.x + "px";
        this.div.style.height = size.y + "px";

        //Rotation de la <div>
        this.div.style.transform = "rotate(" + rotation + "deg)";

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
    display(context){
        context.appendChild(this.div);
        return this;
    }
}