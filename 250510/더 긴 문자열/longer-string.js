const fs = require('fs');
const [str1, str2] = fs.readFileSync(0).toString().trim().split(' ');

const len = (str1.length > str2.length ? str1.length : str2.length);
const str = (str1.length == str2.length ? 'same' : len == str1.length ? str1 : str2);
console.log(str == 'same' ? str : str + ' ' + len);