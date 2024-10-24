function solution(n) {
    const answer = Array.from(Array(n), () => new Array(n).fill(0))
    let num = 1, x = 0, y = 0, a = 0;
    var dir = [[1,0], [0,1], [-1,0], [0,-1]];
    
    while (num <= n * n) {
        answer[y][x] = num;
        let nextX = x + dir[a][0];
        let nextY = y + dir[a][1];
        if (nextX >= n || nextY >= n || nextX < 0 || nextY < 0 || answer[nextY][nextX] != 0) {
            a = (1 + a) % 4;
            nextX = x + dir[a][0];
            nextY = y + dir[a][1];
        }
        x = nextX;
        y = nextY;
        num++;
    }
    
    return answer;
}