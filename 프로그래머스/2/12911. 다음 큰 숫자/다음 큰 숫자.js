function solution(n) {
    let a = n.toString(2).split("").filter(a => a == 1).length;
    let b = n + 1
    
    while (a != b.toString(2).split("").filter(a => a == 1).length) {
        b++;
    }
    
    return b;
}