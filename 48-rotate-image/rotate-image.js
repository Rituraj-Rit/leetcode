/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
     for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix.length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let i = 0; i < matrix.length; i++){
        let k = 0;
        let j = matrix[i].length - 1;

        while(k < j){
            let temp = matrix[i][k];
            matrix[i][k] = matrix[i][j];
            matrix[i][j] = temp;

            k++;
            j--;
        }
    }
};