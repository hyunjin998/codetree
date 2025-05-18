const Y = Number(require('fs').readFileSync(0).toString());
console.log(Y%100 === 0 && Y % 400 != 0 ? 'false' : Y%4 === 0 ? 'true' : 'false');