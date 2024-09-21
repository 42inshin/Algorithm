function solution(a, b) {
    var b_temp = b;
    while (b_temp % 2 == 0) {
        b_temp = Math.floor(b_temp / 2);
    }
    
    while (b_temp % 5 == 0) {
        b_temp = Math.floor(b_temp / 5);
    }
    
    return (a % b_temp == 0 || b_temp == 1) ? 1 : 2
}
