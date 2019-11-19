function multiplyMatrices(mat1, mat2){
  let arr1 = mat1[0];
  let arr2 = [];
  for (let i = 0; i < mat2.length; i++){
    arr2.push(mat2[i][0]);
  }
  if(arr1.length === arr2.length){
    let res = new Array(mat1.length);
    for (let k = 0; k < mat1.length; k++) {
      res[k] = new Array(mat2[0].length); // initialize the current row
      for (let c = 0; c < mat2[0].length; c++) {
        res[k][c] = 0;             // initialize the current cell
        for (let i = 0; i < mat1[0].length; i++) {
          res[k][c] += mat1[k][i] * mat2[i][c];
        }
      }
    }
    let result = "";

    for(let i = 0; i < res.length; i++) {
      for(let j = 0; j < res.length; j++) {
        result += res[i][j] + '\t';
      }
      result += "\n";
    }
    return result;
  }else{
    return 'Numbers doesn\'t much';
  }
}

module.exports = {
  multiplyMatrices
};