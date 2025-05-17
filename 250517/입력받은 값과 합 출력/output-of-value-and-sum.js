const [A, B] = require('fs').readFileSync(0).toString().split(' ').map(Number);
console.log(`${A} ${B} ${A+B}`);