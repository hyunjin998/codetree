const [A, B] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(Math.max(A, B));