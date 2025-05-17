const [A, B] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
process.stdout.write(A < B ? '1 ' : '0 ');
process.stdout.write(A === B ? '1' : '0');