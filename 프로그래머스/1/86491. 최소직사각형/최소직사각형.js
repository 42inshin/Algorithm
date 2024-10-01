function solution(sizes) {
    var sorted = sizes.map(v => [Math.max(...v), Math.min(...v)]);
    var [a, b] = [0, 0]
    
    sorted.forEach(v => {
        var [i, j] = v;
        a = Math.max(i, a);
        b = Math.max(j, b);
    })
    
    return a * b;
}