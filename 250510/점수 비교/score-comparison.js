const fs = require('fs');
const [[mathA, engA], [mathB, engB]] = fs.readFileSync(0).toString().trim().split('\n').map(line => line.split(' ').map(Number));
console.log(mathA > mathB && engA > engB ? '1' : '0');