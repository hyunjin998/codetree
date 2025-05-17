const N = Number(require('fs').readFileSync(0).toString());
console.log(N >= 3000 ? 'book' : N >= 1000 ? 'mask' : 'no');