const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [coldX, temX] = input[0].split(' ');
const [coldY, temY] = input[1].split(' ');
const [coldZ, temZ] = input[2].split(' ');

let A = 0;
if(coldX === 'Y' && Number(temX) >= 37) A++;
if(coldY === 'Y' && Number(temY) >= 37) A++;
if(coldZ === 'Y' && Number(temZ) >= 37) A++;

console.log(A >= 2 ? 'E' : 'N');