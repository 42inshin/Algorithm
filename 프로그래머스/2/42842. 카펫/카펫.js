function solution(brown, yellow) {
    let x = 0;
    let y = 0;
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i == 0) {
            let a = yellow / i;
            if (a * 2 + i * 2 + 4 == brown) {
                x = Math.max(a, i) + 2;
                y = Math.min(a, i) + 2;
            }
        }
    }
    
    return [x, y];
}