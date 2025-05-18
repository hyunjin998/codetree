const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [mathA, engA] = input[0].split(' ').map(Number);
const [mathB, engB] = input[1].split(' ').map(Number);
console.log(mathA > mathB ? 'A' : mathA === mathB ? engA > engB ? 'A' : 'B' : 'B');