function solution(s) {
    var set = new Set(s);
    var answer = "";
    
    [...set].sort().map(v => {
        if ([...s].filter(e => e == v).length == 1)
            answer += v;
    })
    
    return answer;
}