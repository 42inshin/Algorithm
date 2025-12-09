function solution(n) {
    var answer = Array(n).fill().map((_, i) => Array(i + 1).fill(0));
    
    let num = 0;
    let len = n * (n + 1) / 2;
    
    let i = -1;
    let j = 0;  
    
    while (num < len) {
        // top down
        i++;
        while (answer[i] && answer[i][j] == 0) {
            answer[i][j] = ++num;
            i++;
        }
        // left
        j++;
        i--;
        while (answer[i] && answer[i][j] == 0) {
            answer[i][j] = ++num;
            j++;
        }
        i--;
        j -= 2;
        // bottom up
        while (answer[i] && answer[i][j] == 0) {
            answer[i][j] = ++num;
            j--;
            i--;
        }
        i++;
        j++; 
    }
    
    return answer.flat();
}