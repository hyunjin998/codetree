const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
for(let i=0; i<input.length; i++){
    console.log(parseFloat(input[i]).toFixed(3));
}