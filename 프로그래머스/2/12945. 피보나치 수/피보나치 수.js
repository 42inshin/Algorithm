function solution(n) {
    var fibo = 0;
    var temp1 = 0;
    var temp2 = 1;
    const m = 1234567;
    
    for (let i = 2; i < n; i++) {
        fibo = temp1 + temp2;
        temp1 = temp2 % m;
        temp2 = fibo % m;
    }
    return (temp1 + temp2) % m;
}