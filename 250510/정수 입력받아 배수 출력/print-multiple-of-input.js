const fs = require('fs');
const N = fs.readFileSync(0).toString().trim();

for(let i=1; i<=5; i++){
    process.stdout.write(N*i + ' ');
}