/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split("");

    function reverse(left, right) {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    for (let i = 0; i < arr.length; i += 2 * k) {
        reverse(i, Math.min(i + k - 1, arr.length - 1));
    }

    return arr.join("");
};