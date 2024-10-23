function solution(l, r) {
    var answer = [];
    
    for (let i = 1; i < 64; i++)
        answer.push(5 * i.toString(2));
    answer = answer.filter(v => l <= v && v <= r)
    return answer.length ? answer : [-1];
}