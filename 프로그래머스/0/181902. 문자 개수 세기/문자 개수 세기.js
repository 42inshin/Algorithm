function solution1(my_string) {
    var answer = new Array(52).fill(0);
    const A = "A".charCodeAt(0);
    const a = "a".charCodeAt(0);
    
    [...my_string].forEach(c => {
        let code = c.charCodeAt(0);
        if (code >= a)
            answer[code - a + 26]++;
        else
            answer[code - A]++;
    })
    
    return answer;
}

function solution(s) {
    var a = new Array(52).fill(0);
    var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    [...s].forEach(c => {
        a[arr.indexOf(c)]++;
    })
    
    return a
}