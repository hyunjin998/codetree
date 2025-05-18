const [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
process.stdout.write(a === Math.min(a, b, c) ? '1 ' : '0 ');
process.stdout.write(a === b && b === c ? '1' : '0');