function solution(numbers) {
    var answer = 0;
    
    const arr = getAllNumbers(numbers)
    for (let n of arr) {
        answer += isPrime(n) ? 1 : 0;
    }
    return answer;
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