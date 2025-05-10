const N = +require('fs').readFileSync(0);

let num = 1;
for(let i=0; i<N; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write(num++ + ' ');
    }
    console.log();
}