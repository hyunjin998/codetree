let A = Number(require('fs').readFileSync(0).toString());
if(A % 2 != 0) A += 3;
if(A % 3 === 0) A /= 3;
console.log(A);