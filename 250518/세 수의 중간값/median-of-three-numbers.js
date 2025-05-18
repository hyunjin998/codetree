const [A, B, C] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(B >= A && B < C ? '1' : '0');