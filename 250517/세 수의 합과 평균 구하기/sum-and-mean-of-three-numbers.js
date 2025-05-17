const [A, B, C] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log((A+B+C) + '\n' + Math.floor((A+B+C)/3));