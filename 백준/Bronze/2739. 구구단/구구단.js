const file =
	process.platform === "linux" || process.platform === "darwin"
		? "/dev/stdin"
		: "test.txt";
const input = require("fs").readFileSync(file).toString().split("\n").join("");

for (let i = 1; i < 10; i++) {
	console.log(`${input} * ${i} = ${parseInt(input) * i}`)
}
