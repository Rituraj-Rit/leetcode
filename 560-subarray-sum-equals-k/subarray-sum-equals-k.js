/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let len = nums.length, count = 0; hashMap = new Map(), sum = 0;
    hashMap.set(0, 1);

    for(let i = 0; i < len; i++){
        sum += nums[i];

        let remainig = sum - k;
        if(hashMap.has(remainig)) count += hashMap.get(remainig);

        hashMap.set(sum, (hashMap.get(sum) || 0) + 1);
    }
    return count;
};