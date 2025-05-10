const N = +require('fs').readFileSync(0);

for(let i=0; i<N; i++){
    for(let j=0; j<=i*2; j++){
        process.stdout.write('*');
    }
    console.log();
}