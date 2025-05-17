const [h, w] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const b = Math.floor((10000*w)/(h**2));
console.log(b + (b >=25 ? '\nObesity' : ''));