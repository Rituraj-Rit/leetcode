/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const swapIndex = (arr, ind1, ind2)=>{
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

var permute = function(nums) {
    let ans = [], len = nums.length;

    const genratePermutations = (index) =>{
        if (index === len) return ans.push([...nums]);

        for(let i = index; i < len; i++){
            swapIndex(nums, index, i)
            genratePermutations(index + 1)
            swapIndex(nums, index, i)
        }
    }

    genratePermutations(0);

    return ans;
};