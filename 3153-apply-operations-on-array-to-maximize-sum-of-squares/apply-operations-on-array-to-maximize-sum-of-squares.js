/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
    const MOD = 1000000007n;
    let bits = Array(30).fill(0);

    for (let num of nums) {
        for (let i = 0; i < 30; i++) {
            if ((num >> i) & 1) {
                bits[i]++;
            }
        }
    }

    let ans = 0n;

    for (let i = 0; i < k; i++) {
        let num = 0n;

        for (let j = 0; j < 30; j++) {
            if (bits[j] > 0) {
                num |= (1n << BigInt(j));
                bits[j]--;
            }
        }

        ans = (ans + num * num) % MOD;
    }

    return Number(ans);
};