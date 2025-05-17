const N = Number(require('fs').readFileSync(0).toString());
console.log((N**2) + (N < 5 ? '\ntiny' : ''));