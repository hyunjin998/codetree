const array = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
array.sort();
console.log(array[1]);