const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const sum = (a+b+c);
const avg = (a+b+c)/3;

console.log(sum + '\n' + avg + '\n' + (sum-avg));