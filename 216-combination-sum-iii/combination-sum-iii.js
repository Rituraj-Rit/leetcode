/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let arr = [1,2,3,4,5,6,7,8,9];
    let ans = [];

    let getCombinationSumPair = (index, current, sum) => {

        // Base case
        if (sum === n && current.length === k) {
            ans.push([...current]);
            return;
        }

        // Invalid case
        if (sum > n || current.length > k || index === arr.length) {
            return;
        }

        // Pick case
        current.push(arr[index]);
        getCombinationSumPair(index + 1, current, sum + arr[index]);

        // Not pick case
        current.pop();
        getCombinationSumPair(index + 1, current, sum);
    };

    getCombinationSumPair(0, [], 0);

    return ans;
};