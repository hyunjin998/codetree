const N = +require('fs').readFileSync(0);
for(let i=1; i<=N; i++){
    let arr = [i];
    for(let j=0; j<N-1; j++){
        if(arr[j] == i) arr.push((N+1-i));
        else arr.push(i);
    }
    console.log(arr.join(''));
}