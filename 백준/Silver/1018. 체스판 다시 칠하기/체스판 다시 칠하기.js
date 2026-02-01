const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [MN, ...board] = input.split("\n");
const [N, M] = MN.split(" ").map(Number);

const counts = [];

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    // 고쳐야할 사각형 개수
    let countW = 0;
    let countB = 0;
    
    // i, j 시작 점에서 8x8 보드
    for (let x = i; x < i + 8; x++) {
       for (let y = j; y < j + 8; y++) {
         if ((x + y) % 2 == 0) {
            if (board[x][y] != 'W') countW++;
            if (board[x][y] != 'B') countB++;
         } else {
            if (board[x][y] != 'B') countW++;
            if (board[x][y] != 'W') countB++;
         }
      } 
    }
    counts.push(Math.min(countW, countB));
  }
}

console.log(Math.min(...counts));