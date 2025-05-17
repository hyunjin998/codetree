const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(`${a} * ${b} = ${a*b}\n${a} / ${b} = ${Math.floor(a/b)}`);