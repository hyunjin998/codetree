const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let cnt = [0, 0];
for(let i =0; i<10; i++){
    if(arr[i]%3 == 0) cnt[0]++;
    if(arr[i]%5 == 0) cnt[1]++;
}

console.log(cnt.join(' '));