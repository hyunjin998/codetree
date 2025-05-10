const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const result = [
    +(A>=B),
    +(A>B),
    +(B>=A),
    +(B>A),
    +(A==B),
    +(A!=B)
];

console.log(result.join('\n'));