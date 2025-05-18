const [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(Math.max(a, b, c));