/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;

    for (let num of nums) {
        let digits = 0;

        while (num > 0) {
            num = Math.floor(num / 10);
            digits++;
        }

        if (digits % 2 === 0) {
            count++;
        }
    }

    return count;
};