const fs = require('fs');
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

for(let i=B; i>=A; i--){
    process.stdout.write(i + ' ');
}