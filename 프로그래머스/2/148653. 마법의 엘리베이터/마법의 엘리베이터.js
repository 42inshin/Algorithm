function solution(storey) {
    if (storey < 5) return storey;
    let r = storey % 10;
    let m = (storey - r) / 10;
    
    return Math.min(r + solution(m), 10 - r + solution(m + 1));
}