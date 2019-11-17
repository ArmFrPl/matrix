const {multiplyMatrices} = require('./utils'); 

let mat1 = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

let mat2 = [[7, 6, 3],
  [8, 5, 2],
  [9, 4, 1]];

console.log(multiplyMatrices(mat1, mat2));