const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());
console.log(N%2 != 0 && N%3 == 0 ? true : N%2 == 0 && N%5 == 0 ? true : false);