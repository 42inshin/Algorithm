function solution(d, budget) {
    var answer = 0;
    var count = 0;
    d.sort((a,b) => a - b);
    
    for (let v of d) {
        if (answer + v > budget)
            break;
        answer += v;
        count++;
    }
    
    
    return count;
}