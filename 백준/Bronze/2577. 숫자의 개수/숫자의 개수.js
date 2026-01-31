const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const multi = numbers.reduce((acc, cur) => acc * cur, 1).toString();
const count = new Array(10).fill(0);

for (let char of multi) {
  count[Number(char)]++;
}

console.log(count.join("\n"))