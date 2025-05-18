const [sex, age] = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
console.log(sex === 0 ? age < 19 ? 'BOY' : 'MAN' : sex === 1 && age < 19 ? 'GIRL' : 'WOMAN');