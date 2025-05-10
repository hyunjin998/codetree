const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());
console.log(N >= 0 ? N : (N + '\nminus'));