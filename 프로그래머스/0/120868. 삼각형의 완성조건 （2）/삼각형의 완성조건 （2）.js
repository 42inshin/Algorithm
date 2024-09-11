/*
function solution(sides) {
    var answer = [];
    
    // sides의 max 값이 가장 긴 변인 경우,
    var max = Math.max(...sides);
    var other = Math.min(...sides);
    
    for (let i = max - other + 1; i <= max; i++) {
        if (max < i + other)    
            answer.push(i)
    }
    
    // max값보다 큰 경우,
    let j = max;
    while (++j < max + other) {
        answer.push(j)
    }
    
    return answer.length;
}
*/

function solution(sides) {
 // a - b < x < a + b : 이 범위 안에 들어오는 값을 찾는다.
 // 즉, a - b + 1 ~ a + b -1 에 속해야 한다.
 // (a + b - 1) - (a - b + 1) + 1 개 이다.
    return 2 * Math.min(...sides) - 1;
}