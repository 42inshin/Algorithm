function getDivisor(n) {
    let num = n;
    let count = 1;
    
    for (let i = 2; i <= num; i++) {
        let exp = 0;
        while (num % i == 0) {
            num /= i;
            exp++;
        }
        if (exp > 0) {
            count *= exp + 1;
        }
    }
    if (num > 1) {
        count *= 2;
    }
    return count;
}

function solution(number, limit, power) {
    let num = number;
    var answer = 0;
    let count = 0;
    
    for (let i = 1; i <= num; i++) {
        count = getDivisor(i)
        answer += count > limit ? power : count;
    }
    
    return answer;
}