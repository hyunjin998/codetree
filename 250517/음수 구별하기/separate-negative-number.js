const N = Number(require('fs').readFileSync(0).toString());
console.log(N + (N < 0 ? '\nminus' : ''));