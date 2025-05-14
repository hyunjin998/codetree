const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

const str = '1'.repeat(m);
console.log(Array(n).fill(str).join('\n'));