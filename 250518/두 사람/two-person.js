const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [ageA, sexA] = input[0].split(' ');
const [ageB, sexB] = input[1].split(' ');

console.log((Number(ageA) >= 19 && sexA === 'M') || (Number(ageB) >= 19 && sexB === 'M') ? '1' : '0');