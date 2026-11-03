/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let maxNum = Math.max(...nums);
    let moves = 0;
    for (let i = 0; i < nums.length; i++) {
        moves += maxNum - nums[i];
    }
    return moves;
};