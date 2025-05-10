const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const value = input.slice(1).map(row => row.split(' ').map(Number));

const arr1 = value.slice(0, N);
const arr2 = value.slice(N, N+M);

for(let i=0; i<N; i++){
    let result = [];
    for(let j=0; j<M; j++){
        result.push(arr1[i][j] == arr2[i][j] ? 0 : 1);
    }
    console.log(result.join(' '));
}