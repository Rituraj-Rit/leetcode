/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (s.length == 0) return 0;
    let array = s.trim().split(' ');
    return array[array.length - 1].length;
};