/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let length = Math.max(num1.length, num2.length);
    let result = new Array(length);
    let carry = 0;

    for (let i = 0; i < length; i++) {
        let digit1 = parseInt(num1[num1.length - 1 - i] || 0, 10);
        let digit2 = parseInt(num2[num2.length - 1 - i] || 0, 10);

        let sum = digit1 + digit2 + carry;

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        result[length - 1 - i] = sum;
    }

    if (carry > 0) {
        result.unshift(carry);
    }

    return result.join('');
};