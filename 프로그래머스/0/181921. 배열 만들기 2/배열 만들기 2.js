function solution(l, r) {
    var answer = [];
    let i = 1;
    while (i < 64) {
        answer.push(5 * i.toString(2));
        i++;
    }
    
    answer = answer.filter(v => v >= l && v <= r)
    
    return answer.length ? answer : [-1];
}