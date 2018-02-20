var g = document.getElementsByClassName("gameContainer")[0];
var gm = new GameManager(1000, 1000, (a, b) => {

    if(b.getColor() !== "black"){
        this.div.parentNode.removeChild(this.div);
        gm.statics.splice(gm.statics.indexOf(this), 1);
    }
    
});
gm.addMobile(new Rectangle("red", {x: 200, y: 20}, {x: 400, y: 1000}).display(g));
gm.launch();


document.addEventListener('keydown', function(e) {

    if(e.key === "d"){
        gm.mobiles[0].move({x: 20, y: 0});
    }
    
    if(e.key === "q"){
        gm.mobiles[0].move({x: -20, y: 0});
    }

});

