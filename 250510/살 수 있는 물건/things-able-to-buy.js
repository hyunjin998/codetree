const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());
console.log(N >=3000 ? 'book' : (N>=1000 && N<3000) ? 'mask' : 'no');