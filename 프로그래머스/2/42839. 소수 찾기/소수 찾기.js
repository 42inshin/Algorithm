function solution(numbers) {
    const arr = getAllNumbers(numbers)
    let count = 0;
    
    for (let n of arr) {
        if (isPrime(n))
            count++;
    }
    return count;
}

function getAllNumbers(n) {
    const digits = n.split("")
    const used = Array(digits.length).fill(false);
    const resultSet = new Set();
    
    function dfs(cur) {
        if (digits.length > 0) {
            resultSet.add(Number(cur));
        }
        
        if (cur.length === digits.length) return ;
        
        for (let i = 0; i < digits.length; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            dfs(cur + digits[i]);
            used[i] = false;
        }
    }
    dfs("");
    return [...resultSet];
}

function isPrime(n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 === 0) return false;
    
    let i = 3;
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) return false;
        i++;
    }
    return true;
}