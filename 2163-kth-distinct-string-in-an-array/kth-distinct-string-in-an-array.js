/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let map = {};

    // Step 1: count frequency
    for (let str of arr) {
        map[str] = (map[str] || 0) + 1;
    }

    // Step 2: find kth distinct
    let count = 0;
    for (let str of arr) {
        if (map[str] === 1) {
            count++;
            if (count === k) return str;
        }
    }
    return "";
};