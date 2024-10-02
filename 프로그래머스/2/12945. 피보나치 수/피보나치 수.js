function solution(n) {
    let fibo = 1, a = 0, b = 1;
    const m = 1234567;
    
    for (let i = 2; i <= n; i++) {
        fibo = a + b;
        a = b % m;
        b = fibo % m;
    }
    return fibo % m;
}