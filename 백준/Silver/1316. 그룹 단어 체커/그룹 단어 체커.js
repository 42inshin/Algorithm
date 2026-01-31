const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, ...arr] = input.toString().trim().split("\n").map(String);
// console.log(n, arr)
let count = 0;

for (let w of arr) {
  
  const backup = new Set();
  let prevChar = "";
  for (let i = 0; i < w.length; i++) {
    let currentChar = w[i];
    
    if (prevChar !== currentChar) {
      if (!backup.has(currentChar)) {
        backup.add(currentChar);
      } else {
        break;
      }
    }
    
    prevChar = currentChar;
    // 끝까지 확인
    if (i === w.length - 1) {
      // console.log(w)
      count++;
    }
  }
}

console.log(count);