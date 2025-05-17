const [A, B] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log((A+B) + '\n' + (A-B) + '\n' + (A/B).toFixed(0) + '\n' + (A%B));