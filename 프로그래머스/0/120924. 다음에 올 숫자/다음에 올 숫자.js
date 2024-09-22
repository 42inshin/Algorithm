function solution(common) {
    const [a,b,c] = common;
    const last = common.length -1;
    
    return (a-b == b-c) ? common[last] + b - a : common[last] * Math.floor(b / a)
}