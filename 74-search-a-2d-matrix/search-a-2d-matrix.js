/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(i = 0; i < matrix.length; i++){
        for(j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === target){
                return true
            }
        }
       
    }
     return false
};