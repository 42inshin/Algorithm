function solution(a, b) {
    var isAOdd = checkOdd(a);
    var isBOdd = checkOdd(b);
    
    if (isAOdd && isBOdd) {
        return a * a + b * b;
    } else if (isAOdd || isBOdd) {
        return 2 * (a + b);
    } else {
        return Math.abs(a - b);
    }
}

function checkOdd(n) {
    return n % 2 != 0;
}