const N = Number(require('fs').readFileSync(0).toString().trim());
console.log(N >= 3000 ? 'book' : N >= 1000 ? 'mask' : N >= 500 ? 'pen' : 'no');