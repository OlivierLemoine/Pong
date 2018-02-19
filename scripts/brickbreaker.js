var g = document.getElementsByClassName("gameContainer")[0];
var gm = new GameManager((a, b) => {

    if(b.getColor() !== "black"){
        this.div.parentNode.removeChild(this.div);
        gm.statics.splice(gm.statics.indexOf(this), 1);
    }
    
});
gm.addStatic(new Wall("black", {x: 20, y: 1000}, {x: 0, y: 0}).display(g));
gm.addStatic(new Wall("black", {x: 1000, y: 20}, {x: 0, y: 0}).display(g));
gm.addStatic(new Wall("black", {x: 20, y: 1000}, {x: 1000, y: 0}).display(g));
gm.addStatic(new Wall("black", {x: 1000, y: 20}, {x: 0, y: 1000}).display(g));
gm.addMobile(new Rectangle("red", {x: 200, y: 20}, {x: 400, y: 950}).display(g));
gm.launch();


document.addEventListener('keydown', function(e) {

    if(e.key === "d"){
        gm.mobiles[0].move({x: 10, y: 0});
    }
    
    if(e.key === "q"){
        gm.mobiles[0].move({x: -10, y: 0});
    }

});

