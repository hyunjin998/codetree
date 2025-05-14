const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
console.log(GCD(n, m));

function GCD(a, b){
    if(a===1) return 1;
    while(b != 0){
        let tmp = b;
        b = b%a;
        a = tmp;
    }
    return a;
}