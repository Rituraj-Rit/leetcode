/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let len = nums.length;
    if(len === 1 ) return 0;

    if(nums[0] > nums[1]) return 0;
    if(nums[len-1] > nums[len - 2]) return len - 1;

    let low = 1, high = len-2;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]){
            return mid;
        }else if(nums[mid] < nums[mid - 1]){
            high = mid - 1;
        }else low = mid + 1;
    }

    return -1;
};