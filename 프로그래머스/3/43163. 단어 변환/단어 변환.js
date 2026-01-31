function solution(begin, target, words) {
    const used = [];
    const stack = [[begin, 0]];
    
    if (!words.includes(target)) return 0;
    
    while (stack.length) {
        const [word, count] = stack.shift();
        // 동일하면 종료
        if (word === target) return count;
        
        if (used.includes(word)) continue;
        used.push(word);
        
        for (let w of words) {
            // 1개 차이 나면
            if (isOneChange(word, w)) {
                stack.push([w, count + 1]);
            }
        }
    }
    
    return 0;
}

function isOneChange(cur, next) {
    let count = 0;
    
    for (let i = 0; i < cur.length; i++) {
        if (cur[i] !== next[i]) count++;
        if (count > 1) return false;
    }
    
    return count === 1 ? true : false;
}