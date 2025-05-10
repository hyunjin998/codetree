const N = +require('fs').readFileSync(0);

let cnt = 0;
for(let i=1; i<=N; i++){
    cnt = (i%2==0 || i%3==0 || i%5==0 ? cnt+=1 : cnt);
}
console.log(N-cnt);