function solution(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    const num = 1_000_000_007
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % num
    }
    return dp[n];
}

// function solution(n) {
//     let dp = [0,1,2];
    
//     for (let i = 3; i <= n; i++) {
//         dp[i] = dp[i - 1] % 1_000_000_007 + dp[i - 2] % 1_000_000_007;
//     }
    
//     return dp[n] % 1_000_000_007;
// }