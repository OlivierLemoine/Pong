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
        for(var i = 0; i < obj.length; i++){
            for(var j = i + 1; j < obj.length; j++){
                if(!obj[i].collideWith(obj[j]))
                    if(obj[j].collideWith(obj[i]))
                        if(this.collisionHandler !== undefined)
                            this.collisionHandler(obj[i], obj[j]);
                    else
                        if(this.collisionHandler !== undefined)
                            this.collisionHandler(obj[i], obj[j]);

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
        }, 10);
    }

    stop(){
        clearInterval(this.game);
    }
}