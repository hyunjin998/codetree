const fs = require('fs');
const [arr1, arr2] = fs.readFileSync(0).toString().trim().split('\n\n')
.map(line => line.split('\n').map(num => num.split(' ')));

for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        process.stdout.write(arr1[i][j]*arr2[i][j] + ' ');
    }
    console.log();
}