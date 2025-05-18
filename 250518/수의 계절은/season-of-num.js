const M = Number(require('fs').readFileSync(0).toString());
console.log(M >= 3 && M <= 5 ? 'Spring' : M >= 6 && M <= 8 ? 'Summer' : M >= 9 && M <= 11 ? 'Fall' : 'Winter');