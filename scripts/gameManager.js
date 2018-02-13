class GameManager{
    constructor(){
        this.walls = [];
        this.mobiles = [];
    }

    execute(){
        this.collision();
        this.mobiles.forEach(m => {
            m.move();
        });
    }

    collision(){
        var obj = this.walls.concat(this.mobiles);
        for(var i = 0; i < obj.length; i++){
            for(var j = i + 1; obj.length; j++){

            }
        }
    }
}

// class gameManager{
//     constructor(walls, ball){
//         this.keys = {
//             p1u: 0, 
//             p1d: 0,
//             p2u: 0,
//             p2d: 0
//         }
//         this.walls = {
//             p1: walls.p1, 
//             p2: walls.p2
//         };
//         this.ball = ball;
//         this.game = null;
//     }

//     execute(){
//         this.walls.p2.position.y = this.ball.position.y - this.ball.size.x;
//         this.walls.p2.updateCss();
//         this.ball.move();
//         this.collisions();
//         if(this.keys.p1u == 1)
//             g.walls.p1.move(0, 2);
//         if(this.keys.p1d == 1)
//             g.walls.p1.move(0, -2);
//         if(this.keys.p2u == 1)
//             g.walls.p2.move(0, 2);
//         if(this.keys.p2d == 1)
//             g.walls.p2.move(0, -2);
//     }

//     collisions(){
//         if(this.ball.position.y + this.ball.direction.y < 0)
//             this.ball.direction.y *= -1;
        
//         if(this.ball.position.y + this.ball.direction.y > 500 - this.ball.size.x)
//             this.ball.direction.y *= -1;


//         if(this.ball.position.x <= this.walls.p1.position.x){
//             if(this.ball.position.y > this.walls.p1.position.y
//             && this.ball.position.y < this.walls.p1.position.y + this.walls.p2.size.y){
//                 this.ball.direction.x *= -1;
//                 this.ball.direction.y = (Math.random() * 6) - 5;
//             }
//             else{
//                 g.stop();
//                 alert("P1 a perdu");
//             }
//         }

//         if(this.ball.position.x + this.ball.size.x >= this.walls.p2.position.x){
//             if(this.ball.position.y > this.walls.p2.position.y
//             && this.ball.position.y < this.walls.p2.position.y + this.walls.p2.size.y){
//                 this.ball.direction.x *= -1;
//                 this.ball.direction.y = (Math.random() * 6) - 3;
//             }
//             else{
//                 g.stop();
//                 alert("P2 a perdu");
//             }
//         }
//     }

//     launch(){
//         this.game = setInterval(() => {
//             this.execute();
//         }, 1);
//     }
//     stop(){
//         clearInterval(this.game);
//     }
// }