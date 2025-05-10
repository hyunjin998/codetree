const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
console.log(+(A>=B) + '\n' + +(A>B) + '\n' + +(B>=A) + '\n' + +(B>A) + '\n' + +(A==B) + '\n' + +(A!=B));