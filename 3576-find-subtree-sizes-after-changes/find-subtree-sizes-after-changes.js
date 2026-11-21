/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function (parent, s) {
    let n = parent.length;
    let tree = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) {
        tree[parent[i]].push(i);
    }
    let ans = Array(n).fill(1);
    let last = Array(26).fill(-1);
    function dfs(node) {
        let idx = s.charCodeAt(node) - 97;
        let prev = last[idx];
        last[idx] = node;
        for (let child of tree[node]) {
            dfs(child);
        }
        let p = prev !== -1 ? prev : parent[node];

        if (p !== -1) {
            ans[p] += ans[node];
        }
        last[idx] = prev;
    }
    dfs(0);
    return ans;
};