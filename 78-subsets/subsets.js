/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = [];

    const generateSubset = (index, current) => {
        if (index === nums.length) return ans.push([...current]);

        // Pick Case
        current.push(nums[index]);
        generateSubset(index + 1, current);

        // NOt Pick Case
        current.pop();
        generateSubset(index + 1, current);
    }
    generateSubset(0, []);

    return ans;
};