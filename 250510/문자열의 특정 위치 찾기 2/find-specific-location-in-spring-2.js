const c = require('fs').readFileSync(0).toString().trim();
const str = ['apple', 'banana', 'grape', 'blueberry', 'orange'];

let cnt = 0;
str.forEach( fruit => {
    if(fruit.charAt(2) == c || fruit.charAt(3) == c){
        console.log(fruit);
        cnt++;
    }
});
console.log(cnt);