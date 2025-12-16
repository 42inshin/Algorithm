const makeTree = (n, wires) => {
    const tree = Array(n + 1).fill().map(() => [])
    
    for (let [n, m] of wires) {
        tree[n].push(m);
        tree[m].push(n);
    }
    return tree;
}

const countNodes = (startNode, n, tree, excludedNode) => {
    let count = 0;
    const visited = new Array(n + 1).fill(false)
    const stack = [startNode];
    visited[startNode] = true;
    count = 1;
    
    while (stack.length > 0) {
        const current = stack.pop();
        
        for (let next of tree[current]) {
            // 끊어진 선 무시
            if (next === excludedNode && current === startNode) continue;
            
            if (!visited[next]) {
                visited[next] = true;
                count++;
                stack.push(next);
            }
        }
    }
    return count;
}

function solution(n, wires) {
    const tree = makeTree(n, wires);
    let minDiff = Infinity;
    
    for (let [v1, v2] of wires) {
        // v1로 시작해서 v2로 끊어진 트리 노드 개수
        const count1 = countNodes(v1, n, tree, v2);
        // 두 번째 부분의 트리 노드 개수
        const count2 = n - count1;
        
        const diff = Math.abs(count1 - count2)
        minDiff = Math.min(minDiff, diff);
    }
    
    return minDiff;
}