function solution(n) {
    var arr = Array.from({length: n}, () => Array(n).fill(0));
    
    for (let i = 0, j = 0; i < arr.length; i++, j++) {
        arr[i][j] = 1;
    }
    
    return arr
}