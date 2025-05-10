const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = +input[0];

for(let i=1; i<=N; i++){
    let [a, b] = input[i].split(' ').map(Number);
    
    let sum = 0;
    for(let j=a; j<=b; j++){
        if(j%2==0) sum += j;
    }
    console.log(sum);
}