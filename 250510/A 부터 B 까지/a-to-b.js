const fs = require('fs');
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = A;
let arr = [A];

while(result < B){
    result = (result%2==0 ? result+=3 : result*=2);
    if(result > B) break;
    arr.push(result);
}
console.log(arr.join(' '));