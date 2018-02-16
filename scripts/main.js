var g = document.getElementsByClassName("gameContainer")[0];
var gm = new GameManager((a, b) => {

    //console.log(a, b);
});
gm.addMobile(new Rectangle("green", {x: 500, y: 10}, {x: 0, y: 0}, 45).display(g));
// gm.addMobile(new Rectangle("black", {x: 100, y: 100}, {x: 50, y: 50}, 30).display(g));
// gm.launch();

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

