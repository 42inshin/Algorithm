const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, ...arr] = input.split("\n");

const stack = [];
const result = [];

const method = {
  'pop': () => stack.pop() || -1,
  'size': () => stack.length,
  'empty': () => stack.length ? 0 : 1,
  'top': () => stack.at(-1) || -1
}

for (let str of arr) {
  if (str.includes('push')) {
    stack.push(Number(str.split(" ")[1]))
  } else {
    result.push(method[str]())
  }
}

console.log(result.join('\n'))
