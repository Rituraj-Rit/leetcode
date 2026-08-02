/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length, index = -1;

    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }

    if (index === -1) return nums.reverse();

    // Find the grater elemant from and to index + 1 and swap it
    for (let i = len - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            let temp = nums[i];
            nums[i] = nums[index];
            nums[index] = temp;
            break;
        }
    }

    // Reverse the part after the index + 1
    let left = index + 1, right = len - 1;
    while (left <= right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
};