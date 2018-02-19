var g = document.getElementsByClassName("gameContainer")[0];
var gm = new GameManager((a, b, point) => {

    let oA = a.getOrigin();
    let oB = b.getOrigin();

    let vect = {
        x: oB.x - oA.x, 
        y: oB.y - oA.y
    };

    let magVect = magnitude(vect)
    vect.x /= magVect;
    vect.y /= magVect;

    if(a.speed !== undefined){
        let rot = scalairproduct(vect,a.speed)/(magVect*magnitude(a.speed));
        rot = Math.acos(rot);
        let vectCircu = cartesianToCircular(a.speed);
        vectCircu.t += Math.PI - rot;
        a.speed = circularToCartesian(vectCircu);
    }

    if(b.speed !== undefined){
        let rot = scalairproduct(vect,b.speed)/(magVect*magnitude(b.speed));
        rot = Math.acos(rot);
        let vectCircu = cartesianToCircular(b.speed);
        vectCircu.t += Math.PI - rot;
        b.speed = circularToCartesian(vectCircu);
    }
});

gm.addStatic(new Wall("black", {x: 20, y: 1000}, {x: 0, y: 0}).display(g));
gm.addStatic(new Wall("black", {x: 1000, y: 20}, {x: 0, y: 0}).display(g));
gm.addStatic(new Wall("black", {x: 20, y: 1000}, {x: 1000, y: 0}).display(g));
gm.addStatic(new Wall("black", {x: 1000, y: 20}, {x: 0, y: 1000}).display(g));
gm.addMobile(new Rectangle("green", {x: 100, y: 100}, {x: 100, y: 100}, 0, {x: 1, y: 1}).display(g));
// gm.addMobile(new Rectangle("black", {x: 100, y: 100}, {x: 50, y: 50}, 30).display(g));
gm.launch();

// var gameDiv = document.getElementById("game");

// let w1 = new Wall("black", {x: 10, y: 100}, {x: 10, y: 10}, 0);
// let w2 = new Wall("black", {x: 10, y: 100}, {x: 980, y: 10}, 0);
// let b = new Ball("red", 20, {x: 40, y: 50}, 0, {x: 1.5, y: -2});

// var g = new PongGame({p1: w1, p2: w2}, b);
// g.launch();

// document.addEventListener('keydown', function(event) {
//     if(event.keyCode == 104) {
//         g.keys.p2d = 1;
//     }
//     if(event.keyCode == 98) {
//         g.keys.p2u = 1;
//     }
//     if(event.keyCode == 90) {
//         g.keys.p1d = 1;
//     }
//     if(event.keyCode == 83) {
//         g.keys.p1u = 1;
//     }
// });

// document.addEventListener('keyup', function(event) {
//     if(event.keyCode == 104) {
//         g.keys.p2d = 0;
//     }
//     if(event.keyCode == 98) {
//         g.keys.p2u = 0;
//     }
//     if(event.keyCode == 90) {
//         g.keys.p1d = 0;
//     }
//     if(event.keyCode == 83) {
//         g.keys.p1u = 0;
//     }
// });

