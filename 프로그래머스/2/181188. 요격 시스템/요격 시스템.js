function solution(targets) {
    var answer = 0;
    var last = 0;
    
    targets.sort((a,b) => a[1] - b[1]).map(v => {
        var [start, end] = v;
        if (start < last) 
            return;
        last = end;
        answer++;
    })
    
    return answer;
}