const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());
console.log(N >= 80 ? 'pass' : (80-N) + ' more score');