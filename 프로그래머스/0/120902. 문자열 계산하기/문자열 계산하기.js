function solution(my_string) {
    var arr = my_string.split(' ');
    var answer = 0;
    var sign = 1
    
    arr.forEach(v => {
        if (v == '+') {
            sign = 1;
        } else if (v == '-') {
            sign = -1;
        } else {
            answer += parseInt(v) * sign
        }
    })
    return answer;
}