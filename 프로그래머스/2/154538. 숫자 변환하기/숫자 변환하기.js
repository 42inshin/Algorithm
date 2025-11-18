function solution(x, y, n) {
    if (x === y) return 0;
    
    const dp = Array(y + 1).fill(0);
    
    for (let i = x; i < y + 1; i++) {
        if (dp[i] == 0 && i != x) continue;
        
        dp[i + n] = Math.min(dp[i + n] !== 0 ? dp[i + n] : dp[i] + 1, dp[i] + 1);
        dp[i * 2] = Math.min(dp[i * 2] !== 0 ? dp[i * 2] : dp[i] + 1, dp[i] + 1);
        dp[i * 3] = Math.min(dp[i * 3] !== 0 ? dp[i * 3] : dp[i] + 1, dp[i] + 1);
    }
    
    return dp[y] == 0 ? -1 : dp[y] 
}