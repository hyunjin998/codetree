const fs = require('fs');
fs.readFileSync(0).toString().trim().split('\n')
.map(line => line.split(' ').map(num => num*3))
.forEach(line => console.log(line.join(' ')));