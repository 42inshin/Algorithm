function solution(dots) {
    const xArr = dots.map(v => v[0])
    const yArr = dots.map(v => v[1])
    
    const x = Math.max(...xArr) - Math.min(...xArr);
    const y = Math.max(...yArr) - Math.min(...yArr);
    
    return x * y
}