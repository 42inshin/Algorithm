const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let str = input;

const charArr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let c of charArr) {
  str = str.replaceAll(c, '!');
}

console.log(str.length)
