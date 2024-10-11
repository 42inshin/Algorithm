function solution(arr) {
    // 최소 거듭제곱 찾기
    let n = 1;
    let len = arr.length;
    
    while (n < len) {
        n *= 2;
    }
    
    for (let i = 0; i < n - len; i++) {
        arr.push(0)
    }
    
    return arr;
}