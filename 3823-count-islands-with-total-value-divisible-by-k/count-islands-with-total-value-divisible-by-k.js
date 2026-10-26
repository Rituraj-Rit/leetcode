/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function (grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
            return 0;
        }
        let sum = grid[i][j];
        grid[i][j] = 0;

        sum += dfs(i + 1, j);
        sum += dfs(i - 1, j);
        sum += dfs(i, j + 1);
        sum += dfs(i, j - 1);
        return sum;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                let sum = dfs(i, j);

                if (sum % k === 0) {
                    count++;
                }
            }
        }
    }
    return count;
};