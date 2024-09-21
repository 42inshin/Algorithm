function solution(A, B) {
    var len = A.length
    var A_temp = [...A]
    
    for (let i = 0; i < len; i++) {
        if (A_temp.join("") == B) return i;
        A_temp.unshift(A_temp.pop());
    }
    
    return -1;
}