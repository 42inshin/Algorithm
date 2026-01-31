const n = 10001
const visited = new Array(n).fill(false);

let answer = []
let idx = 1;

function dfs(num) {
  if (!visited[num] && num < n) {
    const next = num + String(num).split("").reduce((acc, v) => Number(acc) + Number(v), 0)
    dfs(next);
    visited[next] = true;
  }
}

while (idx <= n) {
  dfs(idx++)
}


for (let i = 1; i < n; i++) {
  if (!visited[i]) {
    answer.push(i)
  }
}

console.log(answer.join("\n"))