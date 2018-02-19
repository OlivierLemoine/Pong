class GameManager{
    constructor(collisionHandler){
        this.statics = [];
        this.mobiles = [];
        this.collisionHandler = collisionHandler;
    }

    execute(){
        this.mobiles.forEach(m => {
            this.collide(m);
            m.move();
        });
    }
    collide(mobile){
        var objs = this.mobiles.concat(this.statics);
        objs.forEach(o => {
            if(o !== mobile){
                let selfPoints = o.getHitbox();
                let mobilePoints = mobile.getHitbox();     
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
                        this.collisionHandler(mobile, o);
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