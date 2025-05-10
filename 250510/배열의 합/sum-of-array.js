require('fs').readFileSync(0).toString().trim().split('\n')
.forEach(line => console.log(line.split(' ').reduce((a, b) => +a + +b)));