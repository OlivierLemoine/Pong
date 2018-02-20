var g = document.getElementsByClassName("gameContainer")[0];
var point = document.getElementById("point");
var gm = new GameManager(1000, 1000, (a, b) => {

    if(b.getColor() !== "black" && b instanceof Wall){
        b.div.parentNode.removeChild(b.div);
        gm.statics.splice(gm.statics.indexOf(b), 1);
        addPoint(10);
    }
    if(a.getColor() !== "black" && a instanceof Wall){
        a.div.parentNode.removeChild(a.div);
        gm.statics.splice(gm.statics.indexOf(b), 1);
        addPoint(10);
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

reload();

document.addEventListener('keydown', function(e) {

    if(e.key === "d"){
        gm.mobiles[0].move({x: 20, y: 0});
    }
    
    if(e.key === "q"){
        gm.mobiles[0].move({x: -20, y: 0});
    }
});

function reload(){
    gm.mobiles.forEach(element => {
        element.div.parentNode.removeChild(element.div);
        gm.statics.splice(gm.statics.indexOf(element), 1);
    });
    gm.mobiles = [];
    gm.statics.forEach(element => {
        if(element !== "black")
        {
            element.div.parentNode.removeChild(element.div);
            gm.statics.splice(gm.statics.indexOf(element), 1);
        }
    });
    gm.addMobile(new Rectangle("red", {x: 200, y: 20}, {x: 400, y: 1000}).display(g));
    gm.addMobile(new Circle("green", 30, {x: 500, y: 800}, 0,{x:0,y:1}).display(g));
    
    for(var i = 0; i<3;i++)
    {
        for(var j = 0; j<10;j++)
        {
            gm.addStatic(new Wall("blue", {x: 100, y: 200}, {x: 100+j*100, y: 100+i*200}).display(g));
        }
    }

    gm.launch();
}
function addPoint(nb){
    let tmp = parseInt(point.innerHTML);
    point.innerHTML = tmp + nb;
}
