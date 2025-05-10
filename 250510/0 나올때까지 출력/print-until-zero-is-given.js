const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let arr = [];
for(let i=0; input[i] != 0; i++){
    arr.push(input[i]);
}
console.log(arr.join('\n'));