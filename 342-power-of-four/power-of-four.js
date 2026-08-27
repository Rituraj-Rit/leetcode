/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n <= 0) return false;

    // n should be a power of 2
    if ((n & (n - 1)) !== 0) return false;

    // For power of 4, the 1-bit must be at an even position
    return (n & 0x55555555) !== 0;
};