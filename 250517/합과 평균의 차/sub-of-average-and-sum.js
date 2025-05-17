const [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const sum = a+b+c;
const avg = Math.floor(sum/3);
console.log(sum + '\n' + avg + '\n' + (sum-avg));