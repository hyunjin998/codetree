const fs = require('fs');
const [N, M] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        process.stdout.write('* ');
    }
    console.log();
}