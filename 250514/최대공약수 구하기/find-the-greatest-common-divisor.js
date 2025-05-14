const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
console.log(GCD(n, m));

function GCD(a, b){
    if(b==0) return a;
    else return GCD(b, b%a);
}