/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let stack = [];

    for (let digit of num) {
        while (
            k > 0 &&
            stack.length > 0 &&
            stack[stack.length - 1] > digit
        ) {
            stack.pop();
            k--;
        }

        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    let result = stack.join("").replace(/^0+/, "");

    return result === "" ? "0" : result;
};