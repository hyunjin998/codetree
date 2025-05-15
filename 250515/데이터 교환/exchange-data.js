let a = 5, b = 6, c = 7;
let tmp = b;
b = a;
let tmp2 = c;
c = tmp;
a = tmp2;
console.log(a + '\n' + b + '\n' + c);