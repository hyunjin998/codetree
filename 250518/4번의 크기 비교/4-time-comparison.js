const input = require('fs').readFileSync(0).toString().trim().split('\n');
const A = Number(input[0]);
const [B, C, D, E] = input[1].split(' ').map(Number);

console.log(A > B ? '1' : '0');
console.log(A > C ? '1' : '0');
console.log(A > D ? '1' : '0');
console.log(A > E ? '1' : '0');