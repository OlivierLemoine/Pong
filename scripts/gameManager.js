class GameManager{
    constructor(x,y,collisionHandler){
        this.statics = [];
        this.mobiles = [];
        this.collisionHandler = collisionHandler;
        this.xMax = x;
        this.yMax = y;
        var dy = y/10;
        var dx = x/10;
        for(var c = 0;c < 10;c++)
        {
            this.addStatic(new Wall("black", {x: 100, y: dy + 200}, {x: -100, y: dy*c}).display(g));
            this.addStatic(new Wall("black", {x: 100, y: dy + 200}, {x: x + 100, y: dy*c}).display(g));
            this.addStatic(new Wall("black", {x: dx + 200, y: 100}, {x: dx*c, y: -100}).display(g));
            this.addStatic(new Wall("black", {x: dx + 200, y: 100}, {x: dx*c, y: y + 100}).display(g));
        }
    }

    execute(){
        this.mobiles.forEach(m => {
            this.collide(m);
            m.move();
            var a = m.getOrigin();
            if(a.x > this.xMax*1.1 || a.y > this.yMax*1.1)
                {
                    this.mobiles.splice(this.mobiles.indexOf(m));
                    m.div.remove();
                }
        });
    }
    collide(mobile){
        var objs = this.mobiles.concat(this.statics);
        objs.forEach(o => {
            if(o !== mobile){

                let mobilePoints = mobile.getHitbox();

                let selfPoints = o.getHitbox();
                selfPoints = selfPoints.concat(selfPoints[0]);

                for(let j = 0; j < mobilePoints.length; j++){
                    let isInside = true;
                    for (let i = 0; i < selfPoints.length - 1; i++) {
                        let d = {
                            x: selfPoints[i + 1].x - selfPoints[i].x,
                            y: selfPoints[i + 1].y - selfPoints[i].y
                        };
                        let t = {
                            x: mobilePoints[j].x - selfPoints[i].x,
                            y: mobilePoints[j].y - selfPoints[i].y
                        };
                        let side = d.y * t.x - d.x * t.y;               
                        if(side < 0){
                            isInside = false;
                            break;
                        }
                    }
                    if(isInside && this.collisionHandler !== undefined){
                        this.collisionHandler(mobile, o, mobilePoints[j]);
                        break;
                    }
                        
                };      
            }
        });
    }

    addStatic(s){
        this.statics = this.statics.concat(s);
    }

    addMobile(m){
        this.mobiles = this.mobiles.concat(m);
    }

    launch(){
        this.game = setInterval(() => {
            this.execute();
        }, 1);
    }

    stop(){
        clearInterval(this.game);
    }
}