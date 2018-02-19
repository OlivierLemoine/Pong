var g = document.getElementsByClassName("gameContainer")[0];
var gm = new GameManager((a, b, point) => {

    let oA = a.getOrigin();
    let oB = b.getOrigin();

    let vect = {
        x: oB.x - oA.x, 
        y: oB.y - oA.y
    };

    vect.x /= magnitude(vect);
    vect.y /= magnitude(vect);

    if(b.speed !== undefined){
        b.speed.x *= vect.x;
        b.speed.y *= vect.y;
    }

    if(a.speed !== undefined){
        a.speed.x *= -vect.x;
        a.speed.y *= -vect.y;
    }
});
gm.addStatic(new Wall("black", {x: 20, y: 1000}, {x: 0, y: 0}).display(g));
gm.addStatic(new Wall("black", {x: 1000, y: 20}, {x: 0, y: 0}).display(g));
gm.addStatic(new Wall("black", {x: 20, y: 1000}, {x: 1000, y: 0}).display(g));
gm.addStatic(new Wall("black", {x: 1000, y: 20}, {x: 0, y: 1000}).display(g));
gm.addMobile(new Rectangle("green", {x: 100, y: 100}, {x: 100, y: 100}, 0, {x: 0, y: 2}).display(g));

gm.launch();