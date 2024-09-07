function solution(my_string) {
    var arr = my_string.split(' ');
    var answer = 0;
    var a = 1
    
    arr.forEach(v => {
        if (v == '+') {
            a = 1;
        } else if (v == '-') {
            a = -1;
        } else {
            answer += parseInt(v) * a
        }
    })
    return answer;
}