function solution(n, m) {
    let a = gcd(n, m);
    let b = (n * m) / a
    return [a, b];
}

function gcd(n, m) {
    let [big, small] = [n, m];
    if (n < m)
        [big, small] = [small, big]
    
    while (small > 0) {
        let r = big % small;
        big = small;
        small = r;
    }
    return big;
}