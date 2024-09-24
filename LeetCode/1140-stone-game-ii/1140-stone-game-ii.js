/**
 * @param {number[]} piles
 * @return {number}
 */
function stoneGameII(piles) {
  const n = piles.length;
  // 메모이제이션 테이블: dp[i][M]
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  // 서픽스 합계 배열로 남은 돌들의 합을 빠르게 계산
  const suffixSum = Array(n + 1).fill(0);

  // 서픽스 합계 계산
  for (let i = n - 1; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + piles[i];
  }

  // 반복적 동적 프로그래밍
  for (let i = n - 1; i >= 0; i--) {
    for (let M = 1; M <= n; M++) {
      // 최대 가져갈 수 있는 돌무더기 수
      const maxX = Math.min(2 * M, n - i);
      for (let x = 1; x <= maxX; x++) {
        const nextM = Math.max(M, x);
        dp[i][M] = Math.max(dp[i][M], suffixSum[i] - dp[i + x][nextM]);
      }
    }
  }

  return dp[0][1];
}