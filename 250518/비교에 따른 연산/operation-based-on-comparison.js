const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(a>b ? a*b : Math.floor(b/a));