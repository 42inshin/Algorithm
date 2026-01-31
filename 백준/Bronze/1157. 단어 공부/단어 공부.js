const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().trim();

const map = {};

// 대소문자 처리
str.split("").forEach(v => {
  const word = v.toUpperCase();
    map[word] = (map[word] || 0) + 1;
})


const answers = Object.entries(map).sort((a, b) => Number(b[1]) - Number(a[1]));

console.log(answers.length > 1 && answers[0][1] === answers[1][1] ? "?" :  answers[0][0]);