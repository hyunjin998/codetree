console.log(require('fs').readFileSync(0).toString().trim().split('\n').map(line => line.split(' ').map(Number))
.reduce((s, r, i) => s + r.slice(0, i+1).reduce((a, b) => a + b, 0), 0));