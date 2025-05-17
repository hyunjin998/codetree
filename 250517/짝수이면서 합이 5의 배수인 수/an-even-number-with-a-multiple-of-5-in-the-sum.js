const n = Number(require('fs').readFileSync(0).toString().trim().split('\n'));
console.log((n%2==0) && (Math.floor(n/10) + n%10) % 5 == 0 ? 'Yes' : 'No');