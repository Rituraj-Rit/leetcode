/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let swapIndex = (arr, ind1, ind2) => {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
};

var permuteUnique = function(nums) {
    let ans = [], len = nums.length;
    nums.sort((a, b) => a - b);

    const generatePermutations = (index) => {
        if (len === index) {
            ans.push([...nums]);
            return;
        }

        let used = new Set();  
        for (let i = index; i < len; i++) {
            if (used.has(nums[i])) continue;
            used.add(nums[i]);

            swapIndex(nums, i, index);
            generatePermutations(index + 1);
            swapIndex(nums, i, index);
        }
    };

    generatePermutations(0);

    return ans;
};