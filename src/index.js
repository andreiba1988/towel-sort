
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix.length === 0 ) {return []};
  let res = matrix[0];
  for (let i = 1; i<matrix.length; i++) {
    if (i%2 !== 0 ) {
      for (let j = matrix[i].length-1; j>=0 ; j--) {
        res.push(matrix[i][j]);
      } 
    } else {
      for (let j = 0; j<matrix[i].length; j++) {
        res.push(matrix[i][j]);
      }
    }
  }  
  return res;
}
