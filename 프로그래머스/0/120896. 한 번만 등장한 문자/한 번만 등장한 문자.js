/*
function solution(s) {
    var set = new Set(s);
    var answer = "";
    
    [...set].sort().map(v => {
        if ([...s].filter(e => e == v).length == 1)
            answer += v;
    })
    
    return answer;
}
*/

// 다른 사람 풀이
function solution(s) {
    return [...s].filter(c => s.indexOf(c) == s.lastIndexOf(c)).sort().join('')
}