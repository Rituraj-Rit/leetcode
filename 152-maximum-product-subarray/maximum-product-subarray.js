/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];

        if (curr < 0) {
            [max, min] = [min, max];
        }

        max = Math.max(curr, max * curr);
        min = Math.min(curr, min * curr);

        result = Math.max(result, max);
    }

    return result;
};