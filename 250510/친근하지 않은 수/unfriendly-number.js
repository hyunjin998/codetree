const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;
for(let i=1; i<=N; i++){
    if(N%2 == 0 || N%3 == 0 || N%5 == 0) cnt++;
}
console.log(cnt);