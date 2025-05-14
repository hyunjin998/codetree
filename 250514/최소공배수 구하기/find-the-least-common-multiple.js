const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const gcd = (a, b) => {
    while(b !== 0){
        const tmp = b;
        b = a%b;
        a = tmp;
    }
    return a;
};

const lcm = (a, b) => (a*b / gcd(a, b));
console.log(lcm(n, m));