const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, ...numbers] = input.split("\n").map(Number);
const stack = [];

for (let num of numbers) {
  if (num == 0) {
    stack.pop();
  } else {
    stack.push(num)
  }
}

const answer = stack.reduce((acc, v) => acc + v, 0);
console.log(answer);