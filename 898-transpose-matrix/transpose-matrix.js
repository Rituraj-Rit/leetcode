/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let ans = new Array(col);
    
    for(let i = 0; i < col; i++){
        ans[i] = new Array(row);
    }
    for(let i = 0; i < col; i++){
        for(let j = 0; j < row; j++){
            ans[i][j] = matrix[j][i];
        }
    }

    return ans;
};