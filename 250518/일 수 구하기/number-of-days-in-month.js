const n = Number(require('fs').readFileSync(0).toString().trim());
console.log(n === 1 || n === 3 || n === 5 || n === 7 || n === 8 || n === 10 || n === 12 ? '31' : n === 2 ? '28' : '30');