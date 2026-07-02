/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[unique]){
            unique++;
            nums[unique] = nums[i];
        }
    }
    return unique + 1
};