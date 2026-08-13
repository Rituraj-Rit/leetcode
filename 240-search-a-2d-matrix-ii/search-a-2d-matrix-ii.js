/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rowIndex = 0, colIndex = matrix[0].length;

    while(rowIndex < matrix.length && colIndex >= 0){
        let num = matrix[rowIndex][colIndex];
        if(num === target) return true;
        else if(num < target) rowIndex++;
        else colIndex--;
    }

    return false;
};