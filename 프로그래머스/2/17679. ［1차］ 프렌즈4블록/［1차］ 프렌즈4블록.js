function solution(m, n, board) {
    const b = board.map(v => v.split(""));
    const stack = []
    
    while (true) {
        // 2x2 확인
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (b[i][j] != ' ' && b[i][j] == b[i][j+1] && b[i][j] == b[i+1][j] && b[i][j] == b[i+1][j+1]) {
                    stack.push([i, j], [i, j+1], [i+1, j], [i+1, j+1]);
                }
            }
        }

        // stack이 빈 경우 탈출
        if (stack.length == 0) break;

        // 블록 지우기
        while (stack.length) {
            let [i, j] = stack.pop()
            b[i][j] = " ";
        }

        // 블록 아래로 채우기
        for (let j = 0; j < n; j++) {
            let temp = [];
            for (let i = 0; i < m; i++) {
                let block = b[i][j];
                if (block !== " ") 
                    temp.push(block);
            }
            for (let i = m - 1; i >= 0; i--) {
                let block = temp.pop()
                if (block) b[i][j] = block;
                else b[i][j] = " ";
            }
        }
    }
    
    return b.reduce((total, v) => total + v.filter(a => a == " ").length, 0);
}