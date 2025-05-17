const N = Number(require('fs').readFileSync(0).toString());
console.log(N>=80 ? 'pass' : `${80-N} more score`);