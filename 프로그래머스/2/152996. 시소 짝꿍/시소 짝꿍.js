function solution(weights) {
    let answer = 0;
    const m = new Map()
    
    weights.sort((a,b) => a - b);
    
    // map 에 담기
    for (let w of weights) {
        m.set(w, (m.get(w) || 0) + 1);
    }
    
    for (let w of weights) {
        // console.log(w, m.get(w))
        // 중복 제거 (조합)
        if (m.get(w) > 1) {
           answer += m.get(w) * (m.get(w) - 1) / 2;
           m.set(w, 0);
        }
        
        // if (m.get(w * 2 / 3)) answer += m.get(w * 2 / 3) / 2;
        // if (m.get(w * 2 / 4)) answer += m.get(w * 2 / 4) / 2;
        if (m.get(w * 3 / 2)) answer += m.get(w * 3 / 2)
        // if (m.get(w * 3 / 4)) answer += m.get(w * 3 / 4) / 2;
        if (m.get(w * 4 / 2)) answer += m.get(w * 4 / 2)
        if (m.get(w * 4 / 3)) answer += m.get(w * 4 / 3)
    }
    return answer;
}