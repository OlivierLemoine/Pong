function cartesianToCircular(point){
    let rho = Math.sqrt(point.x * point.x + point.y * point.y);
    let theta = Math.atan2(point.y, point.x);

    return {r: rho, t: theta};
};

function circularToCartesian(point){

    let x = point.r * Math.cos(point.t);
    let y = point.r * Math.sin(point.t);

    return {x: x, y: y};
};