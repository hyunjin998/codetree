const grade = Number(require('fs').readFileSync(0).toString());
console.log(grade == 100 ? 'pass' : 'failure');