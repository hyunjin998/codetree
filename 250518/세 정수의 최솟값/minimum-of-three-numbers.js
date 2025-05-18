const [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(Math.min(a, b, c));