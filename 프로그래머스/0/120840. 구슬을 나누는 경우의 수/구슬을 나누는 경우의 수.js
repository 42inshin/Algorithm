function solution(balls, share) {
    var answer = acc(balls) / (acc(balls - share) * acc(share));
    return Math.round(answer);
}

function acc(n) {
    var result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

//입력값 〉 30, 15
// 기댓값 〉 155117520