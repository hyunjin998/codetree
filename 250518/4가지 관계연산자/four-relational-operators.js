const [A, B] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(A >= B ? '1' : '0');
console.log(A > B ? '1' : '0');
console.log(B >= A ? '1' : '0');
console.log(B > A ? '1' : '0');