const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().split(' ').map(Number);

while(n != 0){
    console.log(n);
    n = Math.floor(n/m);
}