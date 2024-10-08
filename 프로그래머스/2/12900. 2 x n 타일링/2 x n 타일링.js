function solution(n) {
    let dp = [0,1,2];
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] % 1_000_000_007 + dp[i - 2] % 1_000_000_007;
    }
    
    return dp[n] % 1_000_000_007;
}