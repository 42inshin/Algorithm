function solution(strArr) {
    var map = new Map();
    
    strArr.forEach(v => {
        map.set(v.length, map.get(v.length) + 1 || 1);
    });
    return Math.max(...map.values());
}