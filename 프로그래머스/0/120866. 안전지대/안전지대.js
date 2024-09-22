function solution(board) {
    var b = board.map(v => [...v]);
    const n = board.length;
    const dx = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
    const dy = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 1) {
                for (let k = 0; k < 9; k++) {
                    var x = i + dx[k];
                    var y = j + dy[k];
                    if (x > -1 && y > -1 && x < n && y < n) {
                        b[x][y] = 1;
                    }
                }
            }
        }
    }
    return b
        .reduce((acc, now) => [...acc, ...now], [])
        .filter(v => v == 0)
        .length;
}