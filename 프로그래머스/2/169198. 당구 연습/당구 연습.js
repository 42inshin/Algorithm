function solution(m, n, startX, startY, balls) {
    var answer = [];
    const map = [m, n];
    const start = [startX, startY];
    const len = balls.length;

    for (let i = 0; i < len; i++) {
        // 위로 쿠션: X는 두 공의 차이 제곱 + Y는 각 공의 윗 벽과의 차이를 더한 값의 제곱
        var up = (start[0] - balls[i][0]) ** 2 + ((map[1] - start[1]) + (map[1] - balls[i][1])) ** 2
        // 아래
        var down = (start[0] - balls[i][0]) ** 2 + (start[1] + balls[i][1]) ** 2
        // 왼쪽
        var left = (start[0] + balls[i][0]) ** 2 + (start[1] - balls[i][1]) ** 2
        // 오른쪽
        var right = ((map[0] - start[0]) + (map[0] - balls[i][0])) ** 2 + (start[1] - balls[i][1]) ** 2
        
        // 쿠션이 안되는 경우를 제거한다.
        if (startY == balls[i][1]) {
            // y가 같을 때, target 공 위치가 startX 보다 큰 경우 오른쪽으로 가면 쿠션없이 target 공에 박음 => 즉, right는 제외
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
