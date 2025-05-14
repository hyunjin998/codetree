const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
console.log(gcd(n, m));