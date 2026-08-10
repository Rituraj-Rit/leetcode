/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
    }
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let row = 0, col = 0, d = 0;
    let count = 1;
    while (count <= n * n) {
        matrix[row][col] = count++;

        let r = Math.abs((row + dir[d][0]) % n);
        let c = Math.abs((col + dir[d][1]) % n);

        if (matrix[r][c] != 0) d = (d + 1) % 4;

        row += dir[d][0];
        col += dir[d][1];
    }
    return matrix;
};