const a = Number(require('fs').readFileSync(0).toString());
console.log(a % 13 === 0 || a % 19 === 0 ? 'True' : 'False');