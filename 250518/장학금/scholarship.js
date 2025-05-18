const [midterm, final] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(midterm >= 90 ? final >= 95 ? 100000 : final >= 90 ? 50000 : 0 : 0);