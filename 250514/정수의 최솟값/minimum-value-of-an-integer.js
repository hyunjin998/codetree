const fs = require("fs");
const array = fs.readFileSync(0).toString().trim().split(' ').map(Number);
array.sort();
console.log(array[0]);