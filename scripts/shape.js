//Les variables de position, taille, orientation et couleur ne sont pas gardés à l'interieur de Shape pour evité la redondance de code.
//En effet, nous utilisons les <div> qui sont des object HTML et qui contiennent deja toutes ces informations;
class Shape{
    constructor(color, size, position, rotation){
        //Cette condition serre à faire de Shape une classe abstraite en envoyant une erreur si on essaye d'instancier un object
        if (this.constructor === Shape) {
            throw new Error("This class is abstract");
        }

        //Creation de l'element HTML <div> qui affichera une forme
        this.div = document.createElement("div");

        this.div.style.backgroundColor = color;
        this.div.style.borderColor = color;
        




        gameDiv.appendChild(this.div);


        this.color = color;
        this.position = {
            x: position.x,
            y: position.y
        };
        this.size = {
            x: size.x,
            y: size.y
        }
        this.rotation = rotation;

        
        this.div.style.position = "absolute";
        
        
    }

    updateCss(){
        this.color;
        this.div.style.width = this.size.x + "px";
        this.div.style.height = this.size.y + "px";
        this.div.style.left = this.position.x + "px";
        this.div.style.top = this.position.y + "px";
    }

    move(){
        throw new Error("This function is abstract");
    }
}