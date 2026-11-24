/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    function lcm(a, b) {
        return (a / gcd(a, b)) * b;
    }

    let maxNum = Math.max(...nums);
    let maxLcm = 1;

    for (let num of nums) {
        maxLcm = lcm(maxLcm, num);
    }

    let limit = maxNum * maxLcm;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        let g = 0;
        let l = 1;

        for (let j = i; j < nums.length; j++) {
            product *= nums[j];
            g = gcd(g, nums[j]);
            l = lcm(l, nums[j]);

            if (product === g * l) {
                ans = Math.max(ans, j - i + 1);
            }

            if (product > limit) break;
        }
    }
    return ans;
};