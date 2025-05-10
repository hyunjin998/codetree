const N = +require('fs').readFileSync(0);

for(let i=1; i<=N; i++){
    let arr = [];
    for(let j=1; j<=N; j++){
        arr.push(i + ' * ' + j + ' = ' + i*j);
    }
    console.log(arr.join(', '));
}