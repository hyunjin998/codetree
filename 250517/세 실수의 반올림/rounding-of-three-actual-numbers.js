const [a, b, c] = require('fs').readFileSync(0).toString().split('\n').map(Number);
console.log(`${a.toFixed(3)}\n${b.toFixed(3)}\n${c.toFixed(3)}`);