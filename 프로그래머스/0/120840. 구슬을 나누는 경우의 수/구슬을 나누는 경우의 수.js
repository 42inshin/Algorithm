function solution(balls, share) {
    var answer = acc(balls) / (acc(balls - share) * acc(share));
    return Math.round(answer); // 반올림을 안쓰면 정확한 값이 안나오는 경우가 생긴다.
}

function acc(n) {
    var result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// round 안쓸 시 fail 나오는 테스트 케이스
// 입력값 〉 30, 15
// 기댓값 〉 155117520