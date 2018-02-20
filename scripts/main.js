var g = document.getElementsByClassName("gameContainer")[0];
var gm = new GameManager(1000,1000,(a, b, point) => {

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

    if(a.speed !== undefined){
        let rot = scalairproduct(vect,a.speed)/(magVect*magnitude(a.speed));
        rot = Math.acos(rot);
        let vectCircu = cartesianToCircular(a.speed);
        vectCircu.t += Math.PI - rot;
        a.speed = circularToCartesian(vectCircu);

        // let vectCirc = cartesianToCircular(vect);
        
        // let tmp = cartesianToCircular(a.speed);
        // tmp.t += (vectCirc.t + tmp.t);
        // a.speed = circularToCartesian(tmp);
        a.move();
    }
    
    if(b.speed !== undefined){
        let rot = scalairproduct(vect,b.speed)/(magVect*magnitude(b.speed));
        rot = Math.acos(rot);
        let vectCircu = cartesianToCircular(b.speed);
        vectCircu.t += Math.PI - rot;
        b.speed = circularToCartesian(vectCircu);

        // let vectCirc = cartesianToCircular(vect);

        // let tmp = cartesianToCircular(b.speed);
        // tmp.t += (vectCirc.t - tmp.t);
        // b.speed = circularToCartesian(tmp);
        b.move();
    }
});

//gm.addStatic(new Wall("black", {x: 20, y: 1000}, {x: 0, y: 0}).display(g));
//gm.addStatic(new Wall("black", {x: 1000, y: 20}, {x: 0, y: 0}).display(g));
//gm.addStatic(new Wall("black", {x: 20, y: 1000}, {x: 1000, y: 0}).display(g));
//gm.addStatic(new Wall("black", {x: 1000, y: 20}, {x: 0, y: 1000}).display(g));
gm.addMobile(new Rectangle("green", {x: 100, y: 100}, {x: 30, y: 30}, 0, {x: 5, y: 6}).display(g));
gm.addMobile(new Rectangle("green", {x: 100, y: 100}, {x: 500, y: 30}, 0, {x: 0, y: 6}).display(g));

gm.launch();