const N = +require('fs').readFileSync(0);

for(let i=0; i<N; i++){
    for(let j=N; j>i; j--){
        process.stdout.write('* ');
    }
    console.log();
}