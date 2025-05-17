const id = require('fs').readFileSync(0).toString().trim().split('-');
console.log(id.join(''));