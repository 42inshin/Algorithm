function solution(weights) {
    let answer = 0;
    const m = {}
    
    weights.sort((a,b) => b - a);
    
    for (let w of weights) {
        if (m[w]) answer += m[w];
        if (m[w * 3 / 2]) answer += m[w * 3 / 2]
        if (m[w * 2]) answer += m[w * 2]
        if (m[w * 4 / 3]) answer += m[w * 4 / 3]
        
        m[w] = (m[w] || 0) + 1;
    }
    return answer;
}