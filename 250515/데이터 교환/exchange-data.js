let a = 5, b = 6, c = 7;
let tmp = b;
b = a;
a = c;
c = tmp;
console.log(a + '\n' + b + '\n' + c);