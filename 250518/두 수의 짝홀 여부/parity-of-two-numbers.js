const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const evenOrOdd = (num) => num%2=== 0 ? 'even' : 'odd';
console.log(evenOrOdd(a) + '\n' + evenOrOdd(b));