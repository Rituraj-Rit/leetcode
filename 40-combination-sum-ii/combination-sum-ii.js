/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let ans = [];

    candidates.sort((a, b) => a - b);

    const getParis = (index, current, sum) => {
        if (sum === target) {
            ans.push([...current]);
            return;
        }

        if (sum > target || index === candidates.length) {
            return;
        }

        for (let i = index; i < candidates.length; i++) {

            // Skip duplicates
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }

            current.push(candidates[i]);

            getParis(i + 1, current, sum + candidates[i]);

            current.pop();
        }
    };

    getParis(0, [], 0);

    return ans;
};