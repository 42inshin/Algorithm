function solution(n) {
    var answer = []
    
    let i = 2
    while (i <= n) {
        if (n % i == 0) {
            answer.push(i);
            n = parseInt(n / i);
            i = 2;
            continue;
        }
        i++;
    }
    
    return [...new Set(answer)];
}