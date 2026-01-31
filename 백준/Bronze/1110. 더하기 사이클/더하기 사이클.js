const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let count = 0; 
let str = input.padStart(2, '0');
const n = Number(input);

while (1) {
  count++;
  
  str = str[1] + String(Number(str[0]) + Number(str[1])).padStart(2, '0')[1];
  let m = Number(str)
  if (n === m) {
    console.log(count);
    break;
  }
}