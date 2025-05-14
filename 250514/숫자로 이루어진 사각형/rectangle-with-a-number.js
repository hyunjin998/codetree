const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim().split('\n'));

let num=0;
for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if((++num) % 10 == 0) num = 1;
        process.stdout.write(num + ' ');
    }
    console.log();
}