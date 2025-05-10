const fs = require("fs");
const [A, B]= fs.readFileSync(0).toString().trim().split(' ').map(Number);

const result = [
    (A<B ? '1 ' : '0 '),
    (A==B ? '1' : '0')
]

console.log(result.join(''));