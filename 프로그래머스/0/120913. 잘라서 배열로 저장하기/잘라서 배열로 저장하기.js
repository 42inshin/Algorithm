function solution(my_str, n) {
    var answer = [];
    var s = [...my_str]
    while (s.length) {
        answer.push(s.splice(0, n).join(''));
    }
    return answer;
}