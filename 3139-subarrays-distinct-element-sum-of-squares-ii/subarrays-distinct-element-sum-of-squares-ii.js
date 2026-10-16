/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
    const MOD = 1000000007;
    const n = nums.length;

    const tree = new Array(4 * n).fill(0);
    const lazy = new Array(4 * n).fill(0);
    const last = new Map();

    let currentSum = 0;
    let ans = 0;

    function update(node, start, end, l, r) {
        if (l > end || r < start) return;

        if (l <= start && end <= r) {
            currentSum = (currentSum +
                (2 * tree[node] + (end - start + 1)) % MOD
            ) % MOD;

            tree[node] = (tree[node] + end - start + 1) % MOD;
            lazy[node]++;

            return;
        }

        const mid = Math.floor((start + end) / 2);

        if (lazy[node] !== 0) {
            const val = lazy[node];

            tree[node * 2] =
                (tree[node * 2] + val * (mid - start + 1)) % MOD;

            tree[node * 2 + 1] =
                (tree[node * 2 + 1] + val * (end - mid)) % MOD;

            lazy[node * 2] += val;
            lazy[node * 2 + 1] += val;
            lazy[node] = 0;
        }

        update(node * 2, start, mid, l, r);
        update(node * 2 + 1, mid + 1, end, l, r);

        tree[node] = (tree[node * 2] + tree[node * 2 + 1]) % MOD;
    }

    for (let i = 0; i < n; i++) {
        const prev = last.has(nums[i]) ? last.get(nums[i]) : -1;

        update(1, 0, n - 1, prev + 1, i);

        ans = (ans + currentSum) % MOD;
        last.set(nums[i], i);
    }

    return ans;
};