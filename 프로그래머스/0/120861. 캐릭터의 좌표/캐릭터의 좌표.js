function solution(keyinput, board) {
    var answer = [0, 0];
    const boardRange = [parseInt(board[0] / 2), parseInt(board[1] / 2)]
    
    keyinput.forEach(v => {
        if (v == "left") {
            answer[0] -= 1;
            if (answer[0] < -boardRange[0])
                answer[0] = -boardRange[0];
        } else if (v == "right") {
            answer[0] += 1;
            if (answer[0] > boardRange[0])
                answer[0] = boardRange[0];
        } else if (v == "up") {
            answer[1] += 1;
            if (answer[1] > boardRange[1])
                answer[1] = boardRange[1];
        } else {
            answer[1] -= 1;
            if (answer[1] < -boardRange[1])
                answer[1] = -boardRange[1];
        }
        
    })
    
    return answer;
}