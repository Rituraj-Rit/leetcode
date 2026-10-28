/**
 * @param {number[][]} grid
 * @return {number}
 */


var minCost = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = Array.from({ length: n }, () => Array(1024).fill(false));
    dp[0][grid[0][0]] = true;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            let curr = Array(1024).fill(false);
            if (i > 0) {
                for (let x = 0; x < 1024; x++) {
                    if (dp[j][x]) {
                        curr[x ^ grid[i][j]] = true;
                    }
                }
            }
            if (j > 0) {
                for (let x = 0; x < 1024; x++) {
                    if (dp[j - 1][x]) {
                        curr[x ^ grid[i][j]] = true;
                    }
                }
            }
            dp[j] = curr;
        }
    }

    for (let x = 0; x < 1024; x++) {
        if (dp[n - 1][x]) return x;
    }
    return 0;
};