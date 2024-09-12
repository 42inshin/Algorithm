/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
    if (x + y < target)
        return false;
    return target % gcd(x,y) == 0;
}

function gcd(x, y) {
    var n = 1;
    var min = Math.min(x,y)
    
    for (let i = 2; i <= min; i++) {
        if (x % i == 0 && y % i == 0)
            n = i
    }
    return n;
}