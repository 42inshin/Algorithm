// 최단 경로: bfs
function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];
    
    // y, x, dist
    const queue = [[0, 0, 1]]
    
    while (queue.length) {
        const [y, x, dist] = queue.shift();
        
        if (y === n - 1 && x === m - 1) return dist;
        
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1) {
                maps[ny][nx] = 0;
                queue.push([ny, nx, dist + 1]);
            }
        }
    }
    
    return -1;
}