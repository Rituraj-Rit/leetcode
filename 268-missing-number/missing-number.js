/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let totalSum = n * (n+1) / 2

     let arrSum = nums.reduce((a, b) => a + b, 0);
    return totalSum - arrSum
};