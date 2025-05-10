const fs = require('fs');
const [sex, age] = fs.readFileSync(0).toString().split('\n').map(Number);
console.log(sex == 0 ? age >= 19 ? 'MAN' : 'BOY' : age >= 19 ? 'WOMAN' : 'GIRL');