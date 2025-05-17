const [mm, dd, yyyy] = require('fs').readFileSync(0).toString().trim().split('-');
console.log(`${yyyy}.${mm}.${dd}`);