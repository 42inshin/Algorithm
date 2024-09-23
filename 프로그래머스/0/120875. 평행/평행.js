
function solution(dots) {
    for (let i = 1; i < dots.length; i++) {
         if (calcLine(dots, i))
             return 1;
    }
    return 0
}

function calcLine(dots, n) {
    var [a, b] = dots[0];
    var [c, d] = dots[n];
    
    var others = dots.filter((_, i) => i != 0 && i != n)
    var [e, f] = others[0];
    var [g, h] = others[1];
    
    return (c - a) * (h - f) == (g - e) * (d - b)
}
