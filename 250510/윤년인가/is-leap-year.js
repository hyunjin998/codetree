const fs = require('fs');
const year = Number(fs.readFileSync(0).toString().trim());
console.log(year%100 == 0 && year%400 != 0 ? false : year%4 == 0 ? true : false);