var g = document.getElementsByClassName("gameContainer")[0];
var gm = new GameManager(1000,1000,(a, b) => {

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

    if(a.speed !== undefined){rebond(a,vect,magVect)}
    
    if(b.speed !== undefined){rebond(b,vect,magVect)}
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
