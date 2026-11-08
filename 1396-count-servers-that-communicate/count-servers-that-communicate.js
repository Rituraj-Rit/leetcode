/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let row = Array(m).fill(0);
    let col = Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                row[i]++;
                col[j]++;
            }
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && (row[i] > 1 || col[j] > 1)) {
                count++;
            }
        }
    }
    return count;
};