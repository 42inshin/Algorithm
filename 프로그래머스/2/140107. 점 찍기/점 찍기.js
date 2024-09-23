
function solution(k, d) {
    var answer = 0;
    const dd = d * d;
    var x = 0, y = 0;
    
    // y 값을 최대 위치에 둠.
    while (y < d) {
        y += k;
    }
    
    while (x <= d) {
        while (y >= 0) {
            if (y * y + x * x <= dd) {
                var validDots = Math.floor(y / k) + 1;
                answer += validDots;
                break ;
            }
            y -= k;
        }
        x += k;
    }
    
    return answer;
}
