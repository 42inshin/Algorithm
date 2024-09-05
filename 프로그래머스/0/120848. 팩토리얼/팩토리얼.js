function solution(n) {
    var fac = 1; 
    var i = 1;
    while (fac * i < n) {
        fac *= ++i;
    }
    return i;
}

/*
function solution(n) {
    var fac = 1;
    var i = 0;
    while (fac <= n) {
        i++;
        fac *= i;
    }
    return i - 1;
}
*/