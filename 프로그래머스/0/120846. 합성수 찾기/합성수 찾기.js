function solution(n) {
    let answer = 0
    
    Array(n).fill(0).map((_, i) => i + 1).forEach(e => {
        let count = 0
        
        for (let a = 1; a <= e; a++) {
            if (e % a == 0) {
                count++;
            }
            if (count > 2) {
                answer++;
                break;
            }
        }
    })
    return answer;
}

/*
function solution(n) {
    var count = 0;
    for (let i = 4; i <= n; i++) {
        if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 && i != 5 || i % 7 == 0 && i != 7)
            count++;
    }
    
    return count;

}
*/