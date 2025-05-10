const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let result = [];
for(let i=0; i<input.length; i++){
    let str = (input[i] > +25 ? 'Lower' : input[i] == +25 ? 'Good' : 'Higher');
    result.push(str);
    if(str === 'Good') break;
}

console.log(result.join('\n'));