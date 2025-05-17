const [yyyy, mm, dd] = require('fs').readFileSync(0).toString().trim().split('.');
console.log(`${mm}-${dd}-${yyyy}`);