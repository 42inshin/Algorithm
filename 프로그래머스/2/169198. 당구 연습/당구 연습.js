function solution(m, n, startX, startY, balls) {
    var answer = [];
    const map = [m, n];
    const start = [startX, startY];
    const len = balls.length;
    for (let i = 0; i < len; i++) {
        // 위로 박을 때, x는 차이 제곱 & Y는 윗 벽과의 차이 * 2의 제곱
        var up = (start[0] - balls[i][0]) ** 2 + ((map[1] - start[1]) + (map[1] - balls[i][1])) ** 2
        // 아래
        var down = (start[0] - balls[i][0]) ** 2 + (start[1] + balls[i][1]) ** 2
        // 왼쪽
        var left = (start[0] + balls[i][0]) ** 2 + (start[1] - balls[i][1]) ** 2
        // 오른쪽
        var right = ((map[0] - start[0]) + (map[0] - balls[i][0])) ** 2 + (start[1] - balls[i][1]) ** 2
        
        // 쿠션이 안되는 경우를 제거한다.
        // y가 같고 target 공의 x가 큰 경우, right는 제외
        if (startY == balls[i][1]) {
            if (startX < balls[i][0]) {
                answer.push(Math.min(up, down, left)); 
            } else {
                answer.push(Math.min(up, down, right));
            }
        } else if (startX == balls[i][0]) {
            if (startY < balls[i][1]) {
                answer.push(Math.min(down, left, right));
            } else {
                answer.push(Math.min(up, left, right));
            }
        } else {
            answer.push(Math.min(up, down, left, right));
        }
    }
    return answer;
} 
