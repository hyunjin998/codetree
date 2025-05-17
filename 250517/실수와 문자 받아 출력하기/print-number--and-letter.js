const [c, a, b] = require('fs').readFileSync(0).toString().trim().split('\n');
console.log(c + '\n' + Number(a).toFixed(2) + '\n' + Number(b).toFixed(2));