/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */

var countServers = function (n, logs, x, queries) {
    logs.sort((a, b) => a[1] - b[1]);
    let sortedQueries = queries
        .map((time, index) => [time, index])
        .sort((a, b) => a[0] - b[0]);
    let map = new Map();
    let ans = new Array(queries.length);
    let left = 0;
    let right = 0;
    for (let [time, index] of sortedQueries) {
        let start = time - x;
        while (right < logs.length && logs[right][1] <= time) {
            let id = logs[right][0];
            map.set(id, (map.get(id) || 0) + 1);
            right++;
        }
        while (left < right && logs[left][1] < start) {
            let id = logs[left][0];

            if (map.get(id) === 1) {
                map.delete(id);
            } else {
                map.set(id, map.get(id) - 1);
            }

            left++;
        }
        ans[index] = n - map.size;
    }
    return ans;
};
