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