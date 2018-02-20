var g = document.getElementsByClassName("gameContainer")[0];
var point = document.getElementById("point");
var score = 0;
var gm = new GameManager(1000, 1000, (a, b) => {

    if(b.getColor() !== "black" && b instanceof Wall){
        b.div.parentNode.removeChild(b.div);
        gm.statics.splice(gm.statics.indexOf(b), 1);
        score += 10;
    }
    if(a.getColor() !== "black" && a instanceof Wall){
        a.div.parentNode.removeChild(a.div);
        gm.statics.splice(gm.statics.indexOf(b), 1);
        score += 10;
    }
    let oA = a.getOrigin();
    let oB = b.getOrigin();

    let vect = {
        x: oB.x - oA.x, 
        y: oB.y - oA.y
    };

    var magVect = magnitude(vect)
    vect.x /= magVect;
    vect.y /= magVect;
    magVect = magnitude(vect)

    if(b.getColor() == "green"){rebond(b,vect,magVect)}
    if(a.getColor() == "green"){rebond(a,vect,magVect)}
});

gm.launch();

document.addEventListener('keydown', function(e) {

    if(e.key === "d"){
        gm.mobiles[0].move({x: 20, y: 0});
    }
    
    if(e.key === "q"){
        gm.mobiles[0].move({x: -20, y: 0});
    }
});

function reload(){
    gm.addMobile(new Rectangle("red", {x: 200, y: 20}, {x: 400, y: 1000}).display(g));
    gm.addMobile(new Circle("green", 10, {x: 400, y: 1000}, 0,{x:1,y:0}).display(g));
    gm.launch();
}
function addPoint(nb){
    let tmp = parseInt(point.innerHTML);
    point.innerHTML = tmp + nb;
}
