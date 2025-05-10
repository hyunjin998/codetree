const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());
console.log(N >= 90 ? 'A' : N >= 80 ? 'B' : N >=70 ? 'C' : N >= 60 ? 'D' : 'F');