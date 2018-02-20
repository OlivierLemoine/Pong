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
});

gm.launch();

function addShape(s){
    let pos = {
        x: randInt(600) + 50,
        y: randInt(600) + 50,
    };
    let size = {
        x: randInt(150) + 50,
        y: randInt(150) + 50,
    };
    let vel = {
        x: randInt(3),
        y: randInt(3),
    };
    let rot = randInt(360);

    let color = getRandomColor();

    switch (s) {
        case 'rectangle':
            gm.addMobile(new Rectangle(color, size, pos, rot, vel).display(g));
            break;
        case 'triangle':
            gm.addMobile(new Triangle(color, size, pos, rot, vel).display(g));
            break;
        case 'circle':
            gm.addMobile(new Circle(color, size.x, pos, rot, vel).display(g));
            break;
    
        default:
            break;
    }

}
