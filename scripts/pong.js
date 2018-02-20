var g = document.getElementsByClassName("gameContainer")[0];
var pLeft = document.getElementById("pntLeft");
var pRight = document.getElementById("pntRight");
var gm = new GameManager(1000, 1000, (a, b) => {

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
        a.move();
    }
    
    if(b.speed !== undefined){
        let rot = scalairproduct(vect,b.speed)/(magVect*magnitude(b.speed));
        rot = Math.acos(rot);
        let vectCircu = cartesianToCircular(b.speed);
        vectCircu.t += Math.PI - rot;
        b.speed = circularToCartesian(vectCircu);
        b.move();
    }
    else{
        if(a.getPosition().x < 5){
            gm.stop();
            let tmp = parseInt(pRight.innerHTML);
            pRight.innerHTML = ++tmp;
        }
        else if(a.getPosition().x > 1070){
            gm.stop();
            let tmp = parseInt(pRight.innerHTML);
            pLeft.innerHTML = ++tmp;
        }
    }
    
});
gm.addMobile(new Rectangle("red", {x: 20, y: 200}, {x: 10, y: 400}).display(g));
gm.addMobile(new Rectangle("green", {x: 20, y: 200}, {x: 1070, y: 400}).display(g));
gm.addMobile(new Circle("blue", 20, {x: 100, y: 400}, 0, {x: 5, y: 0}).display(g));
gm.launch();

document.addEventListener('keydown', function(e) {

    if(e.key === "z"){
        gm.mobiles[0].move({x: 0, y: -20});
    }
    
    if(e.key === "s"){
        gm.mobiles[0].move({x: 0, y: 20});
    }

    if(e.key === "i"){
        gm.mobiles[1].move({x: 0, y: -20});
    }
    
    if(e.key === "k"){
        gm.mobiles[1].move({x: 0, y: 20});
    }

});

function reload(){
    gm.mobiles[2].setPosition({x: 100, y: 400});
    gm.mobiles[2].speed = {x: 5, y: 0};
    gm.launch();
}