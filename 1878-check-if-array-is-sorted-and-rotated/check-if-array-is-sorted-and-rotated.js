/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let len = nums.length;
    let count = 0;
    if (len === 0 || len === 1) return true;

    for (let i = 1; i < len; i++) {
        if (nums[i - 1] > nums[i]) count++;
    }
    if (nums[0] < nums[len - 1]) count++;

    return count <= 1;
};