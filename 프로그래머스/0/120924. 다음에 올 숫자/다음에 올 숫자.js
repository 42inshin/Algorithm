function solution(common) {
    const [a,b,c] = common;
    const last = common[common.length -1];
    
    return (a-b == b-c) ? last + b - a : last * Math.floor(b / a)
}