const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const multi = numbers.reduce((acc, cur) => acc * cur, 1).toString();

for (let i = 0; i < 10; i++) {
  console.log(multi.split("").filter(v => v === i.toString()).length)
}