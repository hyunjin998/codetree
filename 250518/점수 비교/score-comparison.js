const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [mathA, engA] = input[0].split(' ').map(Number);
const [mathB, engB] = input[1].split(' ').map(Number);
console.log(mathA > mathB && engA > engB ? '1' : '0');