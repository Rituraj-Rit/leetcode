/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
    nums.sort((a, b) => a * a - b * b);

    let n = nums.length;
    let ans = 0;
    let mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
        ans -= nums[i] * nums[i];
    }

    for (let i = mid; i < n; i++) {
        ans += nums[i] * nums[i];
    }

    return ans;
};