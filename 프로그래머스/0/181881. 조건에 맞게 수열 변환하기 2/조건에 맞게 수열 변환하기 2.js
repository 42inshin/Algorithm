function solution(arr) {
    var answer = 0;
    var arr2 = arr.map(v => calc(v));
    
    while (JSON.stringify(arr) != JSON.stringify(arr2)) {
        arr = arr.map(v => calc(v));
        arr2 = arr2.map(v => calc(v));
        answer += 1;
    }
    
    return answer;
}

function calc(n) {
    if (n >= 50 && n % 2 == 0)
        return n / 2;
    else if (n <= 50 && n % 2 == 1)
        return n * 2 + 1;
    return n;
}