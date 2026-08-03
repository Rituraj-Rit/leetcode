/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let swapIndex = (arr, ind1, ind2) => {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
};

var permuteUnique = function (nums) {

    let ans = [];
    let len = nums.length;

    nums.sort((a, b) => a - b);

    function generate(index) {

        if (index === len) {
            ans.push([...nums]);
            return;
        }

        let used = new Set();

        for (let i = index; i < len; i++) {

            if (used.has(nums[i])) continue;

            used.add(nums[i]);

            swapIndex(nums, i, index);

            generate(index + 1);

            swapIndex(nums, i, index);
        }
    }

    generate(0);

    return ans;
};