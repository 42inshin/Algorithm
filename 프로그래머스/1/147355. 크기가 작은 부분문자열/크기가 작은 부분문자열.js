function solution(t, p) {
    var answer = 0;
    let tLen = t.length, pLen = p.length;
    
    for (let i = 0; i < tLen - (pLen - 1); i++) {
        let s = t.slice(i, i + pLen)
        if (+p >= +s)
            answer++;
    }
    
    return answer;
}