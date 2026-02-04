// 3일 후
function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(node) {
        visited[node] = true;
        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        dfs(i);
        answer++;
    }
    return answer;
}


// dfs

function solution1(n, computers) {
    var answer = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(node) {
        visited[node] = true;
        
        for (let j = 0; j < n; j++) {
            if (computers[node][j] === 1 && !visited[j]) {
                dfs(j);
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

// bfs
function solution2(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        
        answer++;
        visited[i] = true;
        const q = [i];
        
        while (q.length > 0) {
            const node = q.shift();

            for (let j = 0; j < n; j++) {
                if (computers[node][j] === 1 && !visited[j]) {
                    visited[j] = true;
                    q.push(j);
                }
            }
        }
    }
    
    return answer;
}
