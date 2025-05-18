const a = Number(require('fs').readFileSync(0).toString());
console.log(a < 10 || a >= 20 ? 'yes' : 'no');