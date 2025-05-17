const [a, b] = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
console.log((a+87) + '\n' + (b%10));