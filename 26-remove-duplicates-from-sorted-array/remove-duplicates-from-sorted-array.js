/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let j = 0;
    let i = 1;
    let rm = 1;
    let n = nums.length;

    while (i < n) {
        if (nums[i] === nums[i - 1]) {
            i++;
            continue;
        }
        nums[rm] = nums[i];
        rm++;
        i++;
    }

    return rm;
};