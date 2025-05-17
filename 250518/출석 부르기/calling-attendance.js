const A = Number(require('fs').readFileSync(0).toString());
console.log(A == 1 ? 'John' : A == 2 ? 'Tom' : A == 3 ? 'Paul' : 'Vacancy');