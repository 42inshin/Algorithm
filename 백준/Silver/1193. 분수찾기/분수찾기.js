const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);
let i = 1;

while (true) {
  const next = n - i;
  if (next <= 0) break;
  n = next;
  i++;
}


// i번째 라인
let x = i % 2 == 0 ? 1 : i;
let y = i % 2 == 0 ? i : 1;

while (n > 1) {
  if (i % 2 == 0) {
    x++;
    y--;
  } else {
    x--;
    y++;
  }
  n--;
}

console.log(`${x}/${y}`)