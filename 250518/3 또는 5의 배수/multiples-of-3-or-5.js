const A = Number(require('fs').readFileSync(0).toString());
console.log(A % 3 === 0 ? 'YES' : 'NO');
console.log(A % 5 === 0 ? 'YES' : 'NO');