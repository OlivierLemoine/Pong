function cartesianToCircular(point){
    let rho = magnitude(point);
    let theta = Math.atan2(point.y, point.x);

    return {r: rho, t: theta};
};

function circularToCartesian(point){

    let x = point.r * Math.cos(point.t);
    let y = point.r * Math.sin(point.t);

    return {x: x, y: y};
};

function scalairproduct(vecA,vecB)
{
    return vecA.x * vecB.x + vecA.y * vecB.y;
}

function magnitude(vec){
    return Math.sqrt(magnitudeSQ(vec));
}

function magnitudeSQ(vec){
    return vec.x * vec.x + vec.y * vec.y
}

function randInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function rebond(object,vector,magnitudeVector) {
    let rot = scalairproduct(vector,object.speed)/(magnitudeVector*magnitude(object.speed));
    rot = Math.acos(rot);
    let vectCircu = cartesianToCircular(object.speed);
    vectCircu.t += Math.PI - rot;
    object.speed = circularToCartesian(vectCircu);
    object.move();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }