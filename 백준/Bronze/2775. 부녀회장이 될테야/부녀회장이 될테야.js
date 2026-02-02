const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const trimed = input.trim().split("\n").map(Number);
const T = trimed[0];
let lineCount = 0;
const arr = [];
const apt = Array.from({length: 15}, () => new Array(15).fill(0));

for (let i = 0; i < 15; i++) {
  apt[0][i] = i;
} 

const getNum = (y, x) => {
  let sum = 0;
  
  for (let j = 1; j <= x; j++) {
    sum += apt[y - 1][j]
  }
  return sum;
}

for (let i = 1; i < 15; i++) {
  for (let j = 1; j < 15; j++) {
    apt[i][j] = getNum(i, j)
  }
}

for (let i = 0; i < T; i++) {
  const info = [];
  for (let j = 0; j < 2; j++) {
    info.push(trimed[++lineCount])
  }
  arr.push(info);
}


const result = arr.map(([j, i]) => apt[j][i]);

console.log(result.join("\n"));