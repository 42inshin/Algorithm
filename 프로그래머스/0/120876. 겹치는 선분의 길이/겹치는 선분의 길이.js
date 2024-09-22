function solution(lines) {
    const map = new Map()
    const len = lines.length;
    
    for (let i = 0; i < len; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++) {
            map.set(j, map.get(j) + 1 || 1);
        }
    }
    return [...map].filter(v => v[1] > 1).length;
}