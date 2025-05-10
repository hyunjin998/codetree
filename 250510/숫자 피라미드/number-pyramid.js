const N = +require('fs').readFileSync(0);

let arr = [];
for(let i=1; i<=N; i++){
    arr.push((i + ' ').repeat(i));
}
console.log(arr.join('\n'));