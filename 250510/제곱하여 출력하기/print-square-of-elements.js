const fs = require('fs');
const [N, line] = fs.readFileSync(0).toString().trim().split('\n');
const arr = line.split(' ').map(Number);
console.log(arr.map((num) => num**2).join(' '));