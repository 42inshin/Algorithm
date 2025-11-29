function solution(n) {
    var answer = 1;
    let l = 1;
    let r = 1;
    let sum = 1;
    // 포인터를 옮겨서 계속 좌우로 움직임.
    while (l <= n / 2) {
        if (sum === n) answer++;
        if (sum <= n) sum += ++r
        else if (sum > n) sum -= l++;
    }
    
    return answer;
}