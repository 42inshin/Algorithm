function solution(weights) {
    let count = 0;
    const map = {};
    
    weights.sort((a, b) => b - a)
    
    for (let w of weights) {
        if (map[w]) count += map[w]
        if (map[w * 2]) count += map[w * 2]
        if (map[w * 3 / 2]) count += map[w * 3 / 2]
        if (map[w * 4 / 3]) count += map[w * 4 / 3]
        
        map[w] = (map[w] || 0) + 1
    }
    
    return count;
}