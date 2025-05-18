const [a, b] = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
console.log(a >= 1.0 && b >= 1.0 ? 'High' : a >= 0.5 && b >= 0.5 ? 'Middle' : 'Low');