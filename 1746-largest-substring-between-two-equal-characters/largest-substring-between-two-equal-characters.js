/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let first = {};
    let max = -1;

    for (let i = 0; i < s.length; i++) {
        if (first[s[i]] !== undefined) {
            max = Math.max(max, i - first[s[i]] - 1);
        } else {
            first[s[i]] = i;
        }
    }

    return max;
};