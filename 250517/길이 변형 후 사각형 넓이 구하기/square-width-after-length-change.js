let [width, height] = require('fs').readFileSync(0).toString().split(' ').map(Number);
width += 8;
height *= 3;
console.log(width + '\n' + height + '\n' + width*height);