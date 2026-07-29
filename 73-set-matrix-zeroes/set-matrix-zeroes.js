/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let colLen = matrix[0].length, rowLen = matrix.length;
    let rows = new Array(rowLen).fill(0), cols = new Array(colLen).fill(0);

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (matrix[row][col] === 0) {
                rows[row] = 1;
                cols[col] = 1;
            }
        }
    }

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (rows[row] === 1 || cols[col] === 1) {
                matrix[row][col] = 0;
            }
        }
    }
};