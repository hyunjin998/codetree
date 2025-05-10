const N = +require('fs').readFileSync(0);
let sum = 0;
let cnt = 0;

for(let i=1; i<=100; i++){
    sum += i;
    cnt++;
    if(sum >= N) break;
}
console.log(cnt);