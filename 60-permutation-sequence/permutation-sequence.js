/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let nums = [];

    // 1 to n numbers
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    let result = "";
    k--; 

    for (let i = n; i >= 1; i--) {
        let factorial = 1;

        // (i - 1)!
        for (let j = 1; j < i; j++) {
            factorial *= j;
        }

        let index = Math.floor(k / factorial);

        result += nums[index];
        nums.splice(index, 1);

        k %= factorial;
    }

    return result;
};