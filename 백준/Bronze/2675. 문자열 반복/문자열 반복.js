const fs = require('fs');

const [n, ...data] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let line of data) {
    const [a, str] = line.split(" ");
    const number = Number(a);
    const print = str.split("").reduce((acc, cur) => acc + cur.repeat(number), '');
    console.log(print);
}