/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    let odd = 0;
    let even = 1;
    let sum = 0;
    let ans = 0;
    let mod = 1000000007;
    for (let num of arr) {
        sum += num;
        if (sum % 2 === 0) {
            ans += odd;
            even++;
        } else {
            ans += even;
            odd++;
        }
        ans %= mod;
    }
    return ans;
};