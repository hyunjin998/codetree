const fs = require('fs');
const [N, line] = fs.readFileSync(0).toString().trim().split('\n');
const arr = line.split(' ').map(Number).filter(x => x%2==0).reverse().join(' ');
console.log(arr);