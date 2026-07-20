/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count1 = 0, count2 = 0;
    let len = nums.length;
    let el1, el2;

    // Find possible majority elements
    for (let i = 0; i < len; i++) {

        if (count1 === 0 && nums[i] !== el2) {
            count1 = 1;
            el1 = nums[i];
        }
        else if (count2 === 0 && nums[i] !== el1) {
            count2 = 1;
            el2 = nums[i];
        }
        else if (el1 === nums[i]) {
            count1++;
        }
        else if (el2 === nums[i]) {
            count2++;
        }
        else {
            count1--;
            count2--;
        }
    }

    // Validation
    count1 = 0;
    count2 = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] === el1) count1++;
        if (nums[i] === el2) count2++;
    }

    let valid = Math.floor(len / 3) + 1;

    if (count1 >= valid && count2 >= valid) return [el1, el2];
    if (count1 >= valid) return [el1];
    if (count2 >= valid) return [el2];

    return [];
};