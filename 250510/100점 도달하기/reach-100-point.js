const fs = require('fs');
let N = Number(fs.readFileSync(0).toString().trim());

while(N <= 100){
    process.stdout.write((N >= 90 ? 'A' : N >= 80 ? 'B' : N >= 70 ? 'C' : N >= 60 ? 'D' : 'F') + ' ');
    N++;
}