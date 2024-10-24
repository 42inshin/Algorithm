function solution(left, right) {
    var answer = 0;
    let count = 0;
    
    for (let n = left; n <= right; n++) {
        count = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0)
                count++;
        }
        answer += count % 2 ? -n : +n;
    }
    
    return answer;
}