/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let ans = [];

    const getCandidatesSubset = (index, current, sum) => {
        if (sum === target) {
            ans.push([...current]);
            return;
        }

        if (sum > target || index === candidates.length) {
            return;
        }

        // Pick
        current.push(candidates[index]);
        getCandidatesSubset(index, current, sum + candidates[index]);

        // Backtrack
        current.pop();

        // Not Pick
        getCandidatesSubset(index + 1, current, sum);
    };

    getCandidatesSubset(0, [], 0);

    return ans;
};