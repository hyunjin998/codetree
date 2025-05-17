const number = require('fs').readFileSync(0).toString().trim().split('-');
console.log(`${number[0]}-${number[2]}-${number[1]}`);