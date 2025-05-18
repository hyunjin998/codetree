const array = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
array.sort((a, b) => a - b);
console.log(array[1]);