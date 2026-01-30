function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);
    
    const dfs = (node) => {
        visited[node] = true;
        
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (computers[node][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}