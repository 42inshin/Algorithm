function solution(arr) {
    let n = 1;
    
    while (n < arr.length)
        n *= 2;
    
    while (n != arr.length)
        arr.push(0)
    
    return arr;
}

function solution1(arr) {
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