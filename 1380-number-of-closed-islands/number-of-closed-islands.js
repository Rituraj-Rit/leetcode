/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n) {
            return false;
        }
        if (grid[i][j] === 1) {
            return true;
        }
        grid[i][j] = 1;
        let a = dfs(i + 1, j);
        let b = dfs(i - 1, j);
        let c = dfs(i, j + 1);
        let d = dfs(i, j - 1);
        return a && b && c && d;
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0 && dfs(i, j)) {
                count++;
            }
        }
    }
    return count;
};