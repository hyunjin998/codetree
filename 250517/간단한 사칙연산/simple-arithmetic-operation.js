const [A, B] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log((A+B) + '\n' + (A-B) + '\n' + Math.floor(A/B) + '\n' + (A%B));