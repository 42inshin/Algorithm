const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return n > 1;
}

const getPermutations = (n) => {
    const digits = n.split("");
    const used = Array(digits.length).fill(false);
    const resultSet = new Set();
    
    const dfs = (cur) => {
        if (cur.length) resultSet.add(parseInt(cur))
        if (cur.length == digits.length) return;
        
        for (let i = 0; i < digits.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            dfs(cur + digits[i]);
            used[i] = false;
        }
    }
    
    dfs("");
    
    return [...resultSet]
}

function solution(numbers) {
    const all = getPermutations(numbers);
    let count = 0;
    for (let n of all) {
        if (isPrime(n)) count++;
    }
    return count;
}

