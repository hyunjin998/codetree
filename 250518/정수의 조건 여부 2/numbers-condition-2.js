const a = Number(require('fs').readFileSync(0).toString());
console.log(a===5 ? 'A' : a%2===0 ? 'B' : '');