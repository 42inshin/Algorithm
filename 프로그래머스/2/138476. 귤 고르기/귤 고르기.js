function solution(k, tangerine) {
    var answer = 0;
    
    const c = new Map();
    
    for (let n of tangerine) {
        c.set(n, (c.get(n) || 0) + 1);
    }
    const arr = [...c.values()].sort((a,b) => a - b);
    
    while (k > 0) {
        let a = arr.pop();
        k -= a;
        answer++;
    }
    
    return answer;
}