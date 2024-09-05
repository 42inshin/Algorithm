function solution(i, j, k) {
    var s = ''
    while (i <= j) {
        s += i;
        i++;
    }
    
    return s.split(k).length - 1
}

/*
function solution(i, j, k) {
    var answer = 0;
    
    for (; i <= j; i++) {
        answer += i.toString().split('').filter(v => v == k.toString()).length
    }
    return answer;
}
*/