// 최단 경로: bfs
function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];
    
    // 0, 0에서 1칸부터 시작
    const q = [[0, 0, 1]];
    
    // 방문처리: 벽으로 만들어 안오게 처리
    maps[0][0] = 0;
    
    while (q.length > 0) {
        const [y, x, dist] = q.shift();
        
        // 탈출 조건: 도착지점
        if (y === n - 1 && x === m - 1) return dist;
        
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1) {
                maps[ny][nx] = 0;
                q.push([ny, nx, dist + 1]);
            }
        }
    }
    
    return -1;
}