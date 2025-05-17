const N = Number(require('fs').readFileSync(0).toString());
console.log(N>=90 ? 'A' : N>=80 ? 'B' : N>=70 ? 'C' : N>=60 ? 'D' : 'F');