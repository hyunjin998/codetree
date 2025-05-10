const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number).sort((a, b) => b-a);
console.log(arr[Math.floor(arr.length/2)]);