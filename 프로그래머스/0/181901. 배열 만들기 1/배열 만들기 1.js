function solution(n, k) {
    var answer = [];
    var i = 1;
    
    while (i * k <= n) {
        answer.push(i++ * k);
    } 
    return answer;
}