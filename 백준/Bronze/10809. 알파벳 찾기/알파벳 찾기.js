const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString();

const alpha = "abcdefghijklmnopqrstuvwxyz"

const answer = alpha.split("").map(v => str.indexOf(v)).join(" ");

console.log(answer)
