const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

function sumDevide10 (num) {
    return Math.floor((num * (num+1) /2) / 10);
}

console.log(sumDevide10(N));