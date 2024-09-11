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