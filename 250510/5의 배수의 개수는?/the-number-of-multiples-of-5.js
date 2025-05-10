const fs = require('fs');
let cnt = 0;
fs.readFileSync(0).toString().trim().split('\n')
.map(line => line.split(' ').filter(num => num%5==0 ? cnt++ : 0));
console.log(cnt);