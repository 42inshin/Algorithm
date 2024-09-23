function solution(k, d) {
    var answer = 0;
    const dd = d * d;
    var x = 0, y = 0;
    
    while (y < d) {
        y += k;
    }
    
    while (x <= d) {
        while (y >= 0) {
            if (y * y + x * x <= dd) {
                var validPots = Math.floor(y / k) + 1;
                answer += validPots;
                break ;
            }
            y -= k;
        }
        x += k;
    }
    
    return answer;
}