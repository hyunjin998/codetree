const N = +require('fs').readFileSync(0);

let arr = [];
for(let i=0; i<N; i++){
    arr[i] = i+1;
}

for(let i=0; i<N; i++){
    console.log(arr.join(''));
    arr.reverse();
}