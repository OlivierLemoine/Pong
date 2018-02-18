class GameManager{
    constructor(collisionHandler){
        this.statics = [];
        this.mobiles = [];
        this.collisionHandler = collisionHandler;
    }

    execute(){
        this.collision();
        this.mobiles.forEach(m => {
            m.move();
        });
    }

    collision(){
        var obj = this.mobiles.concat(this.statics);
        for(var i = 0; i < this.mobiles.length; i++){
            for(var j = i + 1; j < obj.length; j++){

                let c1 = obj[i].collideWith(obj[j]);

                if(!c1.res){
                    let c2 = obj[j].collideWith(obj[i]);
                    if(c2.res)
                        if(this.collisionHandler !== undefined)
                            this.collisionHandler(obj[j], obj[i], c2.pos);
                }
                else if(this.collisionHandler !== undefined)
                    this.collisionHandler(obj[i], obj[j], c1.pos);

            }
        }
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